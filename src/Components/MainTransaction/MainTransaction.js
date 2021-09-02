import React from 'react'
import './MainTransaction.css';
import { Container } from 'react-bootstrap'
import { useHistory, useParams, Link } from 'react-router-dom'
import { MdKeyboardArrowLeft,  MdKeyboardArrowRight } from "react-icons/md";

const MainTransaction = () => {

    const history = useHistory();
    const clickHandler = () => {
        history.push('/transaction/process')
    }

    return (
        <div className="main__transaction__outer__div">
            <Container>
                <div className="main__transaction__inner__div">
                    <div className="main__transaction__inner__display__div">
                        <div className="main__transaction__inner__display__id">
                            <div className="main__transaction__inner__display__id__description">
                                <div className="main__transaction__inner__display__id__head">
                                    Reference ID
                                </div>
                                <div className="main__transaction__inner__display__id__body">
                                    : <b>1234567890 - XXX</b>
                                </div>
                            </div>

                            <div className="main__transaction__inner__display__pagination">
                                <button className="arrow__btn"><MdKeyboardArrowLeft /></button>
                                <div  className="page__num">1</div>
                                <button className="arrow__btn"><MdKeyboardArrowRight /></button>
                                <div  className="total__page__num">10</div>
                            </div>
                        </div>
                        <div className="main__transaction__inner__display__service">
                            <div className="main__transaction__inner__display__id__description">
                                <div className="main__transaction__inner__display__id__head">
                                    Service Description
                                </div>
                                <div className="main__transaction__inner__display__id__body">
                                    : <b>Transafer of Vehicle - Within Karnataka</b>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="main__transaction__inner__display__div__greener">
                        <div className="main__transaction__inner__display__div__greener__text">
                            <p>One step away!! Click here to take it ahead!!</p>
                            <button onClick={clickHandler}>Request GServes</button>
                        </div>
                    </div>


                    <div className="main__transaction__inner__display__div">
                        <div className="main__transaction__inner__display__service">
                            <div className="main__transaction__inner__display__id__description">
                                <div className="main__transaction__inner__display__id__head">
                                    Applicatant Name
                                </div>
                                <div className="main__transaction__inner__display__id__body">
                                    : <b>Sunil KM</b>
                                </div>
                            </div>
                        </div>
                        <div className="main__transaction__inner__display__service">
                            <div className="main__transaction__inner__display__id__description">
                                <div className="main__transaction__inner__display__id__head">
                                    User Name
                                </div>
                                <div className="main__transaction__inner__display__id__body">
                                    : <b>Sunil KM</b>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="main__transaction__inner__display__div__btn">
                        <button>View / Edit Form</button>
                        <button>Supporting Documents</button>
                        <button>Download Application</button>
                        <button>Email Application</button>
                        <button style={{ background:"#818181", color:"white"}}>Close</button>
                    </div>

                </div>
            </Container>
        </div>
    )
}

export default MainTransaction
