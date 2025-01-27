import React from "react";
import { Navbar, Footer } from "../components";

const TermsOfService = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h1 className="text-center">Terms of Service</h1>
        <hr />
        <div className="content">
          <h4>Introduction</h4>
          <p>
            These Terms of Service govern your use of the website and services provided by YourCompany. By accessing or using our site, you agree to these terms.
          </p>
          <h4>Use of Services</h4>
          <p>
            You agree to use our services only for lawful purposes and in accordance with these terms.
          </p>
          <h4>Account Responsibility</h4>
          <p>
            You are responsible for maintaining the confidentiality of your account and password.
          </p>
          <h4>Prohibited Activities</h4>
          <p>
            You may not use our services for illegal or unauthorized activities, including fraud or spamming.
          </p>
          <h4>Limitation of Liability</h4>
          <p>
            YourCompany is not responsible for any damages arising from the use or inability to use our services.
          </p>
          <h4>Governing Law</h4>
          <p>
            These terms will be governed by the laws of [Your Country/State].
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default TermsOfService;
