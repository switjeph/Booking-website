import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import "../styles/Home.css";

function Home() {
  return (
    <>
      <main className="page-container home-page">
        <section className="hero">
          <div className="overlay">
            <h1>Find your perfect Getaway</h1>
            <p>Luxury stays at unbeatable prices. Book with a single click</p>
            <a href="/booking" className="book-now-btn">
              Book Now
            </a>
          </div>
        </section>

        <section className="features">
          <h2>Why Choose Us</h2>
          <div className="feature-list">
            <div className="feature-item">
              <h3>Best Prices</h3>
              <p>
                Exclusive deals for top locations, 5-star hotels, resorts, and
                apartments
              </p>
            </div>
            <div className="feature-item">
              <h3>Luxury Comfort</h3>
              <p>Enjoy premium amenities and top-class service</p>
            </div>
            <div className="feature-item">
              <h3>24/7 Support</h3>
              <p>Easy Booking. Quick and hassle-free booking process</p>
            </div>
          </div>
        </section>

        <section className="popular-destinations">
          <h2>Explore Popular Destinations</h2>
          <div className="destination-grid">
            <div className="destination">
              <img src="./Paris.jpeg" alt="Paris" />
              <h3>Paris, France</h3>
            </div>
            <div className="destination">
              <img src="./london.jpeg" alt="london" />
              <h3>London</h3>
            </div>
            <div className="destination">
              <img src="./uae.jpeg" alt="uae" />
              <h3>Dubai, UAE</h3>
            </div>
          </div>
        </section>

        <section className="testimonials">
          <h2>What Our Guests Say</h2>
          <div className="testimonial">
            <p>
              "An amazing experience! The booking was so easy, and the hotel was
              fantastic!"
            </p>
            <h4>- Sarah J.</h4>
          </div>
          <div className="testimonial">
            <p>
              "I got the best deal ever for my honeymoon in the Maldives. Highly
              recommend"
            </p>
            <h4>- Mark T.</h4>
          </div>
        </section>

        <section className="cta">
          <h2>Ready for your next Adventure?</h2>
          <Link to="/booking" className="book-now-btn">
            Book Now
          </Link>
        </section>
      </main>
    </>
  );
}

export default Home;
