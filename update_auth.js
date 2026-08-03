const fs = require('fs');

// 1. Update auth.js to store the email
const authFile = 'js/auth.js';
if (fs.existsSync(authFile)) {
    let authContent = fs.readFileSync(authFile, 'utf8');
    
    // Add logic to save email
    if (!authContent.includes("sessionStorage.setItem('stackly_email'")) {
        authContent = authContent.replace(
            "const role = roleSelect ? roleSelect.value : '';", 
            "const role = roleSelect ? roleSelect.value : '';\n      const emailInput = loginForm.querySelector('input[type=\"email\"]');\n      if(emailInput && emailInput.value) sessionStorage.setItem('stackly_email', emailInput.value);"
        );
        fs.writeFileSync(authFile, authContent);
        console.log('auth.js updated.');
    }
}

// 2. Add dynamic display script to dashboards
['client-dashboard.html', 'admin-dashboard.html'].forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');

    // Add classes to the topbar name
    content = content.replace(
        '<div class="text-sm text-white font-serif tracking-widest">Director Blackwood</div>',
        '<div class="text-sm text-white font-serif tracking-widest auth-user-name">Director Blackwood</div>'
    );
    
    content = content.replace(
        '<div class="text-sm text-white font-serif tracking-widest">Client Name</div>',
        '<div class="text-sm text-white font-serif tracking-widest auth-user-name">Client Name</div>'
    );

    // Replace display-user-name with auth-user-name
    content = content.replace(/display-user-name/g, 'auth-user-name');
    content = content.replace(/display-user-email/g, 'auth-user-email');

    // Add the script at the bottom before </body>
    const authScript = `
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const email = sessionStorage.getItem('stackly_email');
            if(email) {
                // Extract name from email (e.g., avunoori0831@gmail.com -> Avunoori0831)
                let name = email.split('@')[0];
                name = name.charAt(0).toUpperCase() + name.slice(1);
                
                document.querySelectorAll('.auth-user-email').forEach(el => el.textContent = email);
                document.querySelectorAll('.auth-user-name').forEach(el => el.textContent = name);
            }
        });
    </script>
`;
    
    if (!content.includes("const email = sessionStorage.getItem('stackly_email');")) {
        content = content.replace('</body>', authScript + '</body>');
    }

    fs.writeFileSync(file, content);
    console.log(file + ' updated.');
});
