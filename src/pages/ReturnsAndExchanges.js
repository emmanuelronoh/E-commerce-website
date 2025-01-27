import React from "react";
import { Navbar, Footer } from "../components";

const ReturnsAndExchanges = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h1 className="text-center">Returns & Exchanges</h1>
        <hr />
        <div className="content">
          <h4>Return Policy</h4>
          <p>If you're not satisfied with your purchase, you can return it within 30 days for a full refund.</p>
          <h4>How to Return an Item</h4>
          <p>Simply contact our customer support team to start the return process.</p>
          <h4>Exchanges</h4>
          <p>We offer exchanges for damaged or defective items. Contact customer support for assistance.</p>
        </div>
      </div>
      <Footer />
    </>
    
  );
};

export default ReturnsAndExchanges;
