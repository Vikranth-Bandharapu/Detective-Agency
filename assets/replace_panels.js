const fs = require('fs');

const panelCasesHtml = `
            <!-- Panel: Cases -->
            <div class="dashboard-tab hidden" id="panel-cases">
                <div class="flex flex-col md:flex-row justify-between md:items-end mb-8 gap-4 border-b border-white/10 pb-6">
                    <div>
                        <h3 class="font-serif text-3xl mb-2 text-white">Active Case Files</h3>
                        <p class="text-sm text-gray-400">Classified ongoing investigations and surveillance operations.</p>
                    </div>
                    <button class="bg-gold text-black hover:bg-white transition-colors px-6 py-2 uppercase tracking-widest text-[10px] font-bold rounded">New Case +</button>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <!-- Case 1 -->
                    <div class="bg-[#1a1f2e] border border-white/5 rounded-lg overflow-hidden group hover:border-gold/30 transition-all duration-300">
                        <div class="h-32 bg-cover bg-center relative" style="background-image: url('assets/corporate_fraud.jpg');">
                            <div class="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all"></div>
                            <div class="absolute top-4 left-4 bg-red-500/20 text-red-500 border border-red-500/50 px-2 py-1 text-[9px] uppercase tracking-widest rounded backdrop-blur-md">High Priority</div>
                        </div>
                        <div class="p-6">
                            <div class="flex justify-between items-center mb-3">
                                <span class="text-xs text-gold font-mono tracking-wider">#CF-8921-X</span>
                                <span class="text-xs text-gray-500">Day 14</span>
                            </div>
                            <h4 class="text-lg text-white font-serif mb-2">Operation: Shadow Ledger</h4>
                            <p class="text-xs text-gray-400 mb-4 line-clamp-2">Corporate espionage and embezzlement within a Fortune 500 logistics firm. Subject has moved 4.2M offshore.</p>
                            
                            <div class="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
                                <div class="flex -space-x-2">
                                    <img class="w-6 h-6 rounded-full border border-black" src="assets/client_avatar_1.jpg" onerror="this.src='https://ui-avatars.com/api/?name=O1&background=2D3243&color=fff'">
                                    <img class="w-6 h-6 rounded-full border border-black" src="assets/client_avatar_2.jpg" onerror="this.src='https://ui-avatars.com/api/?name=O2&background=2D3243&color=fff'">
                                </div>
                                <span class="text-[10px] uppercase tracking-widest text-gray-500 hover:text-gold cursor-pointer transition-colors">View Details <i class="fas fa-arrow-right ml-1"></i></span>
                            </div>
                        </div>
                    </div>

                    <!-- Case 2 -->
                    <div class="bg-[#1a1f2e] border border-white/5 rounded-lg overflow-hidden group hover:border-gold/30 transition-all duration-300">
                        <div class="h-32 bg-cover bg-center relative" style="background-image: url('assets/matrimonial.jpg');">
                            <div class="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all"></div>
                            <div class="absolute top-4 left-4 bg-yellow-500/20 text-yellow-500 border border-yellow-500/50 px-2 py-1 text-[9px] uppercase tracking-widest rounded backdrop-blur-md">Surveillance</div>
                        </div>
                        <div class="p-6">
                            <div class="flex justify-between items-center mb-3">
                                <span class="text-xs text-gold font-mono tracking-wider">#PI-4492-M</span>
                                <span class="text-xs text-gray-500">Day 3</span>
                            </div>
                            <h4 class="text-lg text-white font-serif mb-2">Subject: V. Sterling</h4>
                            <p class="text-xs text-gray-400 mb-4 line-clamp-2">Suspected infidelity. Subject claims to be on business trips in Geneva, but cellular tower pings indicate otherwise.</p>
                            
                            <div class="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
                                <div class="flex -space-x-2">
                                    <img class="w-6 h-6 rounded-full border border-black" src="assets/client_avatar_3.jpg" onerror="this.src='https://ui-avatars.com/api/?name=O3&background=2D3243&color=fff'">
                                </div>
                                <span class="text-[10px] uppercase tracking-widest text-gray-500 hover:text-gold cursor-pointer transition-colors">View Details <i class="fas fa-arrow-right ml-1"></i></span>
                            </div>
                        </div>
                    </div>

                    <!-- Case 3 -->
                    <div class="bg-[#1a1f2e] border border-white/5 rounded-lg overflow-hidden group hover:border-gold/30 transition-all duration-300">
                        <div class="h-32 bg-cover bg-center relative" style="background-image: url('assets/missing_person.jpg');">
                            <div class="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all"></div>
                            <div class="absolute top-4 left-4 bg-blue-500/20 text-blue-400 border border-blue-500/50 px-2 py-1 text-[9px] uppercase tracking-widest rounded backdrop-blur-md">Cold Case</div>
                        </div>
                        <div class="p-6">
                            <div class="flex justify-between items-center mb-3">
                                <span class="text-xs text-gold font-mono tracking-wider">#MP-1102-C</span>
                                <span class="text-xs text-gray-500">Day 412</span>
                            </div>
                            <h4 class="text-lg text-white font-serif mb-2">Project: Echo</h4>
                            <p class="text-xs text-gray-400 mb-4 line-clamp-2">Missing person report. Wealthy heir vanished from yacht off the coast of Monaco. No ransom demands received.</p>
                            
                            <div class="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
                                <div class="flex -space-x-2">
                                    <img class="w-6 h-6 rounded-full border border-black" src="assets/client_avatar_1.jpg" onerror="this.src='https://ui-avatars.com/api/?name=O1&background=2D3243&color=fff'">
                                </div>
                                <span class="text-[10px] uppercase tracking-widest text-gray-500 hover:text-gold cursor-pointer transition-colors">View Details <i class="fas fa-arrow-right ml-1"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>\n`;

