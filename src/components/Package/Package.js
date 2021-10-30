import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Package = ({ pkg }) => {
    const history = useHistory()
    const handleBookClick = () => {
        history.push('/packages/' + pkg._id)
    }

    return (
        <div class="col">
            <div class="card h-100">
                <img src={pkg?.img} class="card-img-top" alt="..." />
                <div class="card-body text-center">
                    <h5 class="card-title fw-bold">{pkg?.title}</h5>
                    <p class="card-text card-description">{pkg?.description}</p>
                    <p class="card-text fw-bold my-3">Cost Per Person: ${pkg?.price}</p>
                    <Button
                        className="primary-background button text-light text-decoration-none px-4 py-2 rounded-pill nav-item primary-button text-center"
                        onClick={handleBookClick}
                    >
                        <i class="fas fa-bookmark"></i> Book Now
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Package;