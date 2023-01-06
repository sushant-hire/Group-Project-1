import React, { useState, useEffect } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom'

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState("");
    const [message1, setMessage1] = useState("");

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (name === "") {
            alert("Name is required")
        } else if (email === "") {
            alert("Email is required")
        } else if (password === "") {
            alert("Password is required")
        } else {
            localStorage.setItem("name", name)
            localStorage.setItem("email", email)
            localStorage.setItem("password", password)
            alert("Congratulations! You have signed up!")
        }
    }

    function Checkpassword() {
        const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        if (!strongRegex.test(password) && password !== "") {
            setMessage1("Invalid password! Your password must contain at least 1 uppercase alphabet, 1 lowercase alphabet, number values between 0-9, 1 special character, and minimum 8 characters.");
        } else if (password === "") {
            setMessage1("")
        }
    }
    function Checkemail() {
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
        if (!regEx.test(email) && email !== "") {
            setMessage("Invalid email! Your email ID must contain all domain requirements");
        }
    }
    
    return (
        <form onSubmit={handleSubmit}>
            {/* <label htmlFor="name">Name: </label> */}
            <input
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={handleNameChange} required
            />
            {/* <label htmlFor="email">Email:</label> */}
            <input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={handleEmailChange} required
            />
            <span>{message}</span>
            {/* <label htmlFor="password">Password:</label> */}
            <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange} required
            />
            <span>{message1}</span>
            <br />
            <button className="ShowPasswordButton" type="button" onClick={toggleShowPassword}>
                {showPassword ? 'Hide Password' : 'Show Password'}
            </button>
            <button onClick={() => { Checkpassword(); Checkemail(); handleSubmit(); }} className="SignUpButton" type="submit">Sign Up</button>
            <div className="CheckAccountDiv">
                <span className="CheckAccountButton" > Already have an account? <Link style={{ color: "rgb(11, 138, 100)" }} className="nav-link active" aria-current="page" to="/login">Login</Link> </span>
            </div>
        </form>
    );
}

export default SignUp;