const panelIntelHtml = `
            <!-- Panel: Intel Reports -->
            <div class="dashboard-tab hidden" id="panel-intel">
                <div class="flex flex-col md:flex-row justify-between md:items-end mb-8 gap-4 border-b border-white/10 pb-6">
                    <div>
                        <h3 class="font-serif text-3xl mb-2 text-white">Global Intelligence</h3>
                        <p class="text-sm text-gray-400">Live feeds, intercepted communications, and geospatial tracking.</p>
                    </div>
                    <div class="flex space-x-2">
                        <button class="bg-[#1a1f2e] border border-white/10 text-gray-300 hover:text-white transition-colors px-4 py-2 text-[10px] uppercase tracking-widest rounded"><i class="fas fa-filter mr-2"></i>Filter</button>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <!-- Left: Live Map / Map Placeholder -->
                    <div class="lg:col-span-2 bg-[#1a1f2e] border border-white/5 rounded-lg p-1">
                        <div class="h-[400px] w-full rounded bg-black relative overflow-hidden flex items-center justify-center">
                            <!-- Faux Map Grid Background -->
                            <div class="absolute inset-0" style="background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 20px 20px;"></div>
                            <!-- Radar Sweep Effect -->
                            <div class="absolute inset-0 rounded-full border border-gold/10 animate-ping" style="width: 200%; height: 200%; left: -50%; top: -50%;"></div>
                            
                            <div class="text-center z-10">
                                <i class="fas fa-globe-americas text-4xl text-gold/50 mb-3"></i>
                                <h4 class="text-gold font-serif text-xl tracking-widest">SAT-LINK SECURE</h4>
                                <p class="text-xs text-gray-500 font-mono mt-2">Connecting to geospatial database...</p>
                            </div>

                            <!-- Mock Map Points -->
                            <div class="absolute top-1/4 left-1/4 w-3 h-3 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.8)] animate-pulse"></div>
                            <div class="absolute bottom-1/3 right-1/4 w-3 h-3 bg-gold rounded-full shadow-[0_0_10px_rgba(212,175,55,0.8)] animate-pulse" style="animation-delay: 1s"></div>
                        </div>
                    </div>

                    <!-- Right: Live Intercepts Feed -->
                    <div class="bg-[#1a1f2e] border border-white/5 rounded-lg flex flex-col h-[400px]">
                        <div class="p-4 border-b border-white/5 flex justify-between items-center">
                            <h4 class="text-xs uppercase tracking-widest text-gray-400 font-semibold">Live Intercepts</h4>
                            <span class="flex h-2 w-2 relative">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                        </div>
                        <div class="p-4 flex-1 overflow-y-auto space-y-4">
                            
                            <div class="border-l-2 border-red-500 pl-3">
                                <div class="text-[10px] text-gray-500 font-mono mb-1">10:42:01 GMT - SWIFT TRANSFER</div>
                                <p class="text-xs text-gray-300">Subject CF-8921 initiated $1.2M wire to Cayman entity. Tracing IP...</p>
                            </div>

                            <div class="border-l-2 border-gold pl-3">
                                <div class="text-[10px] text-gray-500 font-mono mb-1">09:15:44 GMT - CELL TOWER PING</div>
                                <p class="text-xs text-gray-300">Target V. Sterling phone detected in Paris 4e Arrondissement. Deviates from stated itinerary.</p>
                            </div>

                            <div class="border-l-2 border-gray-600 pl-3">
                                <div class="text-[10px] text-gray-500 font-mono mb-1">08:02:12 GMT - SECURE COMMS</div>
                                <p class="text-xs text-gray-300 italic opacity-50">Decryption in progress... Estimated time: 4hrs.</p>
                            </div>

                            <div class="border-l-2 border-gold pl-3">
                                <div class="text-[10px] text-gray-500 font-mono mb-1">04:33:00 GMT - FLIGHT LOG</div>
                                <p class="text-xs text-gray-300">Private jet tail #N774XX departed LAX. Passenger manifest matches known aliases.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>\n`;

