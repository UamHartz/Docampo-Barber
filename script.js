// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth Scrolling
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

// Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'var(--bg-white)';
        header.style.backdropFilter = 'none';
    }
});

// Date Validation with specific allowed days
const dateInput = document.getElementById('date');
const today = new Date().toISOString().split('T')[0];
dateInput.setAttribute('min', today);

// Set max date to 3 months from now
const maxDate = new Date();
maxDate.setMonth(maxDate.getMonth() + 3);
dateInput.setAttribute('max', maxDate.toISOString().split('T')[0]);

// Allow only Monday, Tuesday, and Thursday
dateInput.addEventListener('change', function() {
    const selectedDate = new Date(this.value);
    const dayOfWeek = selectedDate.getDay();
    
    // 0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday
    if (dayOfWeek !== 1 && dayOfWeek !== 2 && dayOfWeek !== 4) {
        this.value = '';
        alert('Lo siento, solo trabajo los lunes, martes y jueves. Por favor selecciona otro día.');
    }
});

// Appointment Form Submission
const appointmentForm = document.getElementById('appointmentForm');
const successModal = document.getElementById('successModal');

appointmentForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const appointmentData = {
        name: formData.get('name'),
        service: formData.get('service'),
        date: formData.get('date'),
        time: formData.get('time')
    };
    
    // Save to localStorage (in a real app, this would go to a server)
    const appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    appointmentData.id = Date.now();
    appointmentData.status = 'pending';
    appointments.push(appointmentData);
    localStorage.setItem('appointments', JSON.stringify(appointments));
    
    // Show success modal
    showSuccessModal();
    
    // Reset form
    this.reset();
    
    // In a real application, you would send this data to a server
    console.log('Cita reservada:', appointmentData);
    
    // You could also send WhatsApp message
    sendWhatsAppConfirmation(appointmentData);
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const contactData = {
        name: this.querySelector('input[type="text"]').value,
        email: this.querySelector('input[type="email"]').value,
        message: this.querySelector('textarea').value
    };
    
    // Save to localStorage
    const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    contactData.id = Date.now();
    contactData.timestamp = new Date().toISOString();
    messages.push(contactData);
    localStorage.setItem('contactMessages', JSON.stringify(messages));
    
    // Show success message
    alert('¡Mensaje enviado! Te responderé lo antes posible.');
    
    // Reset form
    this.reset();
    
    console.log('Mensaje de contacto:', contactData);
});

// Modal Functions
function showSuccessModal() {
    successModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    successModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    if (event.target === successModal) {
        closeModal();
    }
});

// Close modal with X button
document.querySelector('.close').addEventListener('click', closeModal);

// WhatsApp Confirmation (Optional)
function sendWhatsAppConfirmation(appointmentData) {
    const serviceNames = {
        'corte': 'Corte de Cabello'
    };
    
    const message = `¡Nueva cita reservada!%0A` +
                   `Nombre: ${appointmentData.name}%0A` +
                   `Servicio: ${serviceNames[appointmentData.service]}%0A` +
                   `Fecha: ${appointmentData.date}%0A` +
                   `Hora: ${appointmentData.time}`;
    
    // This would open WhatsApp with the message (uncomment if you want to use it)
    // window.open(`https://wa.me/34678119492?text=${message}`, '_blank');
}

// Service Cards Animation
const serviceCards = document.querySelectorAll('.service-card');
const galleryItems = document.querySelectorAll('.gallery-item');
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

serviceCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

galleryItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'scale(0.9)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
});

// Form Input Focus Effects
const formInputs = document.querySelectorAll('input, select, textarea');
formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
        if (this.value === '') {
            this.parentElement.classList.remove('focused');
        }
    });
});

// Add CSS for focused state
const style = document.createElement('style');
style.textContent = `
    .form-group.focused label {
        color: var(--accent-color);
        transform: translateY(-2px);
    }
    
    .form-group label {
        transition: all 0.3s ease;
    }
`;
document.head.appendChild(style);

// Loading Animation for Buttons
document.querySelectorAll('.btn-primary, .btn-submit').forEach(button => {
    button.addEventListener('click', function() {
        if (!this.disabled) {
            const originalText = this.textContent;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Procesando...';
            this.disabled = true;
            
            setTimeout(() => {
                this.textContent = originalText;
                this.disabled = false;
            }, 2000);
        }
    });
});

// Service Selection and Navigation
function selectServiceAndNavigate() {
    // Navigate to booking section
    window.location.href = '#booking';
    
    // Wait a bit for the navigation to complete, then select the service
    setTimeout(() => {
        const serviceSelect = document.getElementById('service');
        if (serviceSelect) {
            serviceSelect.value = 'corte';
        }
    }, 100);
}

// Time Slot Availability (Basic Implementation)
function updateTimeSlots() {
    const dateInput = document.getElementById('date');
    const timeSelect = document.getElementById('time');
    const selectedDate = new Date(dateInput.value);
    const dayOfWeek = selectedDate.getDay(); // 0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday
    
    // Clear existing options
    timeSelect.innerHTML = '<option value="">Selecciona hora</option>';
    
    let timeSlots = [];
    
    if (dayOfWeek === 1) { // Monday
        timeSlots = [
            '16:45', '17:00', '17:15', '17:30', '17:45', 
            '18:00', '18:15', '18:30', '18:45', '19:00', '19:15', '19:30'
        ];
    } else if (dayOfWeek === 2) { // Tuesday
        timeSlots = [
            '17:30', '17:45', '18:00', '18:15', '18:30', '18:45', '19:00', '19:15', '19:30'
        ];
    } else if (dayOfWeek === 4) { // Thursday
        timeSlots = [
            '18:00', '18:15', '18:30', '18:45', '19:00', '19:15', '19:30'
        ];
    }
    
    // Add time slots to select
    timeSlots.forEach(time => {
        const option = document.createElement('option');
        option.value = time;
        option.textContent = time;
        timeSelect.appendChild(option);
    });
}

dateInput.addEventListener('change', updateTimeSlots);

// Page Load Animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Gallery Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxNext = document.querySelector('.lightbox-next');
const lightboxPrev = document.querySelector('.lightbox-prev');
let currentImageIndex = 0;

galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        const img = this.querySelector('.gallery-image');
        lightboxImage.src = img.src;
        lightboxImage.alt = img.alt;
        lightbox.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Set current image index
        currentImageIndex = Array.from(galleryItems).indexOf(this);
        
        // Update button states
        updateButtonStates();
    });
});

function closeLightbox() {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function updateButtonStates() {
    // Update next button
    if (currentImageIndex >= galleryItems.length - 1) {
        lightboxNext.disabled = true;
    } else {
        lightboxNext.disabled = false;
    }
    
    // Update prev button
    if (currentImageIndex <= 0) {
        lightboxPrev.disabled = true;
    } else {
        lightboxPrev.disabled = false;
    }
}

function showNextImage() {
    if (currentImageIndex < galleryItems.length - 1) {
        currentImageIndex++;
        const nextImg = galleryItems[currentImageIndex].querySelector('.gallery-image');
        lightboxImage.src = nextImg.src;
        lightboxImage.alt = nextImg.alt;
        updateButtonStates();
    }
}

function showPreviousImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        const prevImg = galleryItems[currentImageIndex].querySelector('.gallery-image');
        lightboxImage.src = prevImg.src;
        lightboxImage.alt = prevImg.alt;
        updateButtonStates();
    }
}

lightboxClose.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', function(event) {
    if (event.target === lightbox) {
        closeLightbox();
    }
});

// Keyboard navigation
document.addEventListener('keydown', function(event) {
    if (lightbox.style.display === 'block') {
        if (event.key === 'Escape') {
            closeLightbox();
        } else if (event.key === 'ArrowRight') {
            showNextImage();
        } else if (event.key === 'ArrowLeft') {
            showPreviousImage();
        }
    }
});

// Console Welcome Message
console.log('%c¡Bienvenido a la web de Oinatz Docampo! 🎨✂️', 'font-size: 20px; color: #d4af37; font-weight: bold;');
console.log('%cSi eres desarrollador y quieres mejorar esta web, contacta con Oinatz', 'font-size: 14px; color: #2c3e50;');
