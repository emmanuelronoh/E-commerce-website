import React, { useState } from 'react';
import { Footer, Navbar } from "../components";
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    // Step 1: Create state variables for form fields
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    // Use useNavigate to redirect after registration
    const navigate = useNavigate();

    // Step 2: Form validation function
    const validateForm = () => {
        return name && email && password; // Ensure all fields are filled
    }

    // Step 3: Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) {
            setError('All fields are required!');
            return;
        }
        setIsSubmitting(true);
        setError('');
        
        // Store credentials in localStorage after successful registration
        localStorage.setItem('userCredentials', JSON.stringify({ email, password }));
        
        setIsSubmitting(false);
        alert('Registration successful!');
        
        // Redirect user to login page after successful registration
        navigate('/login');
    }

    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Register</h1>
                <hr />
                <div className="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        <form onSubmit={handleSubmit}>
                            {/* Name input */}
                            <div className="form my-3">
                                <label htmlFor="Name">Full Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Name"
                                    placeholder="Enter Your Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            {/* Email input */}
                            <div className="form my-3">
                                <label htmlFor="Email">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="Email"
                                    placeholder="name@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            {/* Password input */}
                            <div className="form my-3">
                                <label htmlFor="Password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="Password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            {/* Error message */}
                            {error && <div className="alert alert-danger">{error}</div>}

                            {/* Login Link */}
                            <div className="my-3">
                                <p>Already have an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link></p>
                            </div>

                            {/* Submit Button */}
                            <div className="text-center">
                                <button
                                    className="my-2 mx-auto btn btn-dark"
                                    type="submit"
                                    disabled={isSubmitting} // Disable when submitting
                                >
                                    {isSubmitting ? 'Registering...' : 'Register'}
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

export default Register;
