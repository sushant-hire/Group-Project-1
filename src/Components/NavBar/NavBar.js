import React from 'react'
import { Link } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './NavBar.css';
const NavBar = () => {
    return (
        <nav style={{ backgroundColor: "gainsboro" }} className="navbar navbar-expand-lg ">
            <div className="container-fluid">
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
                    <section className="d-flex" role="search">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/signup">Sign Up </Link>
                            </li>
                            {/* <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <AccountCircleIcon />
                                </a>
                                <ul class="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/">Home</Link></li>
                                    <li><Link className="dropdown-item" to="/about">About</Link></li>
                                    <li><hr class="dropdown-divider"/></li>
                                    <li><a class="dropdown-item" href="#">Logout</a></li>
                                </ul>
                            </li> */}
                        </ul>
                    </section>
                </div>
            </div>
        </nav>
    )
}
export default NavBar
