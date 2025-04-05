import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import BookingForm from "./Components/BookingForm";
import Confirmation from "./Components/Confirmation";
import "./styles/App.css";
import ContactPage from "./Components/ContactPage";
import AboutPage from "./Components/AboutPage";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/booking" element={<BookingForm />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
