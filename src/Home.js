import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Home() {
  // Form data state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    inquiry: '',
  });

  // Handle form data change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Send email to the business (you)
    emailjs
      .sendForm(
        'service_9h5rc1n',  // Your EmailJS service ID
        'template_9p1l7lw',  // Your EmailJS template ID for the business email
        e.target,  // The form element
        'Ryx_oeVnEhGMnhVp5'  // Your EmailJS user ID
      )
      .then(
        (result) => {
          console.log('Email sent to business:', result);
        },
        (error) => {
          console.error('Error sending email to business:', error);
        }
      );
  
    // Send confirmation email to the user
    emailjs
      .sendForm(
        'service_9h5rc1n',  // Your EmailJS service ID
        'template_9p1l7lw',  // The template ID for user confirmation
        e.target,  // The form element
        'Ryx_oeVnEhGMnhVp5'  // Your EmailJS user ID
      )
      .then(
        (result) => {
          alert('Appointment request sent successfully, and confirmation email sent to user!');
          setFormData({
            fullName: '',
            email: '',
            phoneNumber: '',
            inquiry: '',
          });  // Clear form data after submission
          console.log('Confirmation email sent:', result);
        },
        (error) => {
          alert('Error sending appointment request or confirmation email.');
          console.error('Error in confirmation email:', error);
        }
      );
  };
  

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
          <p>Same-day services available, we are customer-focused solutions</p>
        </div>
        <div className="quote-form">
          <h3>Request Appointment</h3>
          <h4>We will get back to you in 20 minutes</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
            />
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              required
            />
            <select
              name="inquiry"
              value={formData.inquiry}
              onChange={handleChange}
              required
            >
              <option value="" disabled selected>
                What is your inquiry about?
              </option>
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
        <p>&copy; 2025 Padele Inc. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