const panelOperativesHtml = `
            <!-- Panel: panel-operatives -->
            <div class="dashboard-tab hidden" id="panel-operatives">
                <div class="flex flex-col md:flex-row justify-between md:items-end mb-8 gap-4 border-b border-white/10 pb-6">
                    <div>
                        <h3 class="font-serif text-3xl mb-2 text-white">Agency Roster</h3>
                        <p class="text-sm text-gray-400">Manage field agents, surveillance teams, and technical analysts.</p>
                    </div>
                    <div class="relative">
                        <i class="fas fa-search absolute left-3 top-2.5 text-gray-500 text-sm"></i>
                        <input type="text" placeholder="Search operatives..." class="bg-[#1a1f2e] border border-white/10 rounded pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-gold w-64">
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <!-- Agent Card 1 -->
                    <div class="bg-[#1a1f2e] border border-white/5 rounded-lg p-5 text-center group hover:bg-[#23293b] transition-colors relative">
                        <div class="absolute top-3 right-3 w-2 h-2 rounded-full bg-green-500"></div>
                        <img src="assets/client_avatar_1.jpg" onerror="this.src='https://ui-avatars.com/api/?name=O1&background=000&color=fff'" class="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-gold/30 p-1 object-cover">
                        <h4 class="text-white font-serif text-lg mb-1">Agent Phoenix</h4>
                        <p class="text-[10px] uppercase tracking-widest text-gray-500 mb-4">Cyber Forensics</p>
                        <div class="flex justify-center space-x-2 mb-4">
                            <span class="bg-black/50 text-gray-400 text-[9px] uppercase px-2 py-1 rounded">Lvl 9</span>
                            <span class="bg-black/50 text-gray-400 text-[9px] uppercase px-2 py-1 rounded">Active</span>
                        </div>
                        <button class="w-full border border-white/10 text-xs text-gray-300 hover:border-gold hover:text-gold py-2 rounded transition-colors">View Dossier</button>
                    </div>

                    <!-- Agent Card 2 -->
                    <div class="bg-[#1a1f2e] border border-white/5 rounded-lg p-5 text-center group hover:bg-[#23293b] transition-colors relative">
                        <div class="absolute top-3 right-3 w-2 h-2 rounded-full bg-yellow-500"></div>
                        <img src="assets/client_avatar_2.jpg" onerror="this.src='https://ui-avatars.com/api/?name=O2&background=000&color=fff'" class="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-gold/30 p-1 object-cover grayscale">
                        <h4 class="text-white font-serif text-lg mb-1">Agent Ghost</h4>
                        <p class="text-[10px] uppercase tracking-widest text-gray-500 mb-4">Covert Surveillance</p>
                        <div class="flex justify-center space-x-2 mb-4">
                            <span class="bg-black/50 text-gray-400 text-[9px] uppercase px-2 py-1 rounded">Lvl 8</span>
                            <span class="bg-black/50 text-gray-400 text-[9px] uppercase px-2 py-1 rounded">Deployed</span>
                        </div>
                        <button class="w-full border border-white/10 text-xs text-gray-300 hover:border-gold hover:text-gold py-2 rounded transition-colors">View Dossier</button>
                    </div>

                    <!-- Agent Card 3 -->
                    <div class="bg-[#1a1f2e] border border-white/5 rounded-lg p-5 text-center group hover:bg-[#23293b] transition-colors relative">
                        <div class="absolute top-3 right-3 w-2 h-2 rounded-full bg-gray-500"></div>
                        <img src="assets/client_avatar_3.jpg" onerror="this.src='https://ui-avatars.com/api/?name=O3&background=000&color=fff'" class="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-white/10 p-1 object-cover">
                        <h4 class="text-white font-serif text-lg mb-1">Dr. Vance</h4>
                        <p class="text-[10px] uppercase tracking-widest text-gray-500 mb-4">Forensic Accounting</p>
                        <div class="flex justify-center space-x-2 mb-4">
                            <span class="bg-black/50 text-gray-400 text-[9px] uppercase px-2 py-1 rounded">Lvl 6</span>
                            <span class="bg-black/50 text-gray-400 text-[9px] uppercase px-2 py-1 rounded">Standby</span>
                        </div>
                        <button class="w-full border border-white/10 text-xs text-gray-300 hover:border-gold hover:text-gold py-2 rounded transition-colors">View Dossier</button>
                    </div>

                    <!-- Add Agent -->
                    <div class="bg-black/20 border border-white/5 border-dashed rounded-lg p-5 flex flex-col items-center justify-center hover:bg-black/40 hover:border-gold/30 transition-all cursor-pointer min-h-[250px]">
                        <div class="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-3">
                            <i class="fas fa-plus text-gold"></i>
                        </div>
                        <p class="text-xs uppercase tracking-widest text-gray-400">Recruit Operative</p>
                    </div>
                </div>
            </div>\n`;

