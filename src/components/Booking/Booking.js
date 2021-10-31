import axios from 'axios';
import React from 'react';
import { Button, Container } from 'react-bootstrap';


const Booking = ({ order, deleteRefresh, handleApproveClick }) => {

    const handleDeleteClick = (orderID) => {
        if (window.confirm("Are you sure you want to delete this order?")) {
            axios.delete('https://tripmasterserver.herokuapp.com/delete/' + orderID)
                .then(res => {
                    if (res.data.deletedCount === 1) {
                        // console.log("deleted successfully")
                        deleteRefresh(res.data.deletedCount, orderID)
                    }
                })
        }
    }

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
                        {
                            order?.status ||
                            <Button className="primary-background button text-light text-decoration-none px-4 py-2 rounded-pill nav-item primary-button text-center me-3"
                                onClick={() => { handleApproveClick(order._id) }}
                            >Approve</Button>
                        }
                        <Button className="bg-danger button text-light text-decoration-none px-4 py-2 rounded-pill nav-item primary-button text-center"
                            onClick={() => { handleDeleteClick(order._id) }}
                        >Delete</Button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Booking;