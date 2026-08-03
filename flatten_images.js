const fs = require('fs');
const path = require('path');

const projectDir = __dirname;
const imagesDir = path.join(projectDir, 'assets', 'images');
const assetsDir = path.join(projectDir, 'assets');

// 1. Move all files from assets/images to assets/
if (fs.existsSync(imagesDir)) {
    const files = fs.readdirSync(imagesDir);
    files.forEach(file => {
        const oldPath = path.join(imagesDir, file);
        const newPath = path.join(assetsDir, file);
        fs.renameSync(oldPath, newPath);
        console.log(`Moved ${file} to assets/`);
    });
    // Remove the now empty images directory
    fs.rmdirSync(imagesDir);
    console.log('Removed assets/images directory');
}

// 2. Replace 'assets/' with 'assets/' in all files
function replaceInFiles(dir, extensions) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            if (file !== 'node_modules' && file !== '.git') {
                replaceInFiles(filePath, extensions);
            }
        } else {
            const ext = path.extname(file).toLowerCase();
            if (extensions.includes(ext)) {
                let content = fs.readFileSync(filePath, 'utf8');
                if (content.includes('assets/')) {
                    content = content.replace(/assets\/images\//g, 'assets/');
                    fs.writeFileSync(filePath, content, 'utf8');
                    console.log(`Updated paths in ${filePath}`);
                }
                if (content.includes('../')) {
                    content = content.replace(/\.\.\/images\//g, '../');
                    fs.writeFileSync(filePath, content, 'utf8');
                    console.log(`Updated paths in ${filePath}`);
                }
            }
        }
    }
}

replaceInFiles(projectDir, ['.html', '.css', '.js']);
console.log('All done!');
