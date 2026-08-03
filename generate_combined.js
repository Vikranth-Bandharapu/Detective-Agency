const fs = require('fs');



const headContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Client Dashboard - Stackly Detective Agency</title>
    
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: { 
                        gold: { DEFAULT: '#D4AF37' }, 
                        black: { DEFAULT: '#0A0A0A', light: '#1A1A1A' },
                        accent: { DEFAULT: '#4A7AF2' }
                    },
                    fontFamily: { serif: ['Cinzel', 'serif'], sans: ['Inter', 'sans-serif'] }
                }
            }
        }
    </script>
    <style>
        .dashboard-tab { display: none; }
        .dashboard-tab.active { display: block; animation: fadeIn 0.5s ease; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #0A0A0A; }
        ::-webkit-scrollbar-thumb { background: #333; }
        ::-webkit-scrollbar-thumb:hover { background: #D4AF37; }
        /* Prevent layout breaking */
        .glass-panel { background: rgba(26, 26, 26, 0.8); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.05); }
    </style>
</head>
<body class="bg-black text-white font-sans h-[100dvh] flex overflow-hidden">
`;

const sidebarAndHeader = `
    <!-- Sidebar -->
    <aside id="dashboard-sidebar" class="w-64 bg-black-light border-r border-white/10 flex flex-col hidden md:flex z-20">
        <div class="h-24 flex items-center px-6 border-b border-white/10">
            <button id="close-sidebar-btn" onclick="toggleDashboardSidebar()" class="md:hidden absolute top-8 right-6 text-gray-400 hover:text-white"><i class="fas fa-times text-xl"></i></button>
            <a href="index.html" class="flex items-center">
                <img src="assets/logo.webp" alt="Stackly Logo" class="h-10" onerror="this.src='https://placehold.co/150x50/0A0A0A/D4AF37.webp?text=Stackly'">
            </a>
        </div>
        <nav class="flex-1 overflow-y-auto py-6 px-4 space-y-2">
            <a href="#" onclick="switchTab(event, 'panel-dashboard', this)" class="flex items-center px-4 py-3 text-sm tracking-widest uppercase bg-gold/10 text-gold rounded-sm border-l-2 border-gold"><i class="fas fa-home w-6"></i> Dashboard</a>
            <a href="#" onclick="switchTab(event, 'panel-cases', this)" class="flex items-center px-4 py-3 text-sm tracking-widest uppercase text-gray-400 hover:text-white transition-colors border-l-2 border-transparent"><i class="fas fa-briefcase w-6"></i> Active Cases</a>
            <a href="#" onclick="switchTab(event, 'panel-intel', this)" class="flex items-center px-4 py-3 text-sm tracking-widest uppercase text-gray-400 hover:text-white transition-colors border-l-2 border-transparent"><i class="fas fa-file-alt w-6"></i> Intel Reports</a>
            <a href="#" onclick="switchTab(event, 'panel-operatives', this)" class="flex items-center px-4 py-3 text-sm tracking-widest uppercase text-gray-400 hover:text-white transition-colors border-l-2 border-transparent"><i class="fas fa-users w-6"></i> Operatives</a>
            <a href="#" onclick="switchTab(event, 'panel-analytics', this)" class="flex items-center px-4 py-3 text-sm tracking-widest uppercase text-gray-400 hover:text-white transition-colors border-l-2 border-transparent"><i class="fas fa-chart-line w-6"></i> Analytics</a>
            <a href="#" onclick="switchTab(event, 'panel-comms', this)" class="flex items-center px-4 py-3 text-sm tracking-widest uppercase text-gray-400 hover:text-white transition-colors border-l-2 border-transparent"><i class="fas fa-bullhorn w-6"></i> Communications</a>
            <a href="#" onclick="switchTab(event, 'panel-settings', this)" class="flex items-center px-4 py-3 text-sm tracking-widest uppercase text-gray-400 hover:text-white transition-colors border-l-2 border-transparent"><i class="fas fa-cog w-6"></i> Settings</a>
            <a href="#" onclick="switchTab(event, 'panel-support', this)" class="flex items-center px-4 py-3 text-sm tracking-widest uppercase text-gray-400 hover:text-white transition-colors border-l-2 border-transparent"><i class="fas fa-life-ring w-6"></i> Support</a>
        </nav>
        <div class="p-6 border-t border-white/10 space-y-4">
            <a href="login.html" class="flex items-center text-sm tracking-widest uppercase text-gray-400 hover:text-red-500 transition-colors"><i class="fas fa-sign-out-alt w-6"></i> Disconnect</a>
        </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 flex flex-col min-w-0 h-full overflow-hidden relative z-10">
        <!-- Topbar -->
        <header class="h-24 bg-black border-b border-white/10 flex items-center justify-between px-8 z-20">
            <div class="flex items-center">
                <button onclick="toggleDashboardSidebar()" class="md:hidden text-gray-400 hover:text-white mr-4"><i class="fas fa-bars text-xl"></i></button>
                <h2 class="font-serif hidden md:block text-2xl text-white">Client Portal</h2>
            </div>
            <div class="flex items-center space-x-6">
                <div class="relative group cursor-pointer">
                    <i class="fas fa-bell text-gray-400 hover:text-gold transition-colors text-xl"></i>
                    <span class="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center">3</span>
                </div>
                <div class="flex items-center gap-3">
                    <div class="text-right hidden sm:block">
                        <div class="text-sm text-white font-serif tracking-widest">Alias Alpha</div>
                        <div class="text-[10px] text-gold uppercase tracking-widest">Level 9 Clearance</div>
                    </div>
                    <div class="w-10 h-10 rounded-full border border-gold/50 flex items-center justify-center bg-black-light text-gold">
                        <i class="fas fa-user-secret"></i>
                    </div>
                </div>
            </div>
        </header>

        <!-- Dashboard Content -->
        <div class="absolute top-24 left-0 right-0 bottom-0 overflow-y-auto overflow-x-hidden p-4 md:p-8 bg-black">
`;

const generatePanelDashboard = () => `
            <!-- Panel: Dashboard -->
            <div class="dashboard-tab active" id="panel-dashboard">
                <!-- 1. Welcome Banner -->
                <div class="bg-gradient-to-r from-blue-900/20 to-black-light border border-blue-500/30 p-8 mb-8 flex flex-col md:flex-row justify-between items-center gap-6 group overflow-hidden relative">
                    <div class="absolute right-0 top-0 text-blue-500/10 text-9xl -mt-8 -mr-8 group-hover:scale-110 transition-transform"><i class="fas fa-shield-alt"></i></div>
                    <div class="relative z-10">
                        <span class="text-gold text-xs uppercase tracking-widest font-bold mb-2 block">Secure Network Active</span>
                        <h3 class="font-serif text-3xl mb-2 text-white">Welcome, Alpha</h3>
                        <p class="text-gray-300 font-light max-w-lg">All active operations are currently proceeding under stealth protocols. You have 3 unread encrypted intelligence briefs.</p>
                    </div>
                    <button class="relative z-10 border border-gold text-gold px-8 py-4 text-sm tracking-widest uppercase hover:bg-gold hover:text-black transition-colors flex-shrink-0">View Briefs</button>
                </div>

                <!-- 2. Primary Metrics Grid -->
                <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                    <div class="bg-black-light p-6 border border-white/5 relative overflow-hidden group hover:border-gold/30 transition-colors">
                        <div class="absolute right-0 top-0 text-white/5 text-7xl -mt-4 -mr-4 group-hover:scale-110 transition-transform"><i class="fas fa-briefcase"></i></div>
                        <span class="text-[10px] uppercase tracking-widest text-gray-400 mb-2 block">Active Cases</span>
                        <h3 class="font-serif text-3xl text-white mb-1">12</h3>
                        <span class="text-[10px] text-green-400 uppercase tracking-widest">All Nominal</span>
                    </div>
                    <div class="bg-black-light p-6 border border-white/5 relative overflow-hidden group hover:border-gold/30 transition-colors">
                        <div class="absolute right-0 top-0 text-white/5 text-7xl -mt-4 -mr-4 group-hover:scale-110 transition-transform"><i class="fas fa-users"></i></div>
                        <span class="text-[10px] uppercase tracking-widest text-gray-400 mb-2 block">Operatives Deployed</span>
                        <h3 class="font-serif text-3xl text-white mb-1">24</h3>
                        <span class="text-[10px] text-gold uppercase tracking-widest">3 on Standby</span>
                    </div>
                    <div class="bg-black-light p-6 border border-white/5 relative overflow-hidden group hover:border-gold/30 transition-colors">
                        <div class="absolute right-0 top-0 text-white/5 text-7xl -mt-4 -mr-4 group-hover:scale-110 transition-transform"><i class="fas fa-file-alt"></i></div>
                        <span class="text-[10px] uppercase tracking-widest text-gray-400 mb-2 block">Intel Reports</span>
                        <h3 class="font-serif text-3xl text-white mb-1">1,402</h3>
                        <span class="text-[10px] text-blue-400 uppercase tracking-widest">+28 Today</span>
                    </div>
                    <div class="bg-black-light p-6 border border-white/5 relative overflow-hidden group hover:border-gold/30 transition-colors">
                        <div class="absolute right-0 top-0 text-white/5 text-7xl -mt-4 -mr-4 group-hover:scale-110 transition-transform"><i class="fas fa-wallet"></i></div>
                        <span class="text-[10px] uppercase tracking-widest text-gray-400 mb-2 block">Escrow Balance</span>
                        <h3 class="font-serif text-3xl text-white mb-1">$32.5k</h3>
                        <span class="text-[10px] text-red-400 uppercase tracking-widest">Burn Rate: High</span>
                    </div>
                </div>

                <!-- 3. Complex Split Layout -->
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    
                    <!-- 4. Live Activity Feed -->
                    <div class="lg:col-span-1 bg-black border border-white/5 shadow-lg p-6">
                        <h3 class="font-serif text-xl mb-6 text-gold">Live Surveillance Feed</h3>
                        <div class="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                            <div class="relative flex items-center justify-between group">
                                <div class="flex items-center justify-center w-10 h-10 rounded-full border border-gold bg-black text-gold shrink-0 shadow-[0_0_0_4px_#0a0a0a]">
                                    <i class="fas fa-car"></i>
                                </div>
                                <div class="w-[calc(100%-4rem)] p-4 rounded bg-black-light border border-white/5 hover:bg-white/5 transition-colors cursor-pointer">
                                    <div class="flex items-center justify-between mb-1">
                                        <div class="font-serif text-white text-sm">Target Alpha Moved</div>
                                        <time class="text-[10px] text-gray-500 uppercase tracking-widest">2m ago</time>
                                    </div>
                                    <div class="text-xs text-gray-400">Subject departed residence. Operative Viper tailing.</div>
                                </div>
                            </div>
                            <div class="relative flex items-center justify-between group">
                                <div class="flex items-center justify-center w-10 h-10 rounded-full border border-blue-500 bg-black text-blue-500 shrink-0 shadow-[0_0_0_4px_#0a0a0a]">
                                    <i class="fas fa-network-wired"></i>
                                </div>
                                <div class="w-[calc(100%-4rem)] p-4 rounded bg-black-light border border-white/5 hover:bg-white/5 transition-colors cursor-pointer">
                                    <div class="flex items-center justify-between mb-1">
                                        <div class="font-serif text-white text-sm">Firewall Bypassed</div>
                                        <time class="text-[10px] text-gray-500 uppercase tracking-widest">1h ago</time>
                                    </div>
                                    <div class="text-xs text-gray-400">Agent Ghost accessed Apex database.</div>
                                </div>
                            </div>
                            <div class="relative flex items-center justify-between group">
                                <div class="flex items-center justify-center w-10 h-10 rounded-full border border-red-500 bg-black text-red-500 shrink-0 shadow-[0_0_0_4px_#0a0a0a]">
                                    <i class="fas fa-exclamation-triangle"></i>
                                </div>
                                <div class="w-[calc(100%-4rem)] p-4 rounded bg-black-light border border-white/5 hover:bg-white/5 transition-colors cursor-pointer">
                                    <div class="flex items-center justify-between mb-1">
                                        <div class="font-serif text-white text-sm">Proximity Alert</div>
                                        <time class="text-[10px] text-gray-500 uppercase tracking-widest">3h ago</time>
                                    </div>
                                    <div class="text-xs text-gray-400">Unknown signal detected near Safehouse B.</div>
                                </div>
                            </div>
                        </div>
                        <button class="w-full mt-6 py-3 border border-white/10 text-[10px] tracking-widest uppercase hover:border-gold hover:text-gold transition-colors">Load Archive</button>
                    </div>

                    <!-- 5. Interactive World Map Placeholder & Status -->
                    <div class="lg:col-span-2">
                        <div class="flex justify-between items-end mb-6">
                            <h3 class="font-serif text-xl text-white">Global Asset Deployment</h3>
                            <span class="text-gold text-[10px] uppercase tracking-widest"><i class="fas fa-satellite-dish animate-pulse mr-2"></i>Live Tracking</span>
                        </div>
                        <div class="bg-black-light border border-white/5 shadow-lg p-1 relative h-64 mb-6 group overflow-hidden">
                            <!-- Simulated Map -->
                            <div class="absolute inset-0 opacity-30 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-cover bg-center group-hover:scale-105 transition-transform duration-1000"></div>
                            <!-- Map Pins -->
                            <div class="absolute top-1/4 left-1/2 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                            <div class="absolute top-1/3 left-1/3 w-2 h-2 bg-gold rounded-full"></div>
                            <div class="absolute top-1/2 left-3/4 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
                            
                            <!-- Overlay Stats -->
                            <div class="absolute bottom-4 left-4 bg-black/80 backdrop-blur border border-white/10 p-4">
                                <h4 class="font-serif text-sm text-white mb-2">Sector Alpha (London)</h4>
                                <div class="text-xs text-gray-400">Operatives: 12</div>
                                <div class="text-xs text-green-400">Threat Level: Low</div>
                            </div>
                        </div>

                        <!-- 6. Priority Targets Table -->
                        <div class="bg-black border border-white/5 shadow-lg">
                            <div class="overflow-x-auto">
                                <table class="w-full text-sm text-left text-gray-400">
                                    <thead class="text-[10px] uppercase tracking-widest bg-white/5 text-gray-300">
                                        <tr>
                                            <th class="px-6 py-4 font-serif">Target ID</th>
                                            <th class="px-6 py-4 font-serif">Status</th>
                                            <th class="px-6 py-4 font-serif">Location</th>
                                            <th class="px-6 py-4 font-serif">Assigned To</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="border-b border-white/5 hover:bg-white/5 transition-colors">
                                            <td class="px-6 py-4 text-white font-serif">Subject X</td>
                                            <td class="px-6 py-4"><span class="bg-red-500/20 text-red-500 px-2 py-1 text-[10px] uppercase tracking-widest border border-red-500/30">Evading</span></td>
                                            <td class="px-6 py-4">Unknown (Last: Paris)</td>
                                            <td class="px-6 py-4 text-gold">Agent Phoenix</td>
                                        </tr>
                                        <tr class="hover:bg-white/5 transition-colors">
                                            <td class="px-6 py-4 text-white font-serif">Apex Corp CEO</td>
                                            <td class="px-6 py-4"><span class="bg-blue-500/20 text-blue-500 px-2 py-1 text-[10px] uppercase tracking-widest border border-blue-500/30">Monitored</span></td>
                                            <td class="px-6 py-4">New York HQ</td>
                                            <td class="px-6 py-4 text-gold">Agent Ghost</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 7. Security Status -->
                <h3 class="font-serif text-xl mb-6 text-white border-b border-white/10 pb-4">Infrastructure Security</h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div class="bg-black border border-white/5 p-6 shadow-lg border-l-4 border-l-green-500 group">
                        <div class="flex items-center gap-4 mb-4">
                            <div class="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 text-xl"><i class="fas fa-shield-alt"></i></div>
                            <div>
                                <h4 class="text-white font-serif text-lg">Firewall Intact</h4>
                                <p class="text-[10px] uppercase tracking-widest text-gray-500">AES-256 Encryption Active</p>
                            </div>
                        </div>
                        <div class="w-full bg-white/10 h-1"><div class="bg-green-500 h-1 w-full"></div></div>
                    </div>
                    <!-- 8. Database Sync -->
                    <div class="bg-black border border-white/5 p-6 shadow-lg border-l-4 border-l-blue-500 group">
                        <div class="flex items-center gap-4 mb-4">
                            <div class="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 text-xl"><i class="fas fa-database"></i></div>
                            <div>
                                <h4 class="text-white font-serif text-lg">Offsite Backup</h4>
                                <p class="text-[10px] uppercase tracking-widest text-gray-500">Synced 4 mins ago</p>
                            </div>
                        </div>
                        <div class="w-full bg-white/10 h-1"><div class="bg-blue-500 h-1 w-full"></div></div>
                    </div>
                    <!-- 9. Intrusion Detection -->
                    <div class="bg-black border border-white/5 p-6 shadow-lg border-l-4 border-l-gold group">
                        <div class="flex items-center gap-4 mb-4">
                            <div class="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold text-xl"><i class="fas fa-eye"></i></div>
                            <div>
                                <h4 class="text-white font-serif text-lg">IDS Sensors</h4>
                                <p class="text-[10px] uppercase tracking-widest text-gray-500">Scanning for Anomalies</p>
                            </div>
                        </div>
                        <div class="w-full bg-white/10 h-1"><div class="bg-gold h-1 w-full animate-pulse"></div></div>
                    </div>
                </div>

                <!-- 10. Quick Actions Bar -->
                <div class="bg-black-light border border-white/5 p-4 shadow-lg flex flex-wrap gap-4 items-center justify-center">
                    <button class="bg-transparent border border-white/20 text-white px-6 py-2 text-[10px] uppercase tracking-widest hover:border-gold hover:text-gold transition-colors"><i class="fas fa-file-export mr-2"></i>Export Summary</button>
                    <button class="bg-transparent border border-white/20 text-white px-6 py-2 text-[10px] uppercase tracking-widest hover:border-gold hover:text-gold transition-colors"><i class="fas fa-lock mr-2"></i>Force Lockout</button>
                    <button class="bg-red-500/20 border border-red-500/50 text-red-500 px-6 py-2 text-[10px] uppercase tracking-widest hover:bg-red-500 hover:text-white transition-colors"><i class="fas fa-fire mr-2"></i>Burn Protocol</button>
                </div>
            </div>
`;

// I will create similarly massive generators for panelCases, panelIntel, etc. to hit the 10 sections perfectly, using Tailwind grids, tables, and typography.

const generatePanelCases = () => `
            <!-- Panel: Cases -->
            <div class="dashboard-tab" id="panel-cases">
                <!-- 1. Header Area -->
                <div class="flex flex-col md:flex-row justify-between md:items-end mb-8 gap-4 border-b border-white/10 pb-6">
                    <div>
                        <h3 class="font-serif text-3xl mb-2 text-white">Active Investigations</h3>
                        <p class="text-sm text-gray-400">Manage and oversee all ongoing field and cyber operations.</p>
                    </div>
                    <button class="border border-gold text-gold hover:bg-gold hover:text-black transition-colors px-6 py-2 uppercase tracking-widest text-[10px]">Open New Case</button>
                </div>

                <!-- 2. Priority Highlight -->
                <div class="bg-black-light border border-red-500/30 p-6 mb-8 relative group overflow-hidden">
                    <div class="absolute right-0 top-0 text-red-500/10 text-9xl -mt-8 -mr-8 group-hover:scale-110 transition-transform"><i class="fas fa-exclamation-triangle"></i></div>
                    <h4 class="text-red-500 text-[10px] uppercase tracking-widest mb-4">Critical Priority</h4>
                    <div class="flex flex-col md:flex-row justify-between md:items-center gap-6 relative z-10">
                        <div class="flex items-center gap-6">
                            <div class="w-16 h-16 bg-black border border-white/10 flex flex-col items-center justify-center">
                                <span class="text-xs text-gray-500 uppercase tracking-widest">Case</span>
                                <span class="font-serif text-white">#4021</span>
                            </div>
                            <div>
                                <h5 class="font-serif text-xl text-white">Matrimonial Surveillance (Alpha)</h5>
                                <p class="text-sm text-gray-400 mt-1">Target located at secondary safehouse. Awaiting intercept.</p>
                            </div>
                        </div>
                        <div class="flex-1 max-w-md w-full mt-4 md:mt-0">
                            <div class="flex justify-between text-[10px] uppercase tracking-widest text-gray-400 mb-2">
                                <span class="text-gold">Recon</span>
                                <span class="text-gold">Surveillance</span>
                                <span>Intercept</span>
                                <span>Closure</span>
                            </div>
                            <div class="h-1 bg-white/10 relative">
                                <div class="absolute top-0 left-0 h-full bg-gold w-3/4 animate-pulse"></div>
                            </div>
                            <p class="text-[10px] text-gray-500 mt-2 text-right">Estimated Intercept: 2 hrs</p>
                        </div>
                    </div>
                </div>

                <!-- 3. Cases Table -->
                <h3 class="font-serif text-xl mb-4 text-white">All Active Cases</h3>
                <div class="bg-black border border-white/5 p-6 mb-8 shadow-lg">
                    <div class="overflow-x-auto">
                        <table class="w-full text-left text-sm text-gray-400 whitespace-nowrap">
                            <thead class="text-[10px] uppercase tracking-widest text-gray-500 border-b border-white/10">
                                <tr>
                                    <th class="pb-4 font-normal px-2">ID</th>
                                    <th class="pb-4 font-normal px-2">Type / Client</th>
                                    <th class="pb-4 font-normal px-2">Opened</th>
                                    <th class="pb-4 font-normal px-2">Status</th>
                                    <th class="pb-4 font-normal px-2">Budget</th>
                                    <th class="pb-4 font-normal text-right px-2">Action</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-white/5">
                                <tr class="hover:bg-white/5 transition-colors group">
                                    <td class="py-4 text-white px-2 font-serif">#4029</td>
                                    <td class="py-4 px-2">
                                        <div class="text-white font-serif">Missing Person</div>
                                        <div class="text-[10px] uppercase tracking-widest mt-1">Client: Delta</div>
                                    </td>
                                    <td class="py-4 px-2">Oct 12, 2026</td>
                                    <td class="py-4 px-2"><span class="text-green-400 border border-green-400/30 px-3 py-1 text-[10px] uppercase tracking-widest">Active</span></td>
                                    <td class="py-4 text-white px-2">$15,000</td>
                                    <td class="py-4 text-right px-2">
                                        <button class="text-gold hover:text-white transition-colors uppercase tracking-widest text-[10px] border border-gold/30 px-3 py-1">Details</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-white/5 transition-colors group">
                                    <td class="py-4 text-white px-2 font-serif">#4030</td>
                                    <td class="py-4 px-2">
                                        <div class="text-white font-serif">Corporate Fraud</div>
                                        <div class="text-[10px] uppercase tracking-widest mt-1">Client: Apex</div>
                                    </td>
                                    <td class="py-4 px-2">Oct 15, 2026</td>
                                    <td class="py-4 px-2"><span class="text-blue-400 border border-blue-400/30 px-3 py-1 text-[10px] uppercase tracking-widest">Monitoring</span></td>
                                    <td class="py-4 text-white px-2">$45,000</td>
                                    <td class="py-4 text-right px-2">
                                        <button class="text-gold hover:text-white transition-colors uppercase tracking-widest text-[10px] border border-gold/30 px-3 py-1">Details</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- 4. Budget Overview -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div class="bg-black-light border border-white/5 p-8 shadow-lg">
                        <h3 class="font-serif text-2xl mb-6 text-white">Financial Burn Rate</h3>
                        <div class="space-y-6">
                            <div class="flex justify-between items-center border-b border-white/5 pb-4">
                                <div>
                                    <h5 class="text-white text-sm mb-1">Total Escrow Deposited</h5>
                                    <p class="text-[10px] uppercase tracking-widest text-gray-500">Across all active cases</p>
                                </div>
                                <span class="text-gold font-serif text-xl">$120,500</span>
                            </div>
                            <div class="flex justify-between items-center border-b border-white/5 pb-4">
                                <div>
                                    <h5 class="text-white text-sm mb-1">Expenses Incurred</h5>
                                    <p class="text-[10px] uppercase tracking-widest text-gray-500">Bribes, travel, equipment</p>
                                </div>
                                <span class="text-red-400 font-serif text-xl">$42,300</span>
                            </div>
                            <div class="flex justify-between items-center pb-4">
                                <div>
                                    <h5 class="text-white text-sm mb-1">Remaining Budget</h5>
                                    <p class="text-[10px] uppercase tracking-widest text-gray-500">Available to burn</p>
                                </div>
                                <span class="text-green-400 font-serif text-xl">$78,200</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- 5. Operative Assignment -->
                    <div class="bg-black-light border border-white/5 p-8 shadow-lg">
                        <h3 class="font-serif text-2xl mb-6 text-white">Operative Deployment</h3>
                        <div class="space-y-4">
                            <div class="flex items-center justify-between bg-black p-4 border border-white/5 group hover:border-gold/30 transition-colors cursor-pointer">
                                <div class="flex items-center gap-4">
                                    <div class="w-10 h-10 rounded-full border border-gold/50 flex items-center justify-center bg-black-light text-gold"><i class="fas fa-user-ninja"></i></div>
                                    <div><h5 class="text-white text-sm">Agent Phoenix</h5><p class="text-[10px] uppercase tracking-widest text-gray-500">Assigned: Case #4029</p></div>
                                </div>
                                <span class="text-xs text-green-400"><i class="fas fa-circle text-[8px] mr-1"></i>In Field</span>
                            </div>
                            <div class="flex items-center justify-between bg-black p-4 border border-white/5 group hover:border-gold/30 transition-colors cursor-pointer">
                                <div class="flex items-center gap-4">
                                    <div class="w-10 h-10 rounded-full border border-blue-500/50 flex items-center justify-center bg-black-light text-blue-500"><i class="fas fa-laptop-code"></i></div>
                                    <div><h5 class="text-white text-sm">Agent Ghost</h5><p class="text-[10px] uppercase tracking-widest text-gray-500">Assigned: Case #4030</p></div>
                                </div>
                                <span class="text-xs text-blue-400"><i class="fas fa-circle text-[8px] mr-1"></i>Cyber</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 6. Evidence Vault Mini -->
                <h3 class="font-serif text-xl mb-4 text-white">Recent Evidence Acquired</h3>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div class="bg-black border border-white/5 h-32 flex flex-col items-center justify-center text-gray-400 hover:text-gold hover:border-gold/30 transition-colors cursor-pointer group">
                        <i class="fas fa-camera text-3xl mb-3 group-hover:scale-110 transition-transform"></i>
                        <span class="text-[10px] uppercase tracking-widest">Surveillance_4021.zip</span>
                    </div>
                    <div class="bg-black border border-white/5 h-32 flex flex-col items-center justify-center text-gray-400 hover:text-gold hover:border-gold/30 transition-colors cursor-pointer group">
                        <i class="fas fa-file-pdf text-3xl mb-3 group-hover:scale-110 transition-transform"></i>
                        <span class="text-[10px] uppercase tracking-widest">Bank_Records.pdf</span>
                    </div>
                    <div class="bg-black border border-white/5 h-32 flex flex-col items-center justify-center text-gray-400 hover:text-gold hover:border-gold/30 transition-colors cursor-pointer group">
                        <i class="fas fa-microphone text-3xl mb-3 group-hover:scale-110 transition-transform"></i>
                        <span class="text-[10px] uppercase tracking-widest">Wiretap_Audio.wav</span>
                    </div>
                    <div class="bg-black border border-white/5 h-32 flex flex-col items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-colors cursor-pointer group bg-white/5">
                        <i class="fas fa-plus text-2xl mb-3 group-hover:rotate-90 transition-transform"></i>
                        <span class="text-[10px] uppercase tracking-widest">Upload File</span>
                    </div>
                </div>

                <!-- 7. Legal Clearances -->
                <div class="bg-black border border-white/5 p-6 shadow-lg mb-8">
                    <h3 class="font-serif text-xl mb-4 text-white">Legal Clearances & Warrants</h3>
                    <p class="text-sm text-gray-400 mb-4">All active operations are currently operating within established legal frameworks. Pending warrant for electronic wiretap on Case #4030.</p>
                    <button class="bg-transparent border border-white/20 text-white px-6 py-2 text-[10px] uppercase tracking-widest hover:border-gold hover:text-gold transition-colors">Request Subpoena</button>
                </div>
                
                <!-- 8, 9, 10. Archival / Map / Export -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="bg-black-light border border-white/5 p-6 text-center hover:bg-white/5 transition-colors cursor-pointer">
                        <i class="fas fa-archive text-gold text-3xl mb-3"></i>
                        <h4 class="text-white font-serif">Cold Case Archives</h4>
                        <p class="text-[10px] text-gray-500 uppercase mt-2">Access past files</p>
                    </div>
                    <div class="bg-black-light border border-white/5 p-6 text-center hover:bg-white/5 transition-colors cursor-pointer">
                        <i class="fas fa-map-marker-alt text-blue-500 text-3xl mb-3"></i>
                        <h4 class="text-white font-serif">Target Heatmaps</h4>
                        <p class="text-[10px] text-gray-500 uppercase mt-2">Location tracking</p>
                    </div>
                    <div class="bg-black-light border border-white/5 p-6 text-center hover:bg-white/5 transition-colors cursor-pointer">
                        <i class="fas fa-file-export text-gray-400 text-3xl mb-3"></i>
                        <h4 class="text-white font-serif">Export Case DB</h4>
                        <p class="text-[10px] text-gray-500 uppercase mt-2">Download all raw data</p>
                    </div>
                </div>
            </div>
`;

const generatePanelIntel = () => `
            <!-- Panel: Intel Reports -->
            <div class="dashboard-tab" id="panel-intel">
                <!-- 1. Header -->
                <div class="flex flex-col md:flex-row justify-between md:items-end mb-8 gap-4 border-b border-white/10 pb-6">
                    <div>
                        <h3 class="font-serif text-3xl mb-2 text-white">Intel Reports Master Log</h3>
                        <p class="text-sm text-gray-400">Classified raw data, wiretaps, and decryption logs.</p>
                    </div>
                </div>

                <!-- 2. Intel Stats -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div class="bg-black border border-white/5 p-6 shadow-lg text-center group cursor-pointer">
                        <i class="fas fa-database text-4xl text-gray-400 group-hover:text-gold transition-colors mb-4"></i>
                        <h4 class="text-white font-serif text-lg">1,402</h4>
                        <p class="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Total Logs Indexed</p>
                    </div>
                    <div class="bg-black border border-white/5 p-6 shadow-lg text-center group cursor-pointer">
                        <i class="fas fa-unlock text-4xl text-green-500 group-hover:scale-110 transition-transform mb-4"></i>
                        <h4 class="text-white font-serif text-lg text-green-400">28</h4>
                        <p class="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Decrypted Today</p>
                    </div>
                    <div class="bg-black border border-red-500/30 p-6 shadow-lg text-center group cursor-pointer relative overflow-hidden">
                        <div class="absolute inset-0 bg-red-500/5 animate-pulse"></div>
                        <i class="fas fa-lock text-4xl text-red-500 group-hover:scale-110 transition-transform mb-4 relative z-10"></i>
                        <h4 class="text-white font-serif text-lg text-red-500 relative z-10">5</h4>
                        <p class="text-[10px] text-gray-500 uppercase tracking-widest mt-1 relative z-10">Encrypted (Unbroken)</p>
                    </div>
                </div>

                <!-- 3. Intel Table -->
                <div class="bg-black-light border border-white/5 shadow-lg mb-8">
                    <div class="overflow-x-auto p-4">
                        <table class="w-full text-sm text-left text-gray-400">
                            <thead class="text-[10px] uppercase bg-white/5 text-gray-300 tracking-widest">
                                <tr>
                                    <th class="px-6 py-4 font-serif">Report ID</th>
                                    <th class="px-6 py-4 font-serif">Target</th>
                                    <th class="px-6 py-4 font-serif">Date Filed</th>
                                    <th class="px-6 py-4 font-serif">Clearance</th>
                                    <th class="px-6 py-4 font-serif text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b border-white/5 hover:bg-white/5">
                                    <td class="px-6 py-4 text-white font-serif">INT-8902</td>
                                    <td class="px-6 py-4">Apex Execs</td>
                                    <td class="px-6 py-4">May 28, 2026</td>
                                    <td class="px-6 py-4"><span class="text-red-500"><i class="fas fa-lock mr-2"></i>Level 9</span></td>
                                    <td class="px-6 py-4 text-right"><button class="border border-gold text-gold px-4 py-1 text-[10px] uppercase tracking-widest hover:bg-gold hover:text-black transition-colors">Decrypt</button></td>
                                </tr>
                                <tr class="border-b border-white/5 hover:bg-white/5">
                                    <td class="px-6 py-4 text-white font-serif">INT-8901</td>
                                    <td class="px-6 py-4">Subject Bravo</td>
                                    <td class="px-6 py-4">May 27, 2026</td>
                                    <td class="px-6 py-4"><span class="text-yellow-500"><i class="fas fa-lock mr-2"></i>Level 5</span></td>
                                    <td class="px-6 py-4 text-right"><button class="border border-gold text-gold px-4 py-1 text-[10px] uppercase tracking-widest hover:bg-gold hover:text-black transition-colors">Decrypt</button></td>
                                </tr>
                                <tr class="hover:bg-white/5">
                                    <td class="px-6 py-4 text-white font-serif">INT-8900</td>
                                    <td class="px-6 py-4">Vehicle Track</td>
                                    <td class="px-6 py-4">May 26, 2026</td>
                                    <td class="px-6 py-4"><span class="text-green-500"><i class="fas fa-unlock mr-2"></i>Level 2</span></td>
                                    <td class="px-6 py-4 text-right"><button class="border border-white/20 text-white px-4 py-1 text-[10px] uppercase tracking-widest hover:border-white transition-colors">View File</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <!-- 4. Wiretap Logs -->
                    <div class="bg-black border border-white/5 p-6 shadow-lg border-l-4 border-l-blue-500">
                        <h3 class="font-serif text-xl mb-4 text-white">Active Wiretaps</h3>
                        <ul class="space-y-4">
                            <li class="flex items-start gap-4 p-3 bg-white/5 border border-white/10">
                                <i class="fas fa-phone-volume text-blue-500 mt-1 animate-pulse"></i>
                                <div>
                                    <h5 class="text-white text-sm">Line 1: 555-0199</h5>
                                    <p class="text-[10px] text-gray-400 uppercase tracking-widest">Status: Recording</p>
                                </div>
                            </li>
                            <li class="flex items-start gap-4 p-3 bg-white/5 border border-white/10">
                                <i class="fas fa-microphone-slash text-gray-500 mt-1"></i>
                                <div>
                                    <h5 class="text-white text-sm">Line 2: 555-0188</h5>
                                    <p class="text-[10px] text-gray-400 uppercase tracking-widest">Status: Silent (Awaiting Carrier)</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <!-- 5. Cyber Intrusions -->
                    <div class="bg-black border border-white/5 p-6 shadow-lg border-l-4 border-l-green-500">
                        <h3 class="font-serif text-xl mb-4 text-white">Cyber Intrusions</h3>
                        <ul class="space-y-4">
                            <li class="flex items-start gap-4 p-3 bg-green-500/10 border border-green-500/20">
                                <i class="fas fa-check-circle text-green-500 mt-1"></i>
                                <div>
                                    <h5 class="text-white text-sm">Firewall Bypass</h5>
                                    <p class="text-[10px] text-green-400 uppercase tracking-widest">Successful at 0200 hrs.</p>
                                </div>
                            </li>
                            <li class="flex items-start gap-4 p-3 bg-red-500/10 border border-red-500/20">
                                <i class="fas fa-times-circle text-red-500 mt-1"></i>
                                <div>
                                    <h5 class="text-white text-sm">Keylogger Payload</h5>
                                    <p class="text-[10px] text-red-400 uppercase tracking-widest">Blocked by target AV.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- 6. Drone Footage -->
                <h3 class="font-serif text-xl mb-6 text-white border-b border-white/10 pb-4">Aerial Surveillance Feeds</h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div class="bg-black-light border border-white/5 shadow-lg group overflow-hidden cursor-pointer">
                        <div class="h-40 bg-gray-900 flex flex-col items-center justify-center relative">
                            <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"><i class="fas fa-play text-white text-3xl"></i></div>
                            <i class="fas fa-video text-gray-700 text-5xl mb-2"></i>
                            <div class="absolute top-2 right-2 flex items-center gap-2"><div class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div><span class="text-[8px] uppercase tracking-widest text-red-500">LIVE</span></div>
                        </div>
                        <div class="p-4 border-t border-white/5 text-center">
                            <h4 class="text-white font-serif text-sm">Drone Alpha (Target 1)</h4>
                        </div>
                    </div>
                    <div class="bg-black-light border border-white/5 shadow-lg group overflow-hidden cursor-pointer">
                        <div class="h-40 bg-gray-900 flex flex-col items-center justify-center relative">
                            <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"><i class="fas fa-play text-white text-3xl"></i></div>
                            <i class="fas fa-video text-gray-700 text-5xl mb-2"></i>
                            <div class="absolute top-2 right-2 flex items-center gap-2"><div class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div><span class="text-[8px] uppercase tracking-widest text-red-500">LIVE</span></div>
                        </div>
                        <div class="p-4 border-t border-white/5 text-center">
                            <h4 class="text-white font-serif text-sm">Drone Bravo (Safehouse)</h4>
                        </div>
                    </div>
                    <div class="bg-black-light border border-white/5 shadow-lg relative opacity-50">
                        <div class="h-40 bg-black flex flex-col items-center justify-center relative">
                            <i class="fas fa-video-slash text-red-900 text-5xl mb-2"></i>
                            <div class="absolute top-2 right-2 flex items-center gap-2"><span class="text-[8px] uppercase tracking-widest text-gray-500">OFFLINE</span></div>
                        </div>
                        <div class="p-4 border-t border-white/5 text-center">
                            <h4 class="text-gray-500 font-serif text-sm">Drone Charlie</h4>
                        </div>
                    </div>
                </div>

                <!-- 7. Signal Intercepts -->
                <div class="bg-black border border-white/5 p-6 shadow-lg mb-8">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="font-serif text-xl text-white">Signal Intercepts (Raw Data)</h3>
                        <span class="bg-gold/20 text-gold px-2 py-1 text-[8px] uppercase tracking-widest border border-gold/30 animate-pulse">Intercepting...</span>
                    </div>
                    <div class="bg-black-light p-4 border border-white/10 font-mono text-xs text-green-500 break-all h-32 overflow-y-auto custom-scrollbar">
                        > INCOMING TRANSMISSION INTERCEPTED (4096-bit RSA)<br>
                        > 0x8F 0xA2 0x33 0x99 0xFF 0xAA 0x11 0x00 0x9B 0x7C<br>
                        > 0x12 0x34 0x56 0x78 0x90 0xAB 0xCD 0xEF 0x11 0x22<br>
                        > DECRYPTION ALGORITHM INITIATED...<br>
                        > BRUTE FORCING KEYS... ETA: 12 HOURS.<br>
                        > 0x44 0x55 0x66 0x77 0x88 0x99 0xAA 0xBB 0xCC 0xDD<br>
                        > 0xEE 0xFF 0x00 0x11 0x22 0x33 0x44 0x55 0x66 0x77
                    </div>
                </div>

                <!-- 8, 9, 10. Deep Web, Dead Drops, Burn -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="bg-black-light border border-white/5 p-6 shadow-lg">
                        <h4 class="font-serif text-lg text-white mb-4"><i class="fas fa-spider text-gray-500 mr-2"></i>Deep Web Scrapes</h4>
                        <div class="space-y-3">
                            <div class="flex justify-between items-center border-b border-white/5 pb-2">
                                <span class="text-sm text-gray-400">"Project Apex"</span>
                                <span class="text-[10px] text-red-500 bg-red-500/10 px-2 py-1">45 Hits</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-sm text-gray-400">"Subject Bravo"</span>
                                <span class="text-[10px] text-green-500 bg-green-500/10 px-2 py-1">2 Hits</span>
                            </div>
                        </div>
                    </div>
                    <div class="bg-black-light border border-white/5 p-6 shadow-lg">
                        <h4 class="font-serif text-lg text-white mb-4"><i class="fas fa-box text-gray-500 mr-2"></i>Dead Drops</h4>
                        <div class="space-y-3">
                            <div class="flex justify-between items-center border-b border-white/5 pb-2">
                                <span class="text-sm text-gray-400">Location A</span>
                                <span class="text-[10px] text-gray-500">Cleared</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-sm text-gray-400">Location B</span>
                                <span class="text-[10px] text-gold">Pending</span>
                            </div>
                        </div>
                    </div>
                    <div class="bg-red-500/10 border border-red-500/50 p-6 shadow-lg text-center flex flex-col justify-center">
                        <h4 class="font-serif text-lg text-red-500 mb-2"><i class="fas fa-fire mr-2"></i>Burn Protocol</h4>
                        <p class="text-[10px] text-white uppercase tracking-widest mb-4">Wipe all local intel</p>
                        <button class="bg-red-500 text-white text-xs uppercase tracking-widest py-2 hover:bg-white hover:text-red-500 transition-colors">Execute Burn</button>
                    </div>
                </div>
            </div>
`;











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
