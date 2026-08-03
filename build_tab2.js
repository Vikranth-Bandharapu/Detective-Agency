const fs = require('fs');

const tab2Html = `
            <!-- Panel: Cases -->
            <div class="dashboard-tab hidden" id="panel-cases">
                
                <!-- Section 1: Header & Filters -->
                <div class="flex flex-col md:flex-row justify-between md:items-end mb-8 gap-4 border-b border-white/10 pb-6">
                    <div>
                        <h3 class="font-serif text-3xl mb-2 text-white">Active Case Files</h3>
                        <p class="text-sm text-gray-400">Classified ongoing investigations and suspect tracking.</p>
                    </div>
                    <div class="flex gap-4">
                        <div class="relative">
                            <i class="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"></i>
                            <input type="text" placeholder="Search Case ID..." class="bg-black/50 border border-white/10 text-sm pl-10 pr-4 py-2 text-white focus:outline-none focus:border-gold rounded w-64 transition-colors">
                        </div>
                        <button class="bg-gold hover:bg-white text-black px-4 py-2 text-xs uppercase tracking-widest rounded transition-colors font-semibold"><i class="fas fa-plus mr-2"></i>New Case</button>
                    </div>
                </div>

                <!-- Section 2: Priority Cases Kanban (3 columns) -->
                <div class="mb-8">
                    <h4 class="font-serif text-xl text-white mb-4">Priority Board</h4>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <!-- Column 1: Critical -->
                        <div class="bg-[#1a1f2e] border border-red-500/30 rounded-lg p-4">
                            <h5 class="text-red-500 text-[10px] uppercase tracking-widest border-b border-red-500/20 pb-2 mb-4 font-bold flex justify-between">Critical Action <span>2</span></h5>
                            <div class="space-y-4">
                                <div class="bg-black border border-white/10 p-3 rounded hover:border-gold transition-colors cursor-pointer">
                                    <div class="flex justify-between text-xs text-gray-400 mb-2"><span>#CASE-001</span><span class="text-red-500">2h left</span></div>
                                    <h6 class="text-white text-sm font-serif mb-2">Shadow Ledger</h6>
                                    <div class="flex justify-between items-center"><img src="assets/client_avatar_1.jpg" class="w-6 h-6 rounded-full"><span class="bg-red-500/20 text-red-500 text-[8px] px-2 py-0.5 rounded">Corporate Fraud</span></div>
                                </div>
                                <div class="bg-black border border-white/10 p-3 rounded hover:border-gold transition-colors cursor-pointer">
                                    <div class="flex justify-between text-xs text-gray-400 mb-2"><span>#CASE-007</span><span class="text-red-500">Expired</span></div>
                                    <h6 class="text-white text-sm font-serif mb-2">Neon Syndicate</h6>
                                    <div class="flex justify-between items-center"><img src="assets/client_avatar_2.jpg" class="w-6 h-6 rounded-full"><span class="bg-red-500/20 text-red-500 text-[8px] px-2 py-0.5 rounded">Cyber Forensics</span></div>
                                </div>
                            </div>
                        </div>
                        <!-- Column 2: Surveillance -->
                        <div class="bg-[#1a1f2e] border border-yellow-500/30 rounded-lg p-4">
                            <h5 class="text-yellow-500 text-[10px] uppercase tracking-widest border-b border-yellow-500/20 pb-2 mb-4 font-bold flex justify-between">Active Surveillance <span>1</span></h5>
                            <div class="space-y-4">
                                <div class="bg-black border border-white/10 p-3 rounded hover:border-gold transition-colors cursor-pointer">
                                    <div class="flex justify-between text-xs text-gray-400 mb-2"><span>#CASE-002</span><span class="text-yellow-500">Live</span></div>
                                    <h6 class="text-white text-sm font-serif mb-2">V. Sterling</h6>
                                    <div class="flex justify-between items-center"><img src="assets/client_avatar_3.jpg" class="w-6 h-6 rounded-full"><span class="bg-yellow-500/20 text-yellow-500 text-[8px] px-2 py-0.5 rounded">Matrimonial</span></div>
                                </div>
                            </div>
                        </div>
                        <!-- Column 3: Cold / Pending -->
                        <div class="bg-[#1a1f2e] border border-blue-500/30 rounded-lg p-4">
                            <h5 class="text-blue-500 text-[10px] uppercase tracking-widest border-b border-blue-500/20 pb-2 mb-4 font-bold flex justify-between">Cold / Pending <span>1</span></h5>
                            <div class="space-y-4">
                                <div class="bg-black border border-white/10 p-3 rounded opacity-75 hover:opacity-100 hover:border-gold transition-all cursor-pointer">
                                    <div class="flex justify-between text-xs text-gray-400 mb-2"><span>#CASE-003</span><span class="text-blue-500">Stalled</span></div>
                                    <h6 class="text-white text-sm font-serif mb-2">Project Echo</h6>
                                    <div class="flex justify-between items-center"><div class="text-[10px] text-gray-500">Unassigned</div><span class="bg-blue-500/20 text-blue-500 text-[8px] px-2 py-0.5 rounded">Missing Person</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Section 3 & 4: Data Table & Chart -->
                <div class="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
                    <!-- Section 3: Data Table -->
                    <div class="xl:col-span-2 bg-[#1a1f2e] border border-white/5 rounded-lg p-6 overflow-hidden">
                        <div class="flex justify-between items-center mb-6">
                            <h4 class="font-serif text-xl text-white">Comprehensive Case Directory</h4>
                            <button class="text-xs text-gold hover:text-white transition-colors uppercase tracking-widest">Export CSV</button>
                        </div>
                        <div class="overflow-x-auto">
                            <table class="w-full text-left text-sm whitespace-nowrap">
                                <thead class="text-[10px] uppercase tracking-widest text-gray-500 border-b border-white/10">
                                    <tr>
                                        <th class="pb-3 px-4 font-normal">Case ID</th>
                                        <th class="pb-3 px-4 font-normal">Target / Title</th>
                                        <th class="pb-3 px-4 font-normal">Type</th>
                                        <th class="pb-3 px-4 font-normal">Lead Operative</th>
                                        <th class="pb-3 px-4 font-normal">Status</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-white/5 text-gray-300">
                                    <tr class="hover:bg-white/5 transition-colors cursor-pointer">
                                        <td class="py-3 px-4 font-mono text-gold">#CASE-001</td>
                                        <td class="py-3 px-4 text-white font-serif">Shadow Ledger</td>
                                        <td class="py-3 px-4 text-xs">Corporate Fraud</td>
                                        <td class="py-3 px-4 flex items-center gap-2"><img src="assets/client_avatar_1.jpg" class="w-6 h-6 rounded-full"> Phoenix</td>
                                        <td class="py-3 px-4"><span class="text-red-500 text-[10px] uppercase tracking-widest">Critical</span></td>
                                    </tr>
                                    <tr class="hover:bg-white/5 transition-colors cursor-pointer">
                                        <td class="py-3 px-4 font-mono text-gold">#CASE-002</td>
                                        <td class="py-3 px-4 text-white font-serif">V. Sterling</td>
                                        <td class="py-3 px-4 text-xs">Matrimonial</td>
                                        <td class="py-3 px-4 flex items-center gap-2"><img src="assets/client_avatar_2.jpg" class="w-6 h-6 rounded-full"> Ghost</td>
                                        <td class="py-3 px-4"><span class="text-yellow-500 text-[10px] uppercase tracking-widest">Surveillance</span></td>
                                    </tr>
                                    <tr class="hover:bg-white/5 transition-colors cursor-pointer">
                                        <td class="py-3 px-4 font-mono text-gold">#CASE-004</td>
                                        <td class="py-3 px-4 text-white font-serif">Crimson Tide</td>
                                        <td class="py-3 px-4 text-xs">Cyber Forensics</td>
                                        <td class="py-3 px-4 flex items-center gap-2"><img src="assets/client_avatar_3.jpg" class="w-6 h-6 rounded-full"> Viper</td>
                                        <td class="py-3 px-4"><span class="text-green-500 text-[10px] uppercase tracking-widest">Active</span></td>
                                    </tr>
                                    <tr class="hover:bg-white/5 transition-colors cursor-pointer">
                                        <td class="py-3 px-4 font-mono text-gray-500">#CASE-006</td>
                                        <td class="py-3 px-4 text-gray-400 font-serif">Operation Overlord</td>
                                        <td class="py-3 px-4 text-xs">Surveillance</td>
                                        <td class="py-3 px-4 text-xs text-gray-600">Concluded</td>
                                        <td class="py-3 px-4"><span class="text-gray-500 text-[10px] uppercase tracking-widest">Closed</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <!-- Section 4: Donut Chart / Distribution -->
                    <div class="bg-[#1a1f2e] border border-white/5 rounded-lg p-6 flex flex-col">
                        <h4 class="font-serif text-xl text-white mb-6">Case Distribution</h4>
                        <div class="flex-1 flex flex-col justify-center items-center relative">
                            <!-- CSS pure donut mock -->
                            <div class="w-40 h-40 rounded-full border-[12px] border-black relative overflow-hidden" style="background: conic-gradient(#ef4444 0% 35%, #eab308 35% 60%, #3b82f6 60% 85%, #22c55e 85% 100%);">
                                <div class="absolute inset-0 m-4 bg-[#1a1f2e] rounded-full flex items-center justify-center flex-col">
                                    <span class="text-white text-2xl font-serif">142</span>
                                    <span class="text-[8px] uppercase tracking-widest text-gray-500">Total Cases</span>
                                </div>
                            </div>
                            <div class="w-full mt-6 space-y-2 text-xs">
                                <div class="flex justify-between items-center"><span class="flex items-center gap-2"><div class="w-2 h-2 bg-red-500 rounded-full"></div> Corporate Fraud</span> <span class="text-white">35%</span></div>
                                <div class="flex justify-between items-center"><span class="flex items-center gap-2"><div class="w-2 h-2 bg-yellow-500 rounded-full"></div> Matrimonial</span> <span class="text-white">25%</span></div>
                                <div class="flex justify-between items-center"><span class="flex items-center gap-2"><div class="w-2 h-2 bg-blue-500 rounded-full"></div> Missing Person</span> <span class="text-white">25%</span></div>
                                <div class="flex justify-between items-center"><span class="flex items-center gap-2"><div class="w-2 h-2 bg-green-500 rounded-full"></div> Cyber Forensics</span> <span class="text-white">15%</span></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Section 5 & 6: Timeline & Resource Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    
                    <!-- Section 5: Timeline -->
                    <div class="bg-[#1a1f2e] border border-white/5 rounded-lg p-6">
                        <h4 class="font-serif text-xl text-white mb-6">Recent Case Updates</h4>
                        <div class="relative border-l border-white/10 ml-3 space-y-6">
                            <div class="relative pl-6">
                                <div class="absolute w-2 h-2 bg-gold rounded-full -left-[4.5px] top-1.5 border border-black shadow-[0_0_5px_#D4AF37]"></div>
                                <p class="text-xs text-gray-500 mb-1">Today, 14:32</p>
                                <p class="text-white text-sm font-semibold">Evidence Uploaded <span class="text-gold font-mono ml-2">#CASE-001</span></p>
                                <p class="text-xs text-gray-400 mt-1">Agent Phoenix uploaded 3 audio recordings to evidence locker.</p>
                            </div>
                            <div class="relative pl-6">
                                <div class="absolute w-2 h-2 bg-white/30 rounded-full -left-[4.5px] top-1.5 border border-black"></div>
                                <p class="text-xs text-gray-500 mb-1">Today, 09:15</p>
                                <p class="text-white text-sm font-semibold">Status Changed <span class="text-gold font-mono ml-2">#CASE-007</span></p>
                                <p class="text-xs text-gray-400 mt-1">Case escalated to CRITICAL by Director.</p>
                            </div>
                            <div class="relative pl-6">
                                <div class="absolute w-2 h-2 bg-white/30 rounded-full -left-[4.5px] top-1.5 border border-black"></div>
                                <p class="text-xs text-gray-500 mb-1">Yesterday, 18:00</p>
                                <p class="text-white text-sm font-semibold">Warrant Issued <span class="text-gold font-mono ml-2">#CASE-004</span></p>
                                <p class="text-xs text-gray-400 mt-1">Court order #992-A secured for digital wiretap.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Section 6: Resource Grid -->
                    <div class="bg-[#1a1f2e] border border-white/5 rounded-lg p-6">
                        <h4 class="font-serif text-xl text-white mb-6">Resource Allocation</h4>
                        <div class="space-y-4">
                            <div>
                                <div class="flex justify-between text-xs mb-1"><span class="text-gray-300">Field Operative Hours</span><span class="text-white">1,240 / 2,000</span></div>
                                <div class="w-full bg-black h-2 border border-white/10 rounded overflow-hidden"><div class="bg-blue-500 h-full" style="width: 62%"></div></div>
                            </div>
                            <div>
                                <div class="flex justify-between text-xs mb-1"><span class="text-gray-300">Surveillance Tech (Drones/Cameras)</span><span class="text-white">88% Deployed</span></div>
                                <div class="w-full bg-black h-2 border border-white/10 rounded overflow-hidden"><div class="bg-yellow-500 h-full" style="width: 88%"></div></div>
                            </div>
                            <div>
                                <div class="flex justify-between text-xs mb-1"><span class="text-gray-300">Forensic Lab Capacity</span><span class="text-white">95%</span></div>
                                <div class="w-full bg-black h-2 border border-white/10 rounded overflow-hidden"><div class="bg-red-500 h-full" style="width: 95%"></div></div>
                            </div>
                            <div>
                                <div class="flex justify-between text-xs mb-1"><span class="text-gray-300">Case Funds Disbursed</span><span class="text-white">$4.2M / $5M</span></div>
                                <div class="w-full bg-black h-2 border border-white/10 rounded overflow-hidden"><div class="bg-green-500 h-full" style="width: 84%"></div></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Section 7, 8, 9, 10: Mini Widgets Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    
                    <!-- Section 7: Solved Cases Success -->
                    <div class="bg-[#1a1f2e] border border-white/5 rounded-lg p-5 flex flex-col justify-center items-center text-center">
                        <i class="fas fa-gavel text-3xl text-gold mb-3"></i>
                        <h4 class="text-2xl text-white font-serif mb-1">84%</h4>
                        <p class="text-[9px] uppercase tracking-widest text-gray-500">Conviction Rate</p>
                        <p class="text-xs text-green-400 mt-2">Highest in 3 years</p>
                    </div>

                    <!-- Section 8: Evidence Queue -->
                    <div class="bg-[#1a1f2e] border border-white/5 rounded-lg p-5">
                        <h4 class="font-serif text-white mb-4">Evidence Queue</h4>
                        <ul class="text-xs space-y-3">
                            <li class="flex justify-between text-gray-400"><span>Hard Drive Decryption</span><span class="text-yellow-500">In Progress</span></li>
                            <li class="flex justify-between text-gray-400"><span>DNA Match</span><span class="text-green-500">Complete</span></li>
                            <li class="flex justify-between text-gray-400"><span>Ballistics Report</span><span class="text-gray-600">Pending</span></li>
                        </ul>
                    </div>

                    <!-- Section 9: Suspect Radar -->
                    <div class="bg-[#1a1f2e] border border-white/5 rounded-lg p-5 relative overflow-hidden">
                        <div class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_transparent_0,_#10b981_100%)] flex items-center justify-center">
                            <div class="w-32 h-32 border border-green-500 rounded-full animate-ping"></div>
                        </div>
                        <div class="relative z-10 text-center flex flex-col items-center justify-center h-full">
                            <i class="fas fa-crosshairs text-2xl text-green-500 mb-2"></i>
                            <h4 class="text-white font-serif mb-1">24 Active Targets</h4>
                            <p class="text-[9px] uppercase tracking-widest text-gray-400">Under global surveillance</p>
                        </div>
                    </div>

                    <!-- Section 10: Case Archive Search -->
                    <div class="bg-[#1a1f2e] border border-white/5 rounded-lg p-5 flex flex-col justify-center">
                        <h4 class="font-serif text-white mb-4">Deep Archive Search</h4>
                        <p class="text-[10px] text-gray-500 mb-4">Access closed cases from 1984-2025.</p>
                        <div class="relative">
                            <input type="text" placeholder="Search archive..." class="w-full bg-black border border-white/10 text-xs px-3 py-2 text-white focus:outline-none focus:border-gold rounded transition-colors">
                            <button class="absolute right-0 top-0 h-full px-3 text-gold hover:text-white"><i class="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>

            </div>
            <!-- INJECT_TABS_HERE -->
`;

['client-dashboard.html', 'admin-dashboard.html'].forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace('<!-- INJECT_TABS_HERE -->', tab2Html);
    fs.writeFileSync(file, content);
    console.log('Tab 2 injected into ' + file);
});
