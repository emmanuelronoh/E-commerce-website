import React from "react";
import { Navbar, Footer } from "../components";

const CustomerSupport = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h1 className="text-center">Customer Support</h1>
        <hr />
        <div className="content">
          <h4>Contact Us</h4>
          <p>If you need assistance, feel free to contact our customer support team.</p>
          <h5>Phone Support:</h5>
          <p>Call us at 1-800-123-4567.</p>
          <h5>Email Support:</h5>
          <p>Send an email to support@company.com.</p>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default CustomerSupport;
