const fs = require('fs');
let html = fs.readFileSync('client-dashboard.html', 'utf8');
let idx = html.indexOf('id="panel-dashboard"');
console.log(html.substring(Math.max(0, idx - 100), idx + 500));
