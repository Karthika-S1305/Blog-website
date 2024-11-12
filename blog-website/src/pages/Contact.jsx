import './Contact.css'; 
import Instagram from '../assets/instagram.webp'
import Facebook from '../assets/facebook.png'
import Twitter from '../assets/twitter.webp'

const Contact = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p>123 Address</p>
                    <p>Thanjavur, TamilNadu, India, PINCODE</p>
                    <p>Phone: +1 234 567 8901</p>
                    <p>Email: info@example.com</p>
                </div>

                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="https://www.facebook.com" target="_blank"  rel="noopener noreferrer"><img src={Facebook}/>
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><img src={Twitter}/>
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src={Instagram}/>
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        </a>
                    </div>
                </div>

                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/services">Our Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
