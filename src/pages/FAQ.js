import React from "react";
import { Navbar, Footer } from "../components";
const FAQ = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h1 className="text-center">Frequently Asked Questions (FAQ)</h1>
        <hr />
        <div className="content">
          <h4>How do I place an order?</h4>
          <p>Simply browse our products, add them to the cart, and proceed to checkout.</p>
          <h4>Can I cancel or change my order?</h4>
          <p>Orders can be changed or canceled within 1 hour of purchase. Please contact support immediately.</p>
          <h4>Do you ship internationally?</h4>
          <p>Yes, we offer international shipping. Please check our Shipping & Delivery page for more details.</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQ;
