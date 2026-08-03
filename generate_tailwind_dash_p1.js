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
