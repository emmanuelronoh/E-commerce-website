import React from "react";
import { Navbar, Footer } from "../components";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h1 className="text-center">Privacy Policy</h1>
        <hr />
        <div className="content">
          <h4>Introduction</h4>
          <p>
            This is the privacy policy for YourCompany. We respect your privacy and are committed to protecting your personal data.
          </p>
          <h4>Information Collection</h4>
          <p>
            We collect personal information such as your name, email address, and payment details when you use our services.
          </p>
          <h4>Use of Information</h4>
          <p>
            The information we collect is used to process orders, provide customer support, and improve our services.
          </p>
          <h4>Data Protection</h4>
          <p>
            We take appropriate measures to secure your personal data and ensure it is handled responsibly.
          </p>
          <h4>Cookies</h4>
          <p>
            Our website uses cookies to improve your browsing experience.
          </p>
          <h4>Changes to Privacy Policy</h4>
          <p>
            We reserve the right to update this privacy policy. Any changes will be posted on this page.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
  
};

export default PrivacyPolicy;
