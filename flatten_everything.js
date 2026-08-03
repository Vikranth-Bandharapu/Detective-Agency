const fs = require('fs');
const path = require('path');

const projectDir = __dirname;
const assetsDir = path.join(projectDir, 'assets');

// Ensure assets exists
if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir);
}

const foldersToFlatten = ['css', 'js', 'icons'];

// 1. Move all files from css, js, icons directly into assets/
foldersToFlatten.forEach(folder => {
    const dirPath = path.join(projectDir, folder);
    if (fs.existsSync(dirPath)) {
        const files = fs.readdirSync(dirPath);
        files.forEach(file => {
            const oldPath = path.join(dirPath, file);
            const newPath = path.join(assetsDir, file);
            if (fs.statSync(oldPath).isFile()) {
                fs.renameSync(oldPath, newPath);
                console.log(`Moved ${file} to assets/`);
            }
        });
        fs.rmdirSync(dirPath);
        console.log(`Removed ${folder} directory`);
    }
});

// 2. Update all HTML files
function replaceInFiles(dir, extensions) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            if (file !== 'node_modules' && file !== '.git' && file !== 'assets') {
                replaceInFiles(filePath, extensions);
            }
        } else {
            const ext = path.extname(file).toLowerCase();
            if (extensions.includes(ext)) {
                let content = fs.readFileSync(filePath, 'utf8');
                let modified = false;
                
                // Replace 'css/style.css' -> 'assets/style.css'
                if (content.includes('css/')) {
                    content = content.replace(/href="css\//g, 'href="assets/');
                    modified = true;
                }
                // Replace 'js/script.js' -> 'assets/script.js'
                if (content.includes('js/')) {
                    content = content.replace(/src="js\//g, 'src="assets/');
                    modified = true;
                }
                
                // CSS might also be imported in some other ways, but usually it's href="assets/"
                
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
