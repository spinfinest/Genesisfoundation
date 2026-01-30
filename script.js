// Counter Animation
const animateCounter = (element) => {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, 16);
};

// Intersection Observer for Counters
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Initialize Counters
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => counterObserver.observe(counter));
    
    // Initialize Feather Icons
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
});

// Donation Amount Selection
let selectedAmount = null;

function selectAmount(amount) {
    selectedAmount = amount;
    
    // Reset all borders
    [25, 50, 100].forEach(amt => {
        const border = document.getElementById(`border-${amt}`);
        if (border) {
            border.style.opacity = '0';
            border.style.transform = 'scale(1.05)';
        }
    });
    
    // Highlight selected
    const selectedBorder = document.getElementById(`border-${amount}`);
    if (selectedBorder) {
        selectedBorder.style.opacity = '1';
        selectedBorder.style.transform = 'scale(1)';
    }
    
    // Clear custom amount
    const customInput = document.getElementById('custom-amount');
    if (customInput) customInput.value = '';
}

function clearSelection() {
    selectedAmount = null;
    [25, 50, 100].forEach(amt => {
        const border = document.getElementById(`border-${amt}`);
        if (border) {
            border.style.opacity = '0';
            border.style.transform = 'scale(1.05)';
        }
    });
}

// Handle Donation Form
function handleDonate(event) {
    event.preventDefault();
    
    const customAmount = document.getElementById('custom-amount').value;
    const finalAmount = selectedAmount || customAmount;
    
    if (!finalAmount) {
        showToast('Please select or enter a donation amount', 'error');
        return;
    }
    
    // Simulate donation processing
    const button = event.target.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    button.textContent = 'Processing...';
    button.disabled = true;
    
    setTimeout(() => {
        showToast(`Thank you for your $${finalAmount} donation! Together we're restoring sight.`);
        button.textContent = originalText;
        button.disabled = false;
        event.target.reset();
        clearSelection();
    }, 1500);
}

// Handle Contact Form
function handleContact(event) {
    event.preventDefault();
    
    const button = event.target.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    button.textContent = 'Sending...';
    button.disabled = true;
    
    setTimeout(() => {
        showToast('Message sent successfully! We\'ll be in touch soon.');
        button.textContent = originalText;
        button.disabled = false;
        event.target.reset();
    }, 1500);
}

// Toast Notification
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    
    toastMessage.textContent = message;
    
    if (type === 'error') {
        toast.querySelector('i').setAttribute('data-feather', 'alert-circle');
        toast.querySelector('i').classList.remove('text-secondary-400');
        toast.querySelector('i').classList.add('text-red-400');
    } else {
        toast.querySelector('i').setAttribute('data-feather', 'check-circle');
        toast.querySelector('i').classList.add('text-secondary-400');
        toast.querySelector('i').classList.remove('text-red-400');
    }
    
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
    
    toast.classList.remove('translate-y-20', 'opacity-0');
    
    setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
    }, 4000);
}

// Smooth Scroll for Anchor Links
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

// Navbar Scroll Effect
let lastScroll = 0;
const navbar = document.querySelector('vision-navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Mobile Menu Toggle (handled in component, but backup here)
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('mobile-menu-enter');
    }
}

// Lazy Loading Images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    document.addEventListener('DOMContentLoaded', () => {
        const lazyImages = document.querySelectorAll('img.lazy');
        lazyImages.forEach(img => imageObserver.observe(img));
    });
}

// Parallax Effect for Hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.parallax-bg');
    if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});