const fs = require('fs');

function enrichDashboard(filename) {
  let html = fs.readFileSync(filename, 'utf8');

  // 1. Add data-targets to sidebar links
  html = html.replace('<li><a href="#" class="active"><i class="fas fa-home"></i> Dashboard</a></li>', '<li><a href="#" class="dash-link active" data-target="panel-dashboard"><i class="fas fa-home"></i> Dashboard</a></li>');
  html = html.replace('<li><a href="#"><i class="fas fa-briefcase"></i> Active Cases</a></li>', '<li><a href="#" class="dash-link" data-target="panel-cases"><i class="fas fa-briefcase"></i> Active Cases</a></li>');
  html = html.replace('<li><a href="#"><i class="fas fa-file-alt"></i> Intel Reports</a></li>', '<li><a href="#" class="dash-link" data-target="panel-intel"><i class="fas fa-file-alt"></i> Intel Reports</a></li>');
  html = html.replace('<li><a href="#"><i class="fas fa-users"></i> Operatives</a></li>', '<li><a href="#" class="dash-link" data-target="panel-operatives"><i class="fas fa-users"></i> Operatives</a></li>');
  html = html.replace('<li><a href="#"><i class="fas fa-chart-line"></i> Analytics</a></li>', '<li><a href="#" class="dash-link" data-target="panel-analytics"><i class="fas fa-chart-line"></i> Analytics</a></li>');
  html = html.replace('<li><a href="#"><i class="fas fa-bullhorn"></i> Communications</a></li>', '<li><a href="#" class="dash-link" data-target="panel-comms"><i class="fas fa-bullhorn"></i> Communications</a></li>');
  html = html.replace('<li><a href="#"><i class="fas fa-cog"></i> Settings</a></li>', '<li><a href="#" class="dash-link" data-target="panel-settings"><i class="fas fa-cog"></i> Settings</a></li>');

  // 2. Wrap existing main content in panel-dashboard
  // Find where main content starts (after header)
  const headerEnd = html.indexOf('</header>') + 9;
  const scriptStart = html.indexOf('<script>');
  
  if (headerEnd !== 8 && scriptStart !== -1) {
    let preHeader = html.substring(0, headerEnd);
    let mainContent = html.substring(headerEnd, scriptStart);
    let postScript = html.substring(scriptStart);

    // Remove the trailing tags from mainContent so we can append other panels
    // mainContent ends with `    </main>\n  </div>\n\n  ` before `<script>`
    const mainEndIdx = mainContent.lastIndexOf('</main>');
    if (mainEndIdx !== -1) {
      const panelDashboardContent = mainContent.substring(0, mainEndIdx);
      const mainClose = mainContent.substring(mainEndIdx); // `</main>\n  </div>\n\n  `
      
      // Additional Panels
      const newPanels = `
      <!-- Active Cases Panel -->
      <div id="panel-cases" class="dash-panel" style="display: none; padding: 20px;">
        <h2 style="color: white; margin-bottom: 20px;">Active Cases</h2>
        <div class="dash-grid">
          <div class="dash-card metric-card">
            <div class="metric-header"><h3 class="metric-title">High Priority</h3><span class="metric-badge negative">Critical</span></div>
            <div class="metric-value">4</div>
          </div>
          <div class="dash-card metric-card">
            <div class="metric-header"><h3 class="metric-title">Under Surveillance</h3></div>
            <div class="metric-value">12</div>
          </div>
          <div class="dash-card metric-card">
            <div class="metric-header"><h3 class="metric-title">Pending Evidence</h3></div>
            <div class="metric-value">7</div>
          </div>
          <div class="dash-card metric-card">
            <div class="metric-header"><h3 class="metric-title">Closed This Week</h3><span class="metric-badge positive">+2</span></div>
            <div class="metric-value">15</div>
          </div>
        </div>
        <div class="dash-card" style="margin-top: 20px;">
          <div class="card-title">Recent Case Updates</div>
          <table class="dash-table">
            <thead><tr><th>Case ID</th><th>Subject</th><th>Status</th><th>Operative</th></tr></thead>
            <tbody>
              <tr><td class="td-primary">#CAS-992</td><td class="td-muted">Corporate Fraud - Tech Corp</td><td class="td-muted">Active</td><td class="td-muted">Agent Phoenix</td></tr>
              <tr><td class="td-primary">#CAS-991</td><td class="td-muted">Missing Person - VIP</td><td class="growth-negative">Critical</td><td class="td-muted">Agent Ghost</td></tr>
              <tr><td class="td-primary">#CAS-985</td><td class="td-muted">Asset Recovery</td><td class="growth-positive">Resolved</td><td class="td-muted">Operative Viper</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Intel Reports Panel -->
      <div id="panel-intel" class="dash-panel" style="display: none; padding: 20px;">
        <h2 style="color: white; margin-bottom: 20px;">Intel Reports</h2>
        <div class="dash-card">
          <div class="card-title">Latest Intercepts</div>
          <p style="color: var(--dash-muted); margin-bottom: 20px;">Review the latest data packages retrieved by field operatives.</p>
          <div class="region-grid">
            <div class="region-card"><div class="region-name">Intercept Alpha</div><div class="region-value">Audio <span>04:12</span></div></div>
            <div class="region-card"><div class="region-name">Financial Ledger</div><div class="region-value">PDF <span>Encrypted</span></div></div>
            <div class="region-card"><div class="region-name">Satellite Imagery</div><div class="region-value">Visual <span>Sector 7</span></div></div>
          </div>
        </div>
      </div>

      <!-- Operatives Panel -->
      <div id="panel-operatives" class="dash-panel" style="display: none; padding: 20px;">
        <h2 style="color: white; margin-bottom: 20px;">Field Operatives</h2>
        <div class="dash-grid">
          <div class="dash-card text-center">
            <img src="https://ui-avatars.com/api/?name=Agent+Phoenix&background=D4AF37&color=000" style="border-radius:50%; width:60px; margin-bottom:10px;">
            <h3 style="color:white; margin:0;">Agent Phoenix</h3>
            <p style="color:var(--dash-muted); font-size:12px;">Covert Ops</p>
          </div>
          <div class="dash-card text-center">
            <img src="https://ui-avatars.com/api/?name=Agent+Ghost&background=2D3243&color=fff" style="border-radius:50%; width:60px; margin-bottom:10px;">
            <h3 style="color:white; margin:0;">Agent Ghost</h3>
            <p style="color:var(--dash-muted); font-size:12px;">Surveillance</p>
          </div>
          <div class="dash-card text-center">
            <img src="https://ui-avatars.com/api/?name=Viper&background=E85D45&color=fff" style="border-radius:50%; width:60px; margin-bottom:10px;">
            <h3 style="color:white; margin:0;">Operative Viper</h3>
            <p style="color:var(--dash-muted); font-size:12px;">Cyber Sec</p>
          </div>
        </div>
      </div>

      <!-- Analytics Panel -->
      <div id="panel-analytics" class="dash-panel" style="display: none; padding: 20px;">
        <h2 style="color: white; margin-bottom: 20px;">Analytics & Performance</h2>
        <div class="dash-card">
          <div class="card-title">Success Rate Trend</div>
          <p style="color: var(--dash-muted);">Analytics tracking is currently running optimally.</p>
          <div style="height: 200px; display:flex; align-items:center; justify-content:center; border: 1px dashed var(--dash-border); margin-top:20px;">
            <span style="color: var(--dash-muted);">Detailed charts rendering engine active.</span>
          </div>
        </div>
      </div>

      <!-- Comms Panel -->
      <div id="panel-comms" class="dash-panel" style="display: none; padding: 20px;">
        <h2 style="color: white; margin-bottom: 20px;">Secure Communications</h2>
        <div class="dash-card">
          <div class="card-title">Active Channels</div>
          <ul style="list-style: none; padding: 0; color: var(--dash-muted);">
            <li style="padding: 10px 0; border-bottom: 1px solid var(--dash-border);"><strong>HQ Secure Line:</strong> Active (Encrypted)</li>
            <li style="padding: 10px 0; border-bottom: 1px solid var(--dash-border);"><strong>Field Team Alpha:</strong> Standby</li>
            <li style="padding: 10px 0;"><strong>Client Relay:</strong> Offline</li>
          </ul>
        </div>
      </div>

      <!-- Settings Panel -->
      <div id="panel-settings" class="dash-panel" style="display: none; padding: 20px;">
        <h2 style="color: white; margin-bottom: 20px;">Account Settings</h2>
        <div class="dash-card">
          <div class="card-title">Security Preferences</div>
          <div style="margin-top: 15px;">
            <label style="color: var(--dash-muted); display: block; margin-bottom: 10px;"><input type="checkbox" checked> Two-Factor Authentication</label>
            <label style="color: var(--dash-muted); display: block; margin-bottom: 10px;"><input type="checkbox" checked> Login Alerts</label>
            <button class="btn btn-outline-gold" style="margin-top: 10px;">Update Settings</button>
          </div>
        </div>
      </div>
      `;

      html = preHeader + 
             '\n<div id="panel-dashboard" class="dash-panel" style="display: block;">\n' + 
             panelDashboardContent + 
             '\n</div>\n' + 
             newPanels + 
             mainClose + 
             postScript;
    }
  }

  // Add the JS for tab switching
  const jsToAdd = `
  // Tab Switching Logic
  document.querySelectorAll('.dash-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Remove active class from all links
      document.querySelectorAll('.dash-link').forEach(l => l.classList.remove('active'));
      // Add active class to clicked link
      this.classList.add('active');
      
      // Hide all panels
      document.querySelectorAll('.dash-panel').forEach(panel => {
        panel.style.display = 'none';
      });
      
      // Show target panel
      const targetId = this.getAttribute('data-target');
      const targetPanel = document.getElementById(targetId);
      if(targetPanel) {
        targetPanel.style.display = 'block';
      }
    });
  });
  `;

  html = html.replace('</script>\n</body>', jsToAdd + '\n</script>\n</body>');

  fs.writeFileSync(filename, html);
  console.log(`Enriched ${filename}`);
}

enrichDashboard('client-dashboard.html');
enrichDashboard('admin-dashboard.html');
