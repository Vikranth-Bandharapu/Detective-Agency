const fs = require('fs');
function clean(file) {
    let content = fs.readFileSync(file, 'utf8');
    // We want to remove literal backslash followed by 'n'.
    // In JS regex, that is /\\n/g
    let newContent = content.replace(/\\n/g, '');
    fs.writeFileSync(file, newContent);
    console.log("Cleaned " + file);
}
clean('client-dashboard.html');
clean('admin-dashboard.html');
