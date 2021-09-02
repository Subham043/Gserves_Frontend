import React, { useState } from 'react'
import './MainServiceProcedure.css'
import { Container } from 'react-bootstrap'

const MainServiceProcedure = () => {

    const [name, setName] = useState("TRANSFER OF VEHICLE - WITHIN KARNATAKA");


    return (
        <div className="main__service__procedure__outer__div">
            <Container>
                <div className="main__service__procedure_heading">
                    Procedure for {name}
                </div>
                <div className="main__service__procedure__inner__div">
                    <div className="main__service__procedure__list">
                        <span className="main__service__procedure__list__no">1</span>
                        <span className="main__service__procedure__list__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</span>
                    </div>
                    <div className="main__service__procedure__list">
                        <span className="main__service__procedure__list__no">2</span>
                        <span className="main__service__procedure__list__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                    </div>
                    <div className="main__service__procedure__list">
                        <span className="main__service__procedure__list__no">3</span>
                        <span className="main__service__procedure__list__text">hello just a random text</span>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default MainServiceProcedure
