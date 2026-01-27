import shutil
import os

source = r"C:/Users/prana/.gemini/antigravity/brain/b59a3cc6-53bd-458e-aef4-15483ce9c46d/uploaded_media_1769443152725.jpg"
dest = r"g:/telmax/assets/telmax_logo.jpg"

print(f"Copying from {source} to {dest}")

try:
    shutil.copy2(source, dest)
    print("Copy successful")
except Exception as e:
    print(f"Error copying: {e}")
