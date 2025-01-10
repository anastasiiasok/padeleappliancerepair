// src/Home.js
import React from 'react';

function Home() {
  return (
    <div className="home">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <h1>Home Appliance Repair | Padele inc</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Best Home Appliances in Delaware</h1>
          <h2>We Repair Your Appliances Fast & Efficiently</h2>
          <p>Same-day services avalaible, we are customer-focused solutions</p>
        </div>
        <div className="quote-form">
          <h3>Request Appoitment</h3>
          <h4>We will get back to you in 20 minutes</h4>
          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="tel" placeholder="Phone Number" required />
            <select required>
              <option value="" disabled selected>What is your inquiry about?</option>
              <option value="refrigerator">Refrigerator Repair</option>
              <option value="washing-machine">Washing Machine Repair</option>
              <option value="dishwasher">Dishwasher Repair</option>
              <option value="oven">Oven Repair</option>
            </select>
            <button type="submit">Submit Request</button>
          </form>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="about-us">
        <h2>About Us</h2>
        <p>With over 15 years of experience in appliance repair, we provide fast, reliable, and affordable services to keep your home running smoothly</p>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <h2>Our Services</h2>
        <ul>
          <li>Refrigerator Repair</li>
          <li>Washing Machine Repair</li>
          <li>Dishwasher Repair</li>
          <li>Oven and Stove Repair</li>
          <li>Dryer Repair</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="reviews" className="contact">
        <h2>Contact Us</h2>
        <p>Call us or Text now at <strong>(917) 847 4251</strong></p>
      </section>
      
      <section id="reviews" className="reviews">
        <h2>Most Recent Reviews from Thumbtack</h2>
        <div className="about-us-content">
          <img src="/reviews.png" alt="Customer Reviews" className="about-us-image" />
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 padele inc. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
