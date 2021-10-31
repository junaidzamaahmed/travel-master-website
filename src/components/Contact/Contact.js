import React from 'react';
import { Button } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className="container my-5">
            <h2 className="text-center py-5 fs-1"><span className="nav-border-bottom">Contact Us</span></h2>
            <p className="text-center">Fill up the form and submit, we'll get in touch with you very soon!</p>
            <div id="contact" class="row g-4">
                <div class="col-lg-6">
                    <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
                </div>
                <div class="col-lg-6">
                    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
                </div>
                <div class="col-lg-12">
                    <input type="email" class="form-control" placeholder="Email" aria-label="Email" />
                </div>
                <div class="col-lg-6">
                    <input type="number" class="form-control" placeholder="Phone number" aria-label="Phone Number" />
                </div>
                <div class="col-lg-6">
                    <input type="text" class="form-control" placeholder="City" aria-label="City" />
                </div>
            </div>
            <div className="d-flex justify-content-center container my-3">
                <Button
                    className="primary-background button text-light text-decoration-none px-4 py-2 rounded-pill nav-item primary-button"
                >
                    Submit
                </Button>
            </div>
        </div>
    );
};

export default Contact;