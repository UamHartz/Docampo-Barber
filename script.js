// Enhanced Features
const appointmentForm = document.getElementById('appointmentForm');
const successModal = document.getElementById('successModal');
const scrollToTopBtn = document.querySelector('.scroll-to-top');
const particlesContainer = document.getElementById('particles');

// Create floating particles
function createParticles() {
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Scroll to top functionality
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Initialize particles
createParticles();

// Enhanced typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Apply typing effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 80);
    }
});

// Enhanced hover effects for service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02) rotateZ(1deg)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1) rotateZ(0deg)';
    });
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const barberIcon = document.querySelector('.barber-icon');
    
    // Remove parallax effects that might cause scroll issues
    if (hero && barberIcon) {
        // Keep elements in their original positions
        hero.style.transform = 'translateY(0)';
        barberIcon.style.transform = 'translateY(-50%) translateX(0) rotate(0deg)';
    }
});

// Enhanced form input animations
document.querySelectorAll('.form-group input, .form-group select, .form-group textarea').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
        this.parentElement.style.transform = 'scale(1.02)';
    });
    
    input.addEventListener('blur', function() {
        if (this.value === '') {
            this.parentElement.classList.remove('focused');
        }
        this.parentElement.style.transform = 'scale(1)';
    });
});

// Add ripple effect to buttons
document.querySelectorAll('.btn-primary, .btn-secondary, .btn-submit').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        // Add ripple styles if not already added
        if (!document.getElementById('rippleStyles')) {
            const rippleStyles = document.createElement('style');
            rippleStyles.id = 'rippleStyles';
            rippleStyles.textContent = `
                .ripple {
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.5);
                    transform: scale(0);
                    animation: ripple-animation 0.6s ease-out;
                    pointer-events: none;
                }
                
                @keyframes ripple-animation {
                    to {
                        transform: scale(4);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(rippleStyles);
        }
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Enhanced loading states
document.querySelectorAll('.btn-primary, .btn-submit').forEach(button => {
    button.addEventListener('click', function() {
        if (!this.disabled) {
            const originalContent = this.innerHTML;
            this.innerHTML = '<span class="loading-spinner"></span> Procesando...';
            this.disabled = true;
            
            setTimeout(() => {
                this.innerHTML = originalContent;
                this.disabled = false;
            }, 2000);
        }
    });
});

// Form Validation Enhancement
function validateForm(formData) {
    const errors = [];
    
    // Name validation
    if (!formData.name || formData.name.trim().length < 2) {
        errors.push('El nombre debe tener al menos 2 caracteres');
    }
    
    // Service validation
    if (!formData.service) {
        errors.push('Debes seleccionar un servicio');
    }
    
    // Date validation
    if (!formData.date) {
        errors.push('Debes seleccionar una fecha');
    } else {
        const selectedDate = new Date(formData.date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (selectedDate < today) {
            errors.push('No puedes seleccionar una fecha pasada');
        }
        
        // Check if it's a working day
        const dayOfWeek = selectedDate.getDay();
        if (dayOfWeek !== 1 && dayOfWeek !== 2 && dayOfWeek !== 4) {
            errors.push('Solo trabajo los lunes, martes y jueves');
        }
    }
    
    // Time validation
    if (!formData.time) {
        errors.push('Debes seleccionar una hora');
    }
    
    return errors;
}

// Enhanced Appointment Form Submission
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
    
    // Validate form
    const errors = validateForm(appointmentData);
    
    if (errors.length > 0) {
        // Show errors
        showFormErrors(errors);
        return;
    }
    
    // Save to localStorage (in a real app, this would go to a server)
    const appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    appointmentData.id = Date.now();
    appointmentData.status = 'pending';
    appointmentData.createdAt = new Date().toISOString();
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

// Form Validation Enhancement
function validateForm(formData) {
    const errors = [];
    
    // Name validation
    if (!formData.name || formData.name.trim().length < 2) {
        errors.push('El nombre debe tener al menos 2 caracteres');
    }
    
    // Service validation
    if (!formData.service) {
        errors.push('Debes seleccionar un servicio');
    }
    
    // Date validation
    if (!formData.date) {
        errors.push('Debes seleccionar una fecha');
    } else {
        const selectedDate = new Date(formData.date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (selectedDate < today) {
            errors.push('No puedes seleccionar una fecha pasada');
        }
        
        // Check if it's a working day
        const dayOfWeek = selectedDate.getDay();
        if (dayOfWeek !== 1 && dayOfWeek !== 2 && dayOfWeek !== 4) {
            errors.push('Solo trabajo los lunes, martes y jueves');
        }
    }
    
    // Time validation
    if (!formData.time) {
        errors.push('Debes seleccionar una hora');
    }
    
    return errors;
}

// Enhanced Appointment Form Submission
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
    
    // Validate form
    const errors = validateForm(appointmentData);
    
    if (errors.length > 0) {
        // Show errors
        showFormErrors(errors);
        return;
    }
    
    // Save to localStorage (in a real app, this would go to a server)
    const appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    appointmentData.id = Date.now();
    appointmentData.status = 'pending';
    appointmentData.createdAt = new Date().toISOString();
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

// Show form errors
function showFormErrors(errors) {
    // Create or update error container
    let errorContainer = document.getElementById('formErrors');
    if (!errorContainer) {
        errorContainer = document.createElement('div');
        errorContainer.id = 'formErrors';
        errorContainer.className = 'form-errors';
        appointmentForm.insertBefore(errorContainer, appointmentForm.firstChild);
    }
    
    // Add error styles
    errorContainer.innerHTML = `
        <div class="error-icon">
            <i class="fas fa-exclamation-triangle"></i>
        </div>
        <div class="error-messages">
            ${errors.map(error => `<p>${error}</p>`).join('')}
        </div>
        <button type="button" onclick="clearFormErrors()" class="error-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add CSS for errors
    if (!document.getElementById('errorStyles')) {
        const errorStyles = document.createElement('style');
        errorStyles.id = 'errorStyles';
        errorStyles.textContent = `
            .form-errors {
                background: linear-gradient(135deg, #fff5f5, #fee);
                border: 2px solid var(--error-color);
                border-radius: var(--border-radius);
                padding: 1rem;
                margin-bottom: 1.5rem;
                display: flex;
                align-items: flex-start;
                gap: 1rem;
                animation: slideDown 0.3s ease;
            }
            
            .error-icon {
                color: var(--error-color);
                font-size: 1.5rem;
                margin-top: 0.25rem;
            }
            
            .error-messages p {
                color: var(--error-color);
                margin: 0.25rem 0;
                font-weight: 500;
            }
            
            .error-close {
                background: none;
                border: none;
                color: var(--error-color);
                cursor: pointer;
                font-size: 1.2rem;
                margin-left: auto;
                padding: 0.25rem;
            }
            
            @keyframes slideDown {
                from { transform: translateY(-20px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
        `;
        document.head.appendChild(errorStyles);
    }
}

// Clear form errors
function clearFormErrors() {
    const errorContainer = document.getElementById('formErrors');
    if (errorContainer) {
        errorContainer.remove();
    }
}

// Enhanced Contact Form Submission
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const contactData = {
        name: this.querySelector('input[type="text"]').value,
        email: this.querySelector('input[type="email"]').value,
        message: this.querySelector('textarea').value
    };
    
    // Basic validation
    if (!contactData.name || contactData.name.trim().length < 2) {
        showContactError('El nombre debe tener al menos 2 caracteres');
        return;
    }
    
    if (!contactData.email || !contactData.email.includes('@')) {
        showContactError('Por favor, introduce un email válido');
        return;
    }
    
    if (!contactData.message || contactData.message.trim().length < 10) {
        showContactError('El mensaje debe tener al menos 10 caracteres');
        return;
    }
    
    // Save to localStorage
    const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    contactData.id = Date.now();
    contactData.timestamp = new Date().toISOString();
    messages.push(contactData);
    localStorage.setItem('contactMessages', JSON.stringify(messages));
    
    // Show success message
    showContactSuccess('¡Mensaje enviado! Te responderé lo antes posible.');
    
    // Reset form
    this.reset();
    
    console.log('Mensaje de contacto:', contactData);
});

// Show contact form errors
function showContactError(message) {
    const existingError = document.querySelector('.contact-error');
    if (existingError) existingError.remove();
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'contact-error';
    errorDiv.innerHTML = `
        <i class="fas fa-exclamation-circle"></i>
        <span>${message}</span>
    `;
    
    // Add styles
    if (!document.getElementById('contactErrorStyles')) {
        const styles = document.createElement('style');
        styles.id = 'contactErrorStyles';
        styles.textContent = `
            .contact-error {
                background: #fff5f5;
                border: 2px solid var(--error-color);
                color: var(--error-color);
                padding: 0.75rem 1rem;
                border-radius: var(--border-radius);
                margin-bottom: 1rem;
                display: flex;
                align-items: center;
                gap: 0.5rem;
                animation: shake 0.5s ease;
            }
            
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-5px); }
                75% { transform: translateX(5px); }
            }
        `;
        document.head.appendChild(styles);
    }
    
    contactForm.insertBefore(errorDiv, contactForm.firstChild);
    
    setTimeout(() => errorDiv.remove(), 5000);
}

