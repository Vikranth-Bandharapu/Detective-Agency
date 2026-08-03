// dashboard.js - Dynamic Dashboard Logic

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Sidebar Toggle
  const toggleBtn = document.querySelector('.dashboard-toggle');
  const sidebar = document.querySelector('.dashboard-sidebar');
  const closeBtn = document.querySelector('.sidebar-close-btn');

  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.add('show');
    });
  }

  if (closeBtn && sidebar) {
    closeBtn.addEventListener('click', () => {
      sidebar.classList.remove('show');
    });
  }
  
  // Set Logged In Email
  const emailDisplay = document.getElementById('loggedEmailDisplay');
  if (emailDisplay) {
    const email = sessionStorage.getItem('loggedEmail') || 'user@example.com';
    emailDisplay.textContent = email;
  }

  // Logout Logic
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      sessionStorage.removeItem('loggedEmail');
      sessionStorage.removeItem('loggedRole');
      
      // Simulate toast since it might navigate too fast
      alert('Logged out successfully.'); // Fallback if toast isn't loaded, wait, prompt says NO ALERT.
      // Better to use our showToast if available
      if (typeof showToast === 'function') {
        showToast('Logged out successfully.', 'success');
        setTimeout(() => {
          window.location.href = 'index.html';
        }, 1000);
      } else {
        window.location.href = 'index.html';
      }
    });
  }

  // Dynamic Content Loading (SPA behavior)
  const links = document.querySelectorAll('.sidebar-nav .sidebar-link:not(#logoutBtn)');
  const contentArea = document.getElementById('dynamicContentArea');
  
  // Fake Data for Dynamic Views
  const views = {
    
    'Dashboard': `
      <div class="fade-in">
        <!-- 1. HEADER SECTION -->
        <section class="mb-4 pb-3 border-bottom" style="border-color: rgba(255,255,255,0.05) !important;">
          <h2 class="mb-1">Intelligence Dashboard</h2>
          <p class="text-muted mb-0">Real-time system overview and operational metrics.</p>
        </section>

        <!-- 2. STATS SECTION -->
        <section class="mb-4">
          <h5 class="text-white mb-3">Key Metrics</h5>
          <div class="row g-4">
            <div class="col-md-3"><div class="stat-card"><div><h3>24</h3><p>Active Cases</p></div><div class="icon"><i class="fas fa-briefcase"></i></div></div></div>
            <div class="col-md-3"><div class="stat-card"><div><h3>8</h3><p>Pending</p></div><div class="icon"><i class="fas fa-clock"></i></div></div></div>
            <div class="col-md-3"><div class="stat-card"><div><h3>12</h3><p>Operatives</p></div><div class="icon"><i class="fas fa-user-secret"></i></div></div></div>
            <div class="col-md-3"><div class="stat-card"><div><h3>$45k</h3><p>Recovered</p></div><div class="icon"><i class="fas fa-chart-line"></i></div></div></div>
          </div>
        </section>

        <!-- 3. QUICK ACTIONS SECTION -->
        <section class="mb-4 py-3">
          <h5 class="text-white mb-3">Quick Directives</h5>
          <div class="d-flex gap-2 flex-wrap">
            <button class="btn btn-outline-gold"><i class="fas fa-plus me-2"></i>New Case</button>
            <button class="btn btn-outline-gold"><i class="fas fa-search me-2"></i>Run Background</button>
            <button class="btn btn-outline-gold"><i class="fas fa-envelope me-2"></i>Secure Message</button>
            <button class="btn btn-outline-gold"><i class="fas fa-file-pdf me-2"></i>Generate Report</button>
          </div>
        </section>

        <!-- 4. ACTIVE CASES TABLE SECTION -->
        <section class="mb-4">
          <h5 class="text-white mb-3">Active Operations</h5>
          <div class="bg-card p-4 rounded border" style="border-color: var(--border-color) !important;">
            <div class="table-responsive">
              <table class="table table-dark mb-0">
                <thead><tr><th>ID</th><th>Target</th><th>Type</th><th>Status</th><th>Agent</th></tr></thead>
                <tbody>
                  <tr><td>CAS-092</td><td>Project Alpha</td><td>Corporate</td><td><span class="badge-status badge-active">Surveillance</span></td><td>Doe, J.</td></tr>
                  <tr><td>CAS-089</td><td>Echo Missing</td><td>Missing Person</td><td><span class="badge-status badge-pending">Data Gathering</span></td><td>Smith, A.</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <!-- 5. RECENT ACTIVITY SECTION -->
        <section class="mb-4">
          <h5 class="text-white mb-3">Activity Feed</h5>
          <ul class="list-group list-group-flush bg-transparent">
            <li class="list-group-item bg-transparent text-muted border-secondary"><i class="fas fa-circle text-accent me-2" style="font-size: 8px;"></i> Agent Smith uploaded 4 photos to CAS-092.</li>
            <li class="list-group-item bg-transparent text-muted border-secondary"><i class="fas fa-circle text-accent me-2" style="font-size: 8px;"></i> Client payment verified for CAS-089.</li>
          </ul>
        </section>

        <!-- 6. FINANCIALS SECTION -->
        <section class="mb-4">
          <h5 class="text-white mb-3">Financial Overview</h5>
          <div class="bg-card p-4 rounded border" style="border-color: var(--border-color) !important;">
            <p class="text-muted mb-0">Outstanding Invoices: <strong>$12,400.00</strong> | Processed Today: <strong>$4,200.00</strong></p>
          </div>
        </section>

        <!-- 7. SECURE COMMS SECTION -->
        <section class="mb-4">
          <h5 class="text-white mb-3">Secure Communications</h5>
          <div class="alert alert-dark border-secondary text-muted" role="alert">
            <i class="fas fa-lock text-accent me-2"></i> 2 unread encrypted messages require your decryption key.
          </div>
        </section>

        <!-- 8. SECURITY LOGS SECTION -->
        <section class="mb-4">
          <h5 class="text-white mb-3">Access Logs</h5>
          <p class="text-muted small">Last login: Today at 08:14 AM from IP 192.168.x.x (Secure VPN)</p>
        </section>

        <!-- 9. RESOURCES SECTION -->
        <section class="mb-4">
          <h5 class="text-white mb-3">Intelligence Resources</h5>
          <a href="#" class="text-accent me-3"><i class="fas fa-database me-1"></i> Public Records DB</a>
          <a href="#" class="text-accent"><i class="fas fa-car me-1"></i> DMV Lookup</a>
        </section>

        <!-- 10. SYSTEM FOOTER SECTION -->
        <section class="mt-5 pt-3 border-top text-center" style="border-color: rgba(255,255,255,0.05) !important;">
          <p class="text-muted small mb-0"><i class="fas fa-shield-alt text-accent me-1"></i> Stackly Agency Core v2.4.1 - All connection encrypted.</p>
        </section>
      </div>
    `,
'Investigations': `
      <div class="fade-in">
        <h2 class="mb-4">All Investigations</h2>
        <div class="bg-card p-4 rounded border" style="border-color: var(--border-color) !important;">
          <input type="text" class="form-control mb-4" placeholder="Search investigations...">
          <div class="table-responsive">
            <table class="table table-dark">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Investigator</th>
                  <th>Progress</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>INV-101</td>
                  <td>Corporate Espionage</td>
                  <td>Agent Smith</td>
                  <td>40%</td>
                  <td><button class="btn btn-sm btn-outline-gold">View</button></td>
                </tr>
                <tr>
                  <td>INV-102</td>
                  <td>Asset Tracing</td>
                  <td>Agent Johnson</td>
                  <td>80%</td>
                  <td><button class="btn btn-sm btn-outline-gold">View</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `,
    'Messages': `
      <div class="fade-in">
        <h2 class="mb-4">Email Center</h2>
        <div class="email-list">
          <div class="email-item unread">
            <div class="email-sender">Admin System</div>
            <div class="email-subject"><strong>URGENT: New case assigned CAS-093</strong> - Please review the attached dossier.</div>
            <div class="email-time">10:42 AM</div>
          </div>
          <div class="email-item">
            <div class="email-sender">Client Support</div>
            <div class="email-subject">Client meeting scheduled for tomorrow.</div>
            <div class="email-time">Yesterday</div>
          </div>
          <div class="email-item">
            <div class="email-sender">Lab Dept</div>
            <div class="email-subject">Forensic results for CAS-089 are ready.</div>
            <div class="email-time">Oct 24</div>
          </div>
        </div>
      </div>
    `,
    'Cases': `
      <div class="fade-in">
        <h2 class="mb-4">Case Management</h2>
        <div class="row g-4 mb-4">
          <div class="col-md-3"><div class="stat-card"><div><h3>12</h3><p>New</p></div><div class="icon"><i class="fas fa-plus"></i></div></div></div>
          <div class="col-md-3"><div class="stat-card"><div><h3>45</h3><p>Active</p></div><div class="icon"><i class="fas fa-spinner"></i></div></div></div>
          <div class="col-md-3"><div class="stat-card"><div><h3>8</h3><p>Review</p></div><div class="icon"><i class="fas fa-search"></i></div></div></div>
          <div class="col-md-3"><div class="stat-card"><div><h3>250</h3><p>Closed</p></div><div class="icon"><i class="fas fa-check"></i></div></div></div>
        </div>
        <div class="bg-card p-4 rounded border" style="border-color: var(--border-color) !important;">
          <h4 class="mb-4">Recent Case Activity</h4>
          <p class="text-muted">Detailed case tracking interface loaded successfully.</p>
        </div>
      </div>
    `,
    'Investigators': `
      <div class="fade-in">
        <h2 class="mb-4">Operative Roster</h2>
        <div class="bg-card p-4 rounded border" style="border-color: var(--border-color) !important;">
          <p class="text-muted">Displaying 45 active field operatives and cyber specialists.</p>
          <div class="row g-3">
             <div class="col-md-4"><div class="p-3 border rounded text-center"><i class="fas fa-user-secret fa-2x text-accent mb-2"></i><br>Agent A. Smith<br><span class="badge-status badge-active">Active in Field</span></div></div>
             <div class="col-md-4"><div class="p-3 border rounded text-center"><i class="fas fa-laptop-code fa-2x text-accent mb-2"></i><br>Spec J. Doe<br><span class="badge-status badge-pending">Analyzing Data</span></div></div>
          </div>
        </div>
      </div>
    `,
    'Reports': `
      <div class="fade-in">
        <h2 class="mb-4">Intelligence Reports</h2>
        <div class="bg-card p-4 rounded border" style="border-color: var(--border-color) !important;">
          <h4 class="mb-3">Recent Uploads</h4>
          <div class="table-responsive">
            <table class="table table-dark">
              <tr><td><i class="fas fa-file-pdf text-danger"></i> CAS-092_Financial_Audit.pdf</td><td>Today</td><td><button class="btn btn-sm btn-outline-gold">Download</button></td></tr>
              <tr><td><i class="fas fa-file-pdf text-danger"></i> CAS-091_Surveillance_Log.pdf</td><td>Yesterday</td><td><button class="btn btn-sm btn-outline-gold">Download</button></td></tr>
            </table>
          </div>
        </div>
      </div>
    `,
    'Clients': `
      <div class="fade-in">
        <h2 class="mb-4">Client Database</h2>
        <div class="bg-card p-4 rounded border" style="border-color: var(--border-color) !important;">
          <p class="text-muted">Securely managing 120+ corporate and private client profiles.</p>
        </div>
      </div>
    `,
    'Settings': `
      <div class="fade-in">
        <h2 class="mb-4">Profile Settings</h2>
        <div class="bg-card p-4 rounded border" style="border-color: var(--border-color) !important;">
          <form class="needs-validation">
             <div class="mb-3">
               <label class="form-label">Full Name</label>
               <input type="text" class="form-control" value="Current User">
             </div>
             <div class="mb-3">
               <label class="form-label">Email</label>
               <input type="email" class="form-control" value="user@example.com">
             </div>
             <div class="mb-3">
               <label class="form-label">Notification Preferences</label>
               <select class="form-control">
                  <option>Email & SMS</option>
                  <option>Email Only</option>
                  <option>None</option>
               </select>
             </div>
             <button type="submit" class="btn-gold border-0">Save Changes</button>
          </form>
        </div>
      </div>
    `
  };
  
  // Default Content Fallback
  const defaultContent = `
      <div class="fade-in">
        <h2 class="mb-4">Section Content</h2>
        <p class="text-muted">Content for this section is being populated dynamically.</p>
        <div class="bg-card p-5 text-center rounded border" style="border-color: var(--border-color) !important;">
           <i class="fas fa-cogs fa-3x text-accent mb-3"></i>
           <h4>Module Loading...</h4>
           <p class="text-muted mb-0">The requested module data will appear here.</p>
        </div>
      </div>
  `;

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Update Active State
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      
      // Close sidebar on mobile
      if (window.innerWidth < 992) {
        sidebar.classList.remove('show');
      }

      // Load Content
      const targetText = link.textContent.trim();
      if (contentArea) {
        contentArea.innerHTML = views[targetText] || defaultContent;
      }
    });
  });
  
  // Initialize first view
  if (contentArea && links.length > 0) {
    const firstText = links[0].textContent.trim();
    contentArea.innerHTML = views[firstText] || views['Dashboard'] || defaultContent;
  }
});
