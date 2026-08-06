const fs = require('fs');
const path = require('path');

const projectDir = __dirname;
const dashboards = ['admin-dashboard.html', 'client-dashboard.html', 'investigator-dashboard.html'];

dashboards.forEach(file => {
    const filePath = path.join(projectDir, file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Revert href="#" back to href="index.html" for the logo wrapper
        const regexLogoWrapper = /<a([^>]*?)href="#"([^>]*?)>(\s*<img[^>]*src="assets\/logo\.webp"[^>]*>)/gi;
        
        if (content.match(regexLogoWrapper)) {
            content = content.replace(regexLogoWrapper, `<a$1href="index.html"$2>$3`);
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Reverted logo link to index.html in ${file}`);
        }
    }
});
