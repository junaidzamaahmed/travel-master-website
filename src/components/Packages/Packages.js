import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Package from '../Package/Package';

const Packages = () => {
    const [packages, setPackages] = useState();
    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPackages(data)
            })
    }, [])
    return (
        <div id='packages' className="my-5">
            <Container>
                <h2 className="text-center py-5 fs-1"><span className="nav-border-bottom">Packages</span></h2>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    {packages?.map(pkg => <Package key={pkg._id} pkg={pkg}></Package>)}
                </div>
            </Container>
        </div>
    );
};

export default Packages;