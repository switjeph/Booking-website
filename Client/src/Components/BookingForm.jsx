import React, { useState } from "react";
import "../styles/BookingForm.css";

function BookingForm() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingData = {
      name: name,
      email: "user@example.com",
      Date: `${date} ${time}`,
      service: `${guests} guests`,
      notes: "N/A",
    };

    try {
      const response = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        const result = await response.json();
        alert("Booking saved successfully!");
        console.log("Saved booking:", result);
      } else {
        alert("Failed to save booking.");
      }
    } catch (error) {
      console.error("Error submitting booking:", error);
      alert("An error occurred while saving booking.");
    }
  };

  return (
    <main className="page-container booking-page">
      <section className="booking-form">
        <h2>Book Your Stay</h2>
        <p>Secure your perfect getaway in just a few clicks</p>
        <form onSubmit={handleSubmit} className="booking-form">
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Date:
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </label>
          <label>
            Time:
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </label>
          <label>
            Number of Guests:
            <input
              type="number"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              min="1"
              required
            />
          </label>

          <button type="submit">Confirm Booking</button>
        </form>
      </section>
    </main>
  );
}

export default BookingForm;
