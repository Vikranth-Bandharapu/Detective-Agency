const fs = require('fs');

const sidebarHtml = `
        <nav class="flex-1 overflow-y-auto py-6 px-4 space-y-2">
            <a href="#" onclick="switchTab(event, 'panel-dashboard', this)" class="flex items-center px-4 py-3 text-sm tracking-widest uppercase bg-gold/10 text-gold rounded-sm border-l-2 border-gold"><i class="fas fa-home w-6"></i> Dashboard</a>
            <a href="#" onclick="switchTab(event, 'panel-cases', this)" class="flex items-center px-4 py-3 text-sm tracking-widest uppercase text-gray-400 hover:text-white transition-colors border-l-2 border-transparent"><i class="fas fa-briefcase w-6"></i> Cases</a>
            <a href="#" onclick="switchTab(event, 'panel-intel', this)" class="flex items-center px-4 py-3 text-sm tracking-widest uppercase text-gray-400 hover:text-white transition-colors border-l-2 border-transparent"><i class="fas fa-satellite-dish w-6"></i> Intel</a>
            <a href="#" onclick="switchTab(event, 'panel-operatives', this)" class="flex items-center px-4 py-3 text-sm tracking-widest uppercase text-gray-400 hover:text-white transition-colors border-l-2 border-transparent"><i class="fas fa-user-secret w-6"></i> Operatives</a>
            <a href="#" onclick="switchTab(event, 'panel-settings', this)" class="flex items-center px-4 py-3 text-sm tracking-widest uppercase text-gray-400 hover:text-white transition-colors border-l-2 border-transparent"><i class="fas fa-cog w-6"></i> Settings</a>
        </nav>
`;

['client-dashboard.html', 'admin-dashboard.html'].forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace the <nav> block
    content = content.replace(/<nav class="flex-1[\s\S]*?<\/nav>/, sidebarHtml.trim());
    
    // Clear out the existing main content area to make room for our massive injection script
    // We will find everything inside `<div id="main-scroll-area"...>` and replace it with a placeholder
    const regex = /(<div id="main-scroll-area"[^>]*>)[\s\S]*?(<\/main>)/;
    
    content = content.replace(regex, `$1\n<!-- INJECT_TABS_HERE -->\n        </div>\n    $2`);
    
    fs.writeFileSync(file, content);
    console.log('Sidebar updated and main area cleared in ' + file);
});
