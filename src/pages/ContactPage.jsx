import React, { useState } from "react";
import { Footer, Navbar } from "../components";

const ContactPage = () => {
  // Step 1: Create state variables for the form fields and feedback message
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState(""); // For showing feedback to the user
  const [isSubmitting, setIsSubmitting] = useState(false); // To handle submit button state

  // Step 2: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!name || !email || !message) {
      setFeedback("All fields are required!");
      return;
    }
    
    // Simulate form submission (you would typically make an API request here)
    setIsSubmitting(true);
    setFeedback("Sending your message...");
    
    // Simulate a delay for feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setFeedback("Your message has been sent successfully! We'll get back to you soon.");
      
      // Clear the form fields after submission
      setName("");
      setEmail("");
      setMessage("");
    }, 2000); // Simulating a 2-second delay
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Contact Us</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="form my-3">
                <label htmlFor="Name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form my-3">
                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form my-3">
                <label htmlFor="Message">Message</label>
                <textarea
                  rows={5}
                  className="form-control"
                  id="Message"
                  placeholder="Enter your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              {/* Display feedback message */}
              {feedback && (
                <div className={`alert ${feedback.includes("successfully") ? "alert-success" : "alert-danger"}`}>
                  {feedback}
                </div>
              )}

              <div className="text-center">
                <button
                  className="my-2 px-4 mx-auto btn btn-dark"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ContactPage;