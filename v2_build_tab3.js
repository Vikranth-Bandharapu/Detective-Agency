const fs = require('fs');

const tab3Html = `
            <!-- Panel: Intel Reports -->
            <div class="dashboard-tab hidden" id="panel-intel">
                
                <!-- 1. Header -->
                <div class="flex flex-col md:flex-row justify-between md:items-end mb-8 gap-4">
                    <div>
                        <h3 class="font-serif text-3xl mb-2 text-white">Global Intelligence</h3>
                        <p class="text-sm text-gray-400">Live intercepts, surveillance feeds, and verified intelligence.</p>
                    </div>
                    <div class="flex gap-4">
                        <button class="bg-red-500/20 text-red-500 border border-red-500/50 hover:bg-red-500 hover:text-white px-6 py-2 uppercase tracking-widest text-xs transition-colors">Intercept New</button>
                    </div>
                </div>

                <!-- 2. Filters -->
                <div class="bg-black-light border border-white/5 p-4 mb-6 flex flex-wrap gap-4 items-center">
                    <div class="flex-1 min-w-[200px]">
                        <div class="relative">
                            <i class="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"></i>
                            <input type="text" placeholder="Search Intel by Keyword or IP..." class="w-full bg-black border border-white/20 text-sm pl-10 pr-4 py-2 focus:outline-none focus:border-gold text-white">
                        </div>
                    </div>
                    <select class="bg-black border border-white/20 text-sm px-4 py-2 focus:outline-none focus:border-gold text-white min-w-[150px]">
                        <option>All Sources</option>
                        <option>Wiretaps</option>
                        <option>Dark Web</option>
                        <option>Informants</option>
                    </select>
                </div>

                <!-- 3. Intel Log Table -->
                <div class="bg-black-light border border-white/5 p-6 mb-12">
                    <div class="overflow-x-auto">
                        <table class="w-full min-w-max text-left text-sm text-gray-400 whitespace-nowrap">
                            <thead class="text-xs uppercase tracking-widest text-gray-500 border-b border-white/10">
                                <tr>
                                    <th class="pb-4 font-normal px-4">Intercept ID</th>
                                    <th class="pb-4 font-normal px-4">Time</th>
                                    <th class="pb-4 font-normal px-4">Source</th>
                                    <th class="pb-4 font-normal px-4">Confidence</th>
                                    <th class="pb-4 font-normal px-4">Status</th>
                                    <th class="pb-4 font-normal px-4 text-right">Playback</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-white/5">
                                <tr class="hover:bg-white/5 transition-colors">
                                    <td class="py-4 text-white px-4 font-medium">#INT-8842</td>
                                    <td class="py-4 px-4 text-xs">Today<br><span class="text-gray-500">10:42 AM</span></td>
                                    <td class="py-4 px-4 text-white">Encrypted VoIP</td>
                                    <td class="py-4 px-4 text-green-400">92% Match</td>
                                    <td class="py-4 px-4"><span class="text-red-400 border border-red-400/30 bg-red-400/10 px-3 py-1 text-[10px] uppercase tracking-widest">Live</span></td>
                                    <td class="py-4 px-4 text-right">
                                        <button class="text-gold hover:text-white transition-colors p-2" title="Play Audio"><i class="fas fa-play"></i></button>
                                        <button class="text-gold hover:text-white transition-colors p-2" title="Download"><i class="fas fa-download"></i></button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-white/5 transition-colors">
                                    <td class="py-4 text-white px-4 font-medium">#INT-8841</td>
                                    <td class="py-4 px-4 text-xs">Today<br><span class="text-gray-500">09:15 AM</span></td>
                                    <td class="py-4 px-4 text-white">Dark Web Forum</td>
                                    <td class="py-4 px-4 text-yellow-400">65% Match</td>
                                    <td class="py-4 px-4"><span class="text-yellow-400 border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-[10px] uppercase tracking-widest">Review</span></td>
                                    <td class="py-4 px-4 text-right">
                                        <button class="text-gray-600 cursor-not-allowed p-2" disabled><i class="fas fa-play"></i></button>
                                        <button class="text-gold hover:text-white transition-colors p-2"><i class="fas fa-file-alt"></i></button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-white/5 transition-colors">
                                    <td class="py-4 text-white px-4 font-medium">#INT-8839</td>
                                    <td class="py-4 px-4 text-xs">Yesterday<br><span class="text-gray-500">18:30 PM</span></td>
                                    <td class="py-4 px-4 text-white">Informant Drop</td>
                                    <td class="py-4 px-4 text-green-400">99% Match</td>
                                    <td class="py-4 px-4"><span class="text-gray-500 border border-white/20 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-widest">Verified</span></td>
                                    <td class="py-4 px-4 text-right">
                                        <button class="text-gray-600 cursor-not-allowed p-2" disabled><i class="fas fa-play"></i></button>
                                        <button class="text-gold hover:text-white transition-colors p-2"><i class="fas fa-file-pdf"></i></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- 4. Surveillance Header -->
                <div class="mb-6 mt-12">
                    <h3 class="font-serif text-3xl mb-2 text-white">Visual Surveillance</h3>
                    <p class="text-gray-400 mb-8">Live camera and drone feeds from active operation sectors.</p>
                </div>

                <!-- 5. Surveillance Grid (Map Layout Style) -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div class="bg-black border border-white/5 p-4 shadow-lg relative overflow-hidden group">
                        <img src="assets/corporate_fraud.jpg" class="absolute inset-0 w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all z-0">
                        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-0"></div>
                        <div class="relative z-10 flex flex-col h-32 justify-between">
                            <div class="flex justify-between items-start">
                                <span class="bg-red-500 text-white text-[8px] px-2 py-1 uppercase tracking-widest animate-pulse">Live</span>
                                <span class="text-xs text-white font-mono bg-black/50 px-2 py-1">CAM_01</span>
                            </div>
                            <div>
                                <h4 class="text-white font-serif text-lg mb-1">Corporate HQ</h4>
                                <p class="text-xs text-gray-300">Sector: Alpha</p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-black border border-white/5 p-4 shadow-lg relative overflow-hidden group">
                        <img src="assets/matrimonial.jpg" class="absolute inset-0 w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all z-0">
                        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-0"></div>
                        <div class="relative z-10 flex flex-col h-32 justify-between">
                            <div class="flex justify-between items-start">
                                <span class="bg-yellow-500 text-black text-[8px] px-2 py-1 uppercase tracking-widest">Tracking</span>
                                <span class="text-xs text-white font-mono bg-black/50 px-2 py-1">DRONE_A</span>
                            </div>
                            <div>
                                <h4 class="text-white font-serif text-lg mb-1">Target Escort</h4>
                                <p class="text-xs text-gray-300">Sector: Delta</p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-black border border-white/5 p-4 shadow-lg relative flex flex-col items-center justify-center hover:bg-white/5 transition-colors cursor-pointer min-h-[160px]">
                        <i class="fas fa-plus text-2xl text-gray-500 mb-2"></i>
                        <span class="text-xs uppercase tracking-widest text-gray-400">Add New Feed</span>
                    </div>
                </div>

                <!-- 6. Dark Web Header -->
                <div class="mb-6 mt-12">
                    <h3 class="font-serif text-3xl mb-2 text-white">Dark Web Intercepts</h3>
                </div>

                <!-- 7. Dark Web Intercepts Log (Alerts format) -->
                <div class="bg-black-light border border-white/5 p-6 mb-12">
                    <ul class="space-y-4">
                        <li class="flex items-start gap-4 pb-4 border-b border-white/5">
                            <div class="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0"><i class="fas fa-spider"></i></div>
                            <div class="flex-1">
                                <div class="flex justify-between items-start">
                                    <p class="text-white text-sm font-medium">Keyword Match: <span class="text-gold">'Shadow Ledger'</span></p>
                                    <span class="text-gray-500 text-xs">Live Sync</span>
                                </div>
                                <p class="text-gray-400 text-xs mt-1 font-mono">onion//xd7f8g.../forum/post/114</p>
                            </div>
                        </li>
                        <li class="flex items-start gap-4 pb-4 border-b border-white/5">
                            <div class="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0"><i class="fas fa-spider"></i></div>
                            <div class="flex-1">
                                <div class="flex justify-between items-start">
                                    <p class="text-white text-sm font-medium">SCAN: Hidden Marketplace #42</p>
                                    <span class="text-gray-500 text-xs">2m ago</span>
                                </div>
                                <p class="text-gray-400 text-xs mt-1 font-mono">Crawling 1,452 pages... [OK]</p>
                            </div>
                        </li>
                        <li class="flex items-start gap-4">
                            <div class="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 shrink-0"><i class="fas fa-spider"></i></div>
                            <div class="flex-1">
                                <div class="flex justify-between items-start">
                                    <p class="text-white text-sm font-medium">Keyword Match: <span class="text-gold">'Agent Phoenix'</span></p>
                                    <span class="text-gray-500 text-xs">15m ago</span>
                                </div>
                                <p class="text-gray-400 text-xs mt-1 font-mono">onion//qwe9as.../chat/room_7</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <!-- 8. Threat Meter & Crypto Tracker Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    <div class="bg-black-light border border-white/5 p-6 flex flex-col items-center justify-center relative overflow-hidden">
                        <h4 class="font-serif text-xl mb-6 text-white text-center">Global Threat Index</h4>
                        <div class="w-32 h-16 overflow-hidden relative z-10 mb-4 mt-2">
                            <div class="w-32 h-32 border-[12px] border-b-transparent border-r-transparent border-yellow-500 border-l-red-500 border-t-red-500 rounded-full transform rotate-45"></div>
                            <div class="absolute bottom-0 left-1/2 w-1 h-14 bg-white origin-bottom transform rotate-[65deg] shadow-[0_0_5px_white]"></div>
                        </div>
                        <h2 class="text-3xl text-red-500 font-serif">DEFCON 3</h2>
                    </div>
                    <div class="bg-black-light border border-white/5 p-6">
                        <h4 class="font-serif text-xl mb-4 text-white">Crypto Ledger Trace</h4>
                        <div class="bg-black p-4 border border-white/5 rounded font-mono text-xs mb-4">
                            <div class="flex justify-between mb-2">
                                <span class="text-gray-400">Target Wallet:</span>
                                <span class="text-gold">1A1zP1e...</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-400">Balance:</span>
                                <span class="text-white">1,450.44 BTC</span>
                            </div>
                        </div>
                        <ul class="text-xs space-y-3">
                            <li class="flex justify-between text-gray-400"><span class="text-green-500">+45.0 BTC</span><span>Mixer Node</span></li>
                            <li class="flex justify-between text-gray-400"><span class="text-red-500">-12.5 BTC</span><span>Unknown Exchange</span></li>
                            <li class="flex justify-between text-gray-400"><span class="text-red-500">-110.0 BTC</span><span>Cold Wallet</span></li>
                        </ul>
                    </div>
                </div>

                <!-- 9. Syndicates Network Header -->
                <div class="mb-6 mt-12">
                    <h3 class="font-serif text-3xl mb-2 text-white">Known Syndicates Network</h3>
                    <p class="text-gray-400 mb-8">Organizations and groups actively tracked by the agency.</p>
                </div>

                <!-- 10. Syndicates Queue Table (Fraud Queue format) -->
                <div class="bg-black border border-white/5 p-6 shadow-lg mb-12">
                    <div class="overflow-x-auto">
                        <table class="w-full text-left text-sm text-gray-400">
                            <thead class="text-xs uppercase tracking-widest text-gray-500 border-b border-white/10">
                                <tr>
                                    <th class="pb-4 font-normal px-2">Syndicate Name</th>
                                    <th class="pb-4 font-normal px-2">Known Associates</th>
                                    <th class="pb-4 font-normal px-2">Active Cases</th>
                                    <th class="pb-4 font-normal px-2">Threat Level</th>
                                    <th class="pb-4 font-normal text-right px-2">Action</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-white/5">
                                <tr>
                                    <td class="py-4 text-white font-medium px-2">Shadow Ledger</td>
                                    <td class="py-4 px-2">14 Identified</td>
                                    <td class="py-4 px-2"><span class="text-gold">2</span></td>
                                    <td class="py-4 px-2"><span class="text-red-500">Critical</span></td>
                                    <td class="py-4 text-right px-2">
                                        <button class="bg-white/5 hover:bg-white/10 text-white border border-white/20 px-4 py-1 text-[10px] uppercase tracking-widest transition-colors">View Graph</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="py-4 text-white font-medium px-2">Neon Syndicate</td>
                                    <td class="py-4 px-2">8 Identified</td>
                                    <td class="py-4 px-2"><span class="text-gold">4</span></td>
                                    <td class="py-4 px-2"><span class="text-yellow-500">Elevated</span></td>
                                    <td class="py-4 text-right px-2">
                                        <button class="bg-white/5 hover:bg-white/10 text-white border border-white/20 px-4 py-1 text-[10px] uppercase tracking-widest transition-colors">View Graph</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
            <!-- INJECT_TABS_HERE -->
`;

['client-dashboard.html', 'admin-dashboard.html'].forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace('<!-- INJECT_TABS_HERE -->', tab3Html);
    fs.writeFileSync(file, content);
    console.log('Tab 3 injected into ' + file);
});
