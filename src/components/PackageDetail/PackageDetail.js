import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PackageDetail = () => {
    const { id } = useParams();
    const [pkg, setPkg] = useState({});
    const { user } = useAuth();
    const history = useHistory();

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://tripmasterserver.herokuapp.com/orders', data)
            .then(res => {
                history.push('/bookingsuccessful')
            })
    };

    useEffect(() => {
        fetch("https://tripmasterserver.herokuapp.com/packages/" + id)
            .then(res => res.json())
            .then(data => {
                setPkg(data)
            })
    }, [])

    return (
        <div className="nav-margin">
            <img className="w-100" src={pkg?.img} alt="" />
            <Container className="text-center">
                <h2 className="text-center py-5 fs-1"><span className="nav-border-bottom fw-bold">{pkg?.title}</span></h2>
                <p className="text-center fs-3 fw-bold">{pkg?.description}</p>
                <hr />
                <p className="text-center fs-2 fw-bold">Cost Per Person : ${pkg?.price}</p>
                <hr />
                <div className="d-flex justify-content-center">
                    <form className="d-flex justify-content-center flex-column w-50" onSubmit={handleSubmit(onSubmit)}>
                        <input className="mb-2 rounded-pill p-2" {...register("title", { required: true })} defaultValue={pkg?.title} />
                        <input className="mb-2 rounded-pill p-2" {...register("name", { required: true })} defaultValue={user?.displayName} />
                        <input className="mb-2 rounded-pill p-2" {...register("email", { required: true })} defaultValue={user?.email} />
                        <input className="mb-2 rounded-pill p-2" type="number" {...register("age", { required: true })} placeholder="Your Age" />
                        <input className="mb-2 rounded-pill p-2" {...register("fromCity", { required: true })} placeholder="City" />
                        <input className="mb-2 rounded-pill p-2" {...register("fromCountry", { required: true })} placeholder="Country" />
                        <select className="mb-2 rounded-pill p-2" {...register("gender", { required: true })}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                        <input className="primary-background button text-light text-decoration-none px-4 py-2 rounded-pill nav-item primary-button text-center mb-5 mt-2" type="submit" />
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default PackageDetail;