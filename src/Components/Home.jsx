import React from "react";
import Header from "../Components/Header";
import "../styles/Home.css";

function Home() {
    return (
      <main className="home-page">
        <section className="hero">
          <h1>Welcome to your Dream Destination</h1>
          <p>Book your stay at the best with just a few clicks</p>
          <a href="/booking" className="book-now-btn">
            Book Now
          </a>
        </section>

        <section className="features">
          <h2>Why Choose Us</h2>
          <div className="feature-list">
            <div className="feature-item">
              <h3>Affordable Price</h3>
              <p>Find the best deals for your perfect stay</p>
            </div>
            <div className="feature-item">
              <h3>Luxury Comfort</h3>
              <p>Enjoy premium amenities and top-class service</p>
            </div>
            <div className="feature-item">
              <h3>Easy Booking</h3>
              <p>Quick and hassle-free booking process</p>
            </div>
          </div>
        </section>
      </main>
    );
}

export default Home;