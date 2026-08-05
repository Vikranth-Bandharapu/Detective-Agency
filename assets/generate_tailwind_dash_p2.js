const generatePanelCases = () => `
            <!-- Panel: Cases -->
            <div class="dashboard-tab" id="panel-cases">
                <!-- 1. Header Area -->
                <div class="flex flex-col md:flex-row justify-between md:items-end mb-8 gap-4 border-b border-white/10 pb-6">
                    <div>
                        <h3 class="font-serif text-3xl mb-2 text-white">Active Investigations</h3>
                        <p class="text-sm text-gray-400">Manage and oversee all ongoing field and cyber operations.</p>
                    </div>
                    <button class="border border-gold text-gold hover:bg-gold hover:text-black transition-colors px-6 py-2 uppercase tracking-widest text-[10px]">Open New Case</button>
                </div>

                <!-- 2. Priority Highlight -->
                <div class="bg-black-light border border-red-500/30 p-6 mb-8 relative group overflow-hidden">
                    <div class="absolute right-0 top-0 text-red-500/10 text-9xl -mt-8 -mr-8 group-hover:scale-110 transition-transform"><i class="fas fa-exclamation-triangle"></i></div>
                    <h4 class="text-red-500 text-[10px] uppercase tracking-widest mb-4">Critical Priority</h4>
                    <div class="flex flex-col md:flex-row justify-between md:items-center gap-6 relative z-10">
                        <div class="flex items-center gap-6">
                            <div class="w-16 h-16 bg-black border border-white/10 flex flex-col items-center justify-center">
                                <span class="text-xs text-gray-500 uppercase tracking-widest">Case</span>
                                <span class="font-serif text-white">#4021</span>
                            </div>
                            <div>
                                <h5 class="font-serif text-xl text-white">Matrimonial Surveillance (Alpha)</h5>
                                <p class="text-sm text-gray-400 mt-1">Target located at secondary safehouse. Awaiting intercept.</p>
                            </div>
                        </div>
                        <div class="flex-1 max-w-md w-full mt-4 md:mt-0">
                            <div class="flex justify-between text-[10px] uppercase tracking-widest text-gray-400 mb-2">
                                <span class="text-gold">Recon</span>
                                <span class="text-gold">Surveillance</span>
                                <span>Intercept</span>
                                <span>Closure</span>
                            </div>
                            <div class="h-1 bg-white/10 relative">
                                <div class="absolute top-0 left-0 h-full bg-gold w-3/4 animate-pulse"></div>
                            </div>
                            <p class="text-[10px] text-gray-500 mt-2 text-right">Estimated Intercept: 2 hrs</p>
                        </div>
                    </div>
                </div>

                <!-- 3. Cases Table -->
                <h3 class="font-serif text-xl mb-4 text-white">All Active Cases</h3>
                <div class="bg-black border border-white/5 p-6 mb-8 shadow-lg">
                    <div class="overflow-x-auto">
                        <table class="w-full text-left text-sm text-gray-400 whitespace-nowrap">
                            <thead class="text-[10px] uppercase tracking-widest text-gray-500 border-b border-white/10">
                                <tr>
                                    <th class="pb-4 font-normal px-2">ID</th>
                                    <th class="pb-4 font-normal px-2">Type / Client</th>
                                    <th class="pb-4 font-normal px-2">Opened</th>
                                    <th class="pb-4 font-normal px-2">Status</th>
                                    <th class="pb-4 font-normal px-2">Budget</th>
                                    <th class="pb-4 font-normal text-right px-2">Action</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-white/5">
                                <tr class="hover:bg-white/5 transition-colors group">
                                    <td class="py-4 text-white px-2 font-serif">#4029</td>
                                    <td class="py-4 px-2">
                                        <div class="text-white font-serif">Missing Person</div>
                                        <div class="text-[10px] uppercase tracking-widest mt-1">Client: Delta</div>
                                    </td>
                                    <td class="py-4 px-2">Oct 12, 2026</td>
                                    <td class="py-4 px-2"><span class="text-green-400 border border-green-400/30 px-3 py-1 text-[10px] uppercase tracking-widest">Active</span></td>
                                    <td class="py-4 text-white px-2">$15,000</td>
                                    <td class="py-4 text-right px-2">
                                        <button class="text-gold hover:text-white transition-colors uppercase tracking-widest text-[10px] border border-gold/30 px-3 py-1">Details</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-white/5 transition-colors group">
                                    <td class="py-4 text-white px-2 font-serif">#4030</td>
                                    <td class="py-4 px-2">
                                        <div class="text-white font-serif">Corporate Fraud</div>
                                        <div class="text-[10px] uppercase tracking-widest mt-1">Client: Apex</div>
                                    </td>
                                    <td class="py-4 px-2">Oct 15, 2026</td>
                                    <td class="py-4 px-2"><span class="text-blue-400 border border-blue-400/30 px-3 py-1 text-[10px] uppercase tracking-widest">Monitoring</span></td>
                                    <td class="py-4 text-white px-2">$45,000</td>
                                    <td class="py-4 text-right px-2">
                                        <button class="text-gold hover:text-white transition-colors uppercase tracking-widest text-[10px] border border-gold/30 px-3 py-1">Details</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- 4. Budget Overview -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div class="bg-black-light border border-white/5 p-8 shadow-lg">
                        <h3 class="font-serif text-2xl mb-6 text-white">Financial Burn Rate</h3>
                        <div class="space-y-6">
                            <div class="flex justify-between items-center border-b border-white/5 pb-4">
                                <div>
                                    <h5 class="text-white text-sm mb-1">Total Escrow Deposited</h5>
                                    <p class="text-[10px] uppercase tracking-widest text-gray-500">Across all active cases</p>
                                </div>
                                <span class="text-gold font-serif text-xl">$120,500</span>
                            </div>
                            <div class="flex justify-between items-center border-b border-white/5 pb-4">
                                <div>
                                    <h5 class="text-white text-sm mb-1">Expenses Incurred</h5>
                                    <p class="text-[10px] uppercase tracking-widest text-gray-500">Bribes, travel, equipment</p>
                                </div>
                                <span class="text-red-400 font-serif text-xl">$42,300</span>
                            </div>
                            <div class="flex justify-between items-center pb-4">
                                <div>
                                    <h5 class="text-white text-sm mb-1">Remaining Budget</h5>
                                    <p class="text-[10px] uppercase tracking-widest text-gray-500">Available to burn</p>
                                </div>
                                <span class="text-green-400 font-serif text-xl">$78,200</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- 5. Operative Assignment -->
                    <div class="bg-black-light border border-white/5 p-8 shadow-lg">
                        <h3 class="font-serif text-2xl mb-6 text-white">Operative Deployment</h3>
                        <div class="space-y-4">
                            <div class="flex items-center justify-between bg-black p-4 border border-white/5 group hover:border-gold/30 transition-colors cursor-pointer">
                                <div class="flex items-center gap-4">
                                    <div class="w-10 h-10 rounded-full border border-gold/50 flex items-center justify-center bg-black-light text-gold"><i class="fas fa-user-ninja"></i></div>
                                    <div><h5 class="text-white text-sm">Agent Phoenix</h5><p class="text-[10px] uppercase tracking-widest text-gray-500">Assigned: Case #4029</p></div>
                                </div>
                                <span class="text-xs text-green-400"><i class="fas fa-circle text-[8px] mr-1"></i>In Field</span>
                            </div>
                            <div class="flex items-center justify-between bg-black p-4 border border-white/5 group hover:border-gold/30 transition-colors cursor-pointer">
                                <div class="flex items-center gap-4">
                                    <div class="w-10 h-10 rounded-full border border-blue-500/50 flex items-center justify-center bg-black-light text-blue-500"><i class="fas fa-laptop-code"></i></div>
                                    <div><h5 class="text-white text-sm">Agent Ghost</h5><p class="text-[10px] uppercase tracking-widest text-gray-500">Assigned: Case #4030</p></div>
                                </div>
                                <span class="text-xs text-blue-400"><i class="fas fa-circle text-[8px] mr-1"></i>Cyber</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 6. Evidence Vault Mini -->
                <h3 class="font-serif text-xl mb-4 text-white">Recent Evidence Acquired</h3>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div class="bg-black border border-white/5 h-32 flex flex-col items-center justify-center text-gray-400 hover:text-gold hover:border-gold/30 transition-colors cursor-pointer group">
                        <i class="fas fa-camera text-3xl mb-3 group-hover:scale-110 transition-transform"></i>
                        <span class="text-[10px] uppercase tracking-widest">Surveillance_4021.zip</span>
                    </div>
                    <div class="bg-black border border-white/5 h-32 flex flex-col items-center justify-center text-gray-400 hover:text-gold hover:border-gold/30 transition-colors cursor-pointer group">
                        <i class="fas fa-file-pdf text-3xl mb-3 group-hover:scale-110 transition-transform"></i>
                        <span class="text-[10px] uppercase tracking-widest">Bank_Records.pdf</span>
                    </div>
                    <div class="bg-black border border-white/5 h-32 flex flex-col items-center justify-center text-gray-400 hover:text-gold hover:border-gold/30 transition-colors cursor-pointer group">
                        <i class="fas fa-microphone text-3xl mb-3 group-hover:scale-110 transition-transform"></i>
                        <span class="text-[10px] uppercase tracking-widest">Wiretap_Audio.wav</span>
                    </div>
                    <div class="bg-black border border-white/5 h-32 flex flex-col items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-colors cursor-pointer group bg-white/5">
                        <i class="fas fa-plus text-2xl mb-3 group-hover:rotate-90 transition-transform"></i>
                        <span class="text-[10px] uppercase tracking-widest">Upload File</span>
                    </div>
                </div>

                <!-- 7. Legal Clearances -->
                <div class="bg-black border border-white/5 p-6 shadow-lg mb-8">
                    <h3 class="font-serif text-xl mb-4 text-white">Legal Clearances & Warrants</h3>
                    <p class="text-sm text-gray-400 mb-4">All active operations are currently operating within established legal frameworks. Pending warrant for electronic wiretap on Case #4030.</p>
                    <button class="bg-transparent border border-white/20 text-white px-6 py-2 text-[10px] uppercase tracking-widest hover:border-gold hover:text-gold transition-colors">Request Subpoena</button>
                </div>
                
                <!-- 8, 9, 10. Archival / Map / Export -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="bg-black-light border border-white/5 p-6 text-center hover:bg-white/5 transition-colors cursor-pointer">
                        <i class="fas fa-archive text-gold text-3xl mb-3"></i>
                        <h4 class="text-white font-serif">Cold Case Archives</h4>
                        <p class="text-[10px] text-gray-500 uppercase mt-2">Access past files</p>
                    </div>
                    <div class="bg-black-light border border-white/5 p-6 text-center hover:bg-white/5 transition-colors cursor-pointer">
                        <i class="fas fa-map-marker-alt text-blue-500 text-3xl mb-3"></i>
                        <h4 class="text-white font-serif">Target Heatmaps</h4>
                        <p class="text-[10px] text-gray-500 uppercase mt-2">Location tracking</p>
                    </div>
                    <div class="bg-black-light border border-white/5 p-6 text-center hover:bg-white/5 transition-colors cursor-pointer">
                        <i class="fas fa-file-export text-gray-400 text-3xl mb-3"></i>
                        <h4 class="text-white font-serif">Export Case DB</h4>
                        <p class="text-[10px] text-gray-500 uppercase mt-2">Download all raw data</p>
                    </div>
                </div>
            </div>
`;
