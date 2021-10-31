import React from 'react';
import { Button, Container } from 'react-bootstrap';


const Booking = ({order}) => {
    return (
        <div>
            <Container>
                <div className="card my-3">
                    <h5 className="card-header">Customer Name: {order?.name}</h5>
                    <div className="card-body">
                        <h5 className="card-title">Destination: <span className="fw-bold">{order?.title}</span></h5>
                        <p className="card-text">Booking ID: {order?._id} <br /> Status: {order?.status ? <span className="text-success"><i class="fas fa-check-circle"></i>Approved</span> :
                        <span className="text-warning"><i class="fas fa-exclamation-circle"></i>Pending</span>
                        } </p>
                        <Button className="primary-background button text-light text-decoration-none px-4 py-2 rounded-pill nav-item primary-button text-center me-3">Approve</Button>
                        <Button className="bg-danger button text-light text-decoration-none px-4 py-2 rounded-pill nav-item primary-button text-center">Delete</Button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Booking;