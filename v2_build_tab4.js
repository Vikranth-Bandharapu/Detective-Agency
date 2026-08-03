const fs = require('fs');

const tab4Html = `
            <!-- Panel: Operatives -->
            <div class="dashboard-tab hidden" id="panel-operatives">
                
                <!-- 1. Header -->
                <div class="flex flex-col md:flex-row justify-between md:items-end mb-8 gap-4">
                    <div>
                        <h3 class="font-serif text-3xl mb-2 text-white">Agency Roster</h3>
                        <p class="text-sm text-gray-400">Manage field operatives, assets, and cover identities.</p>
                    </div>
                    <div class="flex gap-4">
                        <button class="bg-gold text-black px-6 py-2 uppercase tracking-widest text-xs hover:bg-white transition-colors">Deploy Asset</button>
                    </div>
                </div>

                <!-- 2. Filters -->
                <div class="bg-black-light border border-white/5 p-4 mb-6 flex flex-wrap gap-4 items-center">
                    <div class="flex-1 min-w-[200px]">
                        <div class="relative">
                            <i class="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"></i>
                            <input type="text" placeholder="Search by Codename or Real Name..." class="w-full bg-black border border-white/20 text-sm pl-10 pr-4 py-2 focus:outline-none focus:border-gold text-white">
                        </div>
                    </div>
                    <select class="bg-black border border-white/20 text-sm px-4 py-2 focus:outline-none focus:border-gold text-white min-w-[150px]">
                        <option>All Specializations</option>
                        <option>Infiltration</option>
                        <option>Cyber Sec</option>
                        <option>Extraction</option>
                    </select>
                    <select class="bg-black border border-white/20 text-sm px-4 py-2 focus:outline-none focus:border-gold text-white min-w-[150px]">
                        <option>All Statuses</option>
                        <option>Deployed</option>
                        <option>Standby</option>
                        <option>M.I.A</option>
                    </select>
                </div>

                <!-- 3. Roster Table -->
                <div class="bg-black-light border border-white/5 p-6 mb-12">
                    <div class="overflow-x-auto">
                        <table class="w-full min-w-max text-left text-sm text-gray-400 whitespace-nowrap">
                            <thead class="text-xs uppercase tracking-widest text-gray-500 border-b border-white/10">
                                <tr>
                                    <th class="pb-4 font-normal px-4">Codename</th>
                                    <th class="pb-4 font-normal px-4">Clearance</th>
                                    <th class="pb-4 font-normal px-4">Specialization</th>
                                    <th class="pb-4 font-normal px-4">Success Rate</th>
                                    <th class="pb-4 font-normal px-4">Status</th>
                                    <th class="pb-4 font-normal px-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-white/5">
                                <tr class="hover:bg-white/5 transition-colors">
                                    <td class="py-4 text-white px-4 font-medium flex items-center gap-3">
                                        <div class="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center font-serif text-xs">P</div>
                                        <span>Phoenix</span>
                                    </td>
                                    <td class="py-4 px-4 font-mono text-xs">Level 9</td>
                                    <td class="py-4 px-4 text-white">Cyber Forensics</td>
                                    <td class="py-4 px-4 text-green-400">98%</td>
                                    <td class="py-4 px-4"><span class="text-green-400 border border-green-400/30 bg-green-400/10 px-3 py-1 text-[10px] uppercase tracking-widest">Deployed</span></td>
                                    <td class="py-4 px-4 text-right">
                                        <button class="text-gold hover:text-white transition-colors p-2"><i class="fas fa-eye"></i></button>
                                        <button class="text-gold hover:text-white transition-colors p-2"><i class="fas fa-edit"></i></button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-white/5 transition-colors">
                                    <td class="py-4 text-white px-4 font-medium flex items-center gap-3">
                                        <div class="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center font-serif text-xs">G</div>
                                        <span>Ghost</span>
                                    </td>
                                    <td class="py-4 px-4 font-mono text-xs">Level 8</td>
                                    <td class="py-4 px-4 text-white">Infiltration</td>
                                    <td class="py-4 px-4 text-green-400">95%</td>
                                    <td class="py-4 px-4"><span class="text-yellow-400 border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-[10px] uppercase tracking-widest">Standby</span></td>
                                    <td class="py-4 px-4 text-right">
                                        <button class="text-gold hover:text-white transition-colors p-2"><i class="fas fa-eye"></i></button>
                                        <button class="text-gold hover:text-white transition-colors p-2"><i class="fas fa-edit"></i></button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-white/5 transition-colors opacity-75">
                                    <td class="py-4 text-gray-500 px-4 font-medium flex items-center gap-3">
                                        <div class="w-8 h-8 rounded-full bg-white/5 text-gray-600 flex items-center justify-center font-serif text-xs">V</div>
                                        <span>Viper</span>
                                    </td>
                                    <td class="py-4 px-4 font-mono text-xs">Level 9</td>
                                    <td class="py-4 px-4 text-gray-400">Extraction</td>
                                    <td class="py-4 px-4 text-green-400">92%</td>
                                    <td class="py-4 px-4"><span class="text-red-400 border border-red-400/30 bg-red-400/10 px-3 py-1 text-[10px] uppercase tracking-widest">M.I.A</span></td>
                                    <td class="py-4 px-4 text-right">
                                        <button class="text-gold hover:text-white transition-colors p-2"><i class="fas fa-eye"></i></button>
                                        <button class="text-gold hover:text-white transition-colors p-2"><i class="fas fa-edit"></i></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- 4. Skills Header -->
                <div class="mb-6 mt-12">
                    <h3 class="font-serif text-3xl mb-2 text-white">Agency Skill Distribution</h3>
                </div>

                <!-- 5. Skills Grid -->
                <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                    <div class="bg-black-light p-6 border border-white/5">
                        <span class="text-xs uppercase tracking-widest text-gray-400 mb-2 block">Infiltration</span>
                        <h3 class="font-serif text-3xl mb-2 text-white">42</h3>
                        <div class="w-full h-1 bg-white/10"><div class="h-full bg-gold" style="width: 42%"></div></div>
                    </div>
                    <div class="bg-black-light p-6 border border-white/5">
                        <span class="text-xs uppercase tracking-widest text-gray-400 mb-2 block">Cyber Security</span>
                        <h3 class="font-serif text-3xl mb-2 text-white">28</h3>
                        <div class="w-full h-1 bg-white/10"><div class="h-full bg-blue-500" style="width: 28%"></div></div>
                    </div>
                    <div class="bg-black-light p-6 border border-white/5">
                        <span class="text-xs uppercase tracking-widest text-gray-400 mb-2 block">Interrogation</span>
                        <h3 class="font-serif text-3xl mb-2 text-white">15</h3>
                        <div class="w-full h-1 bg-white/10"><div class="h-full bg-red-500" style="width: 15%"></div></div>
                    </div>
                    <div class="bg-black-light p-6 border border-white/5">
                        <span class="text-xs uppercase tracking-widest text-gray-400 mb-2 block">Surveillance</span>
                        <h3 class="font-serif text-3xl mb-2 text-white">75</h3>
                        <div class="w-full h-1 bg-white/10"><div class="h-full bg-green-500" style="width: 75%"></div></div>
                    </div>
                </div>

                <!-- 6. Deployment Map Header -->
                <div class="mb-6 mt-12">
                    <h3 class="font-serif text-3xl mb-2 text-white">Live Asset Deployment Map</h3>
                    <p class="text-gray-400 mb-8">Real-time GPS tracking of active field operatives.</p>
                </div>

                <!-- 7. Deployment Map Grid (Identical to Jewellery Global Logistics Map) -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div class="bg-black border border-white/5 p-6 shadow-lg relative overflow-hidden group">
                        <div class="absolute right-0 top-0 text-white/5 text-8xl -mt-4 -mr-4 group-hover:scale-110 transition-transform"><i class="fas fa-globe-europe"></i></div>
                        <h4 class="text-white font-serif text-xl mb-2 relative z-10">EMEA Region</h4>
                        <div class="flex justify-between text-xs text-gray-400 mb-4 relative z-10">
                            <span>8 Operatives</span>
                            <span class="text-green-400">Green Status</span>
                        </div>
                        <div class="w-full bg-white/10 h-1 mb-2 relative z-10"><div class="bg-green-400 h-1" style="width: 100%"></div></div>
                    </div>
                    <div class="bg-black border border-white/5 p-6 shadow-lg relative overflow-hidden group">
                        <div class="absolute right-0 top-0 text-white/5 text-8xl -mt-4 -mr-4 group-hover:scale-110 transition-transform"><i class="fas fa-globe-americas"></i></div>
                        <h4 class="text-white font-serif text-xl mb-2 relative z-10">Americas Region</h4>
                        <div class="flex justify-between text-xs text-gray-400 mb-4 relative z-10">
                            <span>4 Operatives</span>
                            <span class="text-yellow-500">Comms Blackout (1)</span>
                        </div>
                        <div class="w-full bg-white/10 h-1 mb-2 relative z-10"><div class="bg-yellow-500 h-1" style="width: 75%"></div></div>
                    </div>
                    <div class="bg-black border border-white/5 p-6 shadow-lg relative overflow-hidden group border-t-2 border-t-red-500">
                        <div class="absolute right-0 top-0 text-white/5 text-8xl -mt-4 -mr-4 group-hover:scale-110 transition-transform"><i class="fas fa-globe-asia"></i></div>
                        <h4 class="text-white font-serif text-xl mb-2 relative z-10">APAC Region</h4>
                        <div class="flex justify-between text-xs text-gray-400 mb-4 relative z-10">
                            <span>2 Operatives</span>
                            <span class="text-red-500">Agent Compromised</span>
                        </div>
                        <div class="w-full bg-white/10 h-1 mb-2 relative z-10"><div class="bg-red-500 h-1" style="width: 50%"></div></div>
                    </div>
                </div>

                <!-- 8. Cover Identities Header -->
                <div class="flex justify-between items-center mb-6 mt-12">
                    <h3 class="font-serif text-2xl text-white">Cover Identities Expiration</h3>
                    <button class="text-xs text-gold uppercase tracking-widest hover:text-white transition-colors">Generate New</button>
                </div>

                <!-- 9. Cover IDs List (System Alerts format) -->
                <div class="bg-black-light border border-white/5 p-6 mb-12">
                    <ul class="space-y-4">
                        <li class="flex items-start gap-4 pb-4 border-b border-white/5">
                            <div class="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0"><i class="fas fa-id-card"></i></div>
                            <div class="flex-1">
                                <div class="flex justify-between items-start">
                                    <p class="text-white text-sm font-medium">Passport Expiring <span class="text-gold">(Markus Von H.)</span></p>
                                    <span class="text-red-500 text-xs">2 Days Left</span>
                                </div>
                                <p class="text-gray-400 text-xs mt-1">Assigned to: Agent Phoenix</p>
                            </div>
                        </li>
                        <li class="flex items-start gap-4 pb-4 border-b border-white/5">
                            <div class="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0"><i class="fas fa-building"></i></div>
                            <div class="flex-1">
                                <div class="flex justify-between items-start">
                                    <p class="text-white text-sm font-medium">Shell Company Audit Due</p>
                                    <span class="text-gray-500 text-xs">14 Days Left</span>
                                </div>
                                <p class="text-gray-400 text-xs mt-1">Global Trade Partners LLC.</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <!-- 10. Extraction Protocol (Fraud Queue format) -->
                <div class="mb-12 mt-12">
                    <h3 class="font-serif text-3xl mb-6 text-white text-red-500">Emergency Extraction</h3>
                    <div class="bg-black border border-red-500/30 p-6 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h4 class="font-serif text-xl text-white mb-2">Initiate Burn Protocol</h4>
                            <p class="text-sm text-gray-400 max-w-lg">Instantly wipe all local data devices, sever communications, and dispatch extraction team to Operative's last known GPS coordinates.</p>
                        </div>
                        <button class="bg-red-600 hover:bg-red-500 text-white px-8 py-3 uppercase tracking-widest font-bold whitespace-nowrap shadow-[0_0_15px_rgba(220,38,38,0.3)]">Deploy Team</button>
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
