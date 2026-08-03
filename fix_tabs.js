const fs = require('fs');
['client-dashboard.html', 'admin-dashboard.html'].forEach(f => {
    if(fs.existsSync(f)) {
        let c = fs.readFileSync(f, 'utf8');
        c = c.replace(/class="dashboard-tab block"/g, 'class="dashboard-tab active"');
        c = c.replace(/class="dashboard-tab hidden"/g, 'class="dashboard-tab"');
        fs.writeFileSync(f, c);
    }
});
