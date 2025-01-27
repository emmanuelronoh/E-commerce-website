import React, { useState } from "react";
import { Navbar, Footer } from "../components";
const TrackYourOrder = () => {
  const [orderNumber, setOrderNumber] = useState("");
  const [trackingStatus, setTrackingStatus] = useState("");

  const handleTrack = () => {
    // Simulate tracking
    if (orderNumber === "12345") {
      setTrackingStatus("Your order is on the way! Expected delivery in 3 days.");
    } else {
      setTrackingStatus("Order not found.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h1 className="text-center">Track Your Order</h1>
        <hr />
        <div className="content">
          <h4>Enter Your Order Number</h4>
          <input
            type="text"
            className="form-control"
            placeholder="Enter order number"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
          />
          <button className="btn btn-primary mt-3" onClick={handleTrack}>
            Track Order
          </button>
          {trackingStatus && <p className="mt-3">{trackingStatus}</p>}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TrackYourOrder;
