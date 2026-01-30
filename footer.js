class VisionFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background: #0f172a;
                    color: white;
                }
                
                .footer-container {
                    max-width: 80rem;
                    margin: 0 auto;
                    padding: 4rem 2rem 2rem;
                }
                
                .footer-grid {
                    display: grid;
                    grid-template-columns: 2fr 1fr 1fr 1fr;
                    gap: 3rem;
                    margin-bottom: 3rem;
                }
                
                @media (max-width: 768px) {
                    .footer-grid {
                        grid-template-columns: 1fr;
                        gap: 2rem;
                    }
                }
                
                .brand-section h3 {
                    font-family: 'Playfair Display', serif;
                    font-size: 1.5rem;
                    margin-bottom: 1rem;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                
                .brand-section p {
                    color: #94a3b8;
                    line-height: 1.6;
                    margin-bottom: 1.5rem;
                }
                
                .social-links {
                    display: flex;
                    gap: 1rem;
                }
                
                .social-links a {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    transition: all 0.3s ease;
                    text-decoration: none;
                }
                
                .social-links a:hover {
                    background: #f59e0b;
                    transform: translateY(-3px);
                }
                
                .footer-column h4 {
                    font-weight: 600;
                    margin-bottom: 1.5rem;
                    color: white;
                }
                
                .footer-column ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                
                .footer-column li {
                    margin-bottom: 0.75rem;
                }
                
                .footer-column a {
                    color: #94a3b8;
                    text-decoration: none;
                    transition: color 0.3s ease;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                
                .footer-column a:hover {
                    color: #f59e0b;
                }
                
                .newsletter-form {
                    display: flex;
                    gap: 0.5rem;
                    margin-top: 1rem;
                }
                
                .newsletter-form input {
                    flex: 1;
                    padding: 0.75rem 1rem;
                    background: rgba(255, 255, 255, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    border-radius: 0.5rem;
                    color: white;
                    outline: none;
                }
                
                .newsletter-form input::placeholder {
                    color: #64748b;
                }
                
                .newsletter-form button {
                    padding: 0.75rem 1.5rem;
                    background: #0d9488;
                    color: white;
                    border: none;
                    border-radius: 0.5rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                
                .newsletter-form button:hover {
                    background: #0f766e;
                }
                
                .footer-bottom {
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    padding-top: 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 1rem;
                    color: #64748b;
                    font-size: 0.875rem;
                }
                
                .footer-bottom a {
                    color: #94a3b8;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }
                
                .footer-bottom a:hover {
                    color: #f59e0b;
                }
            </style>
            
            <footer>
                <div class="footer-container">
                    <div class="footer-grid">
                        <div class="brand-section">
                            <h3>
                                <span style="font-size: 1.75rem;">👁️</span>
                                Vision of Hope Africa
                            </h3>
                            <p>
                                Restoring sight and transforming lives across East Africa. 
                                We believe everyone deserves the gift of clear vision, regardless of their economic status.
                            </p>
                            <div class="social-links">
                                <a href="#" aria-label="Facebook">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                </a>
                                <a href="#" aria-label="Twitter">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                                </a>
                                <a href="#" aria-label="Instagram">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                </a>
                                <a href="#" aria-label="LinkedIn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                </a>
                            </div>
                        </div>
                        
                        <div class="footer-column">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><a href="#mission">About Us</a></li>
                                <li><a href="#programs">Our Programs</a></li>
                                <li><a href="#impact">Impact Stories</a></li>
                                <li><a href="#donate">Ways to Give</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                        
                        <div class="footer-column">
                            <h4>Get Involved</h4>
                            <ul>
                                <li><a href="#donate">Make a Donation</a></li>
                                <li><a href="#contact">Volunteer With Us</a></li>
                                <li><a href="#contact">Partner Your Organization</a></li>
                                <li><a href="#contact">Host a Clinic</a></li>
                                <li><a href="#">Corporate Sponsorship</a></li>
                            </ul>
                        </div>
                        
                        <div class="footer-column">
                            <h4>Newsletter</h4>
                            <p style="color: #94a3b8; font-size: 0.875rem; margin-bottom: 1rem;">
                                Subscribe to receive updates on our latest missions and impact stories.
                            </p>
                            <form class="newsletter-form" onsubmit="event.preventDefault(); alert('Thank you for subscribing!');">
                                <input type="email" placeholder="Your email" required>
                                <button type="submit">Join</button>
                            </form>
                        </div>
                    </div>
                    
                    <div class="footer-bottom">
                        <div>
                            © 2024 Vision of Hope Africa. All rights reserved. 
                            Registered 501(c)(3) Non-Profit Organization.
                        </div>
                        <div style="display: flex; gap: 2rem;">
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms of Service</a>
                            <a href="#">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('vision-footer', VisionFooter);