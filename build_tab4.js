const fs = require('fs');

const tab4Html = `
            <!-- Panel: Operatives -->
            <div class="dashboard-tab hidden" id="panel-operatives">
                
                <!-- Section 1: Header & Stats -->
                <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4 border-b border-white/10 pb-6">
                    <div>
                        <h3 class="font-serif text-3xl mb-2 text-white">Agency Roster</h3>
                        <p class="text-sm text-gray-400">Manage field operatives, assets, and cover identities.</p>
                    </div>
                    <div class="flex gap-4">
                        <div class="text-center px-4 border-r border-white/10">
                            <p class="text-gold font-serif text-2xl">89</p>
                            <p class="text-[9px] uppercase tracking-widest text-gray-500">Total Assets</p>
                        </div>
                        <div class="text-center px-4 border-r border-white/10">
                            <p class="text-green-500 font-serif text-2xl">14</p>
                            <p class="text-[9px] uppercase tracking-widest text-gray-500">Deployed</p>
                        </div>
                        <div class="text-center pl-4">
                            <p class="text-red-500 font-serif text-2xl">2</p>
                            <p class="text-[9px] uppercase tracking-widest text-gray-500">M.I.A.</p>
                        </div>
                    </div>
                </div>

                <!-- Section 2 & 3: Status Cards & Deployment Map -->
                <div class="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
                    
                    <!-- Section 2: Operative Status Cards -->
                    <div class="xl:col-span-1 space-y-4">
                        <div class="bg-black/50 border border-green-500/30 p-4 rounded-lg flex items-center gap-4 relative overflow-hidden group">
                            <div class="absolute inset-0 bg-green-500/5 group-hover:bg-green-500/10 transition-colors"></div>
                            <img src="assets/client_avatar_1.jpg" class="w-12 h-12 rounded-full border-2 border-green-500 z-10">
                            <div class="z-10">
                                <h5 class="text-white font-serif">Phoenix <span class="text-[10px] bg-green-500/20 text-green-500 px-1 ml-2 rounded">DEPLOYED</span></h5>
                                <p class="text-[10px] text-gray-400 mt-1">Loc: Geneva, Switzerland</p>
                            </div>
                        </div>
                        <div class="bg-black/50 border border-yellow-500/30 p-4 rounded-lg flex items-center gap-4 relative overflow-hidden group">
                            <div class="absolute inset-0 bg-yellow-500/5 group-hover:bg-yellow-500/10 transition-colors"></div>
                            <img src="assets/client_avatar_2.jpg" class="w-12 h-12 rounded-full border-2 border-yellow-500 z-10">
                            <div class="z-10">
                                <h5 class="text-white font-serif">Ghost <span class="text-[10px] bg-yellow-500/20 text-yellow-500 px-1 ml-2 rounded">STANDBY</span></h5>
                                <p class="text-[10px] text-gray-400 mt-1">Loc: London, UK</p>
                            </div>
                        </div>
                        <div class="bg-black/50 border border-red-500/30 p-4 rounded-lg flex items-center gap-4 relative overflow-hidden group">
                            <div class="absolute inset-0 bg-red-500/5 group-hover:bg-red-500/10 transition-colors"></div>
                            <img src="assets/client_avatar_3.jpg" class="w-12 h-12 rounded-full border-2 border-red-500 z-10 grayscale">
                            <div class="z-10">
                                <h5 class="text-white font-serif">Viper <span class="text-[10px] bg-red-500/20 text-red-500 px-1 ml-2 rounded">M.I.A</span></h5>
                                <p class="text-[10px] text-gray-400 mt-1">Loc: Last seen Moscow (48h ago)</p>
                            </div>
                        </div>
                        <button class="w-full bg-[#1a1f2e] border border-white/10 text-xs text-gray-400 py-3 rounded hover:text-white hover:border-gold transition-colors">View All Operatives</button>
                    </div>

                    <!-- Section 3: Global Deployment Map (Grid style) -->
                    <div class="xl:col-span-2 bg-[#1a1f2e] border border-white/5 rounded-lg p-6 flex flex-col">
                        <h4 class="font-serif text-xl text-white mb-6">Asset Coordinates</h4>
                        <div class="flex-1 bg-black/50 border border-white/10 rounded relative overflow-hidden flex items-center justify-center p-4">
                            <!-- Tactical Grid Background -->
                            <div class="absolute inset-0" style="background-image: linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px); background-size: 20px 20px;"></div>
                            
                            <!-- Mock Data Points -->
                            <div class="absolute top-[30%] left-[40%] text-green-500 animate-pulse"><i class="fas fa-crosshairs"></i><span class="absolute -top-4 -left-2 text-[8px] bg-black px-1 border border-green-500">EU-1</span></div>
                            <div class="absolute top-[45%] left-[20%] text-green-500"><i class="fas fa-crosshairs"></i><span class="absolute -top-4 -left-2 text-[8px] bg-black px-1 border border-green-500">NA-4</span></div>
                            <div class="absolute top-[60%] left-[70%] text-yellow-500"><i class="fas fa-crosshairs"></i><span class="absolute -top-4 -left-2 text-[8px] bg-black px-1 border border-yellow-500">AS-2</span></div>
                            <div class="absolute top-[20%] left-[60%] text-red-500 animate-ping"><i class="fas fa-exclamation-triangle"></i><span class="absolute -top-4 -left-2 text-[8px] bg-black px-1 border border-red-500">RU-1</span></div>
                            
                            <div class="z-10 text-center pointer-events-none opacity-20">
                                <i class="fas fa-globe-americas text-9xl"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Section 4 & 5: Skills Matrix & Success Rates -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    
                    <!-- Section 4: Skills Matrix -->
                    <div class="bg-[#1a1f2e] border border-white/5 rounded-lg p-6">
                        <h4 class="font-serif text-xl text-white mb-6">Specialization Matrix</h4>
                        <div class="space-y-4 text-xs">
                            <div class="flex items-center gap-4">
                                <span class="w-24 text-gray-400">Infiltration</span>
                                <div class="flex-1 flex gap-1">
                                    <div class="h-4 flex-1 bg-gold rounded-sm"></div><div class="h-4 flex-1 bg-gold rounded-sm"></div><div class="h-4 flex-1 bg-gold rounded-sm"></div><div class="h-4 flex-1 bg-gold rounded-sm"></div><div class="h-4 flex-1 bg-white/10 rounded-sm"></div>
                                </div>
                            </div>
                            <div class="flex items-center gap-4">
                                <span class="w-24 text-gray-400">Cyber Sec</span>
                                <div class="flex-1 flex gap-1">
                                    <div class="h-4 flex-1 bg-blue-500 rounded-sm"></div><div class="h-4 flex-1 bg-blue-500 rounded-sm"></div><div class="h-4 flex-1 bg-blue-500 rounded-sm"></div><div class="h-4 flex-1 bg-white/10 rounded-sm"></div><div class="h-4 flex-1 bg-white/10 rounded-sm"></div>
                                </div>
                            </div>
                            <div class="flex items-center gap-4">
                                <span class="w-24 text-gray-400">Interrogation</span>
                                <div class="flex-1 flex gap-1">
                                    <div class="h-4 flex-1 bg-red-500 rounded-sm"></div><div class="h-4 flex-1 bg-red-500 rounded-sm"></div><div class="h-4 flex-1 bg-white/10 rounded-sm"></div><div class="h-4 flex-1 bg-white/10 rounded-sm"></div><div class="h-4 flex-1 bg-white/10 rounded-sm"></div>
                                </div>
                            </div>
                            <div class="flex items-center gap-4">
                                <span class="w-24 text-gray-400">Surveillance</span>
                                <div class="flex-1 flex gap-1">
                                    <div class="h-4 flex-1 bg-green-500 rounded-sm"></div><div class="h-4 flex-1 bg-green-500 rounded-sm"></div><div class="h-4 flex-1 bg-green-500 rounded-sm"></div><div class="h-4 flex-1 bg-green-500 rounded-sm"></div><div class="h-4 flex-1 bg-green-500 rounded-sm"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Section 5: Success Rates -->
                    <div class="bg-[#1a1f2e] border border-white/5 rounded-lg p-6">
                        <h4 class="font-serif text-xl text-white mb-6">Mission Success Index</h4>
                        <div class="flex items-end gap-2 h-32 border-b border-l border-white/10 p-2 relative">
                            <div class="flex-1 bg-white/10 hover:bg-gold transition-colors relative group rounded-t-sm" style="height: 85%"><div class="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100 text-white bg-black px-1 border border-white/20">85%</div></div>
                            <div class="flex-1 bg-white/10 hover:bg-gold transition-colors relative group rounded-t-sm" style="height: 92%"><div class="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100 text-white bg-black px-1 border border-white/20">92%</div></div>
                            <div class="flex-1 bg-white/10 hover:bg-gold transition-colors relative group rounded-t-sm" style="height: 78%"><div class="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100 text-white bg-black px-1 border border-white/20">78%</div></div>
                            <div class="flex-1 bg-white/10 hover:bg-gold transition-colors relative group rounded-t-sm" style="height: 95%"><div class="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100 text-white bg-black px-1 border border-white/20">95%</div></div>
                            <div class="flex-1 bg-gold hover:bg-gold transition-colors relative group rounded-t-sm shadow-[0_0_10px_rgba(212,175,55,0.5)]" style="height: 98%"><div class="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100 text-white bg-black px-1 border border-white/20">98%</div></div>
                        </div>
                        <div class="flex justify-between text-[9px] uppercase tracking-widest text-gray-500 mt-2 px-2">
                            <span>2022</span><span>2023</span><span>2024</span><span>2025</span><span class="text-gold">YTD</span>
                        </div>
                    </div>
                </div>

                <!-- Section 6, 7, 8: Requisitions, Cover IDs, Training -->
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    
                    <!-- Section 6: Requisition Log -->
                    <div class="bg-[#1a1f2e] border border-white/5 rounded-lg p-5">
                        <h4 class="font-serif text-white mb-4">Gear Requisitions</h4>
                        <div class="space-y-3">
                            <div class="flex justify-between items-center text-xs border-b border-white/5 pb-2">
                                <div><p class="text-white">Encrypted Sat-Phone</p><p class="text-[9px] text-gray-500">Agent Phoenix</p></div>
                                <span class="bg-green-500/20 text-green-500 px-1 py-0.5 rounded">APPROVED</span>
                            </div>
                            <div class="flex justify-between items-center text-xs border-b border-white/5 pb-2">
                                <div><p class="text-white">Micro-Drone Type B</p><p class="text-[9px] text-gray-500">Agent Ghost</p></div>
                                <span class="bg-yellow-500/20 text-yellow-500 px-1 py-0.5 rounded">PENDING</span>
                            </div>
                            <div class="flex justify-between items-center text-xs">
                                <div><p class="text-white">Class 4 Body Armor</p><p class="text-[9px] text-gray-500">Agent Viper</p></div>
                                <span class="bg-red-500/20 text-red-500 px-1 py-0.5 rounded">DENIED</span>
                            </div>
                        </div>
                    </div>

                    <!-- Section 7: Cover Identities -->
                    <div class="bg-[#1a1f2e] border border-white/5 rounded-lg p-5">
                        <h4 class="font-serif text-white mb-4">Cover Identities DB</h4>
                        <div class="bg-black/50 p-3 border border-white/10 rounded mb-3">
                            <div class="flex justify-between items-center mb-2">
                                <span class="text-gold font-mono text-xs">ID: MARKUS_VON_H</span>
                                <i class="fas fa-passport text-gray-500"></i>
                            </div>
                            <p class="text-[10px] text-gray-400">Role: Swiss Banker</p>
                            <p class="text-[10px] text-gray-400">Assigned To: Phoenix</p>
                            <p class="text-[10px] text-green-500 mt-1">Status: Active</p>
                        </div>
                        <button class="w-full text-center text-xs text-gold border border-gold/30 hover:bg-gold/10 py-2 transition-colors">Generate New Identity</button>
                    </div>

                    <!-- Section 8: Training Status -->
                    <div class="bg-[#1a1f2e] border border-white/5 rounded-lg p-5">
                        <h4 class="font-serif text-white mb-4">Certifications</h4>
                        <ul class="text-xs space-y-4">
                            <li>
                                <div class="flex justify-between mb-1"><span class="text-gray-300">Advanced Evasion</span><span class="text-white">92%</span></div>
                                <div class="w-full bg-black h-1 rounded"><div class="bg-gold h-full" style="width: 92%"></div></div>
                            </li>
                            <li>
                                <div class="flex justify-between mb-1"><span class="text-gray-300">Cryptography Lvl 3</span><span class="text-white">45%</span></div>
                                <div class="w-full bg-black h-1 rounded"><div class="bg-blue-500 h-full" style="width: 45%"></div></div>
                            </li>
                            <li>
                                <div class="flex justify-between mb-1"><span class="text-gray-300">CQB Tactics</span><span class="text-white">100%</span></div>
                                <div class="w-full bg-black h-1 rounded"><div class="bg-green-500 h-full" style="width: 100%"></div></div>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Section 9 & 10: Field Reports & Extraction -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    <!-- Section 9: Field Report Form -->
                    <div class="bg-[#1a1f2e] border border-white/5 rounded-lg p-6">
                        <h4 class="font-serif text-xl text-white mb-6">Log Field Report</h4>
                        <form class="space-y-4">
                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <label class="text-[10px] text-gray-500 uppercase tracking-widest block mb-1">Operative ID</label>
                                    <input type="text" class="w-full bg-black/50 border border-white/10 text-xs px-3 py-2 text-white rounded focus:border-gold outline-none" placeholder="OP-XXXX">
                                </div>
                                <div>
                                    <label class="text-[10px] text-gray-500 uppercase tracking-widest block mb-1">Mission Code</label>
                                    <input type="text" class="w-full bg-black/50 border border-white/10 text-xs px-3 py-2 text-white rounded focus:border-gold outline-none" placeholder="Operation...">
                                </div>
                            </div>
                            <div>
                                <label class="text-[10px] text-gray-500 uppercase tracking-widest block mb-1">SitRep (Situation Report)</label>
                                <textarea class="w-full bg-black/50 border border-white/10 text-xs px-3 py-2 text-white rounded focus:border-gold outline-none h-24 resize-none" placeholder="Enter encrypted report here..."></textarea>
                            </div>
                            <button type="button" class="bg-gold text-black px-4 py-2 text-xs uppercase tracking-widest rounded hover:bg-white transition-colors font-semibold">Submit Encrypted</button>
                        </form>
                    </div>

                    <!-- Section 10: Extraction Protocol -->
                    <div class="bg-red-950/20 border border-red-500/30 rounded-lg p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
                        <div class="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(239,68,68,0.05)_10px,rgba(239,68,68,0.05)_20px)]"></div>
                        <i class="fas fa-helicopter text-4xl text-red-500 mb-4 relative z-10"></i>
                        <h4 class="font-serif text-2xl text-red-500 mb-2 relative z-10">Emergency Extraction</h4>
                        <p class="text-xs text-gray-400 mb-6 relative z-10 max-w-xs">Initiate immediate burn protocol and deploy extraction team to last known coordinates.</p>
                        <button class="bg-red-600 hover:bg-red-500 text-white px-8 py-3 uppercase tracking-widest rounded transition-colors font-bold relative z-10 shadow-[0_0_15px_rgba(220,38,38,0.5)]">Initiate Protocol</button>
                    </div>
                </div>

            </div>
            <!-- INJECT_TABS_HERE -->
`;

['client-dashboard.html', 'admin-dashboard.html'].forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace('<!-- INJECT_TABS_HERE -->', tab4Html);
    fs.writeFileSync(file, content);
    console.log('Tab 4 injected into ' + file);
});
