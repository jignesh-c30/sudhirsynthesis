import React from "react";
import "./Footer.css";
import logo from "../../Assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="text-light py-4" style={{backgroundColor:'#4a50a0'}}>
      <div className="container">
        <div className="row justify-content-between align-items-center">
          {/* Logo and Social Links */}
          <div className="col-lg-3 col-sm-12 text-center text-lg-start mb-3 mb-lg-0">
            <div className="footer-logo mb-3">
              <img src={logo} alt="logo" style={{ width: "250px" }} />
            </div>
            <div className="footer-social-links">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light me-3"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light me-3"
              >
                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
              </a>
            </div>
          </div>

          {/* Placeholder Column (for future content) */}
          <div className="col-lg-4 col-sm-6"></div>

          {/* Contact Information */}
          <div className="col-lg-3 col-sm-12 text-center text-lg-end">
            <h5>Contact Us</h5>
            <p>
              <a href="tel:9870075384" className="text-light">
                9870075384
              </a>
            </p>
            <p>
              <a href="mailto:sudhirsynthesis@outlook.com" className="text-light">
                sudhirsynthesis@outlook.com
              </a>
            </p>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="footer-bottom text-center mt-4">
          <small>Copyright © 2024 Sudhir Synthesis. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
