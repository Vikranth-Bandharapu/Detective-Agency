const fs = require('fs');
let html = fs.readFileSync('client-dashboard.html', 'utf8');
let idx = html.indexOf('id="panel-settings"');
console.log(idx);
if (idx !== -1) {
  console.log(html.substring(idx - 100, idx + 500));
}
