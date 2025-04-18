import React from "react";
import "../styles/ContactPage.css";

function ContactPage() {
  return (
    <main className="page-container contact-page">
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>We're here to to help! Reach out to us for any inquiries</p>
      </section>

      <section className="contact-info">
        <div className="info-card">
          <h2>📍 Our Address</h2>
          <p>123 Luxury st, Paradise City, PC 12002</p>
        </div>
        <div className="info-card">
          <h2>📞 Call Us</h2>
          <p>+1 234-567-890</p>
        </div>
        <div className="info-card">
          <h2>📧 Email Us</h2>
          <p>support@alphabookings.com</p>
        </div>
      </section>

      <section className="contact-form">
        <h2>Send us a Message</h2>
        <form action="">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </main>
  );
}

export default ContactPage;
