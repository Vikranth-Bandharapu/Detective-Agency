import os

cases_html = '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">\n'
case_titles = ["Shadow Ledger", "V. Sterling", "Project Echo", "Crimson Tide", "Midnight Runner", "Operation Overlord", "Neon Syndicate", "Silk Road", "Blackout", "Vanguard"]
priorities = ["High Priority", "Surveillance", "Cold Case", "Active", "Pending", "Closed", "High Priority", "Active", "Surveillance", "Cold Case"]
colors = ["red", "yellow", "blue", "green", "gray", "gray", "red", "green", "yellow", "blue"]
images = ["corporate_fraud", "matrimonial", "missing_person", "cyber_forensics", "investigator_pro", "surveillance_tech", "corporate_fraud", "matrimonial", "missing_person", "cyber_forensics"]

for i in range(10):
    cases_html += f"""
        <div class="bg-[#1a1f2e] border border-white/5 rounded-lg overflow-hidden group hover:border-gold/30 transition-all duration-300 flex flex-col">
            <div class="h-24 bg-cover bg-center relative" style="background-image: url('assets/images/{images[i]}.jpg');">
                <div class="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all"></div>
                <div class="absolute top-2 left-2 bg-{colors[i]}-500/20 text-{colors[i]}-500 border border-{colors[i]}-500/50 px-2 py-0.5 text-[8px] uppercase tracking-widest rounded backdrop-blur-md">{priorities[i]}</div>
            </div>
            <div class="p-4 flex-1 flex flex-col">
                <div class="flex justify-between items-center mb-2">
                    <span class="text-[10px] text-gold font-mono tracking-wider">#CASE-00{i+1}</span>
                </div>
                <h4 class="text-sm text-white font-serif mb-1 truncate">{case_titles[i]}</h4>
                <p class="text-[10px] text-gray-400 mb-3 flex-1 line-clamp-2">Detailed overview and status report for case file 00{i+1}. Gathering intelligence and evidence.</p>
                <div class="flex items-center justify-between mt-auto pt-3 border-t border-white/5">
                    <span class="text-[9px] uppercase tracking-widest text-gray-500 hover:text-gold cursor-pointer transition-colors">View Details <i class="fas fa-arrow-right ml-1"></i></span>
                </div>
            </div>
        </div>
"""
cases_html += '</div>'

intel_html = '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">\n'
intel_types = ["Satellite Uplink", "Wiretap Audio", "Drone Surveillance", "Bank Records", "Flight Manifest", "CCTV Footage", "Dark Web Chatter", "GPS Tracker", "Informant Drop", "Cryptocurrency Trace"]
icons = ["fa-satellite", "fa-microphone", "fa-drone", "fa-file-invoice-dollar", "fa-plane", "fa-video", "fa-user-secret", "fa-map-marker-alt", "fa-envelope", "fa-bitcoin"]

for i in range(10):
    intel_html += f"""
        <div class="bg-[#1a1f2e] border border-white/5 rounded-lg p-5 group hover:border-gold/30 transition-all duration-300">
            <div class="w-10 h-10 rounded-full bg-black border border-white/10 flex items-center justify-center mb-4 group-hover:border-gold/50 transition-colors">
                <i class="fas {icons[i]} text-gray-400 group-hover:text-gold transition-colors"></i>
            </div>
            <h4 class="text-sm text-white font-serif mb-1">{intel_types[i]}</h4>
            <p class="text-[10px] text-gray-400 mb-3 line-clamp-2">Latest intercepted data package regarding target operations.</p>
            <div class="flex justify-between items-center text-[9px] uppercase tracking-widest">
                <span class="text-green-500">Verified</span>
                <span class="text-gray-600">2h ago</span>
            </div>
        </div>
"""
intel_html += '</div>'


ops_html = '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">\n'
names = ["Phoenix", "Ghost", "Vance", "Specter", "Wraith", "Shadow", "Cipher", "Viper", "Raven", "Echo"]
roles = ["Cyber Forensics", "Covert Surveillance", "Forensic Accounting", "Infiltration", "Extraction", "Analysis", "Cryptography", "Interrogation", "Reconnaissance", "Tech Ops"]

