// ============================================
// Cold Radical Radishes - JavaScript
// ============================================

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Navigation Toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close menu when clicking on a nav link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    // Scroll to Top Button
    const scrollTopBtn = document.getElementById('scrollTop');
    
    if (scrollTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });

        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const event = document.getElementById('event').value;
            const message = document.getElementById('message').value;

            // In a real implementation, you would send this to a server
            // For now, we'll just show a fun alert
            showRadicalAlert(`🦄 Thanks ${name}! 🦄\n\nWe got your message about your ${event}!\nWe'll email you at ${email} super soon with some radical ideas! 🥬✨\n\nStay radical! 🌈`);
            
            // Reset form
            contactForm.reset();
        });
    }

    // Fun Alert Function
    function showRadicalAlert(message) {
        // Create a custom modal instead of using alert
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
            padding: 40px;
            border-radius: 20px;
            border: 5px solid #ff10f0;
            box-shadow: 0 0 50px #ff10f0, 0 0 100px #00f0ff;
            z-index: 10000;
            text-align: center;
            color: white;
            font-size: 1.2rem;
            max-width: 500px;
            animation: bounceIn 0.5s;
        `;
        
        modal.innerHTML = `
            <div style="white-space: pre-line; margin-bottom: 20px;">${message}</div>
            <button id="closeModal" style="
                padding: 15px 30px;
                font-size: 1.2rem;
                font-weight: bold;
                background: linear-gradient(45deg, #ff10f0, #bf00ff);
                color: white;
                border: none;
                border-radius: 25px;
                cursor: pointer;
                font-family: inherit;
            ">Awesome! 🎉</button>
        `;

        // Create backdrop
        const backdrop = document.createElement('div');
        backdrop.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            z-index: 9999;
        `;

        document.body.appendChild(backdrop);
        document.body.appendChild(modal);

        // Close modal
        const closeBtn = document.getElementById('closeModal');
        const closeModal = () => {
            modal.remove();
            backdrop.remove();
        };

        closeBtn.addEventListener('click', closeModal);
        backdrop.addEventListener('click', closeModal);
    }

    // Add hover sound effects (optional fun feature)
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            // Could add sound effects here in a full implementation
            this.style.transform = 'scale(1.05) rotate(2deg)';
        });
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe cards and sections
    const animatedElements = document.querySelectorAll('.about-card, .menu-item, .package-card, .contact-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add random sparkle effects
    function createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.cssText = `
            position: fixed;
            font-size: ${Math.random() * 20 + 10}px;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            pointer-events: none;
            animation: sparkle-fade 2s ease-out forwards;
            z-index: 9999;
        `;
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 2000);
    }

    // Add sparkle animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes sparkle-fade {
            0% {
                opacity: 1;
                transform: scale(0) rotate(0deg);
            }
            50% {
                opacity: 1;
                transform: scale(1) rotate(180deg);
            }
            100% {
                opacity: 0;
                transform: scale(0) rotate(360deg);
            }
        }
        
        @keyframes bounceIn {
            0% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.5);
            }
            50% {
                transform: translate(-50%, -50%) scale(1.1);
            }
            100% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
        }
    `;
    document.head.appendChild(style);

    // Create sparkles periodically
    setInterval(createSparkle, 3000);

    // Konami Code Easter Egg (Up, Up, Down, Down, Left, Right, Left, Right, B, A)
    // Note: Press arrow keys and then lowercase 'b' and 'a' keys
    let konamiCode = [];
    const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    
    document.addEventListener('keydown', function(e) {
        konamiCode.push(e.key);
        konamiCode = konamiCode.slice(-10);
        
        if (konamiCode.join(',') === konamiPattern.join(',')) {
            activateUltraRadicalMode();
        }
    });

    function activateUltraRadicalMode() {
        // Ultra radical mode - everything goes crazy!
        document.body.style.animation = 'rainbow-spin 2s infinite';
        
        const ultraStyle = document.createElement('style');
        ultraStyle.textContent = `
            @keyframes rainbow-spin {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(ultraStyle);

        // Show message
        showRadicalAlert('🎉🦄 ULTRA RADICAL MODE ACTIVATED! 🦄🎉\n\nYou found the secret! Everything is now EXTRA funky! 🌈✨');

        // Add more sparkles with proper scope
        let sparkleInterval = setInterval(createSparkle, 500);
        
        // Stop after 10 seconds
        setTimeout(() => {
            if (sparkleInterval) {
                clearInterval(sparkleInterval);
                sparkleInterval = null;
            }
            document.body.style.animation = '';
        }, 10000);
    }

    // Add click effects to CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-button, .submit-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.5);
                left: ${x}px;
                top: ${y}px;
                pointer-events: none;
                animation: ripple 0.6s ease-out;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add ripple animation
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes ripple {
            0% {
                transform: scale(0);
                opacity: 1;
            }
            100% {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);

    // Console Easter Egg
    console.log('%c🦄 Welcome to Cold Radical Radishes! 🥬', 'font-size: 20px; color: #ff10f0; font-weight: bold;');
    console.log('%cYou found the console! You must be pretty radical yourself! 🌈', 'font-size: 14px; color: #00f0ff;');
    console.log('%cTry the Konami Code for a surprise! ✨', 'font-size: 12px; color: #39ff14;');

    // Log page load time
    window.addEventListener('load', function() {
        console.log('%c⚡ Page loaded and ready to be radical!', 'color: #ffff00; font-weight: bold;');
    });
});
