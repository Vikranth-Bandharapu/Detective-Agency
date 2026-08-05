const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const artifactDir = "C:\\Users\\admin\\.gemini\\antigravity\\brain\\4b91b6e1-a5f4-43f4-8434-45e18ef709e8";
const outputDir = "C:\\Users\\admin\\Desktop\\Detective agency\\assets\\images";

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Find all generated images
const files = fs.readdirSync(artifactDir);
const imageFiles = files.filter(f => f.endsWith('.jpg') || f.endsWith('.png') || f.endsWith('.webp'));

async function processImage(filename) {
    const imgPath = path.join(artifactDir, filename);
    let baseName = filename.substring(0, filename.lastIndexOf('.'));
    if (baseName.includes('_17')) {
        baseName = baseName.substring(0, baseName.lastIndexOf('_'));
    }
    const outputPath = path.join(outputDir, `${baseName}.webp`);

    try {
        let quality = 80;
        let info;
        
        // Resize first to ensure it's not massive
        let buffer = await sharp(imgPath)
            .resize({ width: 1200, withoutEnlargement: true })
            .webp({ quality: quality })
            .toBuffer({ resolveWithObject: true });
            
        // Binary search for quality to keep under 95KB
        if (buffer.info.size > 95 * 1024) {
            let low = 10, high = 80;
            let bestBuffer = buffer.data;
            while (low <= high) {
                let mid = Math.floor((low + high) / 2);
                let tempBuffer = await sharp(imgPath)
                    .resize({ width: 1200, withoutEnlargement: true })
                    .webp({ quality: mid })
                    .toBuffer({ resolveWithObject: true });
                
                if (tempBuffer.info.size > 95 * 1024) {
                    high = mid - 1;
                } else {
                    bestBuffer = tempBuffer.data;
                    low = mid + 1;
                }
            }
            fs.writeFileSync(outputPath, bestBuffer);
            console.log(`Processed: ${baseName}.webp - Size: ${(bestBuffer.length / 1024).toFixed(2)} KB`);
        } else {
            fs.writeFileSync(outputPath, buffer.data);
            console.log(`Processed: ${baseName}.webp - Size: ${(buffer.info.size / 1024).toFixed(2)} KB`);
        }
        
    } catch (e) {
        console.error(`Failed to process ${filename}:`, e);
    }
}

async function run() {
    for (const file of imageFiles) {
        await processImage(file);
    }
    console.log("Done processing images.");
}

run();
