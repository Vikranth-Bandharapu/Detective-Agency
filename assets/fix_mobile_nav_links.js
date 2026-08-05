const fs = require('fs');

const files = ['index.html', 'about.html', 'services.html', 'case-studies.html', 'blog.html', 'contact.html'];

files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');

    let modified = false;

    // Check if the mobile nav overlay is missing the login link
    if (content.includes('<div class="mobile-nav-overlay">') && !content.includes('<a href="login.html" class="nav-link"')) {
        // Find the closing div of the mobile-nav-overlay
        content = content.replace(
            '<a href="contact.html" class="nav-link text-accent">Contact</a>\r\n  </div>',
            '<a href="contact.html" class="nav-link text-accent">Contact</a>\r\n    <a href="login.html" class="nav-link">Login</a>\r\n    <a href="signup.html" class="nav-link">Sign Up</a>\r\n  </div>'
        );
        content = content.replace(
            '<a href="contact.html" class="nav-link">Contact</a>\r\n  </div>',
            '<a href="contact.html" class="nav-link">Contact</a>\r\n    <a href="login.html" class="nav-link">Login</a>\r\n    <a href="signup.html" class="nav-link">Sign Up</a>\r\n  </div>'
        );
        // Sometimes it's \n instead of \r\n
        content = content.replace(
            '<a href="contact.html" class="nav-link text-accent">Contact</a>\n  </div>',
            '<a href="contact.html" class="nav-link text-accent">Contact</a>\n    <a href="login.html" class="nav-link">Login</a>\n    <a href="signup.html" class="nav-link">Sign Up</a>\n  </div>'
        );
        content = content.replace(
            '<a href="contact.html" class="nav-link">Contact</a>\n  </div>',
            '<a href="contact.html" class="nav-link">Contact</a>\n    <a href="login.html" class="nav-link">Login</a>\n    <a href="signup.html" class="nav-link">Sign Up</a>\n  </div>'
        );
        modified = true;
    }

    if (modified) {
        fs.writeFileSync(file, content);
        console.log('Added auth links to mobile nav in ' + file);
    }
});
