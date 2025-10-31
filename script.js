// profile.js
        // Contact Form Handler with Email Integration
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const fullName = document.getElementById('fullName').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            const formMessage = document.getElementById('formMessage');
            
            // Validation
            if (!fullName || !email || !message) {
                formMessage.textContent = '✗ Please fill in all required fields.';
                formMessage.className = 'form-message error';
                formMessage.style.display = 'block';
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                formMessage.textContent = '✗ Please enter a valid email address.';
                formMessage.className = 'form-message error';
                formMessage.style.display = 'block';
                return;
            }
            
            // Create email content
            const subject = encodeURIComponent(`Portfolio Contact from ${fullName}`);
            const body = encodeURIComponent(`Name: ${fullName}\nEmail: ${email}\n\nMessage:\n${message}`);
            
            // Open default email client
            window.location.href = `mailto:sudharsanselvan13@gmail.com?subject=${subject}&body=${body}`;
            
            // Show success message
            formMessage.textContent = '✓ Opening your email client... Your message will be sent via email!';
            formMessage.className = 'form-message success';
            formMessage.style.display = 'block';
            
            // Log the message data
            console.log('Contact Form Submission:', {
                name: fullName,
                email: email,
                message: message,
                timestamp: new Date().toISOString()
            });
            
            // Reset form after a delay
            setTimeout(() => {
                document.getElementById('contactForm').reset();
                formMessage.style.display = 'none';
            }, 3000);
        });

        // Smooth scrolling for navigation links
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const fullName = document.getElementById('fullName').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            const formMessage = document.getElementById('formMessage');
            
            // Simple validation
            if (fullName && email && message) {
                // Store message in memory (since we can't use localStorage)
                const messageData = {
                    name: fullName,
                    email: email,
                    message: message,
                    timestamp: new Date().toISOString()
                };
                
                console.log('Message received:', messageData);
                
                // Show success message
                formMessage.textContent = '✓ Thank you! Your message has been sent successfully. I will get back to you soon!';
                formMessage.className = 'form-message success';
                formMessage.style.display = 'block';
                
                // Reset form
                document.getElementById('contactForm').reset();
                
                // Hide message after 5 seconds
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);
            } else {
                formMessage.textContent = '✗ Please fill in all required fields.';
                formMessage.className = 'form-message error';
                formMessage.style.display = 'block';
            }
        });

        // Smooth scrolling for navigation links
        // Also close mobile nav when a link is clicked
        const nav = document.querySelector('nav');
        const navToggle = document.querySelector('.nav-toggle');
        if (navToggle) {
            navToggle.addEventListener('click', function() {
                nav.classList.toggle('open');
            });
        }

        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // close the nav on small screens after click
                if (nav && nav.classList.contains('open')) {
                    nav.classList.remove('open');
                }
            });
        });

        // Scroll to top button
        const scrollTopBtn = document.getElementById('scrollTop');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Add animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll('section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'all 0.6s ease';
            observer.observe(section);
        });