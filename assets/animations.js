// animations.js - GSAP and AOS initialization

document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });
  }

  // GSAP Animations
  if (typeof gsap !== 'undefined') {
    
    // Hero Text Reveal
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroBtns = document.querySelector('.hero-btns');
    
    if (heroTitle) {
      gsap.from(heroTitle, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out'
      });
    }
    
    if (heroSubtitle) {
      gsap.from(heroSubtitle, {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out'
      });
    }
    
    if (heroBtns) {
      gsap.from(heroBtns, {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.8,
        ease: 'power3.out'
      });
    }
    
    // Counter Animation
    const counters = document.querySelectorAll('.counter-val');
    if (counters.length > 0 && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        
        gsap.to(counter, {
          scrollTrigger: {
            trigger: counter,
            start: "top 80%",
            once: true
          },
          innerHTML: target,
          duration: 2,
          snap: { innerHTML: 1 },
          ease: "power1.inOut"
        });
      });
    }
  }
});