for i in range(10):
    status_color = 'green' if i%3==0 else ('yellow' if i%3==1 else 'gray')
    status_text = 'Active' if i%3==0 else ('Deployed' if i%3==1 else 'Standby')
    img_num = (i%3)+1
    ops_html += f"""
        <div class="bg-[#1a1f2e] border border-white/5 rounded-lg p-4 text-center group hover:bg-[#23293b] transition-colors relative">
            <div class="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-{status_color}-500"></div>
            <img src="assets/images/client_avatar_{img_num}.jpg" onerror="this.src='https://ui-avatars.com/api/?name={names[i]}&background=000&color=fff'" class="w-12 h-12 rounded-full mx-auto mb-3 border border-white/10 p-0.5 object-cover">
            <h4 class="text-xs text-white font-serif mb-1">{names[i]}</h4>
            <p class="text-[8px] uppercase tracking-widest text-gray-500 mb-3 truncate">{roles[i]}</p>
            <div class="flex justify-center space-x-1 mb-3">
                <span class="bg-black/50 text-gray-400 text-[8px] uppercase px-1.5 py-0.5 rounded">Lvl {10-i}</span>
                <span class="bg-black/50 text-gray-400 text-[8px] uppercase px-1.5 py-0.5 rounded">{status_text}</span>
            </div>
            <button class="w-full border border-white/10 text-[9px] uppercase tracking-widest text-gray-300 hover:border-gold hover:text-gold py-1.5 rounded transition-colors">Dossier</button>
        </div>
"""
ops_html += '</div>'


analytics_html = '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">\n'
metrics = ["Success Rate", "Assets Recovered", "Resolution Time", "Active Warrants", "Intel Gathered", "Budget Used", "Suspects Profiled", "Hours Logged", "Data Decrypted", "Threats Neutralized"]
values = ["98.2%", "$14.2M", "14 Days", "24", "1.2 TB", "$840k", "142", "4,192", "850 GB", "18"]
icons = ["fa-check-circle", "fa-wallet", "fa-clock", "fa-gavel", "fa-database", "fa-chart-pie", "fa-users", "fa-hourglass-half", "fa-unlock-alt", "fa-shield-alt"]

for i in range(10):
    analytics_html += f"""
        <div class="bg-[#1a1f2e] border border-white/5 p-4 rounded-lg relative overflow-hidden group hover:border-gold/30 transition-colors">
            <div class="absolute -right-2 -bottom-2 opacity-5"><i class="fas {icons[i]} text-6xl text-white"></i></div>
            <i class="fas {icons[i]} text-gray-500 mb-3 group-hover:text-gold transition-colors"></i>
            <p class="text-[9px] uppercase tracking-widest text-gray-400 mb-1 truncate">{metrics[i]}</p>
            <h4 class="text-xl text-white font-serif">{values[i]}</h4>
        </div>
"""
analytics_html += '</div>'


comms_html = '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">\n'
subjects = ["Encrypted Payload", "Rendezvous Point", "Wire Transfer", "Target Spotted", "Drop Secured", "Exfil Requested", "Comms Check", "New Evidence", "Suspect Fled", "Mission Go"]

for i in range(10):
    comms_html += f"""
        <div class="bg-[#1a1f2e] border border-white/5 p-4 rounded-lg group hover:border-gold/30 transition-colors cursor-pointer">
            <div class="flex justify-between items-center mb-3">
                <span class="text-[8px] bg-red-500/20 text-red-500 border border-red-500/50 px-1.5 py-0.5 rounded uppercase tracking-widest">PGP Encrypted</span>
                <span class="text-[8px] text-gray-600">{10+i}:00 AM</span>
            </div>
            <h4 class="text-xs text-white font-semibold mb-1 truncate">{subjects[i]}</h4>
            <p class="text-[10px] text-gray-400 line-clamp-2 italic">"Subject has breached perimeter. Requesting immediate backup at sector {i+1}..."</p>
            <div class="mt-3 pt-3 border-t border-white/5 flex items-center justify-between">
                <span class="text-[8px] text-gray-500 uppercase tracking-widest">Channel {i+1}</span>
                <i class="fas fa-lock text-gray-600 text-xs"></i>
            </div>
        </div>
"""
comms_html += '</div>'


