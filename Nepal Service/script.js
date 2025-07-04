document.addEventListener('DOMContentLoaded', function() {
    // Sample services data
    const services = [
        {
            id: 1,
            title: "Home Cleaning",
            description: "Professional home cleaning service with eco-friendly products. We'll make your home sparkle!",
            category: "Home Services",
            price: 500,
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            id: 2,
            title: "Math Tutoring",
            description: "Experienced math tutor for high school and college students. Specializing in algebra and calculus.",
            category: "Tutoring",
            price: 350,
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            id: 3,
            title: "Web Development",
            description: "Full-stack web development services. From simple websites to complex web applications.",
            category: "IT & Tech",
            price: 750,
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            id: 4,
            title: "Yoga Instructor",
            description: "Certified yoga instructor offering private and group sessions for all skill levels.",
            category: "Health & Wellness",
            price: 400,
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            id: 5,
            title: "Plumbing Services",
            description: "24/7 emergency plumbing services. Fast response and quality work guaranteed.",
            category: "Home Services",
            price: 650,
            rating: 4.6,
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            id: 6,
            title: "Graphic Design",
            description: "Creative graphic design services for logos, branding, and marketing materials.",
            category: "IT & Tech",
            price: 550,
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
      {
          id: 7,
            title: "A/C Maintenance",
            description: "with trained technician offering the service maintenance for the conditioner.",
            category: "A/C Maintenance",
            price: 1000,
            rating: 4.8,
            image: "https://i.imageupload.app/89b88fcef0349c15be80.png"
        }
    ];

    // DOM Elements
    const servicesGrid = document.getElementById('services-grid');
    const categoryButtons = document.querySelectorAll('.category');
    const serviceForm = document.getElementById('service-form');
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');
    const authModal = document.getElementById('auth-modal');
    const closeBtn = document.querySelector('.close-btn');
    const tabButtons = document.querySelectorAll('.tab-btn');
    const authForms = document.querySelectorAll('.auth-form');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    // Display services
    function displayServices(filter = 'All') {
        servicesGrid.innerHTML = '';
        
        const filteredServices = filter === 'All' 
            ? services 
            : services.filter(service => service.category === filter);
        
        filteredServices.forEach(service => {
            const serviceCard = document.createElement('div');
            serviceCard.className = 'service-card';
            serviceCard.innerHTML = `
                <div class="service-img" style="background-image: url('${service.image}')"></div>
                <div class="service-info">
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
                    <div class="service-meta">
                        <span class="price">Rs${service.price}/hr</span>
                        <span class="rating"><i class="fas fa-star"></i> ${service.rating}</span>
                    </div>
                </div>
            `;
            servicesGrid.appendChild(serviceCard);
        });
    }

    // Filter services by category
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            displayServices(button.textContent);
        });
    });

    // Handle service form submission
    serviceForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const title = document.getElementById('service-title').value;
        const category = document.getElementById('service-category').value;
        const description = document.getElementById('service-description').value;
        const price = parseFloat(document.getElementById('service-price').value);
        const location = document.getElementById('service-location').value;
        
        // Generate a random image for the new service
        const randomImages = [
            'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        ];
        const randomImage = randomImages[Math.floor(Math.random() * randomImages.length)];
        
        const newService = {
            id: services.length + 1,
            title,
            description,
            category,
            price,
            rating: (Math.random() * 0.7 + 4.3).toFixed(1),
            image: randomImage
        };
        
        services.push(newService);
        displayServices(document.querySelector('.category.active').textContent);
        serviceForm.reset();
        
        alert('Service posted successfully!');
    });

    // Auth modal functionality
    function openAuthModal() {
        authModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function closeAuthModal() {
        authModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    loginBtn.addEventListener('click', openAuthModal);
    signupBtn.addEventListener('click', () => {
        openAuthModal();
        // Switch to signup tab when signup button is clicked
        tabButtons.forEach(btn => btn.classList.remove('active'));
        authForms.forEach(form => form.classList.remove('active'));
        document.querySelector('.tab-btn[data-tab="signup"]').classList.add('active');
        document.getElementById('signup').classList.add('active');
    });

    closeBtn.addEventListener('click', closeAuthModal);
    window.addEventListener('click', (e) => {
        if (e.target === authModal) {
            closeAuthModal();
        }
    });

    // Tab switching in auth modal
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            
            tabButtons.forEach(btn => btn.classList.remove('active'));
            authForms.forEach(form => form.classList.remove('active'));
            
            button.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Form submissions
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        
        // In a real app, you would validate and send to server
        alert(`Login attempt with email: ${email}`);
        closeAuthModal();
    });

    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const confirm = document.getElementById('signup-confirm').value;
        
        if (password !== confirm) {
            alert('Passwords do not match!');
            return;
        }
        
        // In a real app, you would validate and send to server
        alert(`Signup attempt for: ${name} (${email})`);
        closeAuthModal();
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Initialize the page
    displayServices();
});