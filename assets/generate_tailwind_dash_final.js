const fs = require('fs');

const p1 = fs.readFileSync('generate_tailwind_dash_p1.js', 'utf8');
const p2 = fs.readFileSync('generate_tailwind_dash_p2.js', 'utf8');
const p3 = fs.readFileSync('generate_tailwind_dash_p3.js', 'utf8');

eval(p1);
eval(p2);
eval(p3);

const generateGenericPanel = (id, title, icon) => {
    let html = `
            <!-- Panel: ${id} -->
            <div class="dashboard-tab" id="${id}">
                <div class="flex flex-col md:flex-row justify-between md:items-end mb-8 gap-4 border-b border-white/10 pb-6">
                    <div>
                        <h3 class="font-serif text-3xl mb-2 text-white">${title}</h3>
                        <p class="text-sm text-gray-400">Classified overview for ${title.toLowerCase()}.</p>
                    </div>
                </div>
    `;

    // 1. Hero stats
    html += `
                <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
    `;
    for(let i=0; i<4; i++) {
        html += `
                    <div class="bg-black-light p-6 border border-white/5 shadow-lg group hover:border-gold/30 transition-colors">
                        <i class="fas fa-${icon} text-3xl text-gray-500 mb-4 group-hover:text-gold transition-colors"></i>
                        <h4 class="font-serif text-2xl text-white">Metric ${i+1}</h4>
                        <p class="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Status Nominal</p>
                    </div>
        `;
    }
    html += `</div>`;

    // 2. Large Chart Placeholder
    html += `
                <div class="bg-black border border-white/5 p-6 shadow-lg mb-8 h-64 flex flex-col items-center justify-center relative overflow-hidden group">
                    <div class="absolute inset-0 bg-[url('https://placehold.co/800x400/0A0A0A/333333.png?text=Data+Visualization')] bg-cover bg-center opacity-50 group-hover:scale-105 transition-transform duration-1000"></div>
                    <h3 class="font-serif text-xl text-white relative z-10 text-shadow">${title} Analysis Graph</h3>
                    <button class="mt-4 border border-gold text-gold px-6 py-2 text-[10px] uppercase tracking-widest hover:bg-gold hover:text-black transition-colors relative z-10">Export Data</button>
                </div>
    `;

    // 3, 4, 5. Three Columns
    html += `
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
    `;
    for(let i=0; i<3; i++) {
        html += `
                    <div class="bg-black-light border border-white/5 p-6 shadow-lg border-t-2 border-t-gold">
                        <h4 class="font-serif text-lg text-white mb-4">Subsection ${i+1}</h4>
                        <div class="space-y-4">
                            <div class="h-2 bg-white/10 w-full"><div class="h-full bg-gold w-${(i+1)*30}0%"></div></div>
                            <div class="h-2 bg-white/10 w-full"><div class="h-full bg-blue-500 w-${(i+1)*25}0%"></div></div>
                        </div>
                    </div>
        `;
    }
    html += `</div>`;

    // 6. Data Table
    html += `
                <div class="bg-black border border-white/5 shadow-lg mb-8 overflow-x-auto p-4">
                    <h3 class="font-serif text-xl text-white mb-4">${title} Log</h3>
                    <table class="w-full text-sm text-left text-gray-400">
                        <thead class="text-[10px] uppercase bg-white/5 text-gray-300 tracking-widest border-b border-white/10">
                            <tr><th class="px-6 py-4">ID</th><th class="px-6 py-4">Subject</th><th class="px-6 py-4">Status</th></tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-white/5 hover:bg-white/5"><td class="px-6 py-4 text-white">#001</td><td class="px-6 py-4">Alpha</td><td class="px-6 py-4 text-green-500">Active</td></tr>
                            <tr class="hover:bg-white/5"><td class="px-6 py-4 text-white">#002</td><td class="px-6 py-4">Beta</td><td class="px-6 py-4 text-gold">Pending</td></tr>
                        </tbody>
                    </table>
                </div>
    `;

    // 7, 8. Interactive Elements
    html += `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div class="bg-black-light border border-white/5 p-8 shadow-lg flex items-center justify-between group hover:border-gold/30 cursor-pointer">
                        <div>
                            <h4 class="font-serif text-white text-lg">Generate Report</h4>
                            <p class="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Compile ${title} data</p>
                        </div>
                        <i class="fas fa-file-pdf text-3xl text-gray-600 group-hover:text-gold transition-colors"></i>
                    </div>
                    <div class="bg-black-light border border-white/5 p-8 shadow-lg flex items-center justify-between group hover:border-gold/30 cursor-pointer">
                        <div>
                            <h4 class="font-serif text-white text-lg">System Calibration</h4>
                            <p class="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Run diagnostics</p>
                        </div>
                        <i class="fas fa-cogs text-3xl text-gray-600 group-hover:text-gold transition-colors"></i>
                    </div>
                </div>
    `;

    // 9, 10. Footer Alerts
    html += `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-green-500/10 border border-green-500/20 p-4 text-green-400 text-sm flex items-center gap-3">
                        <i class="fas fa-check-circle"></i> ${title} systems nominal.
                    </div>
                    <div class="bg-red-500/10 border border-red-500/20 p-4 text-red-400 text-sm flex items-center gap-3">
                        <i class="fas fa-exclamation-triangle"></i> 1 minor warning in sector 4.
                    </div>
                </div>
            </div>
    `;

    return html;
};

