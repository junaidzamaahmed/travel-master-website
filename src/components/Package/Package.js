import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Package = ({ pkg }) => {
    const history = useHistory()
    const handleBookClick = () => {
        history.push('/packages/' + pkg._id)
    }

    return (
        <div className="col">
            <div className="card h-100">
                <img src={pkg?.img} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title fw-bold">{pkg?.title}</h5>
                    <p className="card-text card-description">{pkg?.description}</p>
                    <p className="card-text fw-bold my-3">Cost Per Person: ${pkg?.price}</p>
                    <div className="d-flex justify-content-center w-100">
                        <Button
                            className="primary-background button text-light text-decoration-none px-4 py-2 rounded-pill nav-item primary-button text-center"
                            onClick={handleBookClick}
                        >
                            <i className="fas fa-bookmark"></i> Book Now
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Package;