support_html = '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">\n'
tickets = ["Gear Requisition", "Database Access", "Server Reboot", "VPN Credentials", "Vehicle Repair", "Weapon Maintenance", "Comms Replacement", "Account Unlock", "Software Patch", "Log Review"]

for i in range(10):
    status = 'Resolved' if i%2==0 else 'Pending'
    status_color = 'text-green-500' if i%2==0 else 'text-yellow-500'
    support_html += f"""
        <div class="bg-[#1a1f2e] border border-white/5 p-4 rounded-lg hover:border-gold/30 transition-colors cursor-pointer">
            <div class="flex justify-between items-center mb-2">
                <span class="text-[10px] text-gold font-mono">#TKT-{800+i}</span>
                <span class="text-[8px] uppercase tracking-widest {status_color}">{status}</span>
            </div>
            <h4 class="text-xs text-white font-semibold mb-2 truncate">{tickets[i]}</h4>
            <p class="text-[9px] text-gray-400 mb-3 line-clamp-2">Requesting technical assistance for operational hardware in sector {i+1}.</p>
            <button class="w-full bg-black/40 border border-white/10 text-[9px] uppercase tracking-widest text-gray-300 py-1.5 rounded hover:text-white transition-colors">View Ticket</button>
        </div>
"""
support_html += '</div>'


def wrap_panel(comment, panel_id, title, desc, inner_html):
    return f"""            <!-- Panel: {comment} -->
            <div class="dashboard-tab hidden" id="{panel_id}">
                <div class="flex flex-col md:flex-row justify-between md:items-end mb-8 gap-4 border-b border-white/10 pb-6">
                    <div>
                        <h3 class="font-serif text-3xl mb-2 text-white">{title}</h3>
                        <p class="text-sm text-gray-400">{desc}</p>
                    </div>
                </div>
                {inner_html}
            </div>
"""

import re

for file_name in ['client-dashboard.html', 'admin-dashboard.html']:
    if not os.path.exists(file_name):
        continue
        
    with open(file_name, 'r', encoding='utf8') as f:
        content = f.read()

    # We need to be careful. The comments might be exactly what we placed previously
    content = re.sub(r'<!-- Panel: Cases -->.*?(?=<!-- Panel: Intel Reports -->)', wrap_panel('Cases', 'panel-cases', 'Active Case Files', 'Classified ongoing investigations.', cases_html), content, flags=re.DOTALL)
    content = re.sub(r'<!-- Panel: Intel Reports -->.*?(?=<!-- Panel: panel-operatives -->)', wrap_panel('Intel Reports', 'panel-intel', 'Global Intelligence', 'Intercepted data and surveillance feeds.', intel_html), content, flags=re.DOTALL)
    content = re.sub(r'<!-- Panel: panel-operatives -->.*?(?=<!-- Panel: panel-analytics -->)', wrap_panel('panel-operatives', 'panel-operatives', 'Agency Roster', 'Manage field agents and analysts.', ops_html), content, flags=re.DOTALL)
    content = re.sub(r'<!-- Panel: panel-analytics -->.*?(?=<!-- Panel: panel-comms -->)', wrap_panel('panel-analytics', 'panel-analytics', 'Agency Analytics', 'Performance metrics and success rates.', analytics_html), content, flags=re.DOTALL)
    content = re.sub(r'<!-- Panel: panel-comms -->.*?(?=<!-- Panel: panel-settings)', wrap_panel('panel-comms', 'panel-comms', 'Secure Comms', 'Encrypted messaging intercept logs.', comms_html), content, flags=re.DOTALL)
    content = re.sub(r'<!-- Panel: panel-support -->.*?(?=</div>\s*</main>)', wrap_panel('panel-support', 'panel-support', 'Technical Support', 'Hardware requisitions and IT tickets.', support_html), content, flags=re.DOTALL)

    with open(file_name, 'w', encoding='utf8') as f:
        f.write(content)
        
    print(f"Successfully expanded {file_name} to 10 sections per tab!")
