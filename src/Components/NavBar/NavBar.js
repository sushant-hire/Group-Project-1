import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css';

const NavBar = () => {

    const [file, setFile] = useState(null);
    const [showInput, setShowInput] = useState(false);
    
    const handleFileSelect = (event) => {
        setFile(event.target.files[0]);
        setShowInput(false);
    }

    return (
        <nav style={{ backgroundColor: "gainsboro" }} className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <Link class="navbar-brand fw-bold" to="/">OVO</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active NavAbout" aria-current="page" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
                        </li>
                    </ul>
                    <section className="d-flex align-items-center" role="search">
                        {file ? (
                            <img style={{ borderRadius: '10px', cursor: 'pointer' }} src={URL.createObjectURL(file)} height="40" width="40" alt="Profile" onClick={() => setShowInput(!showInput)} />
                        ) : (
                            <img style={{ borderRadius: '10px', cursor: 'pointer' }} src="https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg=" height="40" width="40" alt="Profile" onClick={() => setShowInput(!showInput)} />
                        )}
                        {showInput && (
                            <input style={{ display: 'flex', justifyContent: 'center', margin: '4px 0px 0px 7px', padding: '0px', height: '40px', width: '400px' }} type="file" accept="image/jpeg, image/jpg, image/png" onChange={handleFileSelect} />
                        )}
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/signup">Sign Up </Link>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </nav>
    )
}
export default NavBar
