const fs = require('fs');

['client-dashboard.html', 'admin-dashboard.html'].forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');

    // Add mobile overlay div right after body tag if not exists
    if (!content.includes('id="mobile-sidebar-overlay"')) {
        content = content.replace(
            '<body class="bg-black text-white font-sans h-[100dvh] flex overflow-hidden">',
            '<body class="bg-black text-white font-sans h-[100dvh] flex overflow-hidden">\n    <!-- Mobile Sidebar Overlay -->\n    <div id="mobile-sidebar-overlay" onclick="toggleDashboardSidebar()" class="fixed inset-0 bg-black/80 z-40 hidden md:hidden transition-opacity"></div>'
        );
    }

    // Update toggle function to handle overlay and sidebar positioning properly
    const oldFunction = `function toggleDashboardSidebar() {
            const sidebar = document.getElementById('dashboard-sidebar');
            if (sidebar.classList.contains('hidden')) {
                sidebar.classList.remove('hidden');
                sidebar.classList.add('absolute', 'z-50', 'h-full');
            } else {
                sidebar.classList.add('hidden');
                sidebar.classList.remove('absolute', 'z-50', 'h-full');
            }
        }`;

    const newFunction = `function toggleDashboardSidebar() {
            const sidebar = document.getElementById('dashboard-sidebar');
            const overlay = document.getElementById('mobile-sidebar-overlay');
            if (sidebar.classList.contains('hidden')) {
                // Open sidebar
                sidebar.classList.remove('hidden');
                sidebar.classList.add('absolute', 'z-50', 'h-full', 'left-0', 'shadow-2xl');
                if(overlay) overlay.classList.remove('hidden');
            } else {
                // Close sidebar
                sidebar.classList.add('hidden');
                sidebar.classList.remove('absolute', 'z-50', 'h-full', 'left-0', 'shadow-2xl');
                if(overlay) overlay.classList.add('hidden');
            }
        }`;

    if (content.includes('function toggleDashboardSidebar() {') && !content.includes('overlay.classList.remove')) {
        // Replace old function by doing a regex replacement to grab the block
        content = content.replace(/function toggleDashboardSidebar\(\) \{[\s\S]*?\}/, newFunction);
    }

    fs.writeFileSync(file, content);
    console.log('Added responsive sidebar overlay to ' + file);
});
