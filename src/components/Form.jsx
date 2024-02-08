import React, { useState } from "react";
import "../pages/SignIn.css";
import { useAuth0 } from "@auth0/auth0-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
const Form = () => {
  const { loginWithRedirect } = useAuth0();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();
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
      <p className="fontSign">Sign in</p>
      <p className="sign_to_ur_acc">Sign in to your account</p>

      <div className="signin__with__buttons">
        <button className="siginin__google btn__primary" onClick={loginWithRedirect}>
          Sign in with Google
        </button>
        <button className="siginin__apple btn__primary">Sign in with Apple</button>
      </div>

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

          <a href="http://" target="_blank" className="forgot__pass" rel="noopener noreferrer">
            Forgot password?
          </a>

          <button type="submit" className="signin__btn">
            Sign In
          </button>
        </form>
      </div>

      <p className="form__footer">
        Don't have an account?{" "}
        <span  onClick={()=>navigate("/signup")}>
          Register here
        </span>
      </p>

      <ToastContainer />
    </div>
  );
};

export default Form;
