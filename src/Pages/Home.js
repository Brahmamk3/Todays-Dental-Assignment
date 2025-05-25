import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Empowering Dental Services Worldwide</h1>
          <p>Web & mobile solutions tailored for modern dental practices.</p>
          <img
            id="img_Home"
            src="https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-medical-dental-science-research-science-background-image_199083.jpg"
            alt="Teeth Logo"
          />
        </div>
      </section>

      {/* About Us Section */}
      <section className="about">
        <h2>About Us</h2>
        <p>
          At Today's Dental Services, we are committed to providing high-quality dental care with a personal touch.
          Located in the heart of Hyderabad, our clinic has been serving families and individuals for over a decade.
          Our team of experienced dentists and staff prioritize patient comfort and health in every treatment.
          We use the latest technology and techniques to ensure effective and painless procedures.
          Whether you need routine check-ups or advanced dental treatments, we offer comprehensive care tailored to your needs.
          Our friendly environment and patient-focused approach make every visit pleasant and stress-free.
          We believe in building lasting relationships through trust, professionalism, and excellent service.
        </p>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <ul>
          <li>General Dentistry - Cleanings, Exams, and Fillings</li>
          <li>Cosmetic Dentistry - Whitening, Veneers, and Smile Makeovers</li>
          <li>Orthodontics - Braces and Invisalign</li>
          <li>Restorative Dentistry - Crowns, Bridges, and Implants</li>
          <li>Emergency Dental Care</li>
        </ul>
      </section>

      {/* Call to Action */}
      <div className="cta">
        <button onClick={() => alert("Redirect to appointment booking page")}>
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default Home;



