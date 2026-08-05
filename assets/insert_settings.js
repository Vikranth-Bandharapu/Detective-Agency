const fs = require('fs');

const panelSettingsHtml = `
      <!-- Panel: Settings (Profile Details) -->
      <div id="panel-settings" class="dashboard-tab hidden">
        <!-- 1. Header Area -->
        <div class="flex flex-col md:flex-row justify-between md:items-end mb-8 gap-4 border-b border-white/10 pb-6">
            <div>
                <h3 class="font-serif text-3xl mb-2 text-white">Profile & Security</h3>
                <p class="text-sm text-gray-400">Manage operative identity, credentials, and secure communications protocols.</p>
            </div>
            <button class="border border-gold text-gold hover:bg-gold hover:text-black transition-colors px-6 py-2 uppercase tracking-widest text-[10px]">Save Changes</button>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Left Column: Profile Card -->
            <div class="lg:col-span-1 space-y-6">
                <!-- ID Card -->
                <div class="bg-[#1a1f2e] border border-white/5 p-6 rounded-lg relative overflow-hidden group">
                    <div class="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl -mr-10 -mt-10 transition-all duration-700 group-hover:bg-gold/10"></div>
                    <div class="flex flex-col items-center text-center">
                        <div class="w-24 h-24 rounded-full border-2 border-gold/30 p-1 mb-4 relative">
                            <img src="assets/client_avatar_1.jpg" onerror="this.src='https://ui-avatars.com/api/?name=Operative&background=2D3243&color=fff'" class="w-full h-full rounded-full object-cover">
                            <div class="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-[#1a1f2e]"></div>
                        </div>
                        <h4 class="text-xl text-white font-serif mb-1">Agent Phoenix</h4>
                        <p class="text-gold text-xs uppercase tracking-widest mb-4">Level 9 Clearance</p>
                        <div class="w-full bg-black/40 rounded p-3 flex justify-between items-center text-sm">
                            <span class="text-gray-500">ID Number</span>
                            <span class="text-gray-300 font-mono">#OP-773-X9</span>
                        </div>
                    </div>
                </div>

                <!-- Quick Stats -->
                <div class="bg-[#1a1f2e] border border-white/5 p-6 rounded-lg">
                    <h4 class="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Field Record</h4>
                    <div class="space-y-4">
                        <div>
                            <div class="flex justify-between text-xs mb-1"><span class="text-gray-400">Mission Success</span><span class="text-gold">94%</span></div>
                            <div class="h-1 bg-black/50 rounded-full overflow-hidden"><div class="h-full bg-gold w-[94%]"></div></div>
                        </div>
                        <div>
                            <div class="flex justify-between text-xs mb-1"><span class="text-gray-400">Covert Extractions</span><span class="text-white">42</span></div>
                            <div class="h-1 bg-black/50 rounded-full overflow-hidden"><div class="h-full bg-white/30 w-[60%]"></div></div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right Column: Forms & Settings -->
            <div class="lg:col-span-2 space-y-6">
                <!-- Personal Info -->
                <div class="bg-[#1a1f2e] border border-white/5 p-6 rounded-lg">
                    <h4 class="text-white text-sm font-semibold mb-6 uppercase tracking-wider border-b border-white/10 pb-2">Operative Dossier</h4>
                    <form class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-xs text-gray-500 uppercase tracking-widest mb-2">Alias / Callsign</label>
                            <input type="text" value="Agent Phoenix" class="w-full bg-black/50 border border-white/10 rounded px-4 py-2.5 text-gray-300 focus:outline-none focus:border-gold transition-colors text-sm">
                        </div>
                        <div>
                            <label class="block text-xs text-gray-500 uppercase tracking-widest mb-2">Primary Contact</label>
                            <input type="text" value="phoenix@stackly.int" class="w-full bg-black/50 border border-white/10 rounded px-4 py-2.5 text-gray-300 focus:outline-none focus:border-gold transition-colors text-sm">
                        </div>
                        <div>
                            <label class="block text-xs text-gray-500 uppercase tracking-widest mb-2">Location / Sector</label>
                            <input type="text" value="Sector 7, Global" class="w-full bg-black/50 border border-white/10 rounded px-4 py-2.5 text-gray-300 focus:outline-none focus:border-gold transition-colors text-sm">
                        </div>
                        <div>
                            <label class="block text-xs text-gray-500 uppercase tracking-widest mb-2">Specialization</label>
                            <input type="text" value="Covert Operations, Cyber Sec" class="w-full bg-black/50 border border-white/10 rounded px-4 py-2.5 text-gray-300 focus:outline-none focus:border-gold transition-colors text-sm">
                        </div>
                    </form>
                </div>

                <!-- Security Settings -->
                <div class="bg-[#1a1f2e] border border-white/5 p-6 rounded-lg">
                    <h4 class="text-white text-sm font-semibold mb-6 uppercase tracking-wider border-b border-white/10 pb-2">Security Protocols</h4>
                    
                    <div class="space-y-4">
                        <div class="flex items-center justify-between p-4 bg-black/30 rounded border border-white/5">
                            <div>
                                <h5 class="text-sm text-white mb-1">Two-Factor Authentication (2FA)</h5>
                                <p class="text-xs text-gray-500">Require cryptographic key for external access.</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" value="" class="sr-only peer" checked>
                              <div class="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gold"></div>
                            </label>
                        </div>

                        <div class="flex items-center justify-between p-4 bg-black/30 rounded border border-white/5">
                            <div>
                                <h5 class="text-sm text-white mb-1">Encrypted Comms Only</h5>
                                <p class="text-xs text-gray-500">Force PGP encryption on all internal messages.</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" value="" class="sr-only peer" checked>
                              <div class="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gold"></div>
                            </label>
                        </div>

                        <div class="flex items-center justify-between p-4 bg-black/30 rounded border border-white/5">
                            <div>
                                <h5 class="text-sm text-white mb-1">Location Masking</h5>
                                <p class="text-xs text-gray-500">Route connections through randomized proxies.</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" value="" class="sr-only peer">
                              <div class="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gold"></div>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- Danger Zone -->
                <div class="bg-red-900/10 border border-red-500/20 p-6 rounded-lg">
                    <h4 class="text-red-400 text-sm font-semibold mb-2 uppercase tracking-wider">Burn Identity</h4>
                    <p class="text-xs text-gray-500 mb-4">Permanently erase all operative records, case files, and communications. This action cannot be undone.</p>
                    <button class="bg-red-500/20 text-red-400 border border-red-500/50 hover:bg-red-500 hover:text-white transition-colors px-4 py-2 text-xs uppercase tracking-widest rounded">Initiate Burn Protocol</button>
                </div>
            </div>
        </div>
      </div>
`;

['client-dashboard.html', 'admin-dashboard.html'].forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // The panel needs to be inserted right before the closing </div> of the main flex container, or just before the script tag.
    // Let's find `<script>`
    const scriptIndex = content.lastIndexOf('<script>');
    if (scriptIndex !== -1) {
        // Find the last </div> before script
        const closingPoint = content.lastIndexOf('</div>', scriptIndex);
        if (closingPoint !== -1) {
            content = content.substring(0, closingPoint) + panelSettingsHtml + '\n' + content.substring(closingPoint);
            fs.writeFileSync(file, content);
            console.log('Successfully inserted into ' + file);
        }
    }
});