const panelAnalyticsHtml = `
            <!-- Panel: panel-analytics -->
            <div class="dashboard-tab hidden" id="panel-analytics">
                <div class="flex flex-col md:flex-row justify-between md:items-end mb-8 gap-4 border-b border-white/10 pb-6">
                    <div>
                        <h3 class="font-serif text-3xl mb-2 text-white">Agency Analytics</h3>
                        <p class="text-sm text-gray-400">Performance metrics, financial oversight, and success rates.</p>
                    </div>
                    <select class="bg-[#1a1f2e] border border-white/10 text-xs text-white rounded px-4 py-2 focus:outline-none focus:border-gold appearance-none">
                        <option>Current Quarter (Q3)</option>
                        <option>Previous Quarter (Q2)</option>
                        <option>Year to Date (YTD)</option>
                    </select>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div class="bg-[#1a1f2e] border border-white/5 p-6 rounded-lg relative overflow-hidden">
                        <div class="absolute -right-4 -bottom-4 opacity-5"><i class="fas fa-check-circle text-9xl text-white"></i></div>
                        <p class="text-[10px] uppercase tracking-widest text-gray-400 mb-1">Mission Success Rate</p>
                        <h4 class="text-4xl text-white font-serif mb-2">98.2%</h4>
                        <p class="text-xs text-green-500"><i class="fas fa-arrow-up mr-1"></i> 2.1% from last quarter</p>
                    </div>
                    <div class="bg-[#1a1f2e] border border-white/5 p-6 rounded-lg relative overflow-hidden">
                        <div class="absolute -right-4 -bottom-4 opacity-5"><i class="fas fa-wallet text-9xl text-white"></i></div>
                        <p class="text-[10px] uppercase tracking-widest text-gray-400 mb-1">Total Assets Recovered</p>
                        <h4 class="text-4xl text-white font-serif mb-2">$14.2M</h4>
                        <p class="text-xs text-green-500"><i class="fas fa-arrow-up mr-1"></i> 8% from last quarter</p>
                    </div>
                    <div class="bg-[#1a1f2e] border border-white/5 p-6 rounded-lg relative overflow-hidden">
                        <div class="absolute -right-4 -bottom-4 opacity-5"><i class="fas fa-clock text-9xl text-white"></i></div>
                        <p class="text-[10px] uppercase tracking-widest text-gray-400 mb-1">Avg Case Resolution Time</p>
                        <h4 class="text-4xl text-white font-serif mb-2">14 Days</h4>
                        <p class="text-xs text-red-500"><i class="fas fa-arrow-up mr-1"></i> +2 Days longer</p>
                    </div>
                </div>

                <div class="bg-[#1a1f2e] border border-white/5 rounded-lg p-6">
                    <h4 class="text-sm uppercase tracking-widest text-gray-400 font-semibold mb-6">Case Volume Overview</h4>
                    
                    <!-- Faux Bar Chart using Flexbox -->
                    <div class="flex items-end h-64 space-x-2 md:space-x-6 border-b border-white/10 pb-4 relative">
                        <!-- Y-axis lines -->
                        <div class="absolute inset-0 flex flex-col justify-between pointer-events-none pb-4">
                            <div class="border-t border-white/5 w-full"></div>
                            <div class="border-t border-white/5 w-full"></div>
                            <div class="border-t border-white/5 w-full"></div>
                            <div class="border-t border-white/5 w-full"></div>
                        </div>

                        <!-- Bars -->
                        <div class="flex-1 flex flex-col justify-end group z-10">
                            <div class="bg-gold/50 hover:bg-gold transition-colors w-full rounded-t-sm relative group" style="height: 40%;">
                                <div class="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">12</div>
                            </div>
                            <span class="text-[10px] text-gray-500 text-center mt-2">JAN</span>
                        </div>
                        <div class="flex-1 flex flex-col justify-end group z-10">
                            <div class="bg-gold/50 hover:bg-gold transition-colors w-full rounded-t-sm relative group" style="height: 60%;">
                                <div class="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">18</div>
                            </div>
                            <span class="text-[10px] text-gray-500 text-center mt-2">FEB</span>
                        </div>
                        <div class="flex-1 flex flex-col justify-end group z-10">
                            <div class="bg-gold/50 hover:bg-gold transition-colors w-full rounded-t-sm relative group" style="height: 45%;">
                                <div class="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">14</div>
                            </div>
                            <span class="text-[10px] text-gray-500 text-center mt-2">MAR</span>
                        </div>
                        <div class="flex-1 flex flex-col justify-end group z-10">
                            <div class="bg-gold/50 hover:bg-gold transition-colors w-full rounded-t-sm relative group" style="height: 80%;">
                                <div class="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">24</div>
                            </div>
                            <span class="text-[10px] text-gray-500 text-center mt-2">APR</span>
                        </div>
                        <div class="flex-1 flex flex-col justify-end group z-10">
                            <div class="bg-gold w-full shadow-[0_0_15px_rgba(212,175,55,0.4)] rounded-t-sm relative group" style="height: 95%;">
                                <div class="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-100 transition-opacity border border-gold">29</div>
                            </div>
                            <span class="text-[10px] text-gold font-bold text-center mt-2">MAY</span>
                        </div>
                    </div>
                </div>
            </div>\n`;

