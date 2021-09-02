import React, { useRef, useState } from 'react'
import './MainService.css';
import { Container } from 'react-bootstrap'
import outputImg from '../../Assets/icons/output.png'
import optionImg from '../../Assets/icons/option.png'
import time from '../../Assets/icons/time.png'
import charges from '../../Assets/icons/charges.png'
import { useHistory, useParams, Link } from 'react-router-dom'

const MainService = () => {

    const history = useHistory();
    const [name, setName] = useState("TRANSFER OF VEHICLE - WITHIN KARNATAKA");
    const [description, setDescription] = useState("Lorem Ipsum is simply dummy text of the printing and typesetting industry.");
    const [tag_line, setTag_line] = useState("It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.");
    const [option_online, setOption_online] = useState(true);
    const [option_person, setOption_person] = useState(false);
    const [option_representative, setOption_representative] = useState(true);
    const [output, setOutput] = useState("The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.");
    const [time_taken, setTime_taken] = useState("24 Hrs");
    const [govt_fees, setGovt_fees] = useState("200");
    const [other_expenses, setOther_expenses] = useState("300");
    const [service_charges, setService_charges] = useState("300");
    const [tracking_url, setTracking_url] = useState("https://google.com");

    const boxRef = useRef([]);

    const sliderMouseEnterHandler = (value) => {
        boxRef.current[value].style.background = 'rgba(0, 160, 139, 1)';
        boxRef.current[value].childNodes[0].style.display = "none";
        boxRef.current[value].childNodes[1].style.display = "grid";
    }

    const sliderMouseLeaveHandler = (value) => {
        boxRef.current[value].style.background = 'transparent';
        boxRef.current[value].childNodes[0].style.display = "grid";
        boxRef.current[value].childNodes[1].style.display = "none";
    }

    const serviceFormPageHandler = () => {
        history.push(`/service/form/`)
    }

    return (
        <div className="main__service__outer__div">
            <Container>
                <div className="main__service__inner__div">
                    <div className="heading__main__service">
                        {name}
                    </div>
                    <div className="description__main__service">
                    {description}
                    </div>
                    <div className="tag__line__main__service">
                    {tag_line}
                    </div>
                    <div className="pointers__main__service__div">
                        <div className="row" style={{ justifyContent: "center" }}>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 pointers__div">
                                <div className="pointers__inner__div" ref={el => boxRef.current[0] = el} onMouseEnter={() => sliderMouseEnterHandler(0)} onMouseLeave={() => sliderMouseLeaveHandler(0)}>
                                    <div className="visible__pointer__div">
                                        <img src={outputImg} alt="output" />
                                        <div className="text">
                                            OUTPUT
                                        </div>
                                    </div>
                                    <div className="hover__pointer__div">
                                        <div className="text">{output}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 pointers__div">
                                <div className="pointers__inner__div" ref={el => boxRef.current[1] = el} onMouseEnter={() => sliderMouseEnterHandler(1)} onMouseLeave={() => sliderMouseLeaveHandler(1)}>
                                    <div className="visible__pointer__div">
                                        <img src={charges} alt="output" />
                                        <div className="text">
                                            CHARGES
                                        </div>
                                    </div>
                                    <div className="hover__pointer__div">
                                        <div className="text">Government Fees: {govt_fees}<br />Service Charges: {service_charges}<br />Other Expenses: {other_expenses}<br /></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 pointers__div">
                                <div className="pointers__inner__div" ref={el => boxRef.current[2] = el} onMouseEnter={() => sliderMouseEnterHandler(2)} onMouseLeave={() => sliderMouseLeaveHandler(2)}>
                                    <div className="visible__pointer__div">
                                        <img src={time} alt="output" />
                                        <div className="text">
                                            TIME TAKEN
                                        </div>
                                    </div>
                                    <div className="hover__pointer__div">
                                        <div className="text">{time_taken}</div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 pointers__div">
                                <div className="pointers__inner__div" ref={el => boxRef.current[3] = el} onMouseEnter={() => sliderMouseEnterHandler(3)} onMouseLeave={() => sliderMouseLeaveHandler(3)}>
                                    <div className="visible__pointer__div">
                                        <img src={optionImg} alt="output" />
                                        <div className="text">
                                            OPTIONS
                                        </div>
                                    </div>
                                    <div className="hover__pointer__div">
                                        <div className="list">
                                            <ul>
                                                <li><p className={`${option_person===true ? "active" : ""}`}>1) In Person</p></li>
                                                <li><p className={`${option_online===true ? "active" : ""}`}>2) Online</p></li>
                                                <li className="last__li"><p className={`${option_representative===true ? "active" : ""}`}>3) Representative</p></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="start__application__btn">
                        <button onClick={serviceFormPageHandler}>START APPLICATION &gt;&gt;</button>
                    </div>
                    <div className="link__department__btn">
                        <Link to={{pathname:tracking_url}}  target="_blank">Click Here</Link> to access the official website of the department
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default MainService
