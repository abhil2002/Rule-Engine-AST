// src/Navbar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css'; // Ensure you have this CSS file for additional styles if needed

function Navbar() {
    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Rule Engine</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className={`nav-item ${location.pathname === "/" ? 'active' : ''}`}>
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className={`nav-item ${location.pathname === "/create" ? 'active' : ''}`}>
                            <Link className="nav-link" to="/create">Create Rule</Link>
                        </li>
                        <li className={`nav-item ${location.pathname === "/combine" ? 'active' : ''}`}>
                            <Link className="nav-link" to="/combine">Combine Rules</Link>
                        </li>
                        <li className={`nav-item ${location.pathname === "/evaluate" ? 'active' : ''}`}>
                            <Link className="nav-link" to="/evaluate">Evaluate Rule</Link>
                        </li>
                        <li className={`nav-item ${location.pathname === "/rules" ? 'active' : ''}`}>
                            <Link className="nav-link" to="/rules">View Rules</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