const panelCommsHtml = `
            <!-- Panel: panel-comms -->
            <div class="dashboard-tab hidden" id="panel-comms">
                <div class="flex flex-col md:flex-row justify-between md:items-end mb-8 gap-4 border-b border-white/10 pb-6">
                    <div>
                        <h3 class="font-serif text-3xl mb-2 text-white">Secure Comms</h3>
                        <p class="text-sm text-gray-400">End-to-end encrypted messaging interface with operatives and clients.</p>
                    </div>
                    <div class="flex items-center text-xs text-green-500 bg-green-500/10 px-3 py-1.5 rounded border border-green-500/20">
                        <i class="fas fa-lock mr-2"></i> PGP Encrypted
                    </div>
                </div>

                <div class="bg-[#1a1f2e] border border-white/5 rounded-lg flex h-[600px] overflow-hidden">
                    <!-- Contacts Sidebar -->
                    <div class="w-1/3 border-r border-white/5 flex flex-col bg-black/20">
                        <div class="p-4 border-b border-white/5">
                            <input type="text" placeholder="Search contacts..." class="w-full bg-black/40 border border-white/10 rounded px-3 py-2 text-xs text-gray-300 focus:outline-none focus:border-gold">
                        </div>
                        <div class="flex-1 overflow-y-auto">
                            
                            <div class="p-4 border-b border-white/5 flex items-center cursor-pointer hover:bg-white/5 transition-colors bg-white/5 border-l-2 border-l-gold">
                                <div class="relative mr-3">
                                    <img src="assets/client_avatar_2.jpg" onerror="this.src='https://ui-avatars.com/api/?name=G&background=000&color=fff'" class="w-10 h-10 rounded-full object-cover">
                                    <div class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border border-black rounded-full"></div>
                                </div>
                                <div class="flex-1 overflow-hidden">
                                    <div class="flex justify-between items-center mb-1">
                                        <h5 class="text-sm text-white font-semibold">Agent Ghost</h5>
                                        <span class="text-[9px] text-gray-500">10:42 AM</span>
                                    </div>
                                    <p class="text-xs text-gray-400 truncate">Target has left the building. Pursuing.</p>
                                </div>
                            </div>

                            <div class="p-4 border-b border-white/5 flex items-center cursor-pointer hover:bg-white/5 transition-colors">
                                <div class="relative mr-3">
                                    <div class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400">
                                        <i class="fas fa-user-secret"></i>
                                    </div>
                                    <div class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-gray-500 border border-black rounded-full"></div>
                                </div>
                                <div class="flex-1 overflow-hidden">
                                    <div class="flex justify-between items-center mb-1">
                                        <h5 class="text-sm text-white font-semibold">Informant #44</h5>
                                        <span class="text-[9px] text-gray-500">Yesterday</span>
                                    </div>
                                    <p class="text-xs text-gray-400 truncate">I have the ledger files. Wire the funds.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <!-- Chat Area -->
                    <div class="flex-1 flex flex-col">
                        <!-- Chat Header -->
                        <div class="p-4 border-b border-white/5 flex justify-between items-center bg-black/10">
                            <div class="flex items-center">
                                <h4 class="text-white font-serif mr-3">Agent Ghost</h4>
                                <span class="bg-black/50 border border-white/10 text-[9px] text-gray-400 uppercase px-2 py-0.5 rounded">ID: 884-2</span>
                            </div>
                            <div class="flex space-x-3 text-gray-400">
                                <i class="fas fa-phone hover:text-gold cursor-pointer transition-colors"></i>
                                <i class="fas fa-video hover:text-gold cursor-pointer transition-colors"></i>
                                <i class="fas fa-ellipsis-v hover:text-white cursor-pointer transition-colors ml-2"></i>
                            </div>
                        </div>

                        <!-- Messages -->
                        <div class="flex-1 overflow-y-auto p-6 space-y-4 bg-black/40">
                            
                            <!-- Received -->
                            <div class="flex w-full">
                                <div class="bg-[#1a1f2e] border border-white/5 text-gray-300 text-sm px-4 py-3 rounded-tr-lg rounded-br-lg rounded-bl-lg max-w-[80%]">
                                    Visual confirmed on V. Sterling. He is accompanied by an unidentified female.
                                    <div class="text-[9px] text-gray-500 mt-2 text-right">10:30 AM</div>
                                </div>
                            </div>

                            <!-- Sent -->
                            <div class="flex w-full justify-end">
                                <div class="bg-gold/10 border border-gold/30 text-white text-sm px-4 py-3 rounded-tl-lg rounded-bl-lg rounded-br-lg max-w-[80%]">
                                    Copy that. Get photographic evidence but maintain distance. Do not engage.
                                    <div class="text-[9px] text-gold/50 mt-2 text-right">10:32 AM <i class="fas fa-check-double ml-1"></i></div>
                                </div>
                            </div>

                            <!-- Received Image Mock -->
                            <div class="flex w-full">
                                <div class="bg-[#1a1f2e] border border-white/5 text-gray-300 text-sm p-2 rounded-tr-lg rounded-br-lg rounded-bl-lg max-w-[80%]">
                                    <div class="w-48 h-32 bg-gray-800 rounded mb-2 flex items-center justify-center">
                                        <i class="fas fa-lock text-gray-600 text-2xl"></i>
                                    </div>
                                    <span class="text-xs italic text-gray-500 px-2">Encrypted Media Payload</span>
                                    <div class="text-[9px] text-gray-500 mt-1 text-right">10:42 AM</div>
                                </div>
                            </div>
                            
                            <div class="flex w-full">
                                <div class="bg-[#1a1f2e] border border-white/5 text-gray-300 text-sm px-4 py-3 rounded-tr-lg rounded-br-lg rounded-bl-lg max-w-[80%]">
                                    Target has left the building. Pursuing.
                                    <div class="text-[9px] text-gray-500 mt-2 text-right">10:42 AM</div>
                                </div>
                            </div>

                        </div>

                        <!-- Input -->
                        <div class="p-4 border-t border-white/5 bg-black/10">
                            <div class="relative">
                                <input type="text" placeholder="Encrypt and send message..." class="w-full bg-[#1a1f2e] border border-white/10 rounded-full pl-4 pr-12 py-3 text-sm text-white focus:outline-none focus:border-gold">
                                <button class="absolute right-2 top-2 w-8 h-8 rounded-full bg-gold text-black flex items-center justify-center hover:bg-white transition-colors">
                                    <i class="fas fa-paper-plane text-xs"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>\n`;

