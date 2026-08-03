const fs = require('fs');

const tab2Html = `
            <!-- Panel: Cases -->
            <div class="dashboard-tab hidden" id="panel-cases">
                
                <!-- 1. Cases Header -->
                <div class="flex flex-col md:flex-row justify-between md:items-end mb-8 gap-4">
                    <div>
                        <h3 class="font-serif text-3xl mb-2 text-white">Active Case Files</h3>
                        <p class="text-sm text-gray-400">Manage and track all ongoing investigations.</p>
                    </div>
                    <div class="flex gap-4">
                        <button class="bg-gold text-black px-6 py-2 uppercase tracking-widest text-xs hover:bg-white transition-colors">Export Cases</button>
                    </div>
                </div>

                <!-- 2. Filters -->
                <div class="bg-black-light border border-white/5 p-4 mb-6 flex flex-wrap gap-4 items-center">
                    <div class="flex-1 min-w-[200px]">
                        <div class="relative">
                            <i class="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"></i>
                            <input type="text" placeholder="Search by Case ID or Target Name..." class="w-full bg-black border border-white/20 text-sm pl-10 pr-4 py-2 focus:outline-none focus:border-gold text-white">
                        </div>
                    </div>
                    <select class="bg-black border border-white/20 text-sm px-4 py-2 focus:outline-none focus:border-gold text-white min-w-[150px]">
                        <option>All Types</option>
                        <option>Corporate Fraud</option>
                        <option>Matrimonial</option>
                        <option>Missing Person</option>
                        <option>Cyber Forensics</option>
                    </select>
                    <select class="bg-black border border-white/20 text-sm px-4 py-2 focus:outline-none focus:border-gold text-white min-w-[150px]">
                        <option>All Statuses</option>
                        <option>Critical</option>
                        <option>Active Surveillance</option>
                        <option>Cold/Pending</option>
                    </select>
                </div>

                <!-- 3. Active Cases Data Table -->
                <div class="bg-black-light border border-white/5 p-6 mb-12">
                    <div class="overflow-x-auto">
                        <table class="w-full min-w-max text-left text-sm text-gray-400 whitespace-nowrap">
                            <thead class="text-xs uppercase tracking-widest text-gray-500 border-b border-white/10">
                                <tr>
                                    <th class="pb-4 font-normal px-4">Case ID</th>
                                    <th class="pb-4 font-normal px-4">Opened</th>
                                    <th class="pb-4 font-normal px-4">Target</th>
                                    <th class="pb-4 font-normal px-4">Budget</th>
                                    <th class="pb-4 font-normal px-4">Type</th>
                                    <th class="pb-4 font-normal px-4">Status</th>
                                    <th class="pb-4 font-normal px-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-white/5">
                                <tr class="hover:bg-white/5 transition-colors">
                                    <td class="py-4 text-white px-4 font-medium">#CASE-001</td>
                                    <td class="py-4 px-4 text-xs">Oct 28, 2026<br><span class="text-gray-500">14:32 PM</span></td>
                                    <td class="py-4 px-4">
                                        <div class="flex items-center gap-3">
                                            <div class="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center font-serif text-xs">SL</div>
                                            <div>
                                                <p class="text-white">Shadow Ledger</p>
                                                <p class="text-xs text-gray-500">Corporate Shell</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="py-4 text-white px-4">$145,000</td>
                                    <td class="py-4 px-4"><span class="text-gray-400 text-xs"><i class="fas fa-briefcase mr-1"></i> Fraud</span></td>
                                    <td class="py-4 px-4"><span class="text-red-400 border border-red-400/30 bg-red-400/10 px-3 py-1 text-[10px] uppercase tracking-widest">Critical</span></td>
                                    <td class="py-4 px-4 text-right">
                                        <button class="text-gold hover:text-white transition-colors p-2" title="View Details"><i class="fas fa-eye"></i></button>
                                        <button class="text-gold hover:text-white transition-colors p-2" title="Update Status"><i class="fas fa-edit"></i></button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-white/5 transition-colors">
                                    <td class="py-4 text-white px-4 font-medium">#CASE-002</td>
                                    <td class="py-4 px-4 text-xs">Oct 27, 2026<br><span class="text-gray-500">09:15 AM</span></td>
                                    <td class="py-4 px-4">
                                        <div class="flex items-center gap-3">
                                            <div class="w-8 h-8 rounded-full bg-gold text-black flex items-center justify-center font-serif text-xs">VS</div>
                                            <div>
                                                <p class="text-white">V. Sterling</p>
                                                <p class="text-xs text-gray-500">Individual</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="py-4 text-white px-4">$18,500</td>
                                    <td class="py-4 px-4"><span class="text-gray-400 text-xs"><i class="fas fa-heart-broken mr-1"></i> Matrimonial</span></td>
                                    <td class="py-4 px-4"><span class="text-yellow-400 border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-[10px] uppercase tracking-widest">Surveillance</span></td>
                                    <td class="py-4 px-4 text-right">
                                        <button class="text-gold hover:text-white transition-colors p-2" title="View Details"><i class="fas fa-eye"></i></button>
                                        <button class="text-gold hover:text-white transition-colors p-2" title="Update Status"><i class="fas fa-edit"></i></button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-white/5 transition-colors">
                                    <td class="py-4 text-white px-4 font-medium">#CASE-004</td>
                                    <td class="py-4 px-4 text-xs">Oct 25, 2026<br><span class="text-gray-500">16:45 PM</span></td>
                                    <td class="py-4 px-4">
                                        <div class="flex items-center gap-3">
                                            <div class="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center font-serif text-xs">CT</div>
                                            <div>
                                                <p class="text-white">Crimson Tide</p>
                                                <p class="text-xs text-gray-500">Hacking Group</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="py-4 text-white px-4">$42,000</td>
                                    <td class="py-4 px-4"><span class="text-gray-400 text-xs"><i class="fas fa-laptop-code mr-1"></i> Cyber</span></td>
                                    <td class="py-4 px-4"><span class="text-green-400 border border-green-400/30 bg-green-400/10 px-3 py-1 text-[10px] uppercase tracking-widest">Active</span></td>
                                    <td class="py-4 px-4 text-right">
                                        <button class="text-gold hover:text-white transition-colors p-2" title="View Details"><i class="fas fa-eye"></i></button>
                                        <button class="text-gold hover:text-white transition-colors p-2" title="Update Status"><i class="fas fa-edit"></i></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- 4. Priorities Header -->
                <div class="mb-6 mt-12">
                    <h3 class="font-serif text-3xl mb-2 text-white">Priority Investigations</h3>
                    <p class="text-gray-400 mb-8">Cases requiring immediate attention and resource allocation.</p>
                </div>

                <!-- 5. Priority Kanban (Fraud Flagging Style Grid) -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div class="bg-black border border-red-500/30 p-6 shadow-lg">
                        <h4 class="text-red-500 font-serif text-xl mb-4 border-b border-red-500/20 pb-2">Critical Action (2)</h4>
                        <ul class="space-y-4">
                            <li class="border border-white/5 bg-white/5 p-4">
                                <div class="flex justify-between text-xs mb-2">
                                    <span class="text-gold font-mono">#CASE-001</span>
                                    <span class="text-red-500">2h Left</span>
                                </div>
                                <h5 class="text-white font-medium mb-1">Shadow Ledger</h5>
                                <p class="text-gray-500 text-[10px]">Wire transfer intercept pending approval.</p>
                            </li>
                            <li class="border border-white/5 bg-white/5 p-4">
                                <div class="flex justify-between text-xs mb-2">
                                    <span class="text-gold font-mono">#CASE-007</span>
                                    <span class="text-red-500">Expired</span>
                                </div>
                                <h5 class="text-white font-medium mb-1">Neon Syndicate</h5>
                                <p class="text-gray-500 text-[10px]">Target missed rendezvous. Re-establish tracking.</p>
                            </li>
                        </ul>
                    </div>
                    <div class="bg-black border border-yellow-500/30 p-6 shadow-lg">
                        <h4 class="text-yellow-500 font-serif text-xl mb-4 border-b border-yellow-500/20 pb-2">Active Surveillance (1)</h4>
                        <ul class="space-y-4">
                            <li class="border border-white/5 bg-white/5 p-4">
                                <div class="flex justify-between text-xs mb-2">
                                    <span class="text-gold font-mono">#CASE-002</span>
                                    <span class="text-yellow-500">Live</span>
                                </div>
                                <h5 class="text-white font-medium mb-1">V. Sterling</h5>
                                <p class="text-gray-500 text-[10px]">Drone B tracking target on 5th Avenue.</p>
                            </li>
                        </ul>
                    </div>
                    <div class="bg-black border border-blue-500/30 p-6 shadow-lg">
                        <h4 class="text-blue-500 font-serif text-xl mb-4 border-b border-blue-500/20 pb-2">Pending / Cold (1)</h4>
                        <ul class="space-y-4">
                            <li class="border border-white/5 bg-white/5 p-4">
                                <div class="flex justify-between text-xs mb-2">
                                    <span class="text-gold font-mono">#CASE-003</span>
                                    <span class="text-blue-500">Stalled</span>
                                </div>
                                <h5 class="text-white font-medium mb-1">Project Echo</h5>
                                <p class="text-gray-500 text-[10px]">Awaiting forensic lab results on hard drive.</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- 6. Metrics Header -->
                <div class="mb-6 mt-12">
                    <h3 class="font-serif text-3xl mb-2 text-white">Resource Metrics</h3>
                </div>

                <!-- 7. Resource Stats Grid (4 columns) -->
                <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                    <div class="bg-black-light p-6 border border-white/5">
                        <span class="text-xs uppercase tracking-widest text-gray-400 mb-2 block">Conviction Rate</span>
                        <h3 class="font-serif text-3xl mb-2 text-white">84%</h3>
                        <div class="w-full h-1 bg-white/10"><div class="h-full bg-green-500" style="width: 84%"></div></div>
                    </div>
                    <div class="bg-black-light p-6 border border-white/5">
                        <span class="text-xs uppercase tracking-widest text-gray-400 mb-2 block">Operative Hours</span>
                        <h3 class="font-serif text-3xl mb-2 text-white">1.2K</h3>
                        <div class="w-full h-1 bg-white/10"><div class="h-full bg-blue-500" style="width: 60%"></div></div>
                    </div>
                    <div class="bg-black-light p-6 border border-white/5">
                        <span class="text-xs uppercase tracking-widest text-gray-400 mb-2 block">Lab Capacity</span>
                        <h3 class="font-serif text-3xl mb-2 text-white">95%</h3>
                        <div class="w-full h-1 bg-white/10"><div class="h-full bg-red-500" style="width: 95%"></div></div>
                    </div>
                    <div class="bg-black-light p-6 border border-white/5">
                        <span class="text-xs uppercase tracking-widest text-gray-400 mb-2 block">Avg Closing Time</span>
                        <h3 class="font-serif text-3xl mb-2 text-white">18 Days</h3>
                        <div class="w-full h-1 bg-white/10"><div class="h-full bg-gold" style="width: 40%"></div></div>
                    </div>
                </div>

                <!-- 8 & 9. Evidence Queue & Updates (2 Columns) -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
                    
                    <!-- 8. Evidence Queue -->
                    <div class="bg-black-light border border-white/5 p-6">
                        <h4 class="font-serif text-xl mb-6 text-white">Evidence Processing Queue</h4>
                        <ul class="space-y-4">
                            <li class="flex items-start gap-4 pb-4 border-b border-white/5">
                                <div class="flex-1">
                                    <div class="flex justify-between items-start">
                                        <p class="text-white text-sm font-medium">Hard Drive Decryption <span class="text-gold font-mono ml-2">#CASE-001</span></p>
                                        <span class="text-yellow-500 text-xs">In Progress</span>
                                    </div>
                                    <p class="text-gray-400 text-xs mt-1">Brute force cracking 65% complete.</p>
                                </div>
                            </li>
                            <li class="flex items-start gap-4 pb-4 border-b border-white/5">
                                <div class="flex-1">
                                    <div class="flex justify-between items-start">
                                        <p class="text-white text-sm font-medium">DNA Match <span class="text-gold font-mono ml-2">#CASE-003</span></p>
                                        <span class="text-green-500 text-xs">Complete</span>
                                    </div>
                                    <p class="text-gray-400 text-xs mt-1">Results sent to Lead Operative.</p>
                                </div>
                            </li>
                            <li class="flex items-start gap-4">
                                <div class="flex-1">
                                    <div class="flex justify-between items-start">
                                        <p class="text-white text-sm font-medium">Ballistics Report <span class="text-gold font-mono ml-2">#CASE-004</span></p>
                                        <span class="text-gray-500 text-xs">Pending</span>
                                    </div>
                                    <p class="text-gray-400 text-xs mt-1">Awaiting external lab analysis.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <!-- 9. Recent Case Updates -->
                    <div class="bg-black-light border border-white/5 p-6">
                        <h4 class="font-serif text-xl mb-6 text-white">Recent Timeline Updates</h4>
                        <div class="relative border-l border-white/10 ml-3 space-y-6">
                            <div class="relative pl-6">
                                <div class="absolute w-2 h-2 bg-gold rounded-full -left-[4.5px] top-1.5 border border-black"></div>
                                <p class="text-xs text-gray-500 mb-1">Today, 14:32</p>
                                <p class="text-white text-sm font-medium">Evidence Uploaded <span class="text-gold font-mono ml-2">#CASE-001</span></p>
                                <p class="text-xs text-gray-400 mt-1">Agent Phoenix uploaded 3 audio recordings.</p>
                            </div>
                            <div class="relative pl-6">
                                <div class="absolute w-2 h-2 bg-white/30 rounded-full -left-[4.5px] top-1.5 border border-black"></div>
                                <p class="text-xs text-gray-500 mb-1">Today, 09:15</p>
                                <p class="text-white text-sm font-medium">Status Changed <span class="text-gold font-mono ml-2">#CASE-007</span></p>
                                <p class="text-xs text-gray-400 mt-1">Case escalated to CRITICAL by Director.</p>
                            </div>
                            <div class="relative pl-6">
                                <div class="absolute w-2 h-2 bg-white/30 rounded-full -left-[4.5px] top-1.5 border border-black"></div>
                                <p class="text-xs text-gray-500 mb-1">Yesterday, 18:00</p>
                                <p class="text-white text-sm font-medium">Warrant Issued <span class="text-gold font-mono ml-2">#CASE-004</span></p>
                                <p class="text-xs text-gray-400 mt-1">Court order secured for digital wiretap.</p>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- 10. Archive Search -->
                <div class="bg-black border border-white/5 p-6 shadow-lg mb-12 flex flex-col md:flex-row items-center gap-6">
                    <div class="flex-1">
                        <h4 class="font-serif text-xl text-white mb-2">Deep Archive Search</h4>
                        <p class="text-sm text-gray-400">Access closed cases and historical files from 1984-2025.</p>
                    </div>
                    <div class="relative w-full md:w-96">
                        <input type="text" placeholder="Search archive by year or keyword..." class="w-full bg-black border border-white/20 text-sm px-4 py-3 focus:outline-none focus:border-gold text-white">
                        <button class="absolute right-0 top-0 h-full px-4 text-gold hover:text-white transition-colors"><i class="fas fa-arrow-right"></i></button>
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
