import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div id="header_logo"><img src="https://todaysdentalpartners.com/wp-content/uploads/2023/08/TD_Logo.png" alt="Logo"
      style={{maxHeight:"150px", maxWidth:"150px", marginRight:"300px" , marginTop:"20px" }}
      /></div>
      <div class ="Header_Content">
      <h1 style={{textAlign:"center" ,fontSize:"20px", fontStyle:"bold",marginBottom:"2px"}}>Welcome to Today's Dental Services</h1>
        <italic style={{marginLeft:"50px"}}>
          Your Smile, Our Priority!
        </italic>
        </div>
      <nav className="links">
        <Link to="/" style={{marginLeft:"40px"}}>Home</Link> 
        <Link to="/aboutus" style={{marginLeft:"40px"}}>About Us</Link> 
        <Link to="/serviceus" style={{marginLeft:"40px"}}>Services</Link> 
        <Link to="/contactus" style={{marginLeft:"40px"}}>Contact Us</Link>
      </nav>
    </header>
  );
};

export default Header;
