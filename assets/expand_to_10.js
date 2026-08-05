const fs = require('fs');

const generateCases = () => {
    let html = '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">\n';
    const caseTitles = ["Shadow Ledger", "V. Sterling", "Project Echo", "Crimson Tide", "Midnight Runner", "Operation Overlord", "Neon Syndicate", "Silk Road", "Blackout", "Vanguard"];
    const priorities = ["High Priority", "Surveillance", "Cold Case", "Active", "Pending", "Closed", "High Priority", "Active", "Surveillance", "Cold Case"];
    const colors = ["red", "yellow", "blue", "green", "gray", "gray", "red", "green", "yellow", "blue"];
    const images = ["corporate_fraud", "matrimonial", "missing_person", "cyber_forensics", "investigator_pro", "surveillance_tech", "corporate_fraud", "matrimonial", "missing_person", "cyber_forensics"];
    
    for(let i=0; i<10; i++) {
        html += '<div class="bg-[#1a1f2e] border border-white/5 rounded-lg overflow-hidden group hover:border-gold/30 transition-all duration-300 flex flex-col">\n' +
                '    <div class="h-24 bg-cover bg-center relative" style="background-image: url(\\'assets/' + images[i] + '.jpg\\');">\n' +
                '        <div class="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all"></div>\n' +
                '        <div class="absolute top-2 left-2 bg-' + colors[i] + '-500/20 text-' + colors[i] + '-500 border border-' + colors[i] + '-500/50 px-2 py-0.5 text-[8px] uppercase tracking-widest rounded backdrop-blur-md">' + priorities[i] + '</div>\n' +
                '    </div>\n' +
                '    <div class="p-4 flex-1 flex flex-col">\n' +
                '        <div class="flex justify-between items-center mb-2">\n' +
                '            <span class="text-[10px] text-gold font-mono tracking-wider">#CASE-00' + (i+1) + '</span>\n' +
                '        </div>\n' +
                '        <h4 class="text-sm text-white font-serif mb-1 truncate">' + caseTitles[i] + '</h4>\n' +
                '        <p class="text-[10px] text-gray-400 mb-3 flex-1 line-clamp-2">Detailed overview and status report for case file 00' + (i+1) + '. Gathering intelligence and evidence.</p>\n' +
                '        <div class="flex items-center justify-between mt-auto pt-3 border-t border-white/5">\n' +
                '            <span class="text-[9px] uppercase tracking-widest text-gray-500 hover:text-gold cursor-pointer transition-colors">View Details <i class="fas fa-arrow-right ml-1"></i></span>\n' +
                '        </div>\n' +
                '    </div>\n' +
                '</div>\n';
    }
    html += '</div>';
    return html;
};

const generateIntel = () => {
    let html = '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">\n';
    const intelTypes = ["Satellite Uplink", "Wiretap Audio", "Drone Surveillance", "Bank Records", "Flight Manifest", "CCTV Footage", "Dark Web Chatter", "GPS Tracker", "Informant Drop", "Cryptocurrency Trace"];
    const icons = ["fa-satellite", "fa-microphone", "fa-drone", "fa-file-invoice-dollar", "fa-plane", "fa-video", "fa-user-secret", "fa-map-marker-alt", "fa-envelope", "fa-bitcoin"];
    
    for(let i=0; i<10; i++) {
        html += '<div class="bg-[#1a1f2e] border border-white/5 rounded-lg p-5 group hover:border-gold/30 transition-all duration-300">\n' +
                '    <div class="w-10 h-10 rounded-full bg-black border border-white/10 flex items-center justify-center mb-4 group-hover:border-gold/50 transition-colors">\n' +
                '        <i class="fas ' + icons[i] + ' text-gray-400 group-hover:text-gold transition-colors"></i>\n' +
                '    </div>\n' +
                '    <h4 class="text-sm text-white font-serif mb-1">' + intelTypes[i] + '</h4>\n' +
                '    <p class="text-[10px] text-gray-400 mb-3 line-clamp-2">Latest intercepted data package regarding target operations.</p>\n' +
                '    <div class="flex justify-between items-center text-[9px] uppercase tracking-widest">\n' +
                '        <span class="text-green-500">Verified</span>\n' +
                '        <span class="text-gray-600">2h ago</span>\n' +
                '    </div>\n' +
                '</div>\n';
    }
    html += '</div>';
    return html;
};

