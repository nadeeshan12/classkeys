document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const desktopMenu = document.querySelector('.desktop-menu');
    
    mobileMenuToggle.addEventListener('click', function() {
        desktopMenu.style.display = desktopMenu.style.display === 'flex' ? 'none' : 'flex';
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.desktop-menu') && 
            !event.target.closest('.mobile-menu-toggle')) {
            if (window.innerWidth < 768) {
                desktopMenu.style.display = 'none';
            }
        }
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768) {
            desktopMenu.style.display = 'flex';
        } else {
            desktopMenu.style.display = 'none';
        }
    });

    // Notification click handler
    const notificationIcon = document.querySelector('.notification-icon');
    notificationIcon.addEventListener('click', function() {
        alert('Notifications clicked!');
        // Add your notification panel logic here
    });

    // Updated typing effect for hero section
    const text = "ClassKey";
    const typingText = document.querySelector('.typing-text');
    
    function typeWriter() {
        typingText.classList.add('typing');
        let displayText = "";
        let charIndex = 0;
        
        function type() {
            if (charIndex < text.length) {
                displayText += text.charAt(charIndex);
                typingText.textContent = displayText;
                charIndex++;
                setTimeout(type, 150);
            } else {
                setTimeout(erase, 2000);
            }
        }
        
        function erase() {
            if (displayText.length > 0) {
                displayText = displayText.slice(0, -1);
                typingText.textContent = displayText;
                setTimeout(erase, 100);
            } else {
                charIndex = 0;
                setTimeout(type, 500);
            }
        }
        
        type();
    }
    
    typeWriter();
});