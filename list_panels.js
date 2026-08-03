const fs = require('fs');
const html = fs.readFileSync('client-dashboard.html', 'utf8');
const matches = html.match(/id="panel-[a-z]+"/g);
console.log(matches);
