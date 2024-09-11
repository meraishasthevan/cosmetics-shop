import React from 'react';
import './Footer.css'; 

function Footer() {
    return (
        <div className='footer-cont'>
            <h1>Follow More</h1>
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h2>Contact Us</h2>
                    <form className="contact-form">
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <textarea placeholder="Your Message" rows="4" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>

                <div className="footer-section">
                    <h2>Follow Us</h2>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>

                <div className="footer-section">
                    <h2>Useful Links</h2>
                    <ul className="footer-links">
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/careers">Careers</a></li>
                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                        <li><a href="/terms-of-service">Terms of Service</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h2>Get Special Signup</h2>
                    <form className="newsletter-form">
                        <input type="email" placeholder="Your Email" required />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>

                <div className="footer-section">
                    <h2>Contact Details</h2>
                    <p>234 Bhuleshwar, Mumbai, India</p>
                    <p>Email: meraisha@47.com</p>
                    <p>Phone: +73 789 3429</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} New U. All rights reserved.</p>
            </div>
        </footer>
        </div>
    );
}

export default Footer;
