import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin , faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <ul className="footer-links-list">
            <li className="footer-link-item">
              <a href="#">Home</a>
            </li>
            <li className="footer-link-item">
              <a href="#">Accounts</a>
            </li>
            <li className="footer-link-item">
              <a href="#">Loans</a>
            </li>
            <li className="footer-link-item">
              <a href="#">About US</a>
            </li>
            <li className="footer-link-item">
              <a href="#">Contact Us</a>
            </li> 
          </ul>
        </div>
        <div className="footer-social">
          <ul className="footer-social-list">
          <li className="footer-social-item">
              <a href="#">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li className="footer-social-item">
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li className="footer-social-item">
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li className="footer-social-item">
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;