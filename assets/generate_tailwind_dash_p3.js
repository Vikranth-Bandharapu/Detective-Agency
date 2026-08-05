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
