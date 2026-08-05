const fs = require('fs');

['client-dashboard.html', 'admin-dashboard.html'].forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');

    // Expand System Alerts (Tab 1)
    content = content.replace(/(<ul class="space-y-4">)(\s*<li class="flex items-start[^>]*>[\s\S]*?<\/li>\s*<li class="flex items-start[^>]*>[\s\S]*?<\/li>\s*<li class="flex items-start[^>]*>[\s\S]*?<\/li>\s*)(<\/ul>)/, (match, p1, p2, p3) => {
        let extra = `
                        <li class="flex items-start gap-4 pb-4 border-b border-white/5">
                            <div class="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 shrink-0"><i class="fas fa-lock"></i></div>
                            <div class="flex-1">
                                <div class="flex justify-between items-start">
                                    <p class="text-white text-sm font-medium">Firewall Brute Force Attempt</p>
                                    <span class="text-gray-500 text-xs">6 hrs ago</span>
                                </div>
                                <p class="text-gray-400 text-xs mt-1">Origin: Proxy Node 44 (Blocked automatically)</p>
                            </div>
                        </li>
                        <li class="flex items-start gap-4 pb-4 border-b border-white/5">
                            <div class="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0"><i class="fas fa-user-secret"></i></div>
                            <div class="flex-1">
                                <div class="flex justify-between items-start">
                                    <p class="text-white text-sm font-medium">Asset Deployment Verified</p>
                                    <span class="text-gray-500 text-xs">8 hrs ago</span>
                                </div>
                                <p class="text-gray-400 text-xs mt-1">Operative Ghost reached Safehouse Charlie.</p>
                            </div>
                        </li>`;
        return p1 + p2 + extra + p3;
    });

    // Expand Active Cases Table (Tab 2)
    content = content.replace(/(<tbody class="divide-y divide-white\/5">)([\s\S]*?)(<\/tbody>)/g, (match, p1, p2, p3) => {
        // If this looks like the Active Cases table (has #CASE-001)
        if (p2.includes('#CASE-001')) {
            let extra = `
                                <tr class="hover:bg-white/5 transition-colors">
                                    <td class="py-4 text-white px-4 font-medium">#CASE-005</td>
                                    <td class="py-4 px-4 text-xs">Oct 24, 2026<br><span class="text-gray-500">11:10 AM</span></td>
                                    <td class="py-4 px-4">
                                        <div class="flex items-center gap-3">
                                            <div class="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center font-serif text-xs">MM</div>
                                            <div>
                                                <p class="text-white">Missing Minor</p>
                                                <p class="text-xs text-gray-500">Private Client</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="py-4 text-white px-4">$60,000</td>
                                    <td class="py-4 px-4"><span class="text-gray-400 text-xs"><i class="fas fa-search mr-1"></i> Missing</span></td>
                                    <td class="py-4 px-4"><span class="text-red-400 border border-red-400/30 bg-red-400/10 px-3 py-1 text-[10px] uppercase tracking-widest">Critical</span></td>
                                    <td class="py-4 px-4 text-right">
                                        <button class="text-gold hover:text-white transition-colors p-2" title="View Details"><i class="fas fa-eye"></i></button>
                                        <button class="text-gold hover:text-white transition-colors p-2" title="Update Status"><i class="fas fa-edit"></i></button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-white/5 transition-colors">
                                    <td class="py-4 text-white px-4 font-medium">#CASE-006</td>
                                    <td class="py-4 px-4 text-xs">Oct 22, 2026<br><span class="text-gray-500">18:05 PM</span></td>
                                    <td class="py-4 px-4">
                                        <div class="flex items-center gap-3">
                                            <div class="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center font-serif text-xs">NX</div>
                                            <div>
                                                <p class="text-white">Nexus Corp Leak</p>
                                                <p class="text-xs text-gray-500">Corporate Shell</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="py-4 text-white px-4">$110,000</td>
                                    <td class="py-4 px-4"><span class="text-gray-400 text-xs"><i class="fas fa-laptop-code mr-1"></i> Cyber</span></td>
                                    <td class="py-4 px-4"><span class="text-yellow-400 border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-[10px] uppercase tracking-widest">Surveillance</span></td>
                                    <td class="py-4 px-4 text-right">
                                        <button class="text-gold hover:text-white transition-colors p-2" title="View Details"><i class="fas fa-eye"></i></button>
                                        <button class="text-gold hover:text-white transition-colors p-2" title="Update Status"><i class="fas fa-edit"></i></button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-white/5 transition-colors">
                                    <td class="py-4 text-white px-4 font-medium">#CASE-007</td>
                                    <td class="py-4 px-4 text-xs">Oct 20, 2026<br><span class="text-gray-500">07:22 AM</span></td>
                                    <td class="py-4 px-4">
                                        <div class="flex items-center gap-3">
                                            <div class="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center font-serif text-xs">BS</div>
                                            <div>
                                                <p class="text-white">Black Syndicate</p>
                                                <p class="text-xs text-gray-500">Cartel</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="py-4 text-white px-4">$250,000</td>
                                    <td class="py-4 px-4"><span class="text-gray-400 text-xs"><i class="fas fa-skull mr-1"></i> Undercover</span></td>
                                    <td class="py-4 px-4"><span class="text-blue-400 border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-[10px] uppercase tracking-widest">Cold</span></td>
                                    <td class="py-4 px-4 text-right">
                                        <button class="text-gold hover:text-white transition-colors p-2" title="View Details"><i class="fas fa-eye"></i></button>
                                        <button class="text-gold hover:text-white transition-colors p-2" title="Update Status"><i class="fas fa-edit"></i></button>
                                    </td>
                                </tr>`;
            return p1 + p2 + extra + p3;
        }
        
        // If this is the Intel Table (has #INT-8842)
        if (p2.includes('#INT-8842')) {
            let extra = `
                                <tr class="hover:bg-white/5 transition-colors">
                                    <td class="py-4 text-white px-4 font-medium">#INT-8837</td>
                                    <td class="py-4 px-4 text-xs">Yesterday<br><span class="text-gray-500">11:05 AM</span></td>
                                    <td class="py-4 px-4 text-white">CCTV Facial Match</td>
                                    <td class="py-4 px-4 text-green-400">88% Match</td>
                                    <td class="py-4 px-4"><span class="text-green-400 border border-green-400/30 bg-green-400/10 px-3 py-1 text-[10px] uppercase tracking-widest">Logged</span></td>
                                    <td class="py-4 px-4 text-right">
                                        <button class="text-gold hover:text-white transition-colors p-2" title="View Image"><i class="fas fa-image"></i></button>
                                        <button class="text-gold hover:text-white transition-colors p-2" title="Download"><i class="fas fa-download"></i></button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-white/5 transition-colors">
                                    <td class="py-4 text-white px-4 font-medium">#INT-8835</td>
                                    <td class="py-4 px-4 text-xs">2 Days Ago<br><span class="text-gray-500">02:15 AM</span></td>
                                    <td class="py-4 px-4 text-white">Burner Phone Ping</td>
                                    <td class="py-4 px-4 text-green-400">100% Match</td>
                                    <td class="py-4 px-4"><span class="text-gray-500 border border-white/20 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-widest">Verified</span></td>
                                    <td class="py-4 px-4 text-right">
                                        <button class="text-gold hover:text-white transition-colors p-2" title="View Map"><i class="fas fa-map-marker-alt"></i></button>
                                        <button class="text-gold hover:text-white transition-colors p-2" title="Download"><i class="fas fa-download"></i></button>
                                    </td>
                                </tr>`;
            return p1 + p2 + extra + p3;
        }

        // If this is the Roster Table (has Phoenix)
        if (p2.includes('Phoenix')) {
            let extra = `
                                <tr class="hover:bg-white/5 transition-colors">
                                    <td class="py-4 text-white px-4 font-medium flex items-center gap-3">
                                        <div class="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center font-serif text-xs">R</div>
                                        <span>Raven</span>
                                    </td>
                                    <td class="py-4 px-4 font-mono text-xs">Level 7</td>
                                    <td class="py-4 px-4 text-white">Surveillance</td>
                                    <td class="py-4 px-4 text-yellow-400">88%</td>
                                    <td class="py-4 px-4"><span class="text-green-400 border border-green-400/30 bg-green-400/10 px-3 py-1 text-[10px] uppercase tracking-widest">Deployed</span></td>
                                    <td class="py-4 px-4 text-right">
                                        <button class="text-gold hover:text-white transition-colors p-2"><i class="fas fa-eye"></i></button>
                                        <button class="text-gold hover:text-white transition-colors p-2"><i class="fas fa-edit"></i></button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-white/5 transition-colors">
                                    <td class="py-4 text-white px-4 font-medium flex items-center gap-3">
                                        <div class="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center font-serif text-xs">C</div>
                                        <span>Cobra</span>
                                    </td>
                                    <td class="py-4 px-4 font-mono text-xs">Level 6</td>
                                    <td class="py-4 px-4 text-white">Interrogation</td>
                                    <td class="py-4 px-4 text-green-400">97%</td>
                                    <td class="py-4 px-4"><span class="text-yellow-400 border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-[10px] uppercase tracking-widest">Standby</span></td>
                                    <td class="py-4 px-4 text-right">
                                        <button class="text-gold hover:text-white transition-colors p-2"><i class="fas fa-eye"></i></button>
                                        <button class="text-gold hover:text-white transition-colors p-2"><i class="fas fa-edit"></i></button>
                                    </td>
                                </tr>`;
            return p1 + p2 + extra + p3;
        }

        return match;
    });

    fs.writeFileSync(file, content);
    console.log('Expanded content for ' + file);
});
