import React from 'react';
import { Button } from 'react-bootstrap';


const Booking = () => {
    return (
        <div>
            <div class="card">
                    <h5 class="card-header">Featured</h5>
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <Button class="primary-background button text-light text-decoration-none px-4 py-2 rounded-pill nav-item primary-button text-center">Approve</Button>
                    </div>
                </div>
        </div>
    );
};

export default Booking;