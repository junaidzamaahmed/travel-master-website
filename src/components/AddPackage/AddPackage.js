import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddPackage.css'

const AddPackage = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/packages', data)
            .then(res => {
                console.log(res)
                reset()
            })
            
    };
    return (
        <div className="mid-page align-items-center d-flex justify-content-center flex-column">
            <h2 className="text-center py-5 fs-1"><span className="nav-border-bottom">Add a new Package</span></h2>
            <form className="d-flex justify-content-center flex-column" onSubmit={handleSubmit(onSubmit)}>
                <input className="mb-2 rounded" placeholder="Place Name" {...register("title", { required: true })} />
                <input className="mb-2 rounded" placeholder="Description" {...register("description", { required: true })} />
                <input className="mb-2 rounded" placeholder="Image URL" {...register("img", { required: true })} />
                <input className="mb-4 rounded" placeholder="Price" type="number" {...register("price", { required: true })} />
                <input className="primary-background button text-light text-decoration-none px-4 py-2 rounded-pill nav-item primary-button text-center" type="submit" />
            </form>
        </div>
    );
};

export default AddPackage;