const panelSupportHtml = `
            <!-- Panel: panel-support -->
            <div class="dashboard-tab hidden" id="panel-support">
                <div class="flex flex-col md:flex-row justify-between md:items-end mb-8 gap-4 border-b border-white/10 pb-6">
                    <div>
                        <h3 class="font-serif text-3xl mb-2 text-white">Technical Support & Logistics</h3>
                        <p class="text-sm text-gray-400">Hardware requests, surveillance gear requisitions, and system status.</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <!-- Left: Ticket Form -->
                    <div class="bg-[#1a1f2e] border border-white/5 rounded-lg p-6">
                        <h4 class="text-white text-sm font-semibold mb-6 uppercase tracking-wider border-b border-white/10 pb-2">Submit Requisition / Issue</h4>
                        
                        <form class="space-y-4">
                            <div>
                                <label class="block text-xs text-gray-500 uppercase tracking-widest mb-2">Request Type</label>
                                <select class="w-full bg-black/50 border border-white/10 rounded px-4 py-2.5 text-gray-300 focus:outline-none focus:border-gold text-sm appearance-none">
                                    <option>Surveillance Equipment Request</option>
                                    <option>Database Access Authorization</option>
                                    <option>Software / Encryption Bug</option>
                                    <option>Vehicle Requisition</option>
                                </select>
                            </div>
                            
                            <div>
                                <label class="block text-xs text-gray-500 uppercase tracking-widest mb-2">Priority Level</label>
                                <div class="flex space-x-4">
                                    <label class="flex items-center text-sm text-gray-400 cursor-pointer">
                                        <input type="radio" name="priority" class="mr-2 accent-gold"> Routine
                                    </label>
                                    <label class="flex items-center text-sm text-gray-400 cursor-pointer">
                                        <input type="radio" name="priority" class="mr-2 accent-gold" checked> Urgent
                                    </label>
                                    <label class="flex items-center text-sm text-red-500 cursor-pointer">
                                        <input type="radio" name="priority" class="mr-2 accent-red-500"> Critical (Burn)
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label class="block text-xs text-gray-500 uppercase tracking-widest mb-2">Details / Specs</label>
                                <textarea rows="4" placeholder="Specify hardware models or describe the technical issue..." class="w-full bg-black/50 border border-white/10 rounded px-4 py-2.5 text-gray-300 focus:outline-none focus:border-gold text-sm resize-none"></textarea>
                            </div>

                            <button class="bg-gold text-black hover:bg-white transition-colors w-full py-3 uppercase tracking-widest text-xs font-bold rounded mt-2">Submit to Quartermaster</button>
                        </form>
                    </div>

                    <!-- Right: System Status & History -->
                    <div class="space-y-6">
                        <!-- System Status -->
                        <div class="bg-[#1a1f2e] border border-white/5 rounded-lg p-6">
                            <h4 class="text-white text-sm font-semibold mb-6 uppercase tracking-wider border-b border-white/10 pb-2">Network Status</h4>
                            <div class="space-y-4">
                                <div class="flex justify-between items-center">
                                    <div class="flex items-center"><i class="fas fa-server text-gray-500 w-6"></i> <span class="text-sm text-gray-300">Encrypted DB Node 1</span></div>
                                    <span class="text-xs text-green-500 bg-green-500/10 px-2 py-1 rounded">Online</span>
                                </div>
                                <div class="flex justify-between items-center">
                                    <div class="flex items-center"><i class="fas fa-satellite text-gray-500 w-6"></i> <span class="text-sm text-gray-300">Geospatial SAT-Link</span></div>
                                    <span class="text-xs text-green-500 bg-green-500/10 px-2 py-1 rounded">Online</span>
                                </div>
                                <div class="flex justify-between items-center">
                                    <div class="flex items-center"><i class="fas fa-shield-alt text-gray-500 w-6"></i> <span class="text-sm text-gray-300">Comms Relay (EU)</span></div>
                                    <span class="text-xs text-yellow-500 bg-yellow-500/10 px-2 py-1 rounded">Degraded</span>
                                </div>
                            </div>
                        </div>

                        <!-- Ticket History -->
                        <div class="bg-[#1a1f2e] border border-white/5 rounded-lg p-6">
                            <h4 class="text-white text-sm font-semibold mb-4 uppercase tracking-wider border-b border-white/10 pb-2">Recent Requisitions</h4>
                            <div class="space-y-3">
                                <div class="flex justify-between items-center p-3 bg-black/30 rounded border border-white/5 hover:border-gold/30 transition-colors cursor-pointer">
                                    <div>
                                        <p class="text-xs text-white">REQ-889: Long Range Audio Rig</p>
                                        <p class="text-[10px] text-gray-500">Submitted 2 days ago</p>
                                    </div>
                                    <span class="text-[10px] uppercase text-gold">Approved</span>
                                </div>
                                <div class="flex justify-between items-center p-3 bg-black/30 rounded border border-white/5 hover:border-gold/30 transition-colors cursor-pointer">
                                    <div>
                                        <p class="text-xs text-white">ISS-412: Database access error</p>
                                        <p class="text-[10px] text-gray-500">Submitted 5 days ago</p>
                                    </div>
                                    <span class="text-[10px] uppercase text-gray-400">Resolved</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>\n`;

