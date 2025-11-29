import os
from PIL import Image

def convert_to_webp(directory):
    for filename in os.listdir(directory):
        if filename.endswith(".png"):
            filepath = os.path.join(directory, filename)
            img = Image.open(filepath)
            webp_filename = os.path.splitext(filename)[0] + ".webp"
            webp_filepath = os.path.join(directory, webp_filename)
            img.save(webp_filepath, "WEBP")
            print(f"Converted {filename} to {webp_filename}")
            os.remove(filepath) # Remove original PNG

if __name__ == "__main__":
    convert_to_webp("public/assets")
