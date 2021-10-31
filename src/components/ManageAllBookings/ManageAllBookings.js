import React, { useEffect, useState } from 'react';
import Booking from '../Booking/Booking';

const ManageAllBookings = () => {
    // const { userID } = useParams()
    const [orders, setOrders] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        fetch('https://tripmasterserver.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setOrders(data)
                setIsLoading(false)
            })
    }, [])

    const deleteRefresh = (deletedCount, orderID) => {
        if (deletedCount === 1) {
            const remaining = orders?.filter(order => order._id !== orderID)
            setOrders(remaining)
        }
    }

    if (isLoading) {
        return (
            <div className="mid-page align-items-center d-flex justify-content-center">
                <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    return (
        <div className="nav-margin">
            <h2 className="text-center">Number of your bookings: {orders?.length}</h2>
            {orders?.map(order => <Booking key={order?._id} order={order} deleteRefresh={deleteRefresh}></Booking>)}
        </div>
    );
};

export default ManageAllBookings;