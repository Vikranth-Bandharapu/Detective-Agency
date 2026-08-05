import os
import glob
from PIL import Image

artifact_dir = r"C:\Users\admin\.gemini\antigravity\brain\4b91b6e1-a5f4-43f4-8434-45e18ef709e8"
output_dir = r"C:\Users\admin\Desktop\Detective agency\assets\images"

os.makedirs(output_dir, exist_ok=True)

# Find all generated images
image_files = glob.glob(os.path.join(artifact_dir, "*.jpg"))
image_files.extend(glob.glob(os.path.join(artifact_dir, "*.png")))

def process_image(img_path):
    filename = os.path.basename(img_path)
    # Remove the timestamp suffix like _1785577721698
    base_name = filename.rsplit('_', 1)[0] if '_' in filename else os.path.splitext(filename)[0]
    output_path = os.path.join(output_dir, f"{base_name}.webp")
    
    try:
        with Image.open(img_path) as img:
            # Resize if too large to help compression
            img.thumbnail((1200, 1200), Image.Resampling.LANCZOS)
            
            # Binary search for quality to keep under 100KB
            low, high = 10, 95
            best_quality = 50
            
            while low <= high:
                mid = (low + high) // 2
                img.save(output_path, "WEBP", quality=mid)
                size_kb = os.path.getsize(output_path) / 1024
                
                if size_kb > 95:
                    high = mid - 1
                else:
                    best_quality = mid
                    low = mid + 1
                    
            # Final save with best found quality
            img.save(output_path, "WEBP", quality=best_quality)
            print(f"Processed: {base_name}.webp - Size: {os.path.getsize(output_path) / 1024:.2f} KB")
    except Exception as e:
        print(f"Failed to process {filename}: {e}")

for img in image_files:
    process_image(img)
