const fs = require('fs');

['client-dashboard.html', 'admin-dashboard.html'].forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    
    // Clear out the main content area (everything inside main-scroll-area)
    const regex = /(<div id="main-scroll-area"[^>]*>)[\s\S]*?(<\/main>)/;
    content = content.replace(regex, `$1\n<!-- INJECT_TABS_HERE -->\n        </div>\n    $2`);
    
    fs.writeFileSync(file, content);
    console.log('Reset complete for ' + file);
});
