 // Theme Toggle
        const themeToggle = document.getElementById('theme-toggle');
        const body = document.body;
        
        // Check for saved theme preference or respect OS preference
        if (localStorage.getItem('theme') === 'light' || 
            (window.matchMedia('(prefers-color-scheme: light)').matches && !localStorage.getItem('theme'))) {
            body.classList.add('light-mode');
        }
        
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('light-mode');
            localStorage.setItem('theme', body.classList.contains('light-mode') ? 'light' : 'dark');
        });

        // Sticky Header
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            header.classList.toggle('sticky', window.scrollY > 0);
        });

        // Menu Toggle
        const menuBtn = document.getElementById('menu-btn');
        const navbar = document.getElementById('navbar');
        
        menuBtn.addEventListener('click', () => {
            navbar.classList.toggle('active');
            menuBtn.classList.toggle('fa-times');
        });

        window.addEventListener('scroll', () => {
            navbar.classList.remove('active');
            menuBtn.classList.remove('fa-times');
        });

        // Scroll Animation
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.service-box, .skill, .timeline-item, .experience-box');
        hiddenElements.forEach((el) => observer.observe(el));

        // Form Submission
        const contactForm = document.querySelector('.contact form');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
           
contactForm.reset();
        });