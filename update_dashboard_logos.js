const fs = require('fs');
const path = require('path');

const projectDir = __dirname;
const dashboards = ['admin-dashboard.html', 'client-dashboard.html', 'investigator-dashboard.html'];

dashboards.forEach(file => {
    const filePath = path.join(projectDir, file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // We want to find the logo link in the sidebar or navbar.
        // It's likely <a href="index.html" class="navbar-brand">...<img src="assets/logo.webp"
        // or something similar.
        
        // Replace <a href="index.html" with <a href="#" only for the logo link? 
        // Actually, the user says "redirect to same page", so href="#" or href="admin-dashboard.html"
        // Let's replace href="index.html" with href="#" for the brand/logo link.
        
        // Let's match the block containing logo.webp
        const logoRegex = /<a[^>]*href="([^"]+)"[^>]*>(\s*<img[^>]*src="assets\/logo\.webp"[^>]*>)/i;
        if (content.match(logoRegex)) {
            content = content.replace(logoRegex, (match, p1, p2) => {
                const newA = match.replace(`href="${p1}"`, `href="#"`);
                return newA;
            });
            
            // Wait, what if there are multiple logo instances?
            // E.g. desktop sidebar and mobile sidebar.
            // Let's do a global replace for all links that wrap the logo.
            
            // Let's do a more robust approach.
            const regexGlobal = /<a([^>]*?)href="([^"]+)"([^>]*?)>(\s*<img[^>]*src="assets\/logo\.webp"[^>]*>)/gi;
            content = content.replace(regexGlobal, `<a$1href="#"$3>$4`);
            
            // Wait, also what if there are text logos? Let's check for class="flex items-center gap-2 mb-8" or something.
            // The dashboard uses tailwind. In tailwind dash:
            // <a href="index.html" class="flex items-center gap-3">
            //    <img src="assets/logo.webp" alt="Stackly Logo" class="h-8 w-8">
            //    <span class="text-xl font-bold tracking-widest text-white font-serif">STACKLY</span>
            // </a>
            
            const regexTailwindLogo = /<a([^>]*?)href="([^"]+)"([^>]*?)>(\s*<img[^>]*src="assets\/logo\.webp"[^>]*>\s*<span[^>]*>STACKLY<\/span>\s*)<\/a>/gi;
            content = content.replace(regexTailwindLogo, `<a$1href="#"$3>$4</a>`);

            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated logo link in ${file}`);
        }
    }
});
