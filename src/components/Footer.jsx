import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Handle newsletter subscription form
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setMessage("Thank you for subscribing!");
      setEmail(""); // Clear the input field
    } else {
      setMessage("Please enter a valid email address.");
    }
  };

  return (
    <footer style={{ backgroundColor: "white", padding: "40px 0", borderTop: "1px solid #ddd" }}>
      <div className="container">
        <div className="row">
          {/* Column 1: Company Links */}
          <div className="col-md-3">
            <h5>Company</h5>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li><Link to="/about" style={{ color: "#333", textDecoration: "none" }}>About Us</Link></li>
              <li><Link to="/contact" style={{ color: "#333", textDecoration: "none" }}>Contact</Link></li>
              <li><Link to="/privacy-policy" style={{ color: "#333", textDecoration: "none" }}>Privacy Policy</Link></li>
              <li><Link to="/terms" style={{ color: "#333", textDecoration: "none" }}>Terms of Service</Link></li>
            </ul>
          </div>

          {/* Column 2: Customer Support */}
          <div className="col-md-3">
            <h5>Customer Support</h5>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li><Link to="/faq" style={{ color: "#333", textDecoration: "none" }}>FAQ</Link></li>
              <li><Link to="/shipping" style={{ color: "#333", textDecoration: "none" }}>Shipping & Delivery</Link></li>
              <li><Link to="/returns" style={{ color: "#333", textDecoration: "none" }}>Returns & Exchanges</Link></li>
              <li><Link to="/track-order" style={{ color: "#333", textDecoration: "none" }}>Track Your Order</Link></li>
            </ul>
          </div>

          {/* Column 3: Global Sections */}
          <div className="col-md-3">
            <h5>International</h5>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <label htmlFor="language-select">Language:</label>
                <select id="language-select" className="form-control" style={{ backgroundColor: "#f8f8f8", border: "1px solid #ddd" }}>
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                  <option>Chinese</option>
                  <option>Japanese</option>
                </select>
              </li>
              <li>
                <label htmlFor="currency-select">Currency:</label>
                <select id="currency-select" className="form-control" style={{ backgroundColor: "#f8f8f8", border: "1px solid #ddd" }}>
                  <option>USD</option>
                  <option>EUR</option>
                  <option>GBP</option>
                  <option>JPY</option>
                  <option>AUD</option>
                </select>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media Links */}
          <div className="col-md-3">
            <h5>Follow Us</h5>
            <ul style={{ listStyleType: "none", padding: 0, display: "flex", gap: "10px" }}>
              <li>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: "#333", fontSize: "20px" }}>
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: "#333", fontSize: "20px" }}>
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: "#333", fontSize: "20px" }}>
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: "#333", fontSize: "20px" }}>
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 text-center">
            <h5>Subscribe to Our Newsletter</h5>
            <p>Stay updated with our latest offers and news</p>
            <form onSubmit={handleSubscribe} style={{ maxWidth: "400px", margin: "0 auto" }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                style={{
                  padding: "10px",
                  width: "70%",
                  border: "1px solid #ddd",
                  borderRadius: "4px"
                }}
                required
              />
              <button
                type="submit"
                style={{
                  padding: "10px 15px",
                  backgroundColor: "#333",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  marginLeft: "10px"
                }}
              >
                Subscribe
              </button>
            </form>
            {message && <p style={{ color: message.includes("Thank") ? "green" : "red", fontSize: "14px" }}>{message}</p>}
          </div>
        </div>

        {/* Copyright Section */}
        <div className="row mt-4">
          <div className="col-12 text-center">
            <p style={{ color: "#777", fontSize: "14px" }}>
              &copy; {new Date().getFullYear()} skillsphere ventures. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
