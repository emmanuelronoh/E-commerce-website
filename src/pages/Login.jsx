import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Login = () => {
  const [email, setEmail] = useState(""); // State to store email
  const [password, setPassword] = useState(""); // State to store password
  const [error, setError] = useState(""); // State to store error message
  const [isLoading, setIsLoading] = useState(false); // State to store loading status
  const navigate = useNavigate(); // To navigate after successful login

  // Handle input change for email and password fields
  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "email") {
      setEmail(value);
    } else if (id === "password") {
      setPassword(value);
    }
  };

  // Form validation before submission
  const validateForm = () => {
    if (!email || !password) {
      setError("Both fields are required!");
      return false;
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submit action

    if (!validateForm()) return; // If form validation fails, do not submit

    setIsLoading(true); // Set loading state to true during submission
    setError(""); // Clear previous error messages

    // Retrieve the stored credentials from localStorage
    const storedCredentials = JSON.parse(localStorage.getItem("userCredentials"));

    // Simulate an API request for login (replace with your API logic)
    setTimeout(() => {
      if (
        storedCredentials &&
        email === storedCredentials.email &&
        password === storedCredentials.password
      ) {
        // Simulate successful login
        setIsLoading(false);
        alert("Login successful!");
        navigate("/"); // Redirect to dashboard or homepage
      } else {
        // Simulate login failure
        setIsLoading(false);
        setError("Invalid credentials, please try again.");
      }
    }, 1500); // Simulate a delay of 1.5 seconds for API call
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleSubmit}>
              {/* Email Input */}
              <div className="my-3">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={handleChange}
                />
              </div>

              {/* Password Input */}
              <div className="my-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={handleChange}
                />
              </div>

              {/* Error Message */}
              {error && <div className="alert alert-danger">{error}</div>}

              {/* Register Link */}
              <div className="my-3">
                <p>
                  New Here?{" "}
                  <Link to="/register" className="text-decoration-underline text-info">
                    Register
                  </Link>
                </p>
              </div>

              {/* Login Button */}
              <div className="text-center">
                <button
                  className="my-2 mx-auto btn btn-dark"
                  type="submit"
                  disabled={isLoading} // Disable button while submitting
                >
                  {isLoading ? "Logging In..." : "Login"} {/* Change text while loading */}
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

export default Login;