// Show contact success
function showContactSuccess(message) {
    const existingSuccess = document.querySelector('.contact-success');
    if (existingSuccess) existingSuccess.remove();
    
    const successDiv = document.createElement('div');
    successDiv.className = 'contact-success';
    successDiv.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    
    // Add styles
    if (!document.getElementById('contactSuccessStyles')) {
        const styles = document.createElement('style');
        styles.id = 'contactSuccessStyles';
        styles.textContent = `
            .contact-success {
                background: #f0fff4;
                border: 2px solid var(--success-color);
                color: var(--success-color);
                padding: 0.75rem 1rem;
                border-radius: var(--border-radius);
                margin-bottom: 1rem;
                display: flex;
                align-items: center;
                gap: 0.5rem;
                animation: slideIn 0.3s ease;
            }
        `;
        document.head.appendChild(styles);
    }
    
    contactForm.insertBefore(successDiv, contactForm.firstChild);
    
    setTimeout(() => successDiv.remove(), 5000);
}

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
        'corte': 'Corte de Pelo'
    };
    
    const message = `¡Nueva cita reservada!💈‍♂️%0A%0A` +
                   `👤 Nombre: ${appointmentData.name}%0A` +
                   `✂️ Servicio: ${serviceNames[appointmentData.service]}%0A` +
                   `📅 Fecha: ${appointmentData.date}%0A` +
                   `🕐 Hora: ${appointmentData.time}%0A%0A` +
                   `📍 Servicio a domicilio en Errenteria%0A` +
                   `💰 Pago en efectivo al finalizar`;
    
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
    // Get the service type from the clicked card
    const serviceCard = event.currentTarget;
    const serviceName = serviceCard.querySelector('h3').textContent;
    
    // Navigate to booking section
    window.location.href = '#booking';
    
    // Wait a bit for the navigation to complete, then select the service
    setTimeout(() => {
        const serviceSelect = document.getElementById('service');
        if (serviceSelect) {
            // Map service names to select values
            const serviceMap = {
                'Corte de Pelo': 'corte'
            };
            
            serviceSelect.value = serviceMap[serviceName] || 'corte';
            
            // Add a highlight effect to the select
            serviceSelect.style.borderColor = 'var(--secondary-color)';
            serviceSelect.style.boxShadow = '0 0 15px rgba(212, 175, 55, 0.3)';
            
            setTimeout(() => {
                serviceSelect.style.borderColor = '';
                serviceSelect.style.boxShadow = '';
            }, 2000);
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

// Lightbox Functions
function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    
    lightboxImage.style.opacity = '0';
    lightboxImage.style.transform = 'scale(0.8) translateX(50px)';
    
    lightbox.style.display = 'block';
    lightboxImage.src = imageSrc;
    
    setTimeout(() => {
        lightboxImage.style.opacity = '1';
        lightboxImage.style.transform = 'scale(1) translateX(0)';
    }, 50);
    
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    
    lightboxImage.style.opacity = '0';
    lightboxImage.style.transform = 'scale(0.8) translateX(-50px)';
    
    setTimeout(() => {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

function showNextImage() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightboxImage = document.getElementById('lightbox-image');
    const currentSrc = lightboxImage.src;
    let currentIndex = -1;
    
    galleryItems.forEach((item, index) => {
        const img = item.querySelector('.gallery-image');
        if (img && img.src === currentSrc) {
            currentIndex = index;
        }
    });
    
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    const nextImg = galleryItems[nextIndex].querySelector('.gallery-image');
    
    // Slide out current image
    lightboxImage.style.transform = 'scale(0.8) translateX(-100px)';
    lightboxImage.style.opacity = '0';
    
    setTimeout(() => {
        lightboxImage.src = nextImg.src;
        lightboxImage.alt = nextImg.alt;
        
        // Slide in new image
        lightboxImage.style.transform = 'scale(1) translateX(0)';
        lightboxImage.style.opacity = '1';
    }, 200);
}

function showPreviousImage() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightboxImage = document.getElementById('lightbox-image');
    const currentSrc = lightboxImage.src;
    let currentIndex = -1;
    
    galleryItems.forEach((item, index) => {
        const img = item.querySelector('.gallery-image');
        if (img && img.src === currentSrc) {
            currentIndex = index;
        }
    });
    
    const prevIndex = currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1;
    const prevImg = galleryItems[prevIndex].querySelector('.gallery-image');
    
    // Slide out current image
    lightboxImage.style.transform = 'scale(0.8) translateX(100px)';
    lightboxImage.style.opacity = '0';
    
    setTimeout(() => {
        lightboxImage.src = prevImg.src;
        lightboxImage.alt = prevImg.alt;
        
        // Slide in new image
        lightboxImage.style.transform = 'scale(1) translateX(0)';
        lightboxImage.style.opacity = '1';
    }, 200);
}

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
        openLightbox(img.src);
        currentImageIndex = Array.from(galleryItems).indexOf(this);
        
        // Update button states
        updateButtonStates();
    });
});

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

lightboxNext.addEventListener('click', showNextImage);
lightboxPrev.addEventListener('click', showPreviousImage);

// Add CSS for lightbox transitions
const lightboxStyles = document.createElement('style');
lightboxStyles.textContent = `
    #lightbox-image {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
    }
`;
document.head.appendChild(lightboxStyles);

// Console Welcome Message
console.log('%c💈‍♂️ ¡Bienvenido a la web de Oinatz Docampo! 💈‍♂️', 'font-size: 24px; color: #d4af37; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);');
console.log('%c✨ Peluquero Profesional con 16 años de experiencia ✨', 'font-size: 16px; color: #2c3e50; font-weight: 600;');
console.log('%c📍 Servicio a domicilio en Errenteria | 📞 +34 678 11 94 92', 'font-size: 14px; color: #666;');
console.log('%c🔧 Si eres desarrollador y quieres colaborar, ¡contáctame!', 'font-size: 13px; color: #27ae60; font-style: italic;');
