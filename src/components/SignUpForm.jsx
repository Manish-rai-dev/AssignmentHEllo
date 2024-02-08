import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/SignIn.css"; // You may create a new CSS file for sign-up styles
import { useAuth0 } from "@auth0/auth0-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUpForm = () => {
    const navigate = useNavigate();
    const { loginWithRedirect } = useAuth0();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();

        // Email validation
        if (!validateEmail(email)) {
            toast.error("Invalid email address");
            return;
        }

        // Password validation
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/>.<,])(?=.*[^\s]).{8,}$/;
        if (!passwordRegex.test(password)) {
            toast.error("Password must contain at least one uppercase letter, one lowercase letter, one numeric digit, one special character, and be at least 8 characters long");
            return;
        }

        // Confirm password validation
        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        // If validation passes, you can proceed with form submission
        // For example:
        // submitForm(email, password);
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <div className="formgroup__container">
            <p className="fontSign">Sign up</p>
            <p className="sign_to_ur_acc">Create an account</p>

            <div className="form__wrapper">
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        className="input__bar"
                        autoComplete="false"
                        placeholder="Email id"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="input__bar"
                        autoComplete="false"
                        placeholder="Password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        className="input__bar"
                        autoComplete="false"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />

                    <button type="submit" className="signin__btn">
                        Sign Up
                    </button>
                </form>
            </div>

            <p className="form__footer">
                Already have an account?{" "}
                <span onClick={() => navigate("/")}>
                    Sign in here
                </span>
            </p>

            <ToastContainer />
        </div>
    );
};

export default SignUpForm;
