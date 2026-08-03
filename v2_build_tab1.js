const fs = require('fs');

const tab1Html = `
            <!-- Panel: Dashboard -->
            <div class="dashboard-tab block" id="panel-dashboard">

                <!-- 1. Profile Card -->
                <div class="bg-black-light border border-white/5 rounded-xl p-6 mb-8 flex items-center gap-6 w-full md:w-max max-w-full shadow-lg">
                    <div class="w-16 h-16 rounded-full bg-gold/20 border border-gold flex items-center justify-center flex-shrink-0">
                        <i class="fas fa-user-secret text-3xl text-gold"></i>
                    </div>
                    <div class="flex flex-col flex-1 min-w-0">
                        <h4 class="text-white text-xl md:text-2xl font-bold flex flex-wrap items-baseline gap-2 min-w-0">
                            <span class="display-user-name font-serif break-all">Director Omega</span>
                            <span class="text-gray-400 text-sm md:text-base font-light display-user-email break-all">cmd@stackly.agency</span>
                        </h4>
                        <span class="text-gold text-sm mt-1 display-user-role tracking-widest uppercase truncate block w-full">Global Command Center</span>
                    </div>
                </div>

                <!-- 2. Executive Overview Header -->
                <div class="flex flex-col md:flex-row justify-between md:items-end mb-8 gap-4">
                    <div>
                        <h3 class="font-serif text-3xl mb-2 text-white">Executive Overview</h3>
                        <p class="text-sm text-gray-400">High-level metrics and system status.</p>
                    </div>
                    <select class="bg-black border border-white/20 text-sm px-4 py-2 focus:outline-none focus:border-gold text-white">
                        <option>Last 30 Days</option>
                        <option>This Quarter</option>
                        <option>Year to Date</option>
                    </select>
                </div>

                <!-- 3. Stats Grid -->
                <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div class="bg-black-light p-6 border border-white/5 relative overflow-hidden group">
                        <div class="absolute right-0 top-0 text-gold opacity-10 text-8xl -mt-4 -mr-4 group-hover:scale-110 transition-transform"><i class="fas fa-briefcase"></i></div>
                        <span class="text-xs uppercase tracking-widest text-gray-400 mb-2 block">Active Cases</span>
                        <h3 class="font-serif text-3xl mb-2 text-white">142</h3>
                        <span class="text-xs text-green-400">+12% vs last month</span>
                    </div>
                    <div class="bg-black-light p-6 border border-white/5 relative overflow-hidden group">
                        <div class="absolute right-0 top-0 text-gold opacity-10 text-8xl -mt-4 -mr-4 group-hover:scale-110 transition-transform"><i class="fas fa-user-secret"></i></div>
                        <span class="text-xs uppercase tracking-widest text-gray-400 mb-2 block">Field Operatives</span>
                        <h3 class="font-serif text-3xl mb-2 text-white">89</h3>
                        <span class="text-xs text-green-400">14 Deployed</span>
                    </div>
                    <div class="bg-black-light p-6 border border-white/5 relative overflow-hidden group">
                        <div class="absolute right-0 top-0 text-gold opacity-10 text-8xl -mt-4 -mr-4 group-hover:scale-110 transition-transform"><i class="fas fa-satellite-dish"></i></div>
                        <span class="text-xs uppercase tracking-widest text-gray-400 mb-2 block">Intel Intercepts</span>
                        <h3 class="font-serif text-3xl mb-2 text-white">4,192</h3>
                        <span class="text-xs text-red-400">+340 Unverified</span>
                    </div>
                    <div class="bg-black-light p-6 border border-white/5 relative overflow-hidden group">
                        <div class="absolute right-0 top-0 text-gold opacity-10 text-8xl -mt-4 -mr-4 group-hover:scale-110 transition-transform"><i class="fas fa-shield-alt"></i></div>
                        <span class="text-xs uppercase tracking-widest text-gray-400 mb-2 block">Mission Success</span>
                        <h3 class="font-serif text-3xl mb-2 text-white">98.4%</h3>
                        <span class="text-xs text-green-400">Above Target</span>
                    </div>
                </div>

                <!-- 4 & 5. Chart & Top Categories Grid -->
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
                    
                    <!-- 4. Main Chart Area -->
                    <div class="lg:col-span-2 bg-black-light border border-white/5 p-6">
                        <h4 class="font-serif text-xl mb-6 text-white">Operation Velocity</h4>
                        <div class="h-64 flex items-end justify-between gap-2 border-b border-l border-white/10 px-2 pb-2">
                            <div class="w-full bg-white/10 hover:bg-gold transition-colors relative group cursor-pointer" style="height: 40%">
                                <div class="absolute -top-8 left-1/2 -translate-x-1/2 bg-black border border-white/20 text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity text-white">40 Ops</div>
                            </div>
                            <div class="w-full bg-white/10 hover:bg-gold transition-colors relative group cursor-pointer" style="height: 60%">
                                <div class="absolute -top-8 left-1/2 -translate-x-1/2 bg-black border border-white/20 text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity text-white">60 Ops</div>
                            </div>
                            <div class="w-full bg-gold transition-colors relative group cursor-pointer" style="height: 90%">
                                <div class="absolute -top-8 left-1/2 -translate-x-1/2 bg-black border border-white/20 text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity text-white">90 Ops</div>
                            </div>
                            <div class="w-full bg-white/10 hover:bg-gold transition-colors relative group cursor-pointer" style="height: 50%">
                                <div class="absolute -top-8 left-1/2 -translate-x-1/2 bg-black border border-white/20 text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity text-white">50 Ops</div>
                            </div>
                            <div class="w-full bg-white/10 hover:bg-gold transition-colors relative group cursor-pointer" style="height: 70%">
                                <div class="absolute -top-8 left-1/2 -translate-x-1/2 bg-black border border-white/20 text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity text-white">70 Ops</div>
                            </div>
                        </div>
                        <div class="flex justify-between text-xs text-gray-500 mt-4 px-2 uppercase tracking-widest">
                            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span>
                        </div>
                    </div>

                    <!-- 5. Top Categories -->
                    <div class="bg-black-light border border-white/5 p-6">
                        <h4 class="font-serif text-xl mb-6 text-white">Case Categories</h4>
                        <div class="space-y-6">
                            <div>
                                <div class="flex justify-between text-sm mb-2">
                                    <span class="text-white">Corporate Fraud</span>
                                    <span class="text-gold">45%</span>
                                </div>
                                <div class="w-full h-1 bg-white/10">
                                    <div class="h-full bg-gold" style="width: 45%"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex justify-between text-sm mb-2">
                                    <span class="text-white">Matrimonial</span>
                                    <span class="text-gold">25%</span>
                                </div>
                                <div class="w-full h-1 bg-white/10">
                                    <div class="h-full bg-gold" style="width: 25%"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex justify-between text-sm mb-2">
                                    <span class="text-white">Missing Person</span>
                                    <span class="text-gold">15%</span>
                                </div>
                                <div class="w-full h-1 bg-white/10">
                                    <div class="h-full bg-gold" style="width: 15%"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex justify-between text-sm mb-2">
                                    <span class="text-white">Cyber Forensics</span>
                                    <span class="text-gold">10%</span>
                                </div>
                                <div class="w-full h-1 bg-white/10">
                                    <div class="h-full bg-gold" style="width: 10%"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex justify-between text-sm mb-2">
                                    <span class="text-white">Surveillance</span>
                                    <span class="text-gold">5%</span>
                                </div>
                                <div class="w-full h-1 bg-white/10">
                                    <div class="h-full bg-gold" style="width: 5%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 6. System Alerts / Logs Header -->
                <div class="flex justify-between items-center mb-6">
                    <h3 class="font-serif text-2xl text-white">System Alerts</h3>
                    <button class="text-xs text-gold uppercase tracking-widest hover:text-white transition-colors">View All</button>
                </div>
                
                <!-- 7. System Alerts List -->
                <div class="bg-black-light border border-white/5 p-6 mb-12">
                    <ul class="space-y-4">
                        <li class="flex items-start gap-4 pb-4 border-b border-white/5">
                            <div class="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0"><i class="fas fa-exclamation-triangle"></i></div>
                            <div class="flex-1">
                                <div class="flex justify-between items-start">
                                    <p class="text-white text-sm font-medium">Critical Comms Breach <span class="text-gold">(Sector 7)</span></p>
                                    <span class="text-gray-500 text-xs">10 min ago</span>
                                </div>
                                <p class="text-gray-400 text-xs mt-1">Encrypted channel intercepted. Rerouting traffic.</p>
                            </div>
                        </li>
                        <li class="flex items-start gap-4 pb-4 border-b border-white/5">
                            <div class="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0"><i class="fas fa-satellite"></i></div>
                            <div class="flex-1">
                                <div class="flex justify-between items-start">
                                    <p class="text-white text-sm font-medium">Satellite Repositioning Complete</p>
                                    <span class="text-gray-500 text-xs">2 hrs ago</span>
                                </div>
                                <p class="text-gray-400 text-xs mt-1">Orbital asset realigned for Operation Blackout.</p>
                            </div>
                        </li>
                        <li class="flex items-start gap-4">
                            <div class="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 shrink-0"><i class="fas fa-check-circle"></i></div>
                            <div class="flex-1">
                                <div class="flex justify-between items-start">
                                    <p class="text-white text-sm font-medium">Database Backup Secured</p>
                                    <span class="text-gray-500 text-xs">5 hrs ago</span>
                                </div>
                                <p class="text-gray-400 text-xs mt-1">Case files synced to cold storage vault.</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <!-- 8. Logistics Map Header -->
                <div class="mb-6 mt-12">
                    <h3 class="font-serif text-3xl mb-2 text-white">Global Asset Deployment</h3>
                    <p class="text-gray-400 mb-8">Live tracking of operatives and surveillance targets across regions.</p>
                </div>

                <!-- 9. Global Logistics Grid -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div class="bg-black border border-white/5 p-6 shadow-lg relative overflow-hidden group">
                        <div class="absolute right-0 top-0 text-white/5 text-8xl -mt-4 -mr-4 group-hover:scale-110 transition-transform"><i class="fas fa-globe-europe"></i></div>
                        <h4 class="text-white font-serif text-xl mb-2 relative z-10">EMEA Region</h4>
                        <div class="flex justify-between text-xs text-gray-400 mb-4 relative z-10">
                            <span>45 Active Ops</span>
                            <span class="text-green-400">Stable</span>
                        </div>
                        <div class="w-full bg-white/10 h-1 mb-2 relative z-10"><div class="bg-green-400 h-1" style="width: 100%"></div></div>
                    </div>
                    <div class="bg-black border border-white/5 p-6 shadow-lg relative overflow-hidden group">
                        <div class="absolute right-0 top-0 text-white/5 text-8xl -mt-4 -mr-4 group-hover:scale-110 transition-transform"><i class="fas fa-globe-americas"></i></div>
                        <h4 class="text-white font-serif text-xl mb-2 relative z-10">Americas Region</h4>
                        <div class="flex justify-between text-xs text-gray-400 mb-4 relative z-10">
                            <span>82 Active Ops</span>
                            <span class="text-yellow-500">Elevated (2 Alerts)</span>
                        </div>
                        <div class="w-full bg-white/10 h-1 mb-2 relative z-10"><div class="bg-yellow-500 h-1" style="width: 85%"></div></div>
                    </div>
                    <div class="bg-black border border-white/5 p-6 shadow-lg relative overflow-hidden group border-t-2 border-t-red-500">
                        <div class="absolute right-0 top-0 text-white/5 text-8xl -mt-4 -mr-4 group-hover:scale-110 transition-transform"><i class="fas fa-globe-asia"></i></div>
                        <h4 class="text-white font-serif text-xl mb-2 relative z-10">APAC Region</h4>
                        <div class="flex justify-between text-xs text-gray-400 mb-4 relative z-10">
                            <span>12 Active Ops</span>
                            <span class="text-red-500">Critical (Agent MIA)</span>
                        </div>
                        <div class="w-full bg-white/10 h-1 mb-2 relative z-10"><div class="bg-red-500 h-1" style="width: 60%"></div></div>
                    </div>
                </div>

                <!-- 10. Fraud / Threat Queue (Identical styling to Jewellery Fraud) -->
                <div class="mb-12 mt-12">
                    <h3 class="font-serif text-3xl mb-6 text-white">Threat Detection Queue</h3>
                    <p class="text-gray-400 mb-8">Anomalies flagged by internal systems requiring manual verification.</p>
                    <div class="bg-black border border-red-500/30 p-6 shadow-lg">
                        <div class="overflow-x-auto">
                            <table class="w-full text-left text-sm text-gray-400">
                                <thead class="text-xs uppercase tracking-widest text-gray-500 border-b border-white/10">
                                    <tr>
                                        <th class="pb-4 font-normal">Threat ID</th>
                                        <th class="pb-4 font-normal">System / Source</th>
                                        <th class="pb-4 font-normal">Risk Level</th>
                                        <th class="pb-4 font-normal text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-white/5">
                                    <tr>
                                        <td class="py-4 text-white font-medium">#TGT-092</td>
                                        <td class="py-4">Dark Web Scraper</td>
                                        <td class="py-4"><span class="text-red-500">Critical</span></td>
                                        <td class="py-4 text-right">
                                            <button class="bg-red-500/20 text-red-500 border border-red-500 hover:bg-red-500 hover:text-white px-4 py-1 rounded text-xs transition-colors">Review</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="py-4 text-white font-medium">#TGT-091</td>
                                        <td class="py-4">Database Log Auth</td>
                                        <td class="py-4"><span class="text-yellow-500">Elevated</span></td>
                                        <td class="py-4 text-right">
                                            <button class="bg-red-500/20 text-red-500 border border-red-500 hover:bg-red-500 hover:text-white px-4 py-1 rounded text-xs transition-colors">Review</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
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
