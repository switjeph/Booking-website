import React from "react";
import "../styles/AboutPage.css";
import teamPhoto from "../assets/teamPhoto.jpeg";

function AboutPage() {
  return (
    <main className="page-container about-page">
      <section className="about-hero">
        <h1>About Alpha Bookings</h1>
        <p>Luxury. Comfort. Unforgettable experience</p>
      </section>

      <section className="about-content">
        <h2>Who We Are</h2>
        <p>
          Alpha Bookings is your ultimate destination for luxury stays across
          the world. We connect travelers with premium hotels, resorts, and
          vacation homes at unbeatable prices.
        </p>

        <h2>Our Mission</h2>
        <p>
          To make travel experiences seamless, affordable, and luxurious for
          everyone. Your dream vacation is just a click away!
        </p>

        <h2>Meet Our Team</h2>
        <img src={teamPhoto} alt="Our Team" className="team-image" />
      </section>
    </main>
  );
}

export default AboutPage;
