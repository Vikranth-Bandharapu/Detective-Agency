const fs = require('fs');
const fixSidebar = (filename) => {
  const path = 'C:/Users/admin/Desktop/Detective agency/' + filename;
  let html = fs.readFileSync(path, 'utf8');
  
  const badSidebar = `<ul class="sidebar-menu">
        <li><a href="#" class="dash-link active" data-target="panel-dashboard"><i class="fas fa-home"></i> Dashboard</a></li>
        <li><a href="#" class="dash-link" data-target="panel-cases"><i class="fas fa-briefcase"></i> Active Cases</a></li>
        <li><a href="#" class="dash-link" data-target="panel-intel"><i class="fas fa-file-alt"></i> Intel Reports</a></li>
        <li><a href="#" class="dash-link" data-target="panel-operatives"><i class="fas fa-users"></i> Operatives</a></li>
        <li><a href="#" class="dash-link" data-target="panel-analytics"><i class="fas fa-chart-line"></i> Analytics</a></li>
        <li><a href="#" class="dash-link" data-target="panel-comms"><i class="fas fa-bullhorn"></i> Communications</a></li>
      </ul>`;
      
  const goodSidebar = `<ul class="sidebar-menu">
        <li><a href="#" class="dash-link active" data-target="panel-dashboard"><i class="fas fa-home"></i> Dashboard</a></li>
        <li><a href="#" class="dash-link" data-target="panel-cases"><i class="fas fa-briefcase"></i> Active Cases</a></li>
        <li><a href="#" class="dash-link" data-target="panel-intel"><i class="fas fa-file-alt"></i> Intel Reports</a></li>
        <li><a href="#" class="dash-link" data-target="panel-operatives"><i class="fas fa-users"></i> Operatives</a></li>
        <li><a href="#" class="dash-link" data-target="panel-analytics"><i class="fas fa-chart-line"></i> Analytics</a></li>
        <li><a href="#" class="dash-link" data-target="panel-comms"><i class="fas fa-bullhorn"></i> Communications</a></li>
        <li><a href="#" class="dash-link" data-target="panel-settings"><i class="fas fa-cog"></i> Settings</a></li>
        <li><a href="#" class="dash-link" data-target="panel-support"><i class="fas fa-life-ring"></i> Support</a></li>
      </ul>`;
      
  if(html.includes(badSidebar)) {
    html = html.replace(badSidebar, goodSidebar);
    fs.writeFileSync(path, html);
    console.log('Sidebar fixed in ' + filename);
  } else {
    console.log('Bad sidebar not found in ' + filename);
  }
};
fixSidebar('client-dashboard.html');
fixSidebar('admin-dashboard.html');
