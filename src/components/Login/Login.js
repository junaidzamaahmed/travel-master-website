import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInWithGoogle } = useAuth();

    // Link hooks
    const history = useHistory();
    const location = useLocation();
    const redirected_url = location.state?.from || '/'

    return (
        // <div className="container">
            <div className="mid-page align-items-center d-flex justify-content-center flex-column container">
                <h2 className="text-center py-5 fs-1"><span className="nav-border-bottom">Login</span></h2>
                <Button
                    className="primary-background button text-light text-decoration-none px-4 py-2 rounded-pill nav-item primary-button"
                    type="submit"
                    onClick={() => signInWithGoogle(redirected_url, history)}
                >
                    <i className="fab fa-google"></i> Sign In With Google
                </Button>
            </div>
        // </div>
    );
};

export default Login;