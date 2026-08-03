const fs = require('fs');

const tab3Html = `
            <!-- Panel: Intel Reports -->
            <div class="dashboard-tab hidden" id="panel-intel">
                
                <!-- Section 1: Header -->
                <div class="flex flex-col md:flex-row justify-between md:items-end mb-8 gap-4 border-b border-white/10 pb-6">
                    <div>
                        <h3 class="font-serif text-3xl mb-2 text-white">Global Intelligence</h3>
                        <p class="text-sm text-gray-400">Live intercepts, surveillance feeds, and verified intelligence.</p>
                    </div>
                    <div class="flex gap-3">
                        <button class="bg-black border border-white/10 text-gray-300 hover:text-white px-4 py-2 text-xs uppercase tracking-widest rounded transition-colors"><i class="fas fa-filter mr-2"></i>Filter Intel</button>
                        <button class="bg-red-500/20 text-red-500 border border-red-500/50 hover:bg-red-500 hover:text-white px-4 py-2 text-xs uppercase tracking-widest rounded transition-colors"><i class="fas fa-broadcast-tower mr-2"></i>Intercept New</button>
                    </div>
                </div>

                <!-- Section 2 & 3: Audio Player & Surveillance Grid -->
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    
                    <!-- Section 2: Audio Player / Wiretaps -->
                    <div class="bg-[#1a1f2e] border border-white/5 rounded-lg p-6">
                        <h4 class="font-serif text-xl text-white mb-6 flex items-center gap-2"><i class="fas fa-headphones text-gold text-sm"></i> Live Wiretaps</h4>
                        
                        <div class="bg-black/50 border border-white/10 rounded p-4 mb-4">
                            <div class="flex justify-between items-center mb-2">
                                <span class="text-xs text-white font-mono">TGT_VSTERLING_04</span>
                                <span class="bg-red-500 text-white text-[8px] px-1.5 py-0.5 rounded animate-pulse">LIVE</span>
                            </div>
                            <!-- Mock Audio Waveform -->
                            <div class="flex items-end justify-center h-8 gap-0.5 mb-4 opacity-75">
                                <div class="w-1 bg-gold h-full animate-[ping_1s_infinite]"></div>
                                <div class="w-1 bg-gold h-1/2 animate-[ping_1.2s_infinite]"></div>
                                <div class="w-1 bg-gold h-3/4 animate-[ping_0.8s_infinite]"></div>
                                <div class="w-1 bg-gold h-1/4 animate-[ping_1.5s_infinite]"></div>
                                <div class="w-1 bg-gold h-full animate-[ping_0.9s_infinite]"></div>
                                <div class="w-1 bg-gold h-1/2 animate-[ping_1.1s_infinite]"></div>
                                <div class="w-1 bg-gold h-2/3 animate-[ping_1.3s_infinite]"></div>
                                <div class="w-1 bg-gold h-1/3 animate-[ping_0.7s_infinite]"></div>
                                <div class="w-1 bg-gold h-full animate-[ping_1.4s_infinite]"></div>
                            </div>
                            <div class="flex justify-between items-center text-gray-400">
                                <i class="fas fa-volume-up text-xs hover:text-white cursor-pointer"></i>
                                <span class="text-[9px] font-mono">00:14:42</span>
                                <i class="fas fa-download text-xs hover:text-white cursor-pointer"></i>
                            </div>
                        </div>

                        <div class="space-y-2">
                            <div class="flex justify-between text-xs bg-black/30 p-2 border border-white/5 cursor-pointer hover:border-gold transition-colors">
                                <span class="text-gray-300 font-mono">TGT_ECHO_01</span> <span class="text-gray-500">2h ago</span>
                            </div>
                            <div class="flex justify-between text-xs bg-black/30 p-2 border border-white/5 cursor-pointer hover:border-gold transition-colors">
                                <span class="text-gray-300 font-mono">TGT_SL_11</span> <span class="text-gray-500">Yesterday</span>
                            </div>
                        </div>
                    </div>

                    <!-- Section 3: Surveillance Grid -->
                    <div class="lg:col-span-2 bg-[#1a1f2e] border border-white/5 rounded-lg p-6">
                        <h4 class="font-serif text-xl text-white mb-6 flex items-center gap-2"><i class="fas fa-video text-gold text-sm"></i> Visual Surveillance Feeds</h4>
                        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <div class="aspect-video bg-black border border-white/10 relative group overflow-hidden">
                                <img src="assets/corporate_fraud.jpg" class="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                                <div class="absolute top-1 left-2 flex items-center gap-1"><div class="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div><span class="text-[8px] text-white font-mono shadow-black">CAM_01</span></div>
                            </div>
                            <div class="aspect-video bg-black border border-white/10 relative group overflow-hidden">
                                <img src="assets/matrimonial.jpg" class="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                                <div class="absolute top-1 left-2 flex items-center gap-1"><div class="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div><span class="text-[8px] text-white font-mono shadow-black">DRONE_A</span></div>
                            </div>
                            <div class="aspect-video bg-black border border-white/10 relative group overflow-hidden">
                                <img src="assets/missing_person.jpg" class="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                                <div class="absolute top-1 left-2 flex items-center gap-1"><div class="w-1.5 h-1.5 bg-gray-500 rounded-full"></div><span class="text-[8px] text-white font-mono shadow-black">SAT_LINK (OFFLINE)</span></div>
                            </div>
                            <div class="aspect-video bg-black border border-white/10 relative group overflow-hidden">
                                <img src="assets/cyber_forensics.jpg" class="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                                <div class="absolute top-1 left-2 flex items-center gap-1"><div class="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div><span class="text-[8px] text-white font-mono shadow-black">CAM_02</span></div>
                            </div>
                            <div class="aspect-video bg-black border border-white/10 relative group overflow-hidden">
                                <img src="assets/surveillance_tech.jpg" class="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                                <div class="absolute top-1 left-2 flex items-center gap-1"><div class="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div><span class="text-[8px] text-white font-mono shadow-black">BODYCAM_OP4</span></div>
                            </div>
                            <div class="aspect-video bg-black border border-white/10 flex items-center justify-center hover:bg-white/5 cursor-pointer transition-colors">
                                <span class="text-xs text-gray-500"><i class="fas fa-plus mb-1 block text-center"></i>Add Feed</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Section 4 & 5: Dark Web & Crypto -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    
                    <!-- Section 4: Dark Web Intercepts Log -->
                    <div class="bg-[#1a1f2e] border border-white/5 rounded-lg p-6">
                        <div class="flex justify-between items-center mb-6">
                            <h4 class="font-serif text-xl text-white flex items-center gap-2"><i class="fas fa-spider text-gold text-sm"></i> Tor Network Intercepts</h4>
                            <span class="text-[9px] uppercase tracking-widest text-gray-500">Live Sync</span>
                        </div>
                        <div class="h-48 overflow-y-auto pr-2 space-y-3 font-mono text-xs">
                            <div class="text-green-500 border-l border-green-500/30 pl-3">
                                <p class="text-white">MATCH FOUND: Keyword 'Shadow Ledger'</p>
                                <p class="opacity-50 mt-1">onion//xd7f8g.../forum/post/114</p>
                            </div>
                            <div class="text-blue-500 border-l border-blue-500/30 pl-3">
                                <p class="text-white">SCAN: Hidden marketplace #42</p>
                                <p class="opacity-50 mt-1">Crawling 1,452 pages... [OK]</p>
                            </div>
                            <div class="text-yellow-500 border-l border-yellow-500/30 pl-3">
                                <p class="text-white">ALERT: Mention of 'Agent Phoenix'</p>
                                <p class="opacity-50 mt-1">onion//qwe9as.../chat/room_7</p>
                            </div>
                            <div class="text-green-500 border-l border-green-500/30 pl-3">
                                <p class="text-white">MATCH FOUND: Asset Sale Listing</p>
                                <p class="opacity-50 mt-1">Target matched: Stolen jewelry collection.</p>
                            </div>
                            <div class="text-gray-500 border-l border-gray-500/30 pl-3">
                                <p class="text-white">SCAN: Network nodes rotating...</p>
                                <p class="opacity-50 mt-1">IP masking engaged.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Section 5: Crypto Tracing -->
                    <div class="bg-[#1a1f2e] border border-white/5 rounded-lg p-6">
                        <div class="flex justify-between items-center mb-6">
                            <h4 class="font-serif text-xl text-white flex items-center gap-2"><i class="fab fa-bitcoin text-gold text-sm"></i> Ledger Tracing Node</h4>
                            <i class="fas fa-sync-alt text-gray-500 text-xs"></i>
                        </div>
                        <div class="bg-black/50 p-4 border border-white/5 rounded font-mono text-xs mb-4">
                            <div class="flex justify-between mb-2">
                                <span class="text-gray-400">Target Wallet:</span>
                                <span class="text-gold">1A1zP1eP5QGefi2...</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-400">Current Balance:</span>
                                <span class="text-white">1,450.44 BTC</span>
                            </div>
                        </div>
                        <div class="space-y-3 relative">
                            <!-- Visual flow lines mock -->
                            <div class="absolute left-3.5 top-2 bottom-4 w-px bg-white/10"></div>
                            
                            <div class="flex items-center gap-4 relative">
                                <div class="w-3 h-3 rounded-full bg-black border-2 border-green-500 z-10"></div>
                                <div class="flex-1 bg-black/30 p-2 border border-white/5 flex justify-between items-center">
                                    <span class="text-white text-xs">+ 45.0 BTC</span><span class="text-[9px] text-gray-500">Mixer Node</span>
                                </div>
                            </div>
                            <div class="flex items-center gap-4 relative">
                                <div class="w-3 h-3 rounded-full bg-black border-2 border-red-500 z-10"></div>
                                <div class="flex-1 bg-black/30 p-2 border border-white/5 flex justify-between items-center">
                                    <span class="text-white text-xs">- 12.5 BTC</span><span class="text-[9px] text-gray-500">Unknown Exchange</span>
                                </div>
                            </div>
                            <div class="flex items-center gap-4 relative">
                                <div class="w-3 h-3 rounded-full bg-black border-2 border-red-500 z-10"></div>
                                <div class="flex-1 bg-black/30 p-2 border border-white/5 flex justify-between items-center">
                                    <span class="text-white text-xs">- 110.0 BTC</span><span class="text-[9px] text-gray-500">Off-shore Cold Wallet</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Section 6, 7, 8: Classified Drops, Threat Meter, Syndicates -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    
                    <!-- Section 6: Document Drops -->
                    <div class="bg-[#1a1f2e] border border-white/5 rounded-lg p-5">
                        <h4 class="font-serif text-white mb-4">Classified Drops</h4>
                        <div class="space-y-2">
                            <div class="p-3 border border-red-500/20 bg-red-500/5 hover:border-red-500 transition-colors cursor-pointer group">
                                <div class="flex justify-between items-center mb-1">
                                    <span class="text-xs text-white group-hover:text-gold"><i class="fas fa-file-pdf mr-1"></i> Bank_Records_VS.pdf</span>
                                    <span class="bg-red-500 text-white text-[8px] px-1 py-0.5 rounded">TOP SECRET</span>
                                </div>
                                <p class="text-[9px] text-gray-500">Decrypted 2 hours ago</p>
                            </div>
                            <div class="p-3 border border-yellow-500/20 bg-yellow-500/5 hover:border-yellow-500 transition-colors cursor-pointer group">
                                <div class="flex justify-between items-center mb-1">
                                    <span class="text-xs text-white group-hover:text-gold"><i class="fas fa-file-image mr-1"></i> Flight_Manifest_09.jpg</span>
                                    <span class="bg-yellow-500 text-black text-[8px] px-1 py-0.5 rounded">RESTRICTED</span>
                                </div>
                                <p class="text-[9px] text-gray-500">Intercepted 1 day ago</p>
                            </div>
                        </div>
                    </div>

                    <!-- Section 7: Threat Gauge -->
                    <div class="bg-[#1a1f2e] border border-white/5 rounded-lg p-5 flex flex-col items-center justify-center relative overflow-hidden">
                        <div class="absolute inset-0 bg-red-500/5 animate-pulse"></div>
                        <h4 class="font-serif text-white mb-2 relative z-10">Global Threat Index</h4>
                        <!-- CSS Arc Mock -->
                        <div class="w-24 h-12 overflow-hidden relative z-10 mb-4 mt-2">
                            <div class="w-24 h-24 border-[10px] border-b-transparent border-r-transparent border-yellow-500 border-l-red-500 border-t-red-500 rounded-full transform rotate-45"></div>
                            <!-- Needle -->
                            <div class="absolute bottom-0 left-1/2 w-0.5 h-10 bg-white origin-bottom transform rotate-[65deg] shadow-[0_0_5px_white]"></div>
                        </div>
                        <h2 class="text-3xl text-red-500 font-serif relative z-10">DEFCON 3</h2>
                        <p class="text-[9px] uppercase tracking-widest text-gray-400 relative z-10 mt-1">Elevated risk protocol active</p>
                    </div>

                    <!-- Section 8: Syndicates Network -->
                    <div class="bg-[#1a1f2e] border border-white/5 rounded-lg p-5">
                        <h4 class="font-serif text-white mb-4">Known Syndicates</h4>
                        <div class="flex flex-wrap gap-2">
                            <span class="border border-white/20 text-gray-300 text-[10px] px-2 py-1 rounded hover:border-gold hover:text-gold cursor-pointer transition-colors">Neon Syndicate (4 cases)</span>
                            <span class="border border-white/20 text-gray-300 text-[10px] px-2 py-1 rounded hover:border-gold hover:text-gold cursor-pointer transition-colors">Shadow Ledger (2 cases)</span>
                            <span class="border border-white/20 text-gray-300 text-[10px] px-2 py-1 rounded hover:border-gold hover:text-gold cursor-pointer transition-colors">Crimson Tide (1 case)</span>
                            <span class="border border-white/20 text-gray-300 text-[10px] px-2 py-1 rounded hover:border-gold hover:text-gold cursor-pointer transition-colors">Blackout Group (Tracking)</span>
                        </div>
                        <button class="w-full mt-4 bg-black border border-white/10 text-gray-400 text-xs py-2 hover:text-white transition-colors">View Network Graph <i class="fas fa-project-diagram ml-1"></i></button>
                    </div>
                </div>

                <!-- Section 9 & 10: Encrypted Comms & Verification Queue -->
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    
                    <!-- Section 9: Secure Comms Log (From old Comms Tab) -->
                    <div class="lg:col-span-2 bg-[#1a1f2e] border border-white/5 rounded-lg p-6">
                        <h4 class="font-serif text-xl text-white mb-6 flex items-center gap-2"><i class="fas fa-lock text-gold text-sm"></i> Secure Communications Intercept</h4>
                        <div class="space-y-4">
                            <div class="flex gap-4 items-start bg-black/40 p-4 border border-white/5 rounded">
                                <div class="w-8 h-8 rounded bg-red-500/10 border border-red-500/30 flex items-center justify-center shrink-0">
                                    <i class="fas fa-key text-red-500 text-xs"></i>
                                </div>
                                <div class="flex-1">
                                    <div class="flex justify-between items-center mb-1">
                                        <p class="text-white text-sm font-semibold">Rendezvous Point Confirmed</p>
                                        <span class="text-[9px] bg-red-500/20 text-red-500 border border-red-500/50 px-1.5 py-0.5 rounded uppercase tracking-widest">PGP Encrypted</span>
                                    </div>
                                    <p class="text-[10px] text-gray-400 italic mb-2">"The package will be dropped at sector 4. Do not engage until visual confirmed."</p>
                                    <div class="text-[9px] text-gray-500 uppercase tracking-widest border-t border-white/10 pt-2 flex justify-between">
                                        <span>Channel: Alpha-Sec</span>
                                        <span>Intercepted: 10:42 AM</span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex gap-4 items-start bg-black/40 p-4 border border-white/5 rounded">
                                <div class="w-8 h-8 rounded bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
                                    <i class="fas fa-file-contract text-gold text-xs"></i>
                                </div>
                                <div class="flex-1">
                                    <div class="flex justify-between items-center mb-1">
                                        <p class="text-white text-sm font-semibold">Wire Transfer Details</p>
                                        <span class="text-[9px] bg-yellow-500/20 text-yellow-500 border border-yellow-500/50 px-1.5 py-0.5 rounded uppercase tracking-widest">Partial Decrypt</span>
                                    </div>
                                    <p class="text-[10px] text-gray-400 italic mb-2">"Routing through [REDACTED] to avoid trigger flags. Confirm receipt."</p>
                                    <div class="text-[9px] text-gray-500 uppercase tracking-widest border-t border-white/10 pt-2 flex justify-between">
                                        <span>Channel: Beta-Net</span>
                                        <span>Intercepted: 08:14 AM</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Section 10: Verification Queue -->
                    <div class="bg-[#1a1f2e] border border-white/5 rounded-lg p-6">
                        <h4 class="font-serif text-xl text-white mb-6">Verification Queue</h4>
                        <p class="text-[10px] text-gray-400 mb-4">Raw intelligence requiring analyst sign-off.</p>
                        
                        <div class="space-y-3">
                            <div class="bg-black/50 border border-white/10 p-3 flex flex-col gap-2 rounded">
                                <div class="flex justify-between"><span class="text-xs text-white">Informant Tip (Echo)</span><span class="text-yellow-500 text-xs"><i class="fas fa-clock"></i></span></div>
                                <div class="flex gap-2">
                                    <button class="flex-1 bg-green-500/20 text-green-500 text-[10px] uppercase py-1 border border-green-500/50 hover:bg-green-500 hover:text-white transition-colors">Verify</button>
                                    <button class="flex-1 bg-red-500/20 text-red-500 text-[10px] uppercase py-1 border border-red-500/50 hover:bg-red-500 hover:text-white transition-colors">Reject</button>
                                </div>
                            </div>
                            <div class="bg-black/50 border border-white/10 p-3 flex flex-col gap-2 rounded">
                                <div class="flex justify-between"><span class="text-xs text-white">Photo ID Match</span><span class="text-yellow-500 text-xs"><i class="fas fa-clock"></i></span></div>
                                <div class="flex gap-2">
                                    <button class="flex-1 bg-green-500/20 text-green-500 text-[10px] uppercase py-1 border border-green-500/50 hover:bg-green-500 hover:text-white transition-colors">Verify</button>
                                    <button class="flex-1 bg-red-500/20 text-red-500 text-[10px] uppercase py-1 border border-red-500/50 hover:bg-red-500 hover:text-white transition-colors">Reject</button>
                                </div>
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
    content = content.replace('<!-- INJECT_TABS_HERE -->', tab3Html);
    fs.writeFileSync(file, content);
    console.log('Tab 3 injected into ' + file);
});