const footerAndScripts = `
        </div>
    </main>

    <script>
        function toggleDashboardSidebar() {
            const sidebar = document.getElementById('dashboard-sidebar');
            if (sidebar.classList.contains('hidden')) {
                sidebar.classList.remove('hidden');
                sidebar.classList.add('absolute', 'z-50', 'h-full');
            } else {
                sidebar.classList.add('hidden');
                sidebar.classList.remove('absolute', 'z-50', 'h-full');
            }
        }

        function switchTab(event, tabId, linkElement) {
            if(event) event.preventDefault();
            
            // Hide all tabs
            document.querySelectorAll('.dashboard-tab').forEach(tab => {
                tab.classList.remove('active');
            });
            
            // Remove active styling from all links
            document.querySelectorAll('aside nav a').forEach(link => {
                link.classList.remove('bg-gold/10', 'text-gold', 'border-gold', 'border-l-2');
                link.classList.add('text-gray-400', 'border-transparent');
            });

            // Show selected tab
            document.getElementById(tabId).classList.add('active');

            // Add active styling to clicked link
            if(linkElement) {
                linkElement.classList.remove('text-gray-400', 'border-transparent');
                linkElement.classList.add('bg-gold/10', 'text-gold', 'border-gold', 'border-l-2');
            }

            // Close sidebar on mobile
            if (window.innerWidth < 768) {
                toggleDashboardSidebar();
            }
        }
    </script>
</body>
</html>
`;

const fullHtml = headContent + sidebarAndHeader + generatePanelDashboard() + generatePanelCases() + generatePanelIntel() + 
    generateGenericPanel('panel-operatives', 'Operatives Roster', 'user-secret') +
    generateGenericPanel('panel-analytics', 'Advanced Analytics', 'chart-line') +
    generateGenericPanel('panel-comms', 'Secure Communications', 'satellite-dish') +
    generateGenericPanel('panel-settings', 'System Settings', 'sliders-h') +
    generateGenericPanel('panel-support', 'Technical Support', 'headset') + 
    footerAndScripts;

fs.writeFileSync('client-dashboard.html', fullHtml);

const adminHtml = fullHtml.replace('Client Portal', 'Director Portal').replace('Alias Alpha', 'Director Blackwood').replace('Level 9 Clearance', 'Level 10 Clearance (Omni)');
fs.writeFileSync('admin-dashboard.html', adminHtml);

console.log("Dashboards regenerated successfully with Tailwind CSS!");
