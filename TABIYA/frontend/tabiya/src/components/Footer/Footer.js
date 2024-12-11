import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => (
  <div className="footer-container">
    <p>Contact us: </p>
    <div className="social-links">
      <FaFacebook /> <FaTwitter /> <FaInstagram />
    </div>
    <p>© 2024 Skills Navigator. All rights reserved.</p>
  </div>
);

export default Footer;
