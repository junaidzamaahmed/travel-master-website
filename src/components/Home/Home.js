import React from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Packages from '../Packages/Packages';
import "./Home.css"

const Home = () => {
    const { isLoading } = useAuth()
    return (
        <div>
            {
                isLoading ?
                    <div className="mid-page align-items-center d-flex justify-content-center">
                        <div className="spinner-border text-success" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    :
                    <>
                        <div id='home' className="align-items-center d-flex justify-content-center flex-column">
                            <Container>
                                <h1 className="fw-bolder">Travel the world <br />
                                    with the ultimate <br />
                                    <span className="primary-text">TRIP MASTER</span>
                                </h1>
                            </Container>
                        </div>
                        <Packages></Packages>
                    </>
            }
        </div>
    );
};

export default Home;