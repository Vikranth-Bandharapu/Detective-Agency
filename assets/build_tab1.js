const fs = require('fs');

const tab1Html = `
            <!-- Panel: Dashboard -->
            <div class="dashboard-tab block" id="panel-dashboard">
                
                <!-- Section 1: Welcome/Profile Header -->
                <div class="bg-[#1a1f2e] border border-white/5 rounded-xl p-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-lg relative overflow-hidden">
                    <div class="absolute right-0 top-0 opacity-10 text-9xl -mt-10 -mr-10 text-gold pointer-events-none"><i class="fas fa-shield-alt"></i></div>
                    <div class="flex items-center gap-6 z-10">
                        <div class="w-16 h-16 rounded-full bg-gold/20 border border-gold/50 flex items-center justify-center flex-shrink-0">
                            <i class="fas fa-user-secret text-3xl text-gold"></i>
                        </div>
                        <div class="flex flex-col">
                            <h4 class="text-white text-2xl font-serif font-bold flex items-baseline gap-2">
                                Welcome, Director <span class="text-gold text-sm tracking-widest font-sans font-light">CLEARANCE: OMEGA</span>
                            </h4>
                            <span class="text-gray-400 text-sm mt-1 tracking-wider">Global Operations Command Center</span>
                        </div>
                    </div>
                    <div class="flex gap-4 z-10">
                        <div class="text-right">
                            <p class="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Current Threat Level</p>
                            <p class="text-red-500 font-bold tracking-widest border border-red-500/30 bg-red-500/10 px-3 py-1 rounded">ELEVATED</p>
                        </div>
                    </div>
                </div>

                <!-- Section 2: High-Level KPI Stat Cards -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div class="bg-[#1a1f2e] p-6 border border-white/5 rounded-lg relative overflow-hidden group hover:border-gold/30 transition-colors">
                        <div class="absolute right-0 top-0 text-gold opacity-5 text-6xl -mt-2 -mr-2 group-hover:scale-110 transition-transform"><i class="fas fa-briefcase"></i></div>
                        <span class="text-[10px] uppercase tracking-widest text-gray-400 mb-2 block">Active Operations</span>
                        <h3 class="font-serif text-4xl mb-1 text-white">142</h3>
                        <span class="text-xs text-green-400"><i class="fas fa-arrow-up mr-1"></i> +12 this week</span>
                    </div>
                    <div class="bg-[#1a1f2e] p-6 border border-white/5 rounded-lg relative overflow-hidden group hover:border-gold/30 transition-colors">
                        <div class="absolute right-0 top-0 text-gold opacity-5 text-6xl -mt-2 -mr-2 group-hover:scale-110 transition-transform"><i class="fas fa-user-secret"></i></div>
                        <span class="text-[10px] uppercase tracking-widest text-gray-400 mb-2 block">Field Operatives</span>
                        <h3 class="font-serif text-4xl mb-1 text-white">89</h3>
                        <span class="text-xs text-yellow-500"><i class="fas fa-minus mr-1"></i> 14 deployed currently</span>
                    </div>
                    <div class="bg-[#1a1f2e] p-6 border border-white/5 rounded-lg relative overflow-hidden group hover:border-gold/30 transition-colors">
                        <div class="absolute right-0 top-0 text-gold opacity-5 text-6xl -mt-2 -mr-2 group-hover:scale-110 transition-transform"><i class="fas fa-satellite-dish"></i></div>
                        <span class="text-[10px] uppercase tracking-widest text-gray-400 mb-2 block">Intel Intercepts</span>
                        <h3 class="font-serif text-4xl mb-1 text-white">4,192</h3>
                        <span class="text-xs text-red-500"><i class="fas fa-arrow-up mr-1"></i> +340 unverified</span>
                    </div>
                    <div class="bg-[#1a1f2e] p-6 border border-white/5 rounded-lg relative overflow-hidden group hover:border-gold/30 transition-colors">
                        <div class="absolute right-0 top-0 text-gold opacity-5 text-6xl -mt-2 -mr-2 group-hover:scale-110 transition-transform"><i class="fas fa-shield-alt"></i></div>
                        <span class="text-[10px] uppercase tracking-widest text-gray-400 mb-2 block">Mission Success</span>
                        <h3 class="font-serif text-4xl mb-1 text-white">98.4%</h3>
                        <span class="text-xs text-green-400"><i class="fas fa-check mr-1"></i> Above target (95%)</span>
                    </div>
                </div>

                <!-- Section 3 & 4: Operations Chart & Map Grid -->
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    
                    <!-- Section 3: Operations Chart -->
                    <div class="lg:col-span-2 bg-[#1a1f2e] border border-white/5 rounded-lg p-6">
                        <div class="flex justify-between items-center mb-6">
                            <h4 class="font-serif text-xl text-white">Operation Velocity (30 Days)</h4>
                            <select class="bg-black/50 border border-white/10 text-xs px-3 py-1 text-gray-300 rounded focus:border-gold outline-none">
                                <option>All Regions</option>
                                <option>EMEA</option>
                                <option>APAC</option>
                                <option>AMER</option>
                            </select>
                        </div>
                        <div class="h-64 flex items-end justify-between gap-1 border-b border-l border-white/10 px-2 pb-2">
                            <div class="w-full bg-blue-500/20 hover:bg-blue-500 transition-colors relative group rounded-t-sm" style="height: 30%"><div class="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100 text-white bg-black px-1 rounded">12</div></div>
                            <div class="w-full bg-blue-500/40 hover:bg-blue-500 transition-colors relative group rounded-t-sm" style="height: 45%"><div class="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100 text-white bg-black px-1 rounded">18</div></div>
                            <div class="w-full bg-blue-500/30 hover:bg-blue-500 transition-colors relative group rounded-t-sm" style="height: 40%"><div class="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100 text-white bg-black px-1 rounded">16</div></div>
                            <div class="w-full bg-blue-500/60 hover:bg-blue-500 transition-colors relative group rounded-t-sm" style="height: 65%"><div class="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100 text-white bg-black px-1 rounded">26</div></div>
                            <div class="w-full bg-blue-500/50 hover:bg-blue-500 transition-colors relative group rounded-t-sm" style="height: 55%"><div class="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100 text-white bg-black px-1 rounded">22</div></div>
                            <div class="w-full bg-gold hover:bg-gold transition-colors relative group rounded-t-sm shadow-[0_0_10px_rgba(212,175,55,0.5)]" style="height: 90%"><div class="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100 text-white bg-black px-1 rounded">36</div></div>
                            <div class="w-full bg-blue-500/70 hover:bg-blue-500 transition-colors relative group rounded-t-sm" style="height: 80%"><div class="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100 text-white bg-black px-1 rounded">32</div></div>
                        </div>
                        <div class="flex justify-between text-[9px] text-gray-500 mt-3 px-2 uppercase tracking-widest">
                            <span>W1</span><span>W2</span><span>W3</span><span>W4</span><span>W5</span><span>W6</span><span>W7</span>
                        </div>
                    </div>

                    <!-- Section 4: Global Operations Map -->
                    <div class="bg-[#1a1f2e] border border-white/5 rounded-lg p-6 relative overflow-hidden">
                        <h4 class="font-serif text-xl text-white mb-6 relative z-10">Threat Map</h4>
                        <div class="absolute inset-0 top-16 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-no-repeat bg-center bg-cover grayscale"></div>
                        <div class="relative z-10 space-y-4">
                            <div>
                                <div class="flex justify-between text-xs mb-1"><span class="text-gray-300">Eastern Europe</span><span class="text-red-500">Critical</span></div>
                                <div class="w-full h-1 bg-white/10 rounded overflow-hidden"><div class="h-full bg-red-500" style="width: 85%"></div></div>
                            </div>
                            <div>
                                <div class="flex justify-between text-xs mb-1"><span class="text-gray-300">South America</span><span class="text-yellow-500">Elevated</span></div>
                                <div class="w-full h-1 bg-white/10 rounded overflow-hidden"><div class="h-full bg-yellow-500" style="width: 60%"></div></div>
                            </div>
                            <div>
                                <div class="flex justify-between text-xs mb-1"><span class="text-gray-300">Southeast Asia</span><span class="text-yellow-500">Elevated</span></div>
                                <div class="w-full h-1 bg-white/10 rounded overflow-hidden"><div class="h-full bg-yellow-500" style="width: 45%"></div></div>
                            </div>
                            <div>
                                <div class="flex justify-between text-xs mb-1"><span class="text-gray-300">North America</span><span class="text-green-500">Stable</span></div>
                                <div class="w-full h-1 bg-white/10 rounded overflow-hidden"><div class="h-full bg-green-500" style="width: 15%"></div></div>
                            </div>
                        </div>
                        <div class="absolute bottom-4 left-0 right-0 flex justify-center z-10">
                            <span class="flex h-3 w-3 relative">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Section 5: Urgent Alerts & Section 6: Quick Actions Grid -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    
                    <!-- Section 5: Urgent Alerts -->
                    <div class="bg-[#1a1f2e] border border-white/5 rounded-lg p-6">
                        <div class="flex justify-between items-center mb-6">
                            <h4 class="font-serif text-xl text-white">Priority Alerts</h4>
                            <span class="bg-red-500/20 text-red-500 border border-red-500/30 text-[9px] px-2 py-0.5 rounded uppercase tracking-widest">3 New</span>
                        </div>
                        <div class="space-y-3">
                            <div class="flex items-start gap-3 p-3 bg-red-500/5 border-l-2 border-red-500 rounded-r">
                                <i class="fas fa-exclamation-triangle text-red-500 mt-0.5 text-sm"></i>
                                <div>
                                    <p class="text-white text-sm font-semibold">Comms Compromised</p>
                                    <p class="text-[10px] text-gray-400">Sector 7 encrypted channel intercepted. Rerouting traffic.</p>
                                </div>
                                <span class="ml-auto text-[9px] text-gray-500">2m ago</span>
                            </div>
                            <div class="flex items-start gap-3 p-3 bg-yellow-500/5 border-l-2 border-yellow-500 rounded-r">
                                <i class="fas fa-user-slash text-yellow-500 mt-0.5 text-sm"></i>
                                <div>
                                    <p class="text-white text-sm font-semibold">Operative Off-Grid</p>
                                    <p class="text-[10px] text-gray-400">Agent VANCE missed scheduled check-in window.</p>
                                </div>
                                <span class="ml-auto text-[9px] text-gray-500">14m ago</span>
                            </div>
                            <div class="flex items-start gap-3 p-3 bg-blue-500/5 border-l-2 border-blue-500 rounded-r">
                                <i class="fas fa-satellite text-blue-500 mt-0.5 text-sm"></i>
                                <div>
                                    <p class="text-white text-sm font-semibold">Satellite Repositioning</p>
                                    <p class="text-[10px] text-gray-400">Orbital asset realigned for Operation Blackout coverage.</p>
                                </div>
                                <span class="ml-auto text-[9px] text-gray-500">1h ago</span>
                            </div>
                        </div>
                    </div>

                    <!-- Section 6: Quick Actions -->
                    <div class="bg-[#1a1f2e] border border-white/5 rounded-lg p-6 flex flex-col">
                        <h4 class="font-serif text-xl text-white mb-6">Command Directives</h4>
                        <div class="grid grid-cols-2 gap-4 flex-1">
                            <button class="bg-black/50 border border-white/10 hover:border-gold hover:text-gold text-gray-300 rounded flex flex-col items-center justify-center gap-2 transition-colors py-4">
                                <i class="fas fa-plus-circle text-xl mb-1"></i>
                                <span class="text-[10px] uppercase tracking-widest">New Case File</span>
                            </button>
                            <button class="bg-black/50 border border-white/10 hover:border-red-500 hover:text-red-500 text-gray-300 rounded flex flex-col items-center justify-center gap-2 transition-colors py-4">
                                <i class="fas fa-skull text-xl mb-1"></i>
                                <span class="text-[10px] uppercase tracking-widest">Burn Protocol</span>
                            </button>
                            <button class="bg-black/50 border border-white/10 hover:border-blue-500 hover:text-blue-500 text-gray-300 rounded flex flex-col items-center justify-center gap-2 transition-colors py-4">
                                <i class="fas fa-fighter-jet text-xl mb-1"></i>
                                <span class="text-[10px] uppercase tracking-widest">Deploy Asset</span>
                            </button>
                            <button class="bg-black/50 border border-white/10 hover:border-green-500 hover:text-green-500 text-gray-300 rounded flex flex-col items-center justify-center gap-2 transition-colors py-4">
                                <i class="fas fa-lock text-xl mb-1"></i>
                                <span class="text-[10px] uppercase tracking-widest">Lockdown DB</span>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Section 7 & 8: Leaderboard & Recent Intel -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    
                    <!-- Section 7: Top Operatives Leaderboard -->
                    <div class="bg-[#1a1f2e] border border-white/5 rounded-lg p-6">
                        <h4 class="font-serif text-xl text-white mb-6">Top Field Assets</h4>
                        <div class="space-y-4">
                            <div class="flex items-center gap-4 group">
                                <span class="text-gold font-serif text-xl font-bold w-4 text-center">1</span>
                                <div class="w-10 h-10 rounded-full bg-black border border-gold overflow-hidden">
                                    <img src="assets/client_avatar_1.jpg" onerror="this.src='https://ui-avatars.com/api/?name=Phoenix&background=000&color=fff'" class="w-full h-full object-cover">
                                </div>
                                <div class="flex-1">
                                    <p class="text-white text-sm font-semibold group-hover:text-gold transition-colors">Agent Phoenix</p>
                                    <p class="text-[10px] text-gray-500 uppercase tracking-widest">Cyber Forensics</p>
                                </div>
                                <div class="text-right">
                                    <p class="text-green-400 text-sm font-mono">14 Ops</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-4 group">
                                <span class="text-gray-400 font-serif text-xl font-bold w-4 text-center">2</span>
                                <div class="w-10 h-10 rounded-full bg-black border border-white/20 overflow-hidden">
                                    <img src="assets/client_avatar_2.jpg" onerror="this.src='https://ui-avatars.com/api/?name=Ghost&background=000&color=fff'" class="w-full h-full object-cover">
                                </div>
                                <div class="flex-1">
                                    <p class="text-white text-sm font-semibold group-hover:text-gold transition-colors">Agent Ghost</p>
                                    <p class="text-[10px] text-gray-500 uppercase tracking-widest">Infiltration</p>
                                </div>
                                <div class="text-right">
                                    <p class="text-green-400 text-sm font-mono">11 Ops</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-4 group">
                                <span class="text-orange-700 font-serif text-xl font-bold w-4 text-center">3</span>
                                <div class="w-10 h-10 rounded-full bg-black border border-white/20 overflow-hidden">
                                    <img src="assets/client_avatar_3.jpg" onerror="this.src='https://ui-avatars.com/api/?name=Viper&background=000&color=fff'" class="w-full h-full object-cover">
                                </div>
                                <div class="flex-1">
                                    <p class="text-white text-sm font-semibold group-hover:text-gold transition-colors">Agent Viper</p>
                                    <p class="text-[10px] text-gray-500 uppercase tracking-widest">Extraction</p>
                                </div>
                                <div class="text-right">
                                    <p class="text-green-400 text-sm font-mono">9 Ops</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Section 8: Recent Intel List -->
                    <div class="bg-[#1a1f2e] border border-white/5 rounded-lg p-6">
                        <div class="flex justify-between items-center mb-6">
                            <h4 class="font-serif text-xl text-white">Live Intel Stream</h4>
                            <i class="fas fa-circle text-red-500 text-[8px] animate-pulse"></i>
                        </div>
                        <div class="space-y-4">
                            <div class="flex gap-4 items-start">
                                <div class="w-8 h-8 rounded bg-gray-800 border border-white/10 flex items-center justify-center shrink-0 mt-1">
                                    <i class="fas fa-file-audio text-gray-400"></i>
                                </div>
                                <div class="pb-4 border-b border-white/5 w-full">
                                    <div class="flex justify-between"><p class="text-white text-sm">Encrypted VoIP Call</p><span class="text-[9px] text-gray-500">10:42 AM</span></div>
                                    <p class="text-[10px] text-gold font-mono mt-1">SRC: 192.168.1.44</p>
                                </div>
                            </div>
                            <div class="flex gap-4 items-start">
                                <div class="w-8 h-8 rounded bg-gray-800 border border-white/10 flex items-center justify-center shrink-0 mt-1">
                                    <i class="fas fa-bitcoin text-gray-400"></i>
                                </div>
                                <div class="pb-4 border-b border-white/5 w-full">
                                    <div class="flex justify-between"><p class="text-white text-sm">Crypto Transfer Flag</p><span class="text-[9px] text-gray-500">09:15 AM</span></div>
                                    <p class="text-[10px] text-gold font-mono mt-1">AMT: 45.2 BTC</p>
                                </div>
                            </div>
                            <div class="flex gap-4 items-start">
                                <div class="w-8 h-8 rounded bg-gray-800 border border-white/10 flex items-center justify-center shrink-0 mt-1">
                                    <i class="fas fa-video text-gray-400"></i>
                                </div>
                                <div class="w-full">
                                    <div class="flex justify-between"><p class="text-white text-sm">Drone Feed Match</p><span class="text-[9px] text-gray-500">08:30 AM</span></div>
                                    <p class="text-[10px] text-gold font-mono mt-1">TGT: Shadow Syndicate</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Section 9 & 10: Budget & System Health -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    <!-- Section 9: Budget Summary -->
                    <div class="bg-[#1a1f2e] border border-white/5 rounded-lg p-6">
                        <div class="flex justify-between items-center mb-6">
                            <h4 class="font-serif text-xl text-white">Op Budget Allocation</h4>
                            <span class="text-gray-400 text-xs font-mono">Q3 2026</span>
                        </div>
                        <h2 class="text-4xl text-white font-serif mb-2">$14.2M <span class="text-sm text-gray-500 font-sans">/ $20M Total</span></h2>
                        <div class="w-full bg-black border border-white/10 h-2 rounded-full overflow-hidden mb-4">
                            <div class="bg-gold h-full" style="width: 71%"></div>
                        </div>
                        <div class="grid grid-cols-3 gap-2 text-center border-t border-white/5 pt-4">
                            <div><p class="text-[9px] uppercase tracking-widest text-gray-500">Field Ops</p><p class="text-white text-xs mt-1">$8.5M</p></div>
                            <div class="border-l border-r border-white/5"><p class="text-[9px] uppercase tracking-widest text-gray-500">R&D</p><p class="text-white text-xs mt-1">$4.2M</p></div>
                            <div><p class="text-[9px] uppercase tracking-widest text-gray-500">Bribes/Informants</p><p class="text-white text-xs mt-1">$1.5M</p></div>
                        </div>
                    </div>

                    <!-- Section 10: System Health -->
                    <div class="bg-[#1a1f2e] border border-white/5 rounded-lg p-6">
                        <h4 class="font-serif text-xl text-white mb-6">Server Infrastructure</h4>
                        <div class="grid grid-cols-2 gap-6">
                            <div>
                                <div class="flex justify-between text-xs mb-1"><span class="text-gray-400">Mainframe CPU</span><span class="text-white">42%</span></div>
                                <div class="w-full bg-black h-1.5 rounded overflow-hidden"><div class="bg-green-500 h-full" style="width: 42%"></div></div>
                            </div>
                            <div>
                                <div class="flex justify-between text-xs mb-1"><span class="text-gray-400">Encrypted Storage</span><span class="text-white">88%</span></div>
                                <div class="w-full bg-black h-1.5 rounded overflow-hidden"><div class="bg-yellow-500 h-full" style="width: 88%"></div></div>
                            </div>
                            <div>
                                <div class="flex justify-between text-xs mb-1"><span class="text-gray-400">Sat-Uplink Bandwidth</span><span class="text-white">65%</span></div>
                                <div class="w-full bg-black h-1.5 rounded overflow-hidden"><div class="bg-blue-500 h-full" style="width: 65%"></div></div>
                            </div>
                            <div>
                                <div class="flex justify-between text-xs mb-1"><span class="text-gray-400">Firewall Integrity</span><span class="text-white">100%</span></div>
                                <div class="w-full bg-black h-1.5 rounded overflow-hidden"><div class="bg-green-500 h-full" style="width: 100%"></div></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <!-- INJECT_TABS_HERE -->
`;

['client-dashboard.html', 'admin-dashboard.html'].forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace('<!-- INJECT_TABS_HERE -->', tab1Html);
    fs.writeFileSync(file, content);
    console.log('Tab 1 injected into ' + file);
});
