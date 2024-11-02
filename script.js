// Smooth scrolling for navigation links
document.querySelectorAll('.nav-list a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Toggle mobile menu
const mobileMenuBtn = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navList.classList.toggle('active');
    });
}

// Modal functionality
const modal = document.getElementById('contactModal');
const modalClose = document.querySelector('.modal-close');
const contactLink = document.querySelector('.nav-list a[href="#contact"]');

if (contactLink) {
    contactLink.addEventListener('click', (e) => {
        e.preventDefault();
        if (modal) {
            modal.style.display = 'block';
        }
    });
}

if (modalClose) {
    modalClose.addEventListener('click', () => {
        if (modal) {
            modal.style.display = 'none';
        }
    });
}

// Form validation
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = this.name.value.trim();
        const email = this.email.value.trim();
        const message = this.message.value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Simulate form submission
        alert('Form submitted successfully!');
        this.reset();
        if (modal) {
            modal.style.display = 'none'; // Close modal after submission
        }
    });
}