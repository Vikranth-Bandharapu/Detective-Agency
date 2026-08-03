const fs = require('fs');

const expandTabs = (filename) => {
  const path = 'C:/Users/admin/Desktop/Detective agency/' + filename;
  let html = fs.readFileSync(path, 'utf8');

  // We are going to replace everything from <!-- Panel 2: Cases --> to the end of <!-- Panel 10: Support -->
  // First, we need to extract the sidebar and remove Vault and Financials.
  const oldSidebar = `<ul class="sidebar-menu">
        <li><a href="#" class="dash-link active" data-target="panel-dashboard"><i class="fas fa-home"></i> Dashboard</a></li>
        <li><a href="#" class="dash-link" data-target="panel-cases"><i class="fas fa-briefcase"></i> Active Cases</a></li>
        <li><a href="#" class="dash-link" data-target="panel-intel"><i class="fas fa-file-alt"></i> Intel Reports</a></li>
        <li><a href="#" class="dash-link" data-target="panel-operatives"><i class="fas fa-users"></i> Operatives</a></li>
        <li><a href="#" class="dash-link" data-target="panel-analytics"><i class="fas fa-chart-line"></i> Analytics</a></li>
        <li><a href="#" class="dash-link" data-target="panel-comms"><i class="fas fa-bullhorn"></i> Communications</a></li>
        <li><a href="#" class="dash-link" data-target="panel-vault"><i class="fas fa-lock"></i> Encrypted Vault</a></li>
        <li><a href="#" class="dash-link" data-target="panel-financials"><i class="fas fa-wallet"></i> Financials</a></li>
      </ul>`;
  const newSidebar = `<ul class="sidebar-menu">
        <li><a href="#" class="dash-link active" data-target="panel-dashboard"><i class="fas fa-home"></i> Dashboard</a></li>
        <li><a href="#" class="dash-link" data-target="panel-cases"><i class="fas fa-briefcase"></i> Active Cases</a></li>
        <li><a href="#" class="dash-link" data-target="panel-intel"><i class="fas fa-file-alt"></i> Intel Reports</a></li>
        <li><a href="#" class="dash-link" data-target="panel-operatives"><i class="fas fa-users"></i> Operatives</a></li>
        <li><a href="#" class="dash-link" data-target="panel-analytics"><i class="fas fa-chart-line"></i> Analytics</a></li>
        <li><a href="#" class="dash-link" data-target="panel-comms"><i class="fas fa-bullhorn"></i> Communications</a></li>
      </ul>`;
  html = html.replace(oldSidebar, newSidebar);

  // Now we find the start of Panel 2 and the end of Panel 10
  const p2Start = html.indexOf('<!-- Panel 2: Cases -->');
  const scriptStart = html.indexOf('<script>', p2Start);

  const prePanels = html.substring(0, p2Start);
  const postPanels = html.substring(scriptStart);

  // Now we generate massive content for Cases, Intel, Operatives, Analytics, Comms, Settings, Support.
  const massivePanels = `
      <!-- Panel 2: Cases -->
      <div id="panel-cases" class="dash-panel">
        <h2 class="text-white mb-4">Active Cases Overview</h2>
        
        <!-- 1. Case Summary Stats -->
        <div class="dash-grid mb-4">
          <div class="dash-card"><h3 class="card-title">Total Active</h3><h1 class="text-white">12</h1></div>
          <div class="dash-card"><h3 class="card-title">Pending Review</h3><h1 class="text-warning">4</h1></div>
          <div class="dash-card"><h3 class="card-title">Closed This Month</h3><h1 class="text-success">8</h1></div>
        </div>

        <!-- 2. Primary Case Grid -->
        <h3 class="text-white mb-3 mt-5 border-b border-white/10 pb-2">High Priority Investigations</h3>
        <div class="dash-grid mb-4">
          <div class="dash-card">
            <div class="metric-header"><h3 class="metric-title">Case #4029 - Missing Person</h3><span class="metric-badge positive">Active</span></div>
            <p class="text-muted small mt-2">Location: London, UK. Last known sighting: 48 hours ago.</p>
            <div class="progress mt-3" style="height: 5px; background: #2D3243;"><div class="progress-bar bg-accent" style="width: 65%;"></div></div>
            <p class="text-end small mt-1 text-muted">65% Gathered</p>
          </div>
          <div class="dash-card">
            <div class="metric-header"><h3 class="metric-title">Case #4030 - Corporate Fraud</h3><span class="metric-badge positive">Active</span></div>
            <p class="text-muted small mt-2">Target: Apex Industries. Monitoring executive communications.</p>
            <div class="progress mt-3" style="height: 5px; background: #2D3243;"><div class="progress-bar bg-accent" style="width: 40%;"></div></div>
            <p class="text-end small mt-1 text-muted">40% Gathered</p>
          </div>
          <div class="dash-card">
            <div class="metric-header"><h3 class="metric-title">Case #4021 - Matrimonial</h3><span class="metric-badge negative">Flagged</span></div>
            <p class="text-muted small mt-2">Target spotted at location Bravo. Awaiting photographic evidence.</p>
            <div class="progress mt-3" style="height: 5px; background: #2D3243;"><div class="progress-bar bg-danger" style="width: 90%;"></div></div>
            <p class="text-end small mt-1 text-muted">90% Gathered</p>
          </div>
        </div>

        <!-- 3. Regional Case Distribution -->
        <div class="dash-row-2 mb-4">
          <div class="dash-card">
            <h3 class="card-title">European Operations</h3>
            <table class="dash-table">
              <tr><td class="td-primary">London</td><td class="td-muted">5 Active</td><td class="text-success">Stable</td></tr>
              <tr><td class="td-primary">Paris</td><td class="td-muted">2 Active</td><td class="text-warning">Resource Low</td></tr>
            </table>
          </div>
          <div class="dash-card">
            <h3 class="card-title">Asian Operations</h3>
            <table class="dash-table">
              <tr><td class="td-primary">Tokyo</td><td class="td-muted">3 Active</td><td class="text-success">Stable</td></tr>
              <tr><td class="td-primary">Singapore</td><td class="td-muted">1 Active</td><td class="text-success">Stable</td></tr>
            </table>
          </div>
        </div>

        <!-- 4. Case Financials -->
        <h3 class="text-white mb-3 mt-5 border-b border-white/10 pb-2">Case Resource Allocation</h3>
        <div class="dash-grid mb-4">
          <div class="dash-card"><h3 class="card-title">Budget Used</h3><h2 class="text-danger">$14,500</h2></div>
          <div class="dash-card"><h3 class="card-title">Remaining Escrow</h3><h2 class="text-success">$32,000</h2></div>
          <div class="dash-card"><h3 class="card-title">Billable Hours</h3><h2 class="text-white">124 hrs</h2></div>
        </div>

        <!-- 5. Recent Case Milestones -->
        <div class="dash-card mb-4">
          <h3 class="card-title">Latest Breakthroughs</h3>
          <ul class="text-muted small list-unstyled">
            <li class="mb-2"><i class="fas fa-check-circle text-success me-2"></i><strong>Case #4029:</strong> Subject's vehicle identified via CCTV.</li>
            <li class="mb-2"><i class="fas fa-check-circle text-success me-2"></i><strong>Case #4030:</strong> Offshore bank records decrypted successfully.</li>
            <li><i class="fas fa-exclamation-circle text-warning me-2"></i><strong>Case #4021:</strong> Surveillance team compromised, falling back.</li>
          </ul>
        </div>

        <!-- 6. Operative Assignments -->
        <div class="dash-card mb-4">
          <h3 class="card-title">Lead Investigator Assignments</h3>
          <table class="dash-table w-100">
            <tr><th>Case</th><th>Operative</th><th>Status</th></tr>
            <tr><td class="td-primary">#4029</td><td class="text-white">Agent Phoenix</td><td><span class="badge bg-success">In Field</span></td></tr>
            <tr><td class="td-primary">#4030</td><td class="text-white">Agent Ghost</td><td><span class="badge bg-primary">Cyber</span></td></tr>
          </table>
        </div>

        <!-- 7. Case Risk Assessment -->
        <div class="dash-row-2 mb-4">
          <div class="dash-card"><h3 class="card-title">Risk: Exposure</h3><div class="progress mt-2" style="height: 8px; background: #2D3243;"><div class="progress-bar bg-danger" style="width: 25%;"></div></div><p class="text-muted small mt-2">25% Probability of detection.</p></div>
          <div class="dash-card"><h3 class="card-title">Risk: Legal</h3><div class="progress mt-2" style="height: 8px; background: #2D3243;"><div class="progress-bar bg-warning" style="width: 15%;"></div></div><p class="text-muted small mt-2">15% Probability of legal blowback.</p></div>
        </div>

        <!-- 8. Evidence Vault Links -->
        <div class="dash-grid mb-4">
          <div class="dash-card text-center"><i class="fas fa-file-pdf text-danger mb-2" style="font-size: 2rem;"></i><br><span class="text-white text-sm">Case_4030_Financials.pdf</span></div>
          <div class="dash-card text-center"><i class="fas fa-video text-primary mb-2" style="font-size: 2rem;"></i><br><span class="text-white text-sm">Surveillance_Tape_B.mp4</span></div>
          <div class="dash-card text-center"><i class="fas fa-image text-success mb-2" style="font-size: 2rem;"></i><br><span class="text-white text-sm">Suspect_Photos.zip</span></div>
        </div>

        <!-- 9. Legal Clearances -->
        <div class="dash-card mb-4">
          <h3 class="card-title">Warrants & Clearances</h3>
          <p class="text-muted small">All active operations are currently operating within established legal frameworks. Pending warrant for electronic wiretap on Case #4030.</p>
        </div>

        <!-- 10. Archival Access -->
        <div class="dash-card text-center py-5 border border-secondary" style="background: transparent;">
          <h3 class="text-white">Need past cases?</h3>
          <button class="btn btn-outline-gold mt-3">Access Cold Case Archives</button>
        </div>
      </div>

      <!-- Panel 3: Intel -->
      <div id="panel-intel" class="dash-panel">
        <h2 class="text-white mb-4">Intel Reports Master Log</h2>
        
        <!-- 1. Intel Stats -->
        <div class="dash-grid mb-4">
          <div class="dash-card"><h3 class="card-title">Total Logs</h3><h1 class="text-white">1,402</h1></div>
          <div class="dash-card"><h3 class="card-title">Decrypted Today</h3><h1 class="text-success">28</h1></div>
          <div class="dash-card"><h3 class="card-title">Encrypted (Unbroken)</h3><h1 class="text-danger">5</h1></div>
        </div>

        <!-- 2. Main Intel Table -->
        <div class="dash-card p-0 mb-4">
          <table class="dash-table w-100 m-0">
            <thead>
              <tr><th class="ps-4">Report ID</th><th>Target</th><th>Date Filed</th><th>Clearance</th><th>Action</th></tr>
            </thead>
            <tbody>
              <tr><td class="ps-4 td-primary">INT-8902</td><td class="td-muted">Apex Execs</td><td class="td-muted">May 28, 2026</td><td class="text-danger"><i class="fas fa-lock"></i> Level 9</td><td><button class="btn btn-sm btn-outline-gold">Decrypt</button></td></tr>
              <tr><td class="ps-4 td-primary">INT-8901</td><td class="td-muted">Subject Bravo</td><td class="td-muted">May 27, 2026</td><td class="text-warning"><i class="fas fa-lock"></i> Level 5</td><td><button class="btn btn-sm btn-outline-gold">Decrypt</button></td></tr>
              <tr><td class="ps-4 td-primary">INT-8900</td><td class="td-muted">Vehicle Track</td><td class="td-muted">May 26, 2026</td><td class="text-success"><i class="fas fa-lock"></i> Level 2</td><td><button class="btn btn-sm btn-outline-gold">View File</button></td></tr>
            </tbody>
          </table>
        </div>

        <!-- 3. Wiretap Logs -->
        <div class="dash-row-2 mb-4">
          <div class="dash-card">
            <h3 class="card-title">Active Wiretaps</h3>
            <ul class="text-muted small list-unstyled">
              <li class="mb-2">Line 1: 555-0199 (Recording)</li>
              <li>Line 2: 555-0188 (Silent)</li>
            </ul>
          </div>
          <!-- 4. Cyber Intrusion Logs -->
          <div class="dash-card">
            <h3 class="card-title">Cyber Intrusions</h3>
            <ul class="text-muted small list-unstyled">
              <li class="mb-2 text-success">Firewall Bypass successful at 0200 hrs.</li>
              <li class="text-danger">Keylogger payload blocked by target AV.</li>
            </ul>
          </div>
        </div>

        <!-- 5. Drone Footage -->
        <h3 class="text-white mb-3 mt-5 border-b border-white/10 pb-2">Aerial Surveillance</h3>
        <div class="dash-grid mb-4">
          <div class="dash-card bg-dark border-secondary text-center p-5"><i class="fas fa-video text-muted" style="font-size:3rem;"></i><br><span class="text-white mt-2 d-block">Drone Feed Alpha</span></div>
          <div class="dash-card bg-dark border-secondary text-center p-5"><i class="fas fa-video text-muted" style="font-size:3rem;"></i><br><span class="text-white mt-2 d-block">Drone Feed Bravo</span></div>
          <div class="dash-card bg-dark border-secondary text-center p-5"><i class="fas fa-video-slash text-danger" style="font-size:3rem;"></i><br><span class="text-white mt-2 d-block">Drone Feed Charlie (Offline)</span></div>
        </div>

        <!-- 6. Dead Drop Locations -->
        <div class="dash-card mb-4">
          <h3 class="card-title">Dead Drop Status</h3>
          <p class="text-muted small">Location A: Cleared. Location B: Pending pickup. Location C: Compromised.</p>
        </div>

        <!-- 7. Encrypted Communication Intercepts -->
        <div class="dash-card mb-4">
          <h3 class="card-title">Signal Intercepts (Raw Data)</h3>
          <div class="bg-dark p-3 rounded font-monospace text-success small" style="overflow-wrap: break-word;">
            0x8F 0xA2 0x33 0x99 ... [DECRYPTION PENDING] ... 0x11 0x00 0xFF
          </div>
        </div>

        <!-- 8. Deep Web Scrapes -->
        <div class="dash-card mb-4">
          <h3 class="card-title">Deep Web Scrape Results</h3>
          <table class="dash-table w-100">
            <tr><th>Keyword</th><th>Hits</th><th>Relevance</th></tr>
            <tr><td class="td-primary">"Project Apex"</td><td class="text-white">45</td><td class="text-danger">High</td></tr>
            <tr><td class="td-primary">"Subject Bravo"</td><td class="text-white">2</td><td class="text-success">Low</td></tr>
          </table>
        </div>

        <!-- 9. Informant Payouts -->
        <div class="dash-row-2 mb-4">
          <div class="dash-card"><h3 class="card-title">Informant 1 (Codename: Sparrow)</h3><p class="text-muted small">Status: Reliable. Paid: $500.</p></div>
          <div class="dash-card"><h3 class="card-title">Informant 2 (Codename: Rat)</h3><p class="text-muted small">Status: Questionable. Paid: $1,200.</p></div>
        </div>

        <!-- 10. Burn Protocol -->
        <div class="dash-card border-danger bg-danger bg-opacity-10 mb-4 text-center">
          <h3 class="text-danger">Burn All Intel</h3>
          <p class="text-white small">Initiate secure wiping of all gathered intelligence on this server.</p>
          <button class="btn btn-danger mt-2">Execute Burn Protocol</button>
        </div>
      </div>

      <!-- Panel 4: Operatives -->
      <div id="panel-operatives" class="dash-panel">
        <h2 class="text-white mb-4">Operative Roster & Deployment</h2>
        
        <!-- 1. Stats -->
        <div class="dash-grid mb-4">
          <div class="dash-card"><h3 class="card-title">Active Roster</h3><h1 class="text-white">24</h1></div>
          <div class="dash-card"><h3 class="card-title">Deployed</h3><h1 class="text-success">18</h1></div>
          <div class="dash-card"><h3 class="card-title">M.I.A / Dark</h3><h1 class="text-danger">0</h1></div>
        </div>

        <!-- 2. Top Agents Grid -->
        <h3 class="text-white mb-3 border-b border-white/10 pb-2">Alpha Team</h3>
        <div class="dash-grid mb-4">
          <div class="dash-card text-center">
            <img src="https://ui-avatars.com/api/?name=Phoenix&background=E85D45&color=fff" class="rounded-circle mx-auto mb-3" width="64">
            <h4 class="text-white">Agent Phoenix</h4>
            <p class="text-muted small">Clearance: Level 9</p>
            <span class="metric-badge positive mx-auto w-50 justify-content-center">In Field</span>
          </div>
          <div class="dash-card text-center">
            <img src="https://ui-avatars.com/api/?name=Ghost&background=4A7AF2&color=fff" class="rounded-circle mx-auto mb-3" width="64">
            <h4 class="text-white">Agent Ghost</h4>
            <p class="text-muted small">Clearance: Level 8</p>
            <span class="metric-badge mx-auto w-50 justify-content-center" style="background: rgba(255,255,255,0.1); color: white;">Standby</span>
          </div>
          <div class="dash-card text-center">
            <img src="https://ui-avatars.com/api/?name=Viper&background=27AE60&color=fff" class="rounded-circle mx-auto mb-3" width="64">
            <h4 class="text-white">Operative Viper</h4>
            <p class="text-muted small">Clearance: Level 6</p>
            <span class="metric-badge positive mx-auto w-50 justify-content-center">In Field</span>
          </div>
        </div>

        <!-- 3. Skill Matrices -->
        <div class="dash-row-2 mb-4">
          <div class="dash-card">
            <h3 class="card-title">Cyber Warfare Specialists</h3>
            <p class="text-white small">Agents: Ghost, Cipher, Null</p>
            <div class="progress mt-2" style="height: 5px; background: #2D3243;"><div class="progress-bar bg-accent" style="width: 100%;"></div></div>
          </div>
          <!-- 4. Wetwork / Kinetic -->
          <div class="dash-card">
            <h3 class="card-title">Physical Surveillance Specialists</h3>
            <p class="text-white small">Agents: Phoenix, Viper, Shadow</p>
            <div class="progress mt-2" style="height: 5px; background: #2D3243;"><div class="progress-bar bg-accent" style="width: 80%;"></div></div>
          </div>
        </div>

        <!-- 5. Equipment Checkouts -->
        <div class="dash-card mb-4">
          <h3 class="card-title">Armory & Equipment Log</h3>
          <table class="dash-table w-100">
            <tr><th>Item</th><th>Assigned To</th><th>Status</th></tr>
            <tr><td class="td-primary">Long-range Optics Kit</td><td class="text-white">Agent Phoenix</td><td class="text-success">Deployed</td></tr>
            <tr><td class="td-primary">Crypto-Bypass Drive</td><td class="text-white">Agent Ghost</td><td class="text-warning">In Repair</td></tr>
          </table>
        </div>

        <!-- 6. Safehouse Status -->
        <div class="dash-card mb-4">
          <h3 class="card-title">Global Safehouse Network</h3>
          <p class="text-muted small">Safehouse Alpha (London): Occupied. Safehouse Bravo (Paris): Clean. Safehouse Delta (Berlin): Burned.</p>
        </div>

        <!-- 7. Expense Accounts -->
        <div class="dash-grid mb-4">
          <div class="dash-card"><h3 class="card-title">Phoenix Expenses</h3><h2 class="text-white">$4,200</h2></div>
          <div class="dash-card"><h3 class="card-title">Ghost Expenses</h3><h2 class="text-white">$850</h2></div>
          <div class="dash-card"><h3 class="card-title">Viper Expenses</h3><h2 class="text-white">$1,100</h2></div>
        </div>

        <!-- 8. Performance Commendations -->
        <div class="dash-card mb-4">
          <h3 class="card-title">Recent Commendations</h3>
          <p class="text-muted small">Agent Ghost awarded Star of Merit for bypassing Apex firewall without tripping alarms.</p>
        </div>

        <!-- 9. Medical Status -->
        <div class="dash-card mb-4">
          <h3 class="card-title">Medical / Psych Evals</h3>
          <p class="text-muted small">All active field operatives have passed psychological evaluation for this quarter.</p>
        </div>

        <!-- 10. Recruit Roster -->
        <div class="dash-card border border-secondary text-center py-4 mb-4" style="background: transparent;">
          <h3 class="text-white">Academy Recruits</h3>
          <button class="btn btn-sm btn-outline-gold mt-2">View Candidates</button>
        </div>
      </div>

      <!-- Panel 5: Analytics -->
      <div id="panel-analytics" class="dash-panel">
        <h2 class="text-white mb-4">Deep Analytics Engine</h2>
        <!-- 1. Stats -->
        <div class="dash-grid mb-4">
          <div class="dash-card"><h3 class="card-title">Success Rate</h3><h1 class="text-success">94.2%</h1></div>
          <div class="dash-card"><h3 class="card-title">Average Time to Close</h3><h1 class="text-white">14 Days</h1></div>
          <div class="dash-card"><h3 class="card-title">Data Gathered</h3><h1 class="text-accent">4.2 TB</h1></div>
        </div>
        <!-- 2. Chart 1 Placeholder -->
        <div class="dash-row-2 mb-4">
          <div class="dash-card"><h3 class="card-title">Success Trajectory</h3><div style="height: 200px; background: rgba(255,255,255,0.02); display: flex; align-items: center; justify-content: center; border-radius: 8px;"><i class="fas fa-chart-line text-muted" style="font-size: 3rem;"></i></div></div>
          <!-- 3. Chart 2 Placeholder -->
          <div class="dash-card"><h3 class="card-title">Resource Allocation</h3><div style="height: 200px; background: rgba(255,255,255,0.02); display: flex; align-items: center; justify-content: center; border-radius: 8px;"><i class="fas fa-chart-pie text-muted" style="font-size: 3rem;"></i></div></div>
        </div>
        <!-- 4. Heatmap Placeholder -->
        <div class="dash-card mb-4"><h3 class="card-title">Global Activity Heatmap</h3><div style="height: 150px; background: rgba(255,255,255,0.02); display: flex; align-items: center; justify-content: center;"><i class="fas fa-map text-muted" style="font-size: 2rem;"></i></div></div>
        <!-- 5. Threat Vectors -->
        <div class="dash-card mb-4"><h3 class="card-title">Primary Threat Vectors</h3><p class="text-muted small">Corporate Espionage (45%), Embezzlement (30%), Infidelity (15%), Missing Persons (10%)</p></div>
        <!-- 6. Cost Per Intel -->
        <div class="dash-row-2 mb-4">
          <div class="dash-card"><h3 class="card-title">Cost Per Byte of Intel</h3><h2 class="text-white">$0.004 / MB</h2></div>
          <!-- 7. Man-hours logged -->
          <div class="dash-card"><h3 class="card-title">Total Man-Hours (YTD)</h3><h2 class="text-white">14,250</h2></div>
        </div>
        <!-- 8. Server Uptime -->
        <div class="dash-card mb-4"><h3 class="card-title">Secure Server Uptime</h3><div class="progress mt-2" style="height: 5px; background: #2D3243;"><div class="progress-bar bg-success" style="width: 99.9%;"></div></div><p class="text-muted small mt-2">99.99% Uptime</p></div>
        <!-- 9. AI Prediction -->
        <div class="dash-card mb-4"><h3 class="card-title">AI Case Prediction</h3><p class="text-muted small">The neural net predicts Case #4030 will close within 72 hours based on current data gathering velocity.</p></div>
        <!-- 10. Export -->
        <div class="dash-card text-center mb-4"><button class="btn btn-gold">Export Full Analytics PDF</button></div>
      </div>

      <!-- Panel 6: Communications -->
      <div id="panel-comms" class="dash-panel">
        <h2 class="text-white mb-4">Secure Comms Channel</h2>
        <!-- 1. Connection Status -->
        <div class="dash-card bg-success bg-opacity-10 border-success mb-4 text-center">
          <span class="text-success"><i class="fas fa-lock"></i> Connection Secured with 4096-bit RSA Encryption</span>
        </div>
        <!-- 2. Chat Interface -->
        <div class="dash-card p-0 mb-4" style="height: 400px; display: flex; flex-direction: column;">
          <div class="flex-grow-1 p-4" style="overflow-y: auto;">
            <div class="mb-3 w-75">
              <span class="badge bg-danger mb-1">HQ</span>
              <div class="bg-dark p-3 rounded" style="border: 1px solid var(--dash-border);">Target has moved to location C. Update tracking.</div>
            </div>
            <div class="mb-3 w-75 ms-auto text-end">
              <span class="badge bg-primary mb-1">You</span>
              <div class="p-3 rounded text-start d-inline-block" style="background: rgba(74, 122, 242, 0.2); border: 1px solid var(--dash-blue);">Copy that. Repositioning assets now.</div>
            </div>
          </div>
          <!-- 3. Input Box -->
          <div class="p-3 border-top" style="border-color: var(--dash-border) !important;">
            <div class="input-group">
              <input type="text" class="form-control bg-dark border-secondary text-white" placeholder="Transmit encrypted message...">
              <button class="btn btn-gold"><i class="fas fa-paper-plane"></i></button>
            </div>
          </div>
        </div>
        <!-- 4. Active Contacts -->
        <div class="dash-grid mb-4">
          <div class="dash-card text-center"><i class="fas fa-headset text-danger mb-2" style="font-size:2rem;"></i><br><span class="text-white">Handler</span></div>
          <div class="dash-card text-center"><i class="fas fa-user-secret text-muted mb-2" style="font-size:2rem;"></i><br><span class="text-white">Phoenix</span></div>
          <div class="dash-card text-center"><i class="fas fa-user-secret text-muted mb-2" style="font-size:2rem;"></i><br><span class="text-white">Ghost</span></div>
        </div>
        <!-- 5. Call Logs -->
        <div class="dash-card mb-4"><h3 class="card-title">Encrypted Call Logs</h3><p class="text-muted small">No active calls in the last 24 hours.</p></div>
        <!-- 6. Network Tracing -->
        <div class="dash-row-2 mb-4">
          <div class="dash-card"><h3 class="card-title">Onion Routing Node</h3><p class="text-success small">Relay 4: Active. Relay 5: Active.</p></div>
          <!-- 7. Burner Phone Status -->
          <div class="dash-card"><h3 class="card-title">Burner Phones</h3><p class="text-warning small">Burner #82 requires disposal.</p></div>
        </div>
        <!-- 8. Voice Changer Config -->
        <div class="dash-card mb-4"><h3 class="card-title">Voice Modulation</h3><div class="form-check form-switch"><input class="form-check-input" type="checkbox" checked><label class="form-check-label text-white">Active (Pitch -4)</label></div></div>
        <!-- 9. PGP Keys -->
        <div class="dash-card mb-4"><h3 class="card-title">PGP Public Key</h3><code class="text-muted small">-----BEGIN PGP PUBLIC KEY BLOCK-----...</code></div>
        <!-- 10. Emergency Ping -->
        <div class="dash-card text-center border-danger"><button class="btn btn-outline-danger">Send SOS Ping (Global)</button></div>
      </div>

      <!-- Panel 9: Settings -->
      <div id="panel-settings" class="dash-panel">
        <h2 class="text-white mb-4">System Settings & Security</h2>
        <!-- 1. Profile -->
        <div class="dash-card mb-4">
          <h3 class="card-title">Alias / Display Name</h3>
          <input type="text" class="form-control bg-dark border-secondary text-white w-50" value="Client Alpha">
        </div>
        <!-- 2. 2FA -->
        <div class="dash-card mb-4">
          <h3 class="card-title">Two-Factor Authentication</h3>
          <div class="form-check form-switch"><input class="form-check-input" type="checkbox" checked style="background-color: var(--dash-accent); border-color: var(--dash-accent);"><label class="form-check-label text-white">Require biometric or hardware key</label></div>
        </div>
        <!-- 3. Self-Destruct -->
        <div class="dash-card mb-4 border-danger">
          <h3 class="card-title text-danger">Self-Destruct Protocol</h3>
          <div class="form-check form-switch"><input class="form-check-input" type="checkbox"><label class="form-check-label text-white">Wipe account if inactive for 30 days</label></div>
        </div>
        <!-- 4. Notification Preferences -->
        <div class="dash-row-2 mb-4">
          <div class="dash-card"><h3 class="card-title">Email Alerts</h3><p class="text-muted small">Send encrypted daily digests.</p></div>
          <!-- 5. SMS Alerts -->
          <div class="dash-card"><h3 class="card-title">SMS Alerts</h3><p class="text-muted small">Only for critical breach warnings.</p></div>
        </div>
        <!-- 6. UI Theme -->
        <div class="dash-card mb-4"><h3 class="card-title">Dashboard Theme</h3><button class="btn btn-sm btn-gold me-2">Dark Mode</button><button class="btn btn-sm btn-outline-secondary" disabled>Light Mode (Restricted)</button></div>
        <!-- 7. Billing Info -->
        <div class="dash-card mb-4"><h3 class="card-title">Escrow Wallet Address</h3><code class="text-muted">0x8F9a...2B4c</code></div>
        <!-- 8. API Keys -->
        <div class="dash-card mb-4"><h3 class="card-title">Developer API Keys</h3><button class="btn btn-sm btn-outline-gold">Generate New Token</button></div>
        <!-- 9. Language -->
        <div class="dash-card mb-4"><h3 class="card-title">System Language</h3><select class="form-select bg-dark text-white border-secondary w-25"><option>English (Encrypted)</option></select></div>
        <!-- 10. Save -->
        <div class="dash-card text-center" style="background: transparent;"><button class="btn btn-gold w-25">Save All Changes</button></div>
      </div>

      <!-- Panel 10: Support -->
      <div id="panel-support" class="dash-panel">
        <h2 class="text-white mb-4">Support & Logistics</h2>
        <!-- 1. Open Ticket -->
        <div class="dash-card mb-4">
          <h3 class="card-title">Open a Secure Ticket</h3>
          <input type="text" class="form-control bg-dark border-secondary text-white mb-3" placeholder="Subject (Do not use real names)">
          <textarea class="form-control bg-dark border-secondary text-white mb-3" rows="3" placeholder="Describe your issue..."></textarea>
          <button class="btn btn-gold">Submit Encrypted Ticket</button>
        </div>
        <!-- 2. FAQ 1 -->
        <div class="dash-row-2 mb-4">
          <div class="dash-card"><h3 class="card-title">FAQ: Security</h3><p class="text-muted small">All files are encrypted client-side using AES-256 before hitting our servers.</p></div>
          <!-- 3. FAQ 2 -->
          <div class="dash-card"><h3 class="card-title">FAQ: Privacy</h3><p class="text-muted small">Operatives only see your assigned Alias and case number, never your true identity.</p></div>
        </div>
        <!-- 4. Support Contacts -->
        <div class="dash-grid mb-4">
          <div class="dash-card text-center"><h3 class="card-title">Technical Support</h3><p class="text-white">support@stackly.net</p></div>
          <!-- 5. Billing Support -->
          <div class="dash-card text-center"><h3 class="card-title">Finance Escrow</h3><p class="text-white">billing@stackly.net</p></div>
          <!-- 6. Emergency Support -->
          <div class="dash-card text-center border-danger"><h3 class="card-title text-danger">Emergency Handler</h3><p class="text-white">Call 1-800-STACKLY-911</p></div>
        </div>
        <!-- 7. SLA Status -->
        <div class="dash-card mb-4"><h3 class="card-title">SLA Guarantee</h3><p class="text-muted small">Premium accounts guarantee a 15-minute response time on all tickets.</p></div>
        <!-- 8. Resource Guides -->
        <div class="dash-card mb-4"><h3 class="card-title">Field Guides</h3><button class="btn btn-sm btn-outline-gold me-2">Download Counter-Surveillance PDF</button></div>
        <!-- 9. Feedback -->
        <div class="dash-card mb-4"><h3 class="card-title">Rate our Service</h3><div class="text-warning"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div></div>
        <!-- 10. System Version -->
        <div class="text-center text-muted small mt-4">Stackly OS v2.4.1 (Build 892)</div>
      </div>
  `;

  // Inject the new massive panels right after the end of panel-dashboard
  html = prePanels + '\n' + massivePanels + '\n' + postPanels;

  fs.writeFileSync(path, html);
  console.log('Massive tabs injected into ' + filename);
};

expandTabs('client-dashboard.html');
expandTabs('admin-dashboard.html');
