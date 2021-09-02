import React, { useEffect, useState } from 'react'
import './MainSuccess.css';
import { Container } from 'react-bootstrap'
import { useHistory, useParams, Link } from 'react-router-dom'

const MainSuccess = () => {

    const history = useHistory();

    const clickHandler = () => {
        history.push('/transaction/status')
    }


    return (
        <div className="main__success__outer__div">
            <Container>
                <div className="main__success__inner__div">
                    <div className="form__outer_div">
                        <div className="form__main">
                            <div className="form__main__inner__container">
                                <div className="form__main__inner_thank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.25 8.891l-1.421-1.409-6.105 6.218-3.078-2.937-1.396 1.436 4.5 4.319 7.5-7.627z"/></svg>
                                    <p>Thank You</p>
                                </div>
                                <div className="form__main__inner_request">
                                    <p>One step away!! Click here to take it ahead</p>
                                    <button onClick={clickHandler}>Request Gserve</button>
                                </div>
                                <div className="form__main__inner__btn__group">
                                    <button>View / Edit Form</button>
                                    <button>Supporting Documents</button>
                                    <button>Download Application</button>
                                    <button>Email Application</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default MainSuccess
