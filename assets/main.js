// main.js - Global UI Logic

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const hamburger = document.querySelector('.hamburger-menu');
  const mobileNav = document.querySelector('.mobile-nav-overlay');
  const closeBtn = document.querySelector('.mobile-close-btn');

  if (hamburger && mobileNav && closeBtn) {
    hamburger.addEventListener('click', () => {
      mobileNav.classList.add('active');
      document.body.classList.add('no-scroll');
      document.documentElement.classList.add('no-scroll');
    });

    closeBtn.addEventListener('click', () => {
      mobileNav.classList.remove('active');
      document.body.classList.remove('no-scroll');
      document.documentElement.classList.remove('no-scroll');
    });
    
    // Also handle when a nav link is clicked to ensure scroll lock releases
    const navLinks = mobileNav.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        document.body.classList.remove('no-scroll');
        document.documentElement.classList.remove('no-scroll');
      });
    });
  }

  // Header Scroll Effect
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(10, 15, 26, 0.98)';
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
      } else {
        header.style.backgroundColor = 'rgba(10, 15, 26, 0.95)';
        header.style.boxShadow = 'none';
      }
    });
  }
  
  // CTA Links - aggressively redirect all to 404.html, except auth pages
  if (!window.location.pathname.includes('404.html')) {
    const ctas = document.querySelectorAll('.btn-gold, .btn-outline-gold');
    ctas.forEach(cta => {
      if (cta.tagName.toLowerCase() === 'a') {
        const originalHref = cta.getAttribute('href');
        if (originalHref !== 'login.html' && originalHref !== 'signup.html') {
          cta.setAttribute('href', '404.html');
        }
      } else if (cta.tagName.toLowerCase() === 'button' && cta.type !== 'submit' && !cta.hasAttribute('onclick')) {
        cta.addEventListener('click', (e) => {
          e.preventDefault();
          window.location.href = '404.html';
        });
      }
    });
  }
});