const injectScript = () => {
    ['client-dashboard.html', 'admin-dashboard.html'].forEach(file => {
        if (!fs.existsSync(file)) return;
        let content = fs.readFileSync(file, 'utf8');

        // Replace Cases
        content = content.replace(/<!-- Panel: Cases -->[\s\S]*?(?=<!-- Panel: Intel Reports -->)/, panelCasesHtml);
        
        // Replace Intel
        content = content.replace(/<!-- Panel: Intel Reports -->[\s\S]*?(?=<!-- Panel: panel-operatives -->)/, panelIntelHtml);

        // Replace Operatives
        content = content.replace(/<!-- Panel: panel-operatives -->[\s\S]*?(?=<!-- Panel: panel-analytics -->)/, panelOperativesHtml);

        // Replace Analytics
        content = content.replace(/<!-- Panel: panel-analytics -->[\s\S]*?(?=<!-- Panel: panel-comms -->)/, panelAnalyticsHtml);

        // Replace Comms
        content = content.replace(/<!-- Panel: panel-comms -->[\s\S]*?(?=<!-- Panel: panel-settings)/, panelCommsHtml);

        // Replace Support
        // For support, we replace from Support to the final closing tags
        content = content.replace(/<!-- Panel: panel-support -->[\s\S]*?(?=<\/div>\s*<\/main>)/, panelSupportHtml);

        fs.writeFileSync(file, content);
        console.log('Successfully updated ' + file);
    });
};

injectScript();
