import React, { useState } from 'react';
import './ServiceFormHero.css';
import { Container } from 'react-bootstrap';

const ServiceFormHero = (props) => {
    const [name, setName] = useState("TRANSFER OF VEHICLE - WITHIN KARNATAKA");

    return (
        <div className="service__form__hero__outer__div">
            <Container>
                <div className="service__form__hero__inner__div">

                    <div className="description__div">

                        <div className="heading">
                            <p>{name}</p>
                        </div>

                        
                    </div>
                </div>

            </Container>
        </div>
    )
}

export default ServiceFormHero
