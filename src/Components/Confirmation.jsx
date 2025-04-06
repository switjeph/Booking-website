import React from "react";
import "../styles/Confirmation.css";

function Confirmation() {
  return (
    <main className="page-container confirmation-page">
      <div className="confirmation-box">
        <h2>Booking Confirmed!</h2>
        <p>
          Thank you for choosing Alpha Bookings. We look forward to serving you.
          <a href="/" className="back-home-btn">Back to Home</a>
        </p>
      </div>
    </main>
  );
}

export default Confirmation;
