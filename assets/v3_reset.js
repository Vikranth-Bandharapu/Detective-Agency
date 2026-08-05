const fs = require('fs');

['client-dashboard.html', 'admin-dashboard.html'].forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    
    // Clear out everything inside the main content scrolling div
    const startString = '<div class="absolute top-24 left-0 right-0 bottom-0 overflow-y-auto overflow-x-hidden p-4 md:p-8 bg-black">';
    const endString = '</main>';
    
    const startIndex = content.indexOf(startString);
    const endIndex = content.indexOf(endString);
    
    if (startIndex !== -1 && endIndex !== -1) {
        content = content.substring(0, startIndex + startString.length) + 
                  '\n            <!-- INJECT_TABS_HERE -->\n        </div>\n    ' + 
                  content.substring(endIndex);
        fs.writeFileSync(file, content);
        console.log('Reset complete for ' + file);
    } else {
        console.log('Could not find boundaries in ' + file);
    }
});
