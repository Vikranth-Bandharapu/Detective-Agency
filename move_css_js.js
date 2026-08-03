const fs = require('fs');
const path = require('path');

const projectDir = __dirname;
const assetsDir = path.join(projectDir, 'assets');

// Directories to move from assets/ to root/
const dirsToMove = ['css', 'js', 'icons'];

dirsToMove.forEach(dir => {
    const oldPath = path.join(assetsDir, dir);
    const newPath = path.join(projectDir, dir);
    
    if (fs.existsSync(oldPath)) {
        // If the new path already exists (e.g., icons folder was in root), we merge or replace.
        // Let's just rename (move) it if newPath doesn't exist.
        if (!fs.existsSync(newPath)) {
            fs.renameSync(oldPath, newPath);
            console.log(`Moved assets/${dir} to ${dir}/`);
        } else {
            console.log(`Warning: ${dir}/ already exists in root.`);
            // if it's empty, we could remove it. But let's assume it doesn't exist in root yet.
        }
    }
});

// Update all HTML files
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
                let modified = false;
                
                if (content.includes('css/')) {
                    content = content.replace(/assets\/css\//g, 'css/');
                    modified = true;
                }
                if (content.includes('js/')) {
                    content = content.replace(/assets\/js\//g, 'js/');
                    modified = true;
                }
                
                if (modified) {
                    fs.writeFileSync(filePath, content, 'utf8');
                    console.log(`Updated paths in ${filePath}`);
                }
            }
        }
    }
}

replaceInFiles(projectDir, ['.html', '.js']);
console.log('All done!');
