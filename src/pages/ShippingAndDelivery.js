import React from "react";
import { Navbar, Footer } from "../components";
const ShippingAndDelivery = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h1 className="text-center">Shipping & Delivery</h1>
        <hr />
        <div className="content">
          <h4>Shipping Methods</h4>
          <p>We offer standard shipping, expedited shipping, and express shipping options.</p>
          <h4>Delivery Times</h4>
          <p>Orders are typically processed within 2-3 business days. Delivery time depends on your location.</p>
          <h4>Shipping Costs</h4>
          <p>Shipping is free for orders over $50. Otherwise, a standard shipping fee of $5 applies.</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShippingAndDelivery;
