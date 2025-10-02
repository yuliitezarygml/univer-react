import React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';

const handleSignUp = () => {
    alert("Sign Up functionality coming soon! 👤");
};

function Navigation() {
    return (
        <div className="navigation">
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        <img src={require('../img/Vector.png')} alt="" className="navbar-logo" />
                        <span className="navbar-title">FASHION</span>
                    </NavLink>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    CATALOGUE
                                    <span className="sr-only"></span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">
                                    FASHION
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">
                                    FAVOURITE
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/blog">
                                    LIFESTYLE
                                </NavLink>
                            </li>
                        </ul>
                        <Button onClick={handleSignUp} className="my-button">
                            SIGN UP
                        </Button>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;
