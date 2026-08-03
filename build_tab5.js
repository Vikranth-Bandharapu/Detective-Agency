const fs = require('fs');

const tab5Html = `
            <!-- Panel: Settings -->
            <div class="dashboard-tab hidden" id="panel-settings">
                
                <!-- Section 1: Header -->
                <div class="flex flex-col md:flex-row justify-between md:items-end mb-8 gap-4 border-b border-white/10 pb-6">
                    <div>
                        <h3 class="font-serif text-3xl mb-2 text-white">System Configuration</h3>
                        <p class="text-sm text-gray-400">Manage security protocols, agency preferences, and system logs.</p>
                    </div>
                    <div>
                        <button class="bg-gold hover:bg-white text-black px-6 py-2 text-xs uppercase tracking-widest rounded transition-colors font-semibold">Save Changes</button>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    <!-- Column 1: Profile & Security -->
                    <div class="space-y-6 lg:col-span-1">
                        
                        <!-- Section 1: Profile Settings -->
                        <div class="bg-[#1a1f2e] border border-white/5 rounded-lg p-6">
                            <h4 class="font-serif text-xl text-white mb-4">Director Profile</h4>
                            <div class="flex items-center gap-4 mb-4">
                                <div class="w-16 h-16 rounded-full bg-black border border-gold overflow-hidden">
                                    <i class="fas fa-user-secret w-full h-full flex items-center justify-center text-3xl text-gold"></i>
                                </div>
                                <div>
                                    <button class="text-xs text-gold border border-gold px-3 py-1 rounded hover:bg-gold hover:text-black transition-colors">Change Avatar</button>
                                </div>
                            </div>
                            <div class="space-y-3">
                                <div>
                                    <label class="text-[10px] text-gray-500 uppercase tracking-widest block mb-1">Codename / Alias</label>
                                    <input type="text" value="Director_Omega" class="w-full bg-black/50 border border-white/10 text-xs px-3 py-2 text-white rounded focus:border-gold outline-none">
                                </div>
                                <div>
                                    <label class="text-[10px] text-gray-500 uppercase tracking-widest block mb-1">Secure Email</label>
                                    <input type="email" value="cmd@stackly.agency" class="w-full bg-black/50 border border-white/10 text-xs px-3 py-2 text-white rounded focus:border-gold outline-none">
                                </div>
                            </div>
                        </div>

                        <!-- Section 2: Security & 2FA -->
                        <div class="bg-[#1a1f2e] border border-white/5 rounded-lg p-6">
                            <h4 class="font-serif text-xl text-white mb-4">Security Protocols</h4>
                            <div class="space-y-4">
                                <div class="flex justify-between items-center pb-3 border-b border-white/5">
                                    <div>
                                        <p class="text-white text-sm">Two-Factor Auth</p>
                                        <p class="text-[10px] text-gray-400">YubiKey / Biometric</p>
                                    </div>
                                    <div class="w-10 h-5 bg-green-500 rounded-full relative cursor-pointer">
                                        <div class="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                                    </div>
                                </div>
                                <div class="flex justify-between items-center pb-3 border-b border-white/5">
                                    <div>
                                        <p class="text-white text-sm">Self-Destruct PIN</p>
                                        <p class="text-[10px] text-gray-400">Wipes local storage on entry</p>
                                    </div>
                                    <div class="w-10 h-5 bg-black border border-white/20 rounded-full relative cursor-pointer">
                                        <div class="w-4 h-4 bg-gray-400 rounded-full absolute left-0.5 top-0.5"></div>
                                    </div>
                                </div>
                                <div>
                                    <button class="w-full text-xs text-center border border-white/10 text-gray-300 py-2 rounded hover:bg-white/5 transition-colors">Change Master Password</button>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Section 3: Notification Prefs -->
                        <div class="bg-[#1a1f2e] border border-white/5 rounded-lg p-6">
                            <h4 class="font-serif text-xl text-white mb-4">Alert Preferences</h4>
                            <div class="space-y-2">
                                <label class="flex items-center gap-3 cursor-pointer group">
                                    <input type="checkbox" checked class="accent-gold w-4 h-4">
                                    <span class="text-xs text-gray-300 group-hover:text-white">Critical Threat Alerts (SMS)</span>
                                </label>
                                <label class="flex items-center gap-3 cursor-pointer group">
                                    <input type="checkbox" checked class="accent-gold w-4 h-4">
                                    <span class="text-xs text-gray-300 group-hover:text-white">Operative M.I.A Pings</span>
                                </label>
                                <label class="flex items-center gap-3 cursor-pointer group">
                                    <input type="checkbox" class="accent-gold w-4 h-4">
                                    <span class="text-xs text-gray-300 group-hover:text-white">Daily Intel Summaries</span>
                                </label>
                                <label class="flex items-center gap-3 cursor-pointer group">
                                    <input type="checkbox" checked class="accent-gold w-4 h-4">
                                    <span class="text-xs text-gray-300 group-hover:text-white">System Breach Warnings</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <!-- Column 2 & 3: Wide Settings -->
                    <div class="lg:col-span-2 space-y-6">
                        
                        <!-- Section 4 & 5: UI & Comms in a grid -->
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <!-- Section 4: UI Appearance -->
                            <div class="bg-[#1a1f2e] border border-white/5 rounded-lg p-6">
                                <h4 class="font-serif text-xl text-white mb-4">Interface Theme</h4>
                                <div class="grid grid-cols-2 gap-4">
                                    <div class="border-2 border-gold rounded p-2 bg-black cursor-pointer">
                                        <div class="h-12 bg-[#1a1f2e] rounded mb-2 flex items-center justify-center">
                                            <i class="fas fa-moon text-gold"></i>
                                        </div>
                                        <p class="text-center text-[10px] text-white uppercase tracking-widest">Tactical Dark</p>
                                    </div>
                                    <div class="border-2 border-transparent rounded p-2 bg-white/5 opacity-50 cursor-not-allowed">
                                        <div class="h-12 bg-gray-200 rounded mb-2 flex items-center justify-center">
                                            <i class="fas fa-sun text-gray-400"></i>
                                        </div>
                                        <p class="text-center text-[10px] text-gray-400 uppercase tracking-widest">Civilian Light</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Section 5: Comms Protocols -->
                            <div class="bg-[#1a1f2e] border border-white/5 rounded-lg p-6">
                                <h4 class="font-serif text-xl text-white mb-4">Comms Encryption</h4>
                                <div>
                                    <label class="text-[10px] text-gray-500 uppercase tracking-widest block mb-1">Default Cipher Protocol</label>
                                    <select class="w-full bg-black/50 border border-white/10 text-xs px-3 py-2 text-white rounded focus:border-gold outline-none mb-4">
                                        <option>AES-256-GCM (Standard)</option>
                                        <option>ChaCha20-Poly1305</option>
                                        <option>Quantum-Resistant (Experimental)</option>
                                    </select>
                                </div>
                                <button class="w-full bg-black border border-white/10 hover:border-gold text-xs text-gold py-2 rounded transition-colors"><i class="fas fa-sync-alt mr-2"></i>Rotate Encryption Keys</button>
                            </div>
                        </div>

                        <!-- Section 6 & 7: Billing & API -->
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            
                            <!-- Section 6: Funding / Billing -->
                            <div class="bg-[#1a1f2e] border border-white/5 rounded-lg p-6">
                                <h4 class="font-serif text-xl text-white mb-4">Agency Funding</h4>
                                <div class="flex justify-between items-center bg-black/40 p-4 border border-white/5 rounded mb-4">
                                    <div>
                                        <p class="text-[10px] text-gray-500 uppercase tracking-widest">Linked Offshore Account</p>
                                        <p class="text-white font-mono mt-1">**** **** **** 8992</p>
                                    </div>
                                    <i class="fab fa-cc-visa text-2xl text-gray-400"></i>
                                </div>
                                <div class="flex justify-between text-xs">
                                    <span class="text-gray-400">Next Auto-Transfer:</span>
                                    <span class="text-white">01-SEP-2026</span>
                                </div>
                            </div>

                            <!-- Section 7: API Integrations -->
                            <div class="bg-[#1a1f2e] border border-white/5 rounded-lg p-6">
                                <h4 class="font-serif text-xl text-white mb-4">External APIs</h4>
                                <div class="space-y-3">
                                    <div class="flex justify-between items-center text-xs">
                                        <span class="text-white flex items-center gap-2"><i class="fas fa-satellite text-blue-500"></i> Sat-Nav Uplink</span>
                                        <span class="text-green-500">Connected</span>
                                    </div>
                                    <div class="flex justify-between items-center text-xs">
                                        <span class="text-white flex items-center gap-2"><i class="fas fa-database text-gray-400"></i> INTERPOL DB</span>
                                        <span class="text-green-500">Connected</span>
                                    </div>
                                    <div class="flex justify-between items-center text-xs">
                                        <span class="text-white flex items-center gap-2"><i class="fas fa-network-wired text-gold"></i> Dark Web Scraper</span>
                                        <span class="text-red-500">API Key Expired</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Section 8, 9, 10: Data, Logs, Info -->
                        <div class="bg-[#1a1f2e] border border-white/5 rounded-lg p-6">
                            <h4 class="font-serif text-xl text-white mb-6">System Administration</h4>
                            
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                                
                                <!-- Section 8: Data Export -->
                                <div class="border-r border-white/10 pr-6">
                                    <h5 class="text-sm text-white mb-2"><i class="fas fa-hdd text-gray-400 mr-2"></i>Data Management</h5>
                                    <p class="text-[10px] text-gray-500 mb-4">Export case files or trigger complete data wipe.</p>
                                    <div class="space-y-2">
                                        <button class="w-full bg-black border border-white/10 text-xs text-gray-300 py-1.5 rounded hover:bg-white/5">Download Backup</button>
                                        <button class="w-full bg-red-950/30 border border-red-500/30 text-xs text-red-500 py-1.5 rounded hover:bg-red-900/50">Emergency Wipe</button>
                                    </div>
                                </div>

                                <!-- Section 9: Audit Logs -->
                                <div class="border-r border-white/10 pr-6">
                                    <h5 class="text-sm text-white mb-2"><i class="fas fa-list text-gray-400 mr-2"></i>Audit Logs</h5>
                                    <ul class="text-[9px] font-mono text-gray-400 space-y-2 mb-4">
                                        <li>[10:42:01] ROOT Login via VPN</li>
                                        <li>[09:14:22] FW Rule updated</li>
                                        <li>[08:55:10] Failed auth (IP: 45.2.1...)</li>
                                    </ul>
                                    <button class="text-gold text-[10px] hover:underline">View Full Log</button>
                                </div>

                                <!-- Section 10: Version Info -->
                                <div>
                                    <h5 class="text-sm text-white mb-2"><i class="fas fa-info-circle text-gray-400 mr-2"></i>System Info</h5>
                                    <div class="text-[10px] text-gray-500 space-y-1">
                                        <p>Stackly OS v4.2.1-Omega</p>
                                        <p>Build: 2026.08.02.a</p>
                                        <p class="mt-4">Property of Unknown Entity. Unauthorized access will trigger immediate lethal response protocols.</p>
                                    </div>
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
    // For the final script, we can just replace the placeholder with the final HTML, leaving no placeholder behind.
    content = content.replace('<!-- INJECT_TABS_HERE -->', tab5Html);
    fs.writeFileSync(file, content);
    console.log('Tab 5 injected into ' + file);
});
