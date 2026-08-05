const fs = require('fs');

['client-dashboard.html', 'admin-dashboard.html'].forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');

    // Add more rows to the main Active Cases table
    content = content.replace(/(<tbody class="divide-y divide-white\/5">)([\s\S]*?#CASE-001[\s\S]*?)(<\/tbody>)/g, (match, p1, p2, p3) => {
        let moreRows = `
                                <tr class="hover:bg-white/5 transition-colors">
                                    <td class="py-4 text-white px-4 font-medium">#CASE-008</td>
                                    <td class="py-4 px-4 text-xs">Oct 19, 2026<br><span class="text-gray-500">14:20 PM</span></td>
                                    <td class="py-4 px-4">
                                        <div class="flex items-center gap-3">
                                            <div class="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center font-serif text-xs">IW</div>
                                            <div>
                                                <p class="text-white">Iron Wall Defalcation</p>
                                                <p class="text-xs text-gray-500">Corporate Shell</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="py-4 text-white px-4">$35,000</td>
                                    <td class="py-4 px-4"><span class="text-gray-400 text-xs"><i class="fas fa-briefcase mr-1"></i> Fraud</span></td>
                                    <td class="py-4 px-4"><span class="text-green-400 border border-green-400/30 bg-green-400/10 px-3 py-1 text-[10px] uppercase tracking-widest">Active</span></td>
                                    <td class="py-4 px-4 text-right">
                                        <button class="text-gold hover:text-white transition-colors p-2"><i class="fas fa-eye"></i></button>
                                        <button class="text-gold hover:text-white transition-colors p-2"><i class="fas fa-edit"></i></button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-white/5 transition-colors">
                                    <td class="py-4 text-white px-4 font-medium">#CASE-009</td>
                                    <td class="py-4 px-4 text-xs">Oct 18, 2026<br><span class="text-gray-500">09:00 AM</span></td>
                                    <td class="py-4 px-4">
                                        <div class="flex items-center gap-3">
                                            <div class="w-8 h-8 rounded-full bg-gold text-black flex items-center justify-center font-serif text-xs">DR</div>
                                            <div>
                                                <p class="text-white">D. Richards</p>
                                                <p class="text-xs text-gray-500">Individual</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="py-4 text-white px-4">$15,000</td>
                                    <td class="py-4 px-4"><span class="text-gray-400 text-xs"><i class="fas fa-heart-broken mr-1"></i> Matrimonial</span></td>
                                    <td class="py-4 px-4"><span class="text-yellow-400 border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-[10px] uppercase tracking-widest">Surveillance</span></td>
                                    <td class="py-4 px-4 text-right">
                                        <button class="text-gold hover:text-white transition-colors p-2"><i class="fas fa-eye"></i></button>
                                        <button class="text-gold hover:text-white transition-colors p-2"><i class="fas fa-edit"></i></button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-white/5 transition-colors opacity-75">
                                    <td class="py-4 text-white px-4 font-medium">#CASE-010</td>
                                    <td class="py-4 px-4 text-xs">Oct 15, 2026<br><span class="text-gray-500">11:30 AM</span></td>
                                    <td class="py-4 px-4">
                                        <div class="flex items-center gap-3">
                                            <div class="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center font-serif text-xs">ZT</div>
                                            <div>
                                                <p class="text-white">Zero Trust Hack</p>
                                                <p class="text-xs text-gray-500">Tech Firm</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="py-4 text-white px-4">$85,000</td>
                                    <td class="py-4 px-4"><span class="text-gray-400 text-xs"><i class="fas fa-laptop-code mr-1"></i> Cyber</span></td>
                                    <td class="py-4 px-4"><span class="text-gray-500 border border-white/20 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-widest">Closed</span></td>
                                    <td class="py-4 px-4 text-right">
                                        <button class="text-gold hover:text-white transition-colors p-2"><i class="fas fa-eye"></i></button>
                                        <button class="text-gray-600 cursor-not-allowed p-2" disabled><i class="fas fa-edit"></i></button>
                                    </td>
                                </tr>`;
        return p1 + p2 + moreRows + p3;
    });

    // Expand Threat Detection Queue (Tab 1)
    content = content.replace(/(<tbody class="divide-y divide-white\/5">)([\s\S]*?#TGT-092[\s\S]*?)(<\/tbody>)/g, (match, p1, p2, p3) => {
        let moreRows = `
                                    <tr>
                                        <td class="py-4 text-white font-medium">#TGT-089</td>
                                        <td class="py-4">Wiretap Filter</td>
                                        <td class="py-4"><span class="text-red-500">Critical</span></td>
                                        <td class="py-4 text-right">
                                            <button class="bg-red-500/20 text-red-500 border border-red-500 hover:bg-red-500 hover:text-white px-4 py-1 rounded text-xs transition-colors">Review</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="py-4 text-white font-medium">#TGT-088</td>
                                        <td class="py-4">Drone Perimeter Breach</td>
                                        <td class="py-4"><span class="text-yellow-500">Elevated</span></td>
                                        <td class="py-4 text-right">
                                            <button class="bg-red-500/20 text-red-500 border border-red-500 hover:bg-red-500 hover:text-white px-4 py-1 rounded text-xs transition-colors">Review</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="py-4 text-white font-medium">#TGT-085</td>
                                        <td class="py-4">Financial Log Anomaly</td>
                                        <td class="py-4"><span class="text-yellow-500">Elevated</span></td>
                                        <td class="py-4 text-right">
                                            <button class="bg-red-500/20 text-red-500 border border-red-500 hover:bg-red-500 hover:text-white px-4 py-1 rounded text-xs transition-colors">Review</button>
                                        </td>
                                    </tr>`;
        return p1 + p2 + moreRows + p3;
    });

    fs.writeFileSync(file, content);
    console.log('Further expanded content for ' + file);
});
