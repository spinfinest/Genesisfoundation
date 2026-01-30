class VisionNavbar extends HTMLElement {
    constructor() {
        super();
        this.isOpen = false;
    }

    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.render();
        this.setupEventListeners();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    transition: all 0.3s ease;
                }
                
                :host(.scrolled) .navbar-container {
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(10px);
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                    padding-top: 1rem;
                    padding-bottom: 1rem;
                }
                
                :host(.scrolled) .logo-text {
                    color: #0f766e;
                }
                
                :host(.scrolled) .nav-link {
                    color: #475569;
                }
                
                :host(.scrolled) .nav-link:hover {
                    color: #0d9488;
                }
                
                .navbar-container {
                    background: transparent;
                    padding: 1.5rem 2rem;
                    transition: all 0.3s ease;
                }
                
                .logo-text {
                    color: white;
                    font-family: 'Playfair Display', serif;
                    font-size: 1.5rem;
                    font-weight: 700;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    transition: color 0.3s ease;
                }
                
                .nav-link {
                    color: rgba(255, 255, 255, 0.9);
                    text-decoration: none;
                    font-weight: 500;
                    font-size: 0.95rem;
                    transition: all 0.3s ease;
                    position: relative;
                }
                
                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: -4px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: #f59e0b;
                    transition: width 0.3s ease;
                }
                
                .nav-link:hover::after {
                    width: 100%;
                }
                
                .nav-link:hover {
                    color: white;
                }
                
                .donate-btn {
                    background: #f59e0b;
                    color: white;
                    padding: 0.75rem 1.5rem;
                    border-radius: 9999px;
                    font-weight: 600;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                
                .donate-btn:hover {
                    background: #d97706;
                    transform: translateY(-2px);
                    box-shadow: 0 10px 20px -5px rgba(245, 158, 11, 0.3);
                }
                
                .mobile-menu-btn {
                    display: none;
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 0.5rem;
                    color: currentColor;
                }
                
                .mobile-menu {
                    display: none;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: white;
                    padding: 2rem;
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                    border-top: 1px solid #e2e8f0;
                }
                
                .mobile-menu.active {
                    display: block;
                    animation: slideDown 0.3s ease;
                }
                
                .mobile-link {
                    display: block;
                    padding: 1rem 0;
                    color: #475569;
                    text-decoration: none;
                    font-weight: 500;
                    border-bottom: 1px solid #f1f5f9;
                    transition: color 0.3s ease;
                }
                
                .mobile-link:hover {
                    color: #0d9488;
                }
                
                .mobile-donate {
                    display: block;
                    margin-top: 1.5rem;
                    background: #f59e0b;
                    color: white;
                    padding: 1rem;
                    text-align: center;
                    border-radius: 9999px;
                    font-weight: 600;
                    text-decoration: none;
                }
                
                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @media (max-width: 768px) {
                    .desktop-nav {
                        display: none;
                    }
                    
                    .mobile-menu-btn {
                        display: block;
                    }
                    
                    .navbar-container {
                        padding: 1rem;
                    }
                    
                    :host(.scrolled) .mobile-menu-btn {
                        color: #475569;
                    }
                    
                    .mobile-menu-btn {
                        color: white;
                    }
                }
            </style>
            
            <nav class="navbar-container">
                <div class="max-w-7xl mx-auto flex items-center justify-between">
                    <a href="index.html" class="logo-text">
                        <span style="font-size: 1.75rem;">👁️</span>
                        Vision of Hope
                    </a>
                    
                    <div class="desktop-nav flex items-center gap-8">
                        <a href="#mission" class="nav-link">Our Mission</a>
                        <a href="#programs" class="nav-link">Programs</a>
                        <a href="#impact" class="nav-link">Impact</a>
                        <a href="#contact" class="nav-link">Contact</a>
                        <a href="#donate" class="donate-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                            Donate Now
                        </a>
                    </div>
                    
                    <button class="mobile-menu-btn" id="mobile-toggle" aria-label="Toggle menu">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="menu-icon"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    </button>
                </div>
                
                <div class="mobile-menu" id="mobile-menu">
                    <a href="#mission" class="mobile-link">Our Mission</a>
                    <a href="#programs" class="mobile-link">Programs</a>
                    <a href="#impact" class="mobile-link">Impact</a>
                    <a href="#contact" class="mobile-link">Contact</a>
                    <a href="#donate" class="mobile-donate">Donate Now</a>
                </div>
            </nav>
        `;
    }

    setupEventListeners() {
        const toggle = this.shadowRoot.getElementById('mobile-toggle');
        const menu = this.shadowRoot.getElementById('mobile-menu');
        const menuIcon = this.shadowRoot.getElementById('menu-icon');
        
        toggle.addEventListener('click', () => {
            this.isOpen = !this.isOpen;
            menu.classList.toggle('active', this.isOpen);
            
            // Change icon
            if (this.isOpen) {
                menuIcon.innerHTML = '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>';
            } else {
                menuIcon.innerHTML = '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>';
            }
        });
        
        // Close mobile menu when clicking a link
        const mobileLinks = this.shadowRoot.querySelectorAll('.mobile-link, .mobile-donate');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.isOpen = false;
                menu.classList.remove('active');
                menuIcon.innerHTML = '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>';
            });
        });
        
        // Scroll effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                this.classList.add('scrolled');
            } else {
                this.classList.remove('scrolled');
            }
        });
    }
}

customElements.define('vision-navbar', VisionNavbar);