const generateOperatives = () => {
    let html = '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">\n';
    const names = ["Phoenix", "Ghost", "Vance", "Specter", "Wraith", "Shadow", "Cipher", "Viper", "Raven", "Echo"];
    const roles = ["Cyber Forensics", "Covert Surveillance", "Forensic Accounting", "Infiltration", "Extraction", "Analysis", "Cryptography", "Interrogation", "Reconnaissance", "Tech Ops"];
    
    for(let i=0; i<10; i++) {
        let statusColor = i%3===0 ? 'green' : (i%3===1 ? 'yellow' : 'gray');
        let statusText = i%3===0 ? 'Active' : (i%3===1 ? 'Deployed' : 'Standby');
        let imgNum = (i%3)+1;
        
        html += '<div class="bg-[#1a1f2e] border border-white/5 rounded-lg p-4 text-center group hover:bg-[#23293b] transition-colors relative">\n' +
                '    <div class="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-' + statusColor + '-500"></div>\n' +
                '    <img src="assets/client_avatar_' + imgNum + '.jpg" onerror="this.src=\\'https://ui-avatars.com/api/?name=' + names[i] + '&background=000&color=fff\\'" class="w-12 h-12 rounded-full mx-auto mb-3 border border-white/10 p-0.5 object-cover">\n' +
                '    <h4 class="text-xs text-white font-serif mb-1">' + names[i] + '</h4>\n' +
                '    <p class="text-[8px] uppercase tracking-widest text-gray-500 mb-3 truncate">' + roles[i] + '</p>\n' +
                '    <div class="flex justify-center space-x-1 mb-3">\n' +
                '        <span class="bg-black/50 text-gray-400 text-[8px] uppercase px-1.5 py-0.5 rounded">Lvl ' + (10-i) + '</span>\n' +
                '        <span class="bg-black/50 text-gray-400 text-[8px] uppercase px-1.5 py-0.5 rounded">' + statusText + '</span>\n' +
                '    </div>\n' +
                '    <button class="w-full border border-white/10 text-[9px] uppercase tracking-widest text-gray-300 hover:border-gold hover:text-gold py-1.5 rounded transition-colors">Dossier</button>\n' +
                '</div>\n';
    }
    html += '</div>';
    return html;
};

const generateAnalytics = () => {
    let html = '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">\n';
    const metrics = ["Success Rate", "Assets Recovered", "Resolution Time", "Active Warrants", "Intel Gathered", "Budget Used", "Suspects Profiled", "Hours Logged", "Data Decrypted", "Threats Neutralized"];
    const values = ["98.2%", "$14.2M", "14 Days", "24", "1.2 TB", "$840k", "142", "4,192", "850 GB", "18"];
    const icons = ["fa-check-circle", "fa-wallet", "fa-clock", "fa-gavel", "fa-database", "fa-chart-pie", "fa-users", "fa-hourglass-half", "fa-unlock-alt", "fa-shield-alt"];
    
    for(let i=0; i<10; i++) {
        html += '<div class="bg-[#1a1f2e] border border-white/5 p-4 rounded-lg relative overflow-hidden group hover:border-gold/30 transition-colors">\n' +
                '    <div class="absolute -right-2 -bottom-2 opacity-5"><i class="fas ' + icons[i] + ' text-6xl text-white"></i></div>\n' +
                '    <i class="fas ' + icons[i] + ' text-gray-500 mb-3 group-hover:text-gold transition-colors"></i>\n' +
                '    <p class="text-[9px] uppercase tracking-widest text-gray-400 mb-1 truncate">' + metrics[i] + '</p>\n' +
                '    <h4 class="text-xl text-white font-serif">' + values[i] + '</h4>\n' +
                '</div>\n';
    }
    html += '</div>';
    return html;
};

const generateComms = () => {
    let html = '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">\n';
    const subjects = ["Encrypted Payload", "Rendezvous Point", "Wire Transfer", "Target Spotted", "Drop Secured", "Exfil Requested", "Comms Check", "New Evidence", "Suspect Fled", "Mission Go"];
    
    for(let i=0; i<10; i++) {
        html += '<div class="bg-[#1a1f2e] border border-white/5 p-4 rounded-lg group hover:border-gold/30 transition-colors cursor-pointer">\n' +
                '    <div class="flex justify-between items-center mb-3">\n' +
                '        <span class="text-[8px] bg-red-500/20 text-red-500 border border-red-500/50 px-1.5 py-0.5 rounded uppercase tracking-widest">PGP Encrypted</span>\n' +
                '        <span class="text-[8px] text-gray-600">' + (10+i) + ':00 AM</span>\n' +
                '    </div>\n' +
                '    <h4 class="text-xs text-white font-semibold mb-1 truncate">' + subjects[i] + '</h4>\n' +
                '    <p class="text-[10px] text-gray-400 line-clamp-2 italic">"Subject has breached perimeter. Requesting immediate backup at sector ' + (i+1) + '..."</p>\n' +
                '    <div class="mt-3 pt-3 border-t border-white/5 flex items-center justify-between">\n' +
                '        <span class="text-[8px] text-gray-500 uppercase tracking-widest">Channel ' + (i+1) + '</span>\n' +
                '        <i class="fas fa-lock text-gray-600 text-xs"></i>\n' +
                '    </div>\n' +
                '</div>\n';
    }
    html += '</div>';
    return html;
};

const generateSupport = () => {
    let html = '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">\n';
    const tickets = ["Gear Requisition", "Database Access", "Server Reboot", "VPN Credentials", "Vehicle Repair", "Weapon Maintenance", "Comms Replacement", "Account Unlock", "Software Patch", "Log Review"];
    
    for(let i=0; i<10; i++) {
        let status = i%2===0 ? 'Resolved' : 'Pending';
        let statusColor = i%2===0 ? 'text-green-500' : 'text-yellow-500';
        html += '<div class="bg-[#1a1f2e] border border-white/5 p-4 rounded-lg hover:border-gold/30 transition-colors cursor-pointer">\n' +
                '    <div class="flex justify-between items-center mb-2">\n' +
                '        <span class="text-[10px] text-gold font-mono">#TKT-' + (800+i) + '</span>\n' +
                '        <span class="text-[8px] uppercase tracking-widest ' + statusColor + '">' + status + '</span>\n' +
                '    </div>\n' +
                '    <h4 class="text-xs text-white font-semibold mb-2 truncate">' + tickets[i] + '</h4>\n' +
                '    <p class="text-[9px] text-gray-400 mb-3 line-clamp-2">Requesting technical assistance for operational hardware in sector ' + (i+1) + '.</p>\n' +
                '    <button class="w-full bg-black/40 border border-white/10 text-[9px] uppercase tracking-widest text-gray-300 py-1.5 rounded hover:text-white transition-colors">View Ticket</button>\n' +
                '</div>\n';
    }
    html += '</div>';
    return html;
};

const wrapPanel = (comment, id, title, desc, innerHtml) => {
    return '            <!-- Panel: ' + comment + ' -->\n' +
           '            <div class="dashboard-tab hidden" id="' + id + '">\n' +
           '                <div class="flex flex-col md:flex-row justify-between md:items-end mb-8 gap-4 border-b border-white/10 pb-6">\n' +
           '                    <div>\n' +
           '                        <h3 class="font-serif text-3xl mb-2 text-white">' + title + '</h3>\n' +
           '                        <p class="text-sm text-gray-400">' + desc + '</p>\n' +
           '                    </div>\n' +
           '                </div>\n' +
           '                ' + innerHtml + '\n' +
           '            </div>\n';
};

['client-dashboard.html', 'admin-dashboard.html'].forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');

    content = content.replace(/<!-- Panel: Cases -->[\s\S]*?(?=<!-- Panel: Intel Reports -->)/, wrapPanel('Cases', 'panel-cases', 'Active Case Files', 'Classified ongoing investigations.', generateCases()));
    
    content = content.replace(/<!-- Panel: Intel Reports -->[\s\S]*?(?=<!-- Panel: panel-operatives -->)/, wrapPanel('Intel Reports', 'panel-intel', 'Global Intelligence', 'Intercepted data and surveillance feeds.', generateIntel()));

    content = content.replace(/<!-- Panel: panel-operatives -->[\s\S]*?(?=<!-- Panel: panel-analytics -->)/, wrapPanel('panel-operatives', 'panel-operatives', 'Agency Roster', 'Manage field agents and analysts.', generateOperatives()));

    content = content.replace(/<!-- Panel: panel-analytics -->[\s\S]*?(?=<!-- Panel: panel-comms -->)/, wrapPanel('panel-analytics', 'panel-analytics', 'Agency Analytics', 'Performance metrics and success rates.', generateAnalytics()));

    content = content.replace(/<!-- Panel: panel-comms -->[\s\S]*?(?=<!-- Panel: panel-settings)/, wrapPanel('panel-comms', 'panel-comms', 'Secure Comms', 'Encrypted messaging intercept logs.', generateComms()));

    content = content.replace(/<!-- Panel: panel-support -->[\s\S]*?(?=<\/div>\s*<\/main>)/, wrapPanel('panel-support', 'panel-support', 'Technical Support', 'Hardware requisitions and IT tickets.', generateSupport()));

    fs.writeFileSync(file, content);
    console.log('Successfully expanded tabs to exactly 10 items in ' + file);
});
