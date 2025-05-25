import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="about-us">
          <h3>About Us</h3>
          <p>10630 Little Patuxent Parkway #100 Columbia, MD 21044</p>
          <p>410-730-1777</p>
          <p>info@elegantdentcare.com</p>
        </div>

        <div className="welcome-message">
          <p>
            At Elegant Dental Care, we know how to make patients feel welcome and get the treatment they need.
          </p>
        </div>

        <div className="opening-hours">
          <h3>Opening Hours</h3>
          <ul>
            <li>Monday: 8:30 a.m.–5 p.m.</li>
            <li>Tuesday: 8:30 a.m.–5 p.m.</li>
            <li>Wednesday: 8:30 a.m.–5 p.m.</li>
          </ul>
          <p className="holidays">
            Major holidays: Memorial day, 4th of July, Labor day, Thanksgiving day, Christmas day, New years day (January 1st)
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Todays Dental Services. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
