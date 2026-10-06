document.addEventListener('DOMContentLoaded', () => {
    // Hide body initially to prevent flash, then we add the enter class
    // Wait, body should be opaque by default for users without JS.
    // The entrance animation will just start from 0 opacity.
    
    const urlParams = new URLSearchParams(window.location.search);
    const transition = urlParams.get('transition') || 'fade';
    
    // Add entrance class
    document.body.classList.add(`enter-${transition}`);
    
    // Intercept clicks on navbar links
    const navLinks = document.querySelectorAll('.header-links .nav-link, .mobile-menu-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const target = this.getAttribute('href');
            // Ignore anchors and external links
            if (!target || target.startsWith('#') || this.target === '_blank') return;
            
            // Only intercept if it's linking to one of our pages
            if (!target.includes('.html') && target !== '/') return;

            e.preventDefault();
            
            // Map href to animation type
            let animType = 'fade';
            if (target.includes('checkout')) animType = 'slide-left';
            else if (target.includes('fiestas')) animType = 'scale-up';
            else if (target.includes('cafeteria')) animType = 'slide-up';
            else if (target.includes('contacto')) animType = 'slide-down';
            
            // If going to home page
            if (target === '/' || target === 'index.html') animType = 'fade';
            
            // Apply exit animation to current page
            // Remove enter classes to avoid conflict
            document.body.className = document.body.className.replace(/enter-[a-z-]+/g, '');
            document.body.classList.add(`exit-${animType}`);
            
            // Check if URL already has params
            let finalUrl = target;
            if (finalUrl.includes('?')) {
                finalUrl += '&transition=' + animType;
            } else {
                finalUrl += '?transition=' + animType;
            }
            
            // Navigate after animation completes
            setTimeout(() => {
                window.location.href = finalUrl;
            }, 400);
        });
    });
});
