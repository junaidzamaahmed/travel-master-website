import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInWithGoogle } = useAuth();

    // Link hooks
    const history = useHistory();
    const location = useLocation();
    const redirected_url = location.state?.from || '/'

    return (
        <div className="d-flex justify-content-center total font-weight-bold p-3 nav-margin">
            <Button
                className="primary-background button text-light text-decoration-none px-4 py-2 rounded-pill nav-item primary-button"
                type="submit"
                onClick={() => signInWithGoogle(redirected_url, history)}
            >
                <i className="fab fa-google"></i> Sign In With Google
            </Button>
        </div>
    );
};

export default Login;