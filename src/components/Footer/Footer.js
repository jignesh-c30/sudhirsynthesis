import React from "react";
import "./Footer.css";
import logo from "../../Assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <div
        className="footer"
        style={{ backgroundColor: "#363d95", padding: "1vw" }}
      >
        <div>
          <div className="footer-logo">
            <img src={logo} alt="logo" style={{ width: "150px" }}></img>
          </div>
          <div className="footer-social-links">
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
        </div>
        <div>
          <div>Contact Us</div>
          <div>
            <span></span>
            <span>
              <a href="tel:7984169631">7984169631</a>
            </span>
          </div>
          <div>
          <span></span>
          <span><a href="mailto:sudhirsynthesis@outlook.com">sudhirsynthesis@outlook.com</a></span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        Copyright © 2024 Sudhir Synthesis. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
