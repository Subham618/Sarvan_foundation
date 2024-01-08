import React from 'react';
import '../styles/Footer.css';
import instagram_png from '../Png/instagram.png'; 
import facebook_png from '../Png/facebook.png'; 
import twitter_png from '../Png/twitter.png'; 

const Footer = () => {
  return (
    <>
      <div className="social-media-container">
        <div className="text-side">
          <h2>Connect on Social Media</h2>
        </div>
        <div className="icons-side">
          <a href="#" target="_blank" className="social-icon"><img src= {facebook_png} alt="Facebook" /></a>
          <a href="#" target="_blank" className="social-icon"><img src={facebook_png} alt="Facebook" /></a>
          <a href="#" target="_blank" className="social-icon"><img src={facebook_png} alt="Facebook" /></a>
          <a href="#" target="_blank" className="social-icon"><img src={twitter_png} alt="Twitter" /></a>
          <a href="#" target="_blank" className="social-icon"><img src={instagram_png} alt="Instagram" /></a>
          {/* Add more social media icons as needed */}
        </div>
      </div>
      <div className="line_addition"></div>
      <footer>
        <div className="footer-column">
          <h3>Company</h3>
          <p><strong>Company Name</strong></p>
          <p>Contact:</p>
          <p>Email: info@example.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 Street, City</p>
        </div>

        <div className="footer-column">
          <h3>Products</h3>
          <ul>
            <li><a href="#">Product 1</a></li>
            <li><a href="#">Product 2</a></li>
            <li><a href="#">Product 3</a></li>
            <li><a href="#">Product 4</a></li>
            {/* Add more product links as needed */}
          </ul>
        </div>

        <div className="footer-column">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">FAQs</a></li>
            {/* Add more useful links as needed */}
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
