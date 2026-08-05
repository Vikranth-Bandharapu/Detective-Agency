const fs = require('fs');

const tab5Html = `
            <!-- Panel: Settings -->
            <div class="dashboard-tab hidden" id="panel-settings">
                
                <!-- 1. Header -->
                <div class="flex flex-col md:flex-row justify-between md:items-end mb-8 gap-4">
                    <div>
                        <h3 class="font-serif text-3xl mb-2 text-white">Agency Configuration</h3>
                        <p class="text-sm text-gray-400">System settings, access controls, and security protocols.</p>
                    </div>
                    <div class="flex gap-4">
                        <button class="bg-gold text-black px-6 py-2 uppercase tracking-widest text-xs hover:bg-white transition-colors">Save Changes</button>
                    </div>
                </div>

                <!-- 2. Preferences Grid (3 Columns) -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div class="bg-black-light border border-white/5 p-6">
                        <h4 class="font-serif text-xl mb-4 text-white">General Preferences</h4>
                        <div class="space-y-4 text-sm text-gray-400">
                            <div class="flex justify-between items-center pb-2 border-b border-white/5">
                                <span>Default Dashboard</span>
                                <select class="bg-black border border-white/20 text-xs px-2 py-1 text-white"><option>Global Command</option></select>
                            </div>
                            <div class="flex justify-between items-center pb-2 border-b border-white/5">
                                <span>Timezone</span>
                                <select class="bg-black border border-white/20 text-xs px-2 py-1 text-white"><option>UTC +00:00 (Zulu)</option></select>
                            </div>
                        </div>
                    </div>
                    <div class="bg-black-light border border-white/5 p-6">
                        <h4 class="font-serif text-xl mb-4 text-white">Notification Matrix</h4>
                        <div class="space-y-4 text-sm text-gray-400">
                            <label class="flex items-center gap-3 cursor-pointer">
                                <input type="checkbox" checked class="accent-gold w-4 h-4">
                                <span>Critical Intel Alerts</span>
                            </label>
                            <label class="flex items-center gap-3 cursor-pointer">
                                <input type="checkbox" checked class="accent-gold w-4 h-4">
                                <span>Operative Distress Beacon</span>
                            </label>
                            <label class="flex items-center gap-3 cursor-pointer">
                                <input type="checkbox" class="accent-gold w-4 h-4">
                                <span>Daily Summary Briefing</span>
                            </label>
                        </div>
                    </div>
                    <div class="bg-black-light border border-white/5 p-6">
                        <h4 class="font-serif text-xl mb-4 text-white">Encryption Keys</h4>
                        <div class="space-y-4 text-sm text-gray-400">
                            <p class="text-xs">Current RSA Key Pair generated 45 days ago.</p>
                            <button class="w-full bg-white/5 border border-white/20 hover:text-white py-2 text-xs uppercase tracking-widest transition-colors">Rotate Keys</button>
                        </div>
                    </div>
                </div>

                <!-- 3. Access Control Header -->
                <div class="mb-6 mt-12">
                    <h3 class="font-serif text-3xl mb-2 text-white">Clearance Control</h3>
                </div>

                <!-- 4. Access Table -->
                <div class="bg-black-light border border-white/5 p-6 mb-12">
                    <div class="overflow-x-auto">
                        <table class="w-full text-left text-sm text-gray-400">
                            <thead class="text-xs uppercase tracking-widest text-gray-500 border-b border-white/10">
                                <tr>
                                    <th class="pb-4 font-normal px-2">Personnel</th>
                                    <th class="pb-4 font-normal px-2">Role</th>
                                    <th class="pb-4 font-normal px-2">Clearance Level</th>
                                    <th class="pb-4 font-normal px-2">Last Login</th>
                                    <th class="pb-4 font-normal text-right px-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-white/5">
                                <tr>
                                    <td class="py-4 text-white font-medium px-2">Director Omega</td>
                                    <td class="py-4 px-2">Admin</td>
                                    <td class="py-4 px-2"><span class="text-gold font-mono">Level 10 (Apex)</span></td>
                                    <td class="py-4 px-2">Now</td>
                                    <td class="py-4 text-right px-2">
                                        <button class="text-gray-600 cursor-not-allowed p-2" disabled><i class="fas fa-edit"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="py-4 text-white font-medium px-2">Analyst Sigma</td>
                                    <td class="py-4 px-2">Intel Officer</td>
                                    <td class="py-4 px-2"><span class="text-blue-400 font-mono">Level 7</span></td>
                                    <td class="py-4 px-2">2h ago</td>
                                    <td class="py-4 text-right px-2">
                                        <button class="text-gold hover:text-white transition-colors p-2"><i class="fas fa-edit"></i></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- 5. Financial Settings Header -->
                <div class="mb-6 mt-12">
                    <h3 class="font-serif text-3xl mb-2 text-white">Retainer Pricing Structure</h3>
                </div>

                <!-- 6. Retainer Packages Grid -->
                <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                    <div class="bg-black-light p-6 border border-white/5 text-center relative overflow-hidden group">
                        <h4 class="text-white font-serif text-lg mb-2">Standard</h4>
                        <p class="text-2xl text-gold mb-4">$5k /mo</p>
                        <p class="text-xs text-gray-500 mb-6">Basic background checks and digital footprinting.</p>
                        <button class="w-full bg-white/5 border border-white/20 hover:text-white py-2 text-xs uppercase tracking-widest transition-colors">Edit</button>
                    </div>
                    <div class="bg-black-light p-6 border border-white/5 text-center relative overflow-hidden group">
                        <h4 class="text-white font-serif text-lg mb-2">Corporate</h4>
                        <p class="text-2xl text-gold mb-4">$15k /mo</p>
                        <p class="text-xs text-gray-500 mb-6">Embezzlement scans, counter-surveillance.</p>
                        <button class="w-full bg-white/5 border border-white/20 hover:text-white py-2 text-xs uppercase tracking-widest transition-colors">Edit</button>
                    </div>
                    <div class="bg-black-light p-6 border border-gold text-center relative overflow-hidden group transform scale-105 z-10 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                        <h4 class="text-white font-serif text-lg mb-2">Black Label</h4>
                        <p class="text-2xl text-gold mb-4">$50k /mo</p>
                        <p class="text-xs text-gray-400 mb-6">24/7 dedicated operatives, VIP extraction.</p>
                        <button class="w-full bg-gold text-black py-2 text-xs uppercase tracking-widest transition-colors">Edit</button>
                    </div>
                    <div class="bg-black-light p-6 border border-white/5 text-center relative overflow-hidden group">
                        <h4 class="text-white font-serif text-lg mb-2">Phantom</h4>
                        <p class="text-2xl text-gold mb-4">POA</p>
                        <p class="text-xs text-gray-500 mb-6">Untraceable ghost operations. Invite only.</p>
                        <button class="w-full bg-white/5 border border-white/20 hover:text-white py-2 text-xs uppercase tracking-widest transition-colors">Edit</button>
                    </div>
                </div>

                <!-- 7. Security Audit Log Header -->
                <div class="mb-6 mt-12">
                    <h3 class="font-serif text-3xl mb-2 text-white">System Audit Log</h3>
                </div>

                <!-- 8. Audit Log (Alerts Style) -->
                <div class="bg-black-light border border-white/5 p-6 mb-12">
                    <ul class="space-y-4">
                        <li class="flex items-start gap-4 pb-4 border-b border-white/5">
                            <div class="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 shrink-0"><i class="fas fa-terminal"></i></div>
                            <div class="flex-1">
                                <div class="flex justify-between items-start">
                                    <p class="text-white text-sm font-medium">Auth Configuration Updated</p>
                                    <span class="text-gray-500 text-xs">Today, 08:00 AM</span>
                                </div>
                                <p class="text-gray-400 text-xs mt-1">2FA mandated for all Level 7+ personnel.</p>
                            </div>
                        </li>
                        <li class="flex items-start gap-4">
                            <div class="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 shrink-0"><i class="fas fa-terminal"></i></div>
                            <div class="flex-1">
                                <div class="flex justify-between items-start">
                                    <p class="text-white text-sm font-medium">Database Node Sync</p>
                                    <span class="text-gray-500 text-xs">Yesterday, 11:59 PM</span>
                                </div>
                                <p class="text-gray-400 text-xs mt-1">Swiss secure server mirror completed successfully.</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <!-- 9. Database Management -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    <div class="bg-black-light border border-white/5 p-6">
                        <h4 class="font-serif text-xl mb-4 text-white">Data Retention Policy</h4>
                        <p class="text-sm text-gray-400 mb-4">Automatically purge case files and intercepts after retention period expires to minimize liability.</p>
                        <select class="w-full bg-black border border-white/20 text-sm px-4 py-2 focus:outline-none focus:border-gold text-white mb-4">
                            <option>Purge after 30 days (Closed Cases)</option>
                            <option>Purge after 90 days (Closed Cases)</option>
                            <option>Retain Indefinitely</option>
                        </select>
                    </div>
                    <div class="bg-black-light border border-white/5 p-6 flex flex-col justify-center">
                        <h4 class="font-serif text-xl mb-4 text-white">Manual Backup</h4>
                        <p class="text-sm text-gray-400 mb-4">Force an encrypted backup to the cold storage vault in Geneva.</p>
                        <button class="bg-white/5 border border-white/20 hover:text-gold hover:border-gold py-2 text-xs uppercase tracking-widest transition-colors w-full">Initiate Sequence</button>
                    </div>
                </div>

                <!-- 10. Agency Killswitch -->
                <div class="mb-12 mt-12">
                    <h3 class="font-serif text-3xl mb-6 text-red-500">Omega Protocol (Killswitch)</h3>
                    <div class="bg-black border border-red-500/30 p-6 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h4 class="font-serif text-xl text-white mb-2">Complete Server Wipe</h4>
                            <p class="text-sm text-gray-400 max-w-lg">Zero-fills all agency databases, burns all cover identities, and sends extraction codes to all deployed operatives. This action is irreversible.</p>
                        </div>
                        <button class="bg-red-600 hover:bg-red-500 text-white px-8 py-3 uppercase tracking-widest font-bold whitespace-nowrap shadow-[0_0_15px_rgba(220,38,38,0.3)]">Execute Omega</button>
                    </div>
                </div>

            </div>
`;

['client-dashboard.html', 'admin-dashboard.html'].forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace('<!-- INJECT_TABS_HERE -->', tab5Html);
    fs.writeFileSync(file, content);
    console.log('Tab 5 injected into ' + file);
});
