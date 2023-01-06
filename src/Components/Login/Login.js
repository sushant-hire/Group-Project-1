import React, { useState } from 'react';
import { Link } from 'react-router-dom'

function Login() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [message1, setMessage1] = useState("");
    const userName = localStorage.getItem("name")
        ? localStorage.getItem("name") : "AdminBoy"
    const userPassword = localStorage.getItem("password")
        ? localStorage.getItem("password") : "Admin@1234567"
    const handleSubmit = (event) => {
        event.preventDefault();
        if (name === userName && password === userPassword) {
            alert("Login successful!")
        } else {
            alert("User not found!")
        }
    };
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    function Checkpassword() {
        const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        if (!strongRegex.test(password) && password !== "") {
            setMessage1("Invalid password! Your password must contain at least 1 uppercase alphabet, 1 lowercase alphabet, number values between 0-9, 1 special character, and minimum 8 characters.");
        } else if (password === "") {
            setMessage1("")
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                id="name"
                placeholder="Name"
                value={name}
                onChange={handleNameChange} required
            />
            <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange} required
            />
            <span>{message1}</span>
            <br />
            <button className="ShowPasswordButton" type="button" onClick={toggleShowPassword}>
                {showPassword ? 'Hide Password' : 'Show Password'}
            </button>
            <button className="SignUpButton" type="submit" onClick={() => { Checkpassword(); handleSubmit(); }} >Login</button>
            <span className="span-handle" > Don't have an account? <Link style={{ color: "rgb(11, 138, 100)" }} className="nav-link active" aria-current="page" to="/signup">Sign Up</Link> </span>
        </form>
    );
}
export default Login;