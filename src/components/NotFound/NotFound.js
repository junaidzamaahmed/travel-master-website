import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 flex-column">
            <h1 className="primary-text fs-bold">404 Not Found!</h1>
            <p className="fs-3 text-center">Oops, the page you're looking for is unavailable!</p>
            <div className="d-flex justify-content-center">
                <NavLink
                    className="primary-background button text-light text-decoration-none px-4 py-2 rounded-pill nav-item primary-button"
                    to="/"
                ><i className="fas fa-home"></i> Return Home
                </NavLink>
                </div>
        </div> 
    );
};

export default NotFound;