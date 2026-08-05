const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = 'C:\\Users\\admin\\.gemini\\antigravity\\brain\\4b91b6e1-a5f4-43f4-8434-45e18ef709e8';
const outputDir = 'C:\\Users\\admin\\Desktop\\Detective agency\\assets\\images';

// Find the latest generated avatar files
const files = fs.readdirSync(inputDir);
const av1 = files.filter(f => f.startsWith('client_avatar_1_')).pop();
const av2 = files.filter(f => f.startsWith('client_avatar_2_')).pop();
const av3 = files.filter(f => f.startsWith('client_avatar_3_')).pop();

async function processImage(filename, outName) {
  if (!filename) return;
  const inPath = path.join(inputDir, filename);
  const outPath = path.join(outputDir, outName);
  
  await sharp(inPath)
    .resize(150, 150)
    .webp({ quality: 60 })
    .toFile(outPath);
    
  const stat = fs.statSync(outPath);
  console.log(`${outName}: ${stat.size / 1024} KB`);
}

async function run() {
  await processImage(av1, 'avatar_1.webp');
  await processImage(av2, 'avatar_2.webp');
  await processImage(av3, 'avatar_3.webp');
  console.log('All avatars compressed and moved!');
}

run();
