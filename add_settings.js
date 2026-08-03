const fs = require('fs');

const panelSettingsHtml = `
            <!-- Panel: Settings (Profile Details) -->
            <div class="dashboard-tab" id="panel-settings">
                <!-- 1. Header Area -->
                <div class="flex flex-col md:flex-row justify-between md:items-end mb-8 gap-4 border-b border-white/10 pb-6">
                    <div>
                        <h3 class="font-serif text-3xl mb-2 text-white">Profile & Security</h3>
                        <p class="text-sm text-gray-400">Manage operative identity, credentials, and secure communications protocols.</p>
                    </div>
                    <button class="border border-gold text-gold hover:bg-gold hover:text-black transition-colors px-6 py-2 uppercase tracking-widest text-[10px]">Save Changes</button>
                </div>
                
                <!-- 2. Profile Overview -->
                <div class="bg-black-light border border-white/5 p-8 mb-8 shadow-lg flex flex-col md:flex-row gap-8 items-start">
                    <div class="relative group">
                        <img src="https://placehold.co/150x150/1A1A1A/D4AF37.webp?text=Agent" class="w-32 h-32 rounded-full border-4 border-black shadow-[0_0_0_2px_#D4AF37] object-cover">
                        <div class="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                            <i class="fas fa-camera text-white"></i>
                        </div>
                    </div>
                    <div class="flex-1 w-full">
                        <div class="flex justify-between items-start mb-4">
                            <div>
                                <h4 class="font-serif text-2xl text-white">Alias Alpha</h4>
                                <p class="text-gold text-[10px] uppercase tracking-widest mt-1">Level 9 Security Clearance</p>
                            </div>
                            <span class="bg-green-500/20 text-green-500 border border-green-500/30 px-3 py-1 text-[10px] uppercase tracking-widest">Active Status</span>
                        </div>
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                            <div><p class="text-gray-500 text-[10px] uppercase tracking-widest mb-1">Operative ID</p><p class="text-white font-mono text-sm">STK-0094-X</p></div>
                            <div><p class="text-gray-500 text-[10px] uppercase tracking-widest mb-1">Division</p><p class="text-white text-sm">Covert Ops</p></div>
                            <div><p class="text-gray-500 text-[10px] uppercase tracking-widest mb-1">Deployed</p><p class="text-white text-sm">London HQ</p></div>
                            <div><p class="text-gray-500 text-[10px] uppercase tracking-widest mb-1">Blood Type</p><p class="text-red-500 font-mono text-sm">O-Negative</p></div>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <!-- 3. Personal Information -->
                    <div class="bg-black border border-white/5 p-6 shadow-lg">
                        <h4 class="font-serif text-xl mb-6 text-white border-b border-white/10 pb-4">Cover Identity Details</h4>
                        <div class="space-y-4">
                            <div><label class="text-[10px] uppercase tracking-widest text-gray-500 block mb-2">Legal Name (Alias)</label><input type="text" value="James Sterling" class="w-full bg-black-light border border-white/10 text-white px-4 py-3 text-sm focus:border-gold focus:outline-none transition-colors" readonly></div>
                            <div><label class="text-[10px] uppercase tracking-widest text-gray-500 block mb-2">Cover Occupation</label><input type="text" value="Investment Banker" class="w-full bg-black-light border border-white/10 text-white px-4 py-3 text-sm focus:border-gold focus:outline-none transition-colors"></div>
                            <div class="grid grid-cols-2 gap-4">
                                <div><label class="text-[10px] uppercase tracking-widest text-gray-500 block mb-2">Date of Birth</label><input type="text" value="1985-04-12" class="w-full bg-black-light border border-white/10 text-white px-4 py-3 text-sm font-mono focus:border-gold focus:outline-none transition-colors" readonly></div>
                                <div><label class="text-[10px] uppercase tracking-widest text-gray-500 block mb-2">Nationality</label><input type="text" value="British" class="w-full bg-black-light border border-white/10 text-white px-4 py-3 text-sm focus:border-gold focus:outline-none transition-colors"></div>
                            </div>
                        </div>
                    </div>
                    <!-- 4. Security Settings -->
                    <div class="bg-black border border-white/5 p-6 shadow-lg">
                        <h4 class="font-serif text-xl mb-6 text-white border-b border-white/10 pb-4">Authentication Protocols</h4>
                        <div class="space-y-6">
                            <div><label class="text-[10px] uppercase tracking-widest text-gray-500 block mb-2">Current Passphrase</label><input type="password" value="**********" class="w-full bg-black-light border border-white/10 text-white px-4 py-3 text-sm focus:border-gold focus:outline-none transition-colors"></div>
                            <div class="flex items-center justify-between p-4 border border-white/10 bg-white/5 group hover:border-gold/50 cursor-pointer transition-colors">
                                <div class="flex items-center gap-4"><i class="fas fa-fingerprint text-2xl text-gold group-hover:scale-110 transition-transform"></i><div><p class="text-white text-sm">Biometric Authentication</p><p class="text-[10px] text-gray-400">Fingerprint & Retinal Scan</p></div></div><span class="text-green-500 text-xs uppercase tracking-widest">Active</span>
                            </div>
                            <div class="flex items-center justify-between p-4 border border-white/10 bg-black-light group hover:border-gold/50 cursor-pointer transition-colors">
                                <div class="flex items-center gap-4"><i class="fas fa-mobile-alt text-2xl text-gray-500 group-hover:text-white transition-colors"></i><div><p class="text-white text-sm">Hardware Token (2FA)</p><p class="text-[10px] text-gray-400">YubiKey Series 5</p></div></div><button class="text-[10px] text-gold uppercase tracking-widest border border-gold px-3 py-1 hover:bg-gold hover:text-black transition-colors">Configure</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 5. Comms Settings -->
                <div class="bg-black border border-white/5 p-6 mb-8 shadow-lg">
                    <h4 class="font-serif text-xl mb-6 text-white border-b border-white/10 pb-4">Secure Communications</h4>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="p-4 border border-white/10 bg-black-light">
                            <i class="fas fa-satellite-dish text-2xl text-blue-500 mb-3"></i>
                            <h5 class="text-white text-sm mb-1">Encrypted Relay</h5>
                            <p class="text-[10px] text-gray-400 mb-3">Route all traffic through Swiss servers.</p>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="sr-only peer" checked>
                                <div class="w-9 h-5 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-gold"></div>
                            </label>
                        </div>
                        <div class="p-4 border border-white/10 bg-black-light">
                            <i class="fas fa-microphone-slash text-2xl text-gold mb-3"></i>
                            <h5 class="text-white text-sm mb-1">Audio Masking</h5>
                            <p class="text-[10px] text-gray-400 mb-3">Real-time voice modulation active.</p>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="sr-only peer" checked>
                                <div class="w-9 h-5 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-gold"></div>
                            </label>
                        </div>
                        <div class="p-4 border border-white/10 bg-black-light">
                            <i class="fas fa-history text-2xl text-red-500 mb-3"></i>
                            <h5 class="text-white text-sm mb-1">Auto-Wipe Messages</h5>
                            <p class="text-[10px] text-gray-400 mb-3">Delete all comms after 24 hours.</p>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="sr-only peer">
                                <div class="w-9 h-5 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-gold"></div>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- 6. Offshore Accounts -->
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    <div class="lg:col-span-2 bg-black border border-white/5 p-6 shadow-lg">
                        <h4 class="font-serif text-xl mb-6 text-white border-b border-white/10 pb-4">Linked Offshore Accounts</h4>
                        <table class="w-full text-left text-sm text-gray-400">
                            <thead class="text-[10px] uppercase tracking-widest text-gray-500">
                                <tr>
                                    <th class="pb-3 font-normal">Bank / Institution</th>
                                    <th class="pb-3 font-normal">Account Hash</th>
                                    <th class="pb-3 font-normal">Balance</th>
                                    <th class="pb-3 font-normal text-right">Status</th>
                                </tr>
                            </thead>
                            <tbody class="border-t border-white/10 divide-y divide-white/5">
                                <tr class="hover:bg-white/5 transition-colors">
                                    <td class="py-3 text-white">Zurich Cantonal</td>
                                    <td class="py-3 font-mono text-xs">CH93 **** **** 4021</td>
                                    <td class="py-3 text-gold">$125,000</td>
                                    <td class="py-3 text-right"><span class="text-green-400 text-[10px] uppercase border border-green-400/30 px-2 py-1">Verified</span></td>
                                </tr>
                                <tr class="hover:bg-white/5 transition-colors">
                                    <td class="py-3 text-white">Cayman National</td>
                                    <td class="py-3 font-mono text-xs">KY14 **** **** 9912</td>
                                    <td class="py-3 text-gold">$85,400</td>
                                    <td class="py-3 text-right"><span class="text-green-400 text-[10px] uppercase border border-green-400/30 px-2 py-1">Verified</span></td>
                                </tr>
                                <tr class="hover:bg-white/5 transition-colors">
                                    <td class="py-3 text-white">Crypto Wallet (Cold)</td>
                                    <td class="py-3 font-mono text-xs">0x3A2...9B1C</td>
                                    <td class="py-3 text-gold">4.2 BTC</td>
                                    <td class="py-3 text-right"><span class="text-gray-500 text-[10px] uppercase border border-gray-500/30 px-2 py-1">Hidden</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- 7. Emergency Burn -->
                    <div class="lg:col-span-1 bg-red-900/10 border border-red-500/30 p-6 shadow-lg text-center flex flex-col justify-center relative overflow-hidden group">
                        <i class="fas fa-fire-alt text-9xl absolute right-0 top-0 text-red-500/10 -mt-4 -mr-4 group-hover:scale-110 transition-transform"></i>
                        <h4 class="font-serif text-2xl text-red-500 mb-2 relative z-10">Burn Identity</h4>
                        <p class="text-xs text-gray-300 mb-6 relative z-10">Erase all digital traces of this alias, wipe associated accounts, and initiate extraction protocol.</p>
                        <button class="relative z-10 bg-red-500 text-white uppercase tracking-widest text-xs font-bold py-3 px-6 hover:bg-red-600 transition-colors border border-red-500 hover:border-red-600">Initiate Protocol</button>
                    </div>
                </div>

                <!-- 8, 9, 10, 11. Activity Log & Access history -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div class="bg-black-light border border-white/5 p-6 shadow-lg">
                        <h4 class="font-serif text-lg text-white mb-4">Recent Access Logs</h4>
                        <div class="space-y-4">
                            <div class="flex items-start gap-3 border-b border-white/5 pb-3">
                                <i class="fas fa-desktop text-gray-500 mt-1"></i>
                                <div><p class="text-sm text-white">Login from 192.168.x.x (VPN)</p><p class="text-[10px] text-gray-500 uppercase">Today, 08:14 AM</p></div>
                                <span class="ml-auto text-green-500 text-[10px]">Success</span>
                            </div>
                            <div class="flex items-start gap-3 border-b border-white/5 pb-3">
                                <i class="fas fa-file-download text-gold mt-1"></i>
                                <div><p class="text-sm text-white">Downloaded Intel Report #4029</p><p class="text-[10px] text-gray-500 uppercase">Yesterday, 22:45 PM</p></div>
                                <span class="ml-auto text-green-500 text-[10px]">Success</span>
                            </div>
                            <div class="flex items-start gap-3 border-b border-white/5 pb-3">
                                <i class="fas fa-shield-alt text-red-500 mt-1"></i>
                                <div><p class="text-sm text-white">Failed Auth Attempt</p><p class="text-[10px] text-gray-500 uppercase">Oct 14, 03:22 AM</p></div>
                                <span class="ml-auto text-red-500 text-[10px]">Blocked</span>
                            </div>
                        </div>
                    </div>
                    <div class="bg-black border border-white/5 p-6 shadow-lg">
                        <h4 class="font-serif text-lg text-white mb-4">Notification Preferences</h4>
                        <div class="space-y-3">
                            <label class="flex items-center justify-between p-3 bg-white/5 border border-white/10 cursor-pointer hover:border-gold/50 transition-colors">
                                <span class="text-sm text-gray-300">Intel Brief Updates</span>
                                <input type="checkbox" checked class="form-checkbox text-gold border-gray-600 rounded bg-black h-4 w-4">
                            </label>
                            <label class="flex items-center justify-between p-3 bg-white/5 border border-white/10 cursor-pointer hover:border-gold/50 transition-colors">
                                <span class="text-sm text-gray-300">Target Movement Alerts</span>
                                <input type="checkbox" checked class="form-checkbox text-gold border-gray-600 rounded bg-black h-4 w-4">
                            </label>
                            <label class="flex items-center justify-between p-3 bg-white/5 border border-white/10 cursor-pointer hover:border-gold/50 transition-colors">
                                <span class="text-sm text-gray-300">Financial Transaction Receipts</span>
                                <input type="checkbox" class="form-checkbox text-gold border-gray-600 rounded bg-black h-4 w-4">
                            </label>
                            <label class="flex items-center justify-between p-3 bg-white/5 border border-white/10 cursor-pointer hover:border-gold/50 transition-colors">
                                <span class="text-sm text-gray-300">Emergency Broadcasts</span>
                                <input type="checkbox" checked disabled class="form-checkbox text-gold border-gray-600 rounded bg-black h-4 w-4 opacity-50 cursor-not-allowed">
                            </label>
                        </div>
                    </div>
                </div>

                <!-- 12. Equipment Loadout -->
                <div class="bg-black border border-white/5 p-6 shadow-lg mb-8">
                    <h4 class="font-serif text-xl mb-4 text-white border-b border-white/10 pb-4">Issued Equipment</h4>
                    <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
                        <div class="border border-white/10 p-4 flex flex-col items-center text-center group cursor-pointer hover:border-gold">
                            <i class="fas fa-laptop text-2xl text-gray-500 mb-2 group-hover:text-gold transition-colors"></i>
                            <span class="text-[10px] text-white uppercase tracking-widest">Encrypted Laptop</span>
                            <span class="text-[8px] text-green-500 mt-1">Status: OK</span>
                        </div>
                        <div class="border border-white/10 p-4 flex flex-col items-center text-center group cursor-pointer hover:border-gold">
                            <i class="fas fa-mobile text-2xl text-gray-500 mb-2 group-hover:text-gold transition-colors"></i>
                            <span class="text-[10px] text-white uppercase tracking-widest">Burner Phone</span>
                            <span class="text-[8px] text-green-500 mt-1">Status: OK</span>
                        </div>
                        <div class="border border-white/10 p-4 flex flex-col items-center text-center group cursor-pointer hover:border-gold">
                            <i class="fas fa-camera-retro text-2xl text-gray-500 mb-2 group-hover:text-gold transition-colors"></i>
                            <span class="text-[10px] text-white uppercase tracking-widest">Micro Camera</span>
                            <span class="text-[8px] text-green-500 mt-1">Status: OK</span>
                        </div>
                        <div class="border border-white/10 p-4 flex flex-col items-center text-center group cursor-pointer hover:border-gold">
                            <i class="fas fa-car text-2xl text-gray-500 mb-2 group-hover:text-gold transition-colors"></i>
                            <span class="text-[10px] text-white uppercase tracking-widest">Covert Vehicle</span>
                            <span class="text-[8px] text-gold mt-1">Status: Maintenance</span>
                        </div>
                        <div class="border border-white/10 bg-white/5 p-4 flex flex-col items-center text-center group cursor-pointer hover:border-white">
                            <i class="fas fa-plus text-xl text-gray-500 mb-2 group-hover:text-white transition-colors"></i>
                            <span class="text-[10px] text-gray-400 uppercase tracking-widest">Request Gear</span>
                        </div>
                    </div>
                </div>
                
                <!-- 13, 14, 15, 16. Language, Skills, Bio, Medical -->
                <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div class="bg-black-light border border-white/5 p-4 shadow-lg text-center">
                        <i class="fas fa-language text-3xl text-gold mb-2"></i>
                        <h5 class="text-white text-sm font-serif mb-1">Languages</h5>
                        <p class="text-[10px] text-gray-400">English (Native), Russian (Fluent), Mandarin (Basic)</p>
                    </div>
                    <div class="bg-black-light border border-white/5 p-4 shadow-lg text-center">
                        <i class="fas fa-crosshairs text-3xl text-gold mb-2"></i>
                        <h5 class="text-white text-sm font-serif mb-1">Specialties</h5>
                        <p class="text-[10px] text-gray-400">Close Quarters, Cyber Infiltration, Tail & Trace</p>
                    </div>
                    <div class="bg-black-light border border-white/5 p-4 shadow-lg text-center">
                        <i class="fas fa-dna text-3xl text-blue-500 mb-2"></i>
                        <h5 class="text-white text-sm font-serif mb-1">Biometrics</h5>
                        <p class="text-[10px] text-gray-400">DNA Profile logged at HQ. Iris scan updated 2 weeks ago.</p>
                    </div>
                    <div class="bg-black-light border border-white/5 p-4 shadow-lg text-center">
                        <i class="fas fa-heartbeat text-3xl text-red-500 mb-2"></i>
                        <h5 class="text-white text-sm font-serif mb-1">Medical</h5>
                        <p class="text-[10px] text-gray-400">No allergies. Cleared for high-stress deployment.</p>
                    </div>
                </div>

                <!-- 17, 18, 19, 20. Dead Drops, Handlers, Clearance, Signout -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-black border border-white/5 p-6 shadow-lg">
                        <h4 class="font-serif text-lg text-white mb-4">Assigned Handlers</h4>
                        <div class="flex items-center gap-4 bg-white/5 p-3 border border-white/10 mb-3">
                            <div class="w-8 h-8 bg-black border border-gold/50 rounded-full flex items-center justify-center text-gold text-xs">D</div>
                            <div><p class="text-sm text-white">Director (Primary)</p><p class="text-[10px] text-gray-500 uppercase">Comm Channel: Encrypted-Alpha</p></div>
                        </div>
                        <div class="flex items-center gap-4 bg-white/5 p-3 border border-white/10">
                            <div class="w-8 h-8 bg-black border border-blue-500/50 rounded-full flex items-center justify-center text-blue-500 text-xs">O</div>
                            <div><p class="text-sm text-white">Overwatch (Tactical)</p><p class="text-[10px] text-gray-500 uppercase">Comm Channel: Relay-Beta</p></div>
                        </div>
                    </div>
                    
                    <div class="bg-black border border-white/5 p-6 shadow-lg flex flex-col justify-center">
                        <h4 class="font-serif text-lg text-white mb-4">System Actions</h4>
                        <div class="flex gap-4">
                            <button class="flex-1 bg-transparent border border-white/20 text-white py-3 text-[10px] uppercase tracking-widest hover:border-gold hover:text-gold transition-colors">Export Profile Data</button>
                            <button class="flex-1 bg-black-light border border-white/10 text-gray-400 py-3 text-[10px] uppercase tracking-widest hover:text-white transition-colors">Initiate Comms Check</button>
                        </div>
                    </div>
                </div>
            </div>
`;

['client-dashboard.html', 'admin-dashboard.html'].forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    const closingPoint = content.lastIndexOf('</div>\\n    </main>');
    if (closingPoint !== -1) {
        content = content.substring(0, closingPoint) + panelSettingsHtml + '\\n    </div>\\n    </main>';
        fs.writeFileSync(file, content);
        console.log('Successfully added panel-settings to ' + file);
    } else {
        console.error('Could not find insertion point in ' + file);
    }
});
