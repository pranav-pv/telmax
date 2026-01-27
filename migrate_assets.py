import os
import re
import shutil
import urllib.parse

# Configuration
WORKSPACE_DIR = r"g:\telmax"
ASSETS_DIR = os.path.join(WORKSPACE_DIR, "assets")
HTML_FILES = [
    "index.html",
    "about.html",
    "admission.html",
    "contact.html",
    "classes.html",
    "gallery.html"
]

def setup_directories():
    if not os.path.exists(ASSETS_DIR):
        os.makedirs(ASSETS_DIR)
        print(f"Created directory: {ASSETS_DIR}")

def process_file(filename):
    filepath = os.path.join(WORKSPACE_DIR, filename)
    if not os.path.exists(filepath):
        print(f"File not found: {filename}")
        return

    print(f"Processing {filename}...")
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Regex to find file:/// paths INSIDE QUOTES
    # Matches src="file:///..." or url('file:///...')
    # Group 1: Quote char, Group 2: The URL
    pattern = r'(?:src|href|url)\s*[=:]\s*(["\'])(file:///.*?)\1'
    
    matches = re.finditer(pattern, content)
    
    # We will build a replacement map
    replacements = {}
    
    for match in matches:
        file_url = match.group(2)
        
        # Parse the URL to get the path
        parsed_url = urllib.parse.urlparse(file_url)
        path = urllib.parse.unquote(parsed_url.path)
        
        local_path = path.lstrip('/')
        # Handle drive letter potential issue
        if ":" in local_path and len(local_path) > 2 and local_path[1] != ":": 
             local_path = local_path.lstrip('/')

        if not os.path.exists(local_path):
             # Try unstripped
             if os.path.exists(path):
                 local_path = path
             else:
                 print(f"  WARNING: File not found: {local_path} (URL: {file_url})")
                 continue
        
        # Skip if it's a directory (like G:/telmax triggered before)
        if os.path.isdir(local_path):
            print(f"  Skipping directory: {local_path}")
            continue

        basename = os.path.basename(local_path)
        target_path = os.path.join(ASSETS_DIR, basename)
        
        if not os.path.exists(target_path):
            try:
                shutil.copy2(local_path, target_path)
                print(f"  Copied: {basename}")
            except Exception as e:
                print(f"  ERROR Copying {basename}: {e}")
                continue
        else:
             # File already in assets, maybe from previous run
             pass
        
        relative_path = f"assets/{basename}"
        replacements[file_url] = relative_path

    if not replacements:
        print(f"  No replacements found for {filename}")
        return

    # Replace in content
    new_content = content
    # Sort replacements by length descending to avoid partial replacement issues (though unlikely here)
    for old, new in sorted(replacements.items(), key=lambda x: len(x[0]), reverse=True):
        new_content = new_content.replace(old, new)
        
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"  Updated {filename}")
    else:
        print(f"  No changes needed for {filename}")

if __name__ == "__main__":
    setup_directories()
    for html_file in HTML_FILES:
        process_file(html_file)
    print("Done.")
