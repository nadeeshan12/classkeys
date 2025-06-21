document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dotsContainer = document.querySelector('.slider-dots');
    
    let currentSlide = 0;
    
    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.dot');
    
    function updateSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }
    
    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlide(currentSlide);
    });
    
    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlide(currentSlide);
    });
    
    // Auto advance slides
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlide(currentSlide);
    }, 5000);
});
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const desktopMenu = document.querySelector('.desktop-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    desktopMenu.style.display = desktopMenu.style.display === 'block' ? 'none' : 'block';
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        desktopMenu.style.display = 'block';
        mobileMenuBtn.classList.remove('active');
    } else {
        desktopMenu.style.display = 'none';
    }
});

// Add this to your existing script.js
// Add touch interaction for mobile navigation
document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.mobile-nav .nav-item i');
    let lastTouched = null;

    navItems.forEach(item => {
        item.addEventListener('touchstart', (e) => {
            e.preventDefault();
            
            // Remove yellow color from previous item
            if (lastTouched && lastTouched !== item) {
                lastTouched.classList.remove('touched');
                lastTouched.classList.add('animate');
                
                // Remove animation class after it completes
                setTimeout(() => {
                    lastTouched.classList.remove('animate');
                }, 500);
            }

            // Add yellow color to current item
            item.classList.add('touched');
            lastTouched = item;
        });
    });
});

const header = document.querySelector('.header');

// Handle header background on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Add ScrollReveal for smooth element animations
document.addEventListener('DOMContentLoaded', () => {
    // Smooth reveal for feature boxes
    const featureBoxes = document.querySelectorAll('.feature-box');
    featureBoxes.forEach((box, index) => {
        setTimeout(() => {
            box.style.opacity = '0';
            box.style.transform = 'translateY(20px)';
            box.style.transition = 'all 0.6s ease';
            setTimeout(() => {
                box.style.opacity = '1';
                box.style.transform = 'translateY(0)';
            }, index * 200);
        }, 500);
    });

    // Smooth reveal for quiz boxes
    const quizBoxes = document.querySelectorAll('.quiz-box');
    quizBoxes.forEach((box, index) => {
        setTimeout(() => {
            box.style.opacity = '0';
            box.style.transform = 'translateX(-20px)';
            box.style.transition = 'all 0.5s ease';
            setTimeout(() => {
                box.style.opacity = '1';
                box.style.transform = 'translateX(0)';
            }, index * 200);
        }, 500);
    });

    // Add hover effect for article cards
    const articleCards = document.querySelectorAll('.article-card');
    articleCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
            card.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
        });
    });

    // Add smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add parallax effect to slider images
    const sliderImages = document.querySelectorAll('.slide');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        sliderImages.forEach(image => {
            const parent = image.parentElement;
            const parentRect = parent.getBoundingClientRect();
            if (parentRect.top < window.innerHeight && parentRect.bottom > 0) {
                image.style.transform = `translateY(${scrolled * 0.2}px)`;
            }
        });
    });

    // Add loading animation for subject icons
    const subjectIcons = document.querySelectorAll('.subject-icon');
    subjectIcons.forEach((icon, index) => {
        icon.style.opacity = '0';
        icon.style.transform = 'scale(0.8)';
        icon.style.transition = 'all 0.4s ease';
        setTimeout(() => {
            icon.style.opacity = '1';
            icon.style.transform = 'scale(1)';
        }, index * 150 + 1000);
    });

    // Add pulse animation for download button
    const downloadBtn = document.querySelector('.download-btn');
    if (downloadBtn) {
        setInterval(() => {
            downloadBtn.style.transform = 'scale(1.05)';
            downloadBtn.style.boxShadow = '0 6px 25px rgba(197, 23, 46, 0.4)';
            setTimeout(() => {
                downloadBtn.style.transform = 'scale(1)';
                downloadBtn.style.boxShadow = '0 4px 15px rgba(197, 23, 46, 0.2)';
            }, 200);
        }, 3000);
    }
});






  