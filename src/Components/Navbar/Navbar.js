import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import "./Navbar.css"
import { FaUserAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { GoThreeBars } from "react-icons/go";
import { GoLocation } from "react-icons/go";
import { GrStackOverflow } from "react-icons/gr";
import { BiExit } from "react-icons/bi";
import { Link, useHistory } from 'react-router-dom';
import aadhar from '../../Assets/icons/aadhar.png'
import bbmp from '../../Assets/icons/bbmp.png'
import bescom from '../../Assets/icons/bescom.png'
import passport from '../../Assets/icons/passport.png'
import transport from '../../Assets/icons/transport.png'
import 'rsuite/dist/styles/rsuite-default.css';
import { Dropdown } from 'rsuite';

const Navbar = () => {



    const [navServices, setNavServices] = useState([
        {id:1,title:"AADHAR", logo:aadhar},
        {id:2,title:"BBMP", logo:bbmp},
        {id:3,title:"PASSPORT", logo:passport},
        {id:4,title:"BESCOM", logo:bescom},
        {id:5,title:"TRANSPORT", logo:transport},
    ]);

    const history = useHistory();



    const [subNavServices, setSubNavServices] = useState([
        {id:1, name:"AADHAR - Change Name",service_id:1},
        {id:2, name:"AADHAR - Change Phone",service_id:1},
        {id:3, name:"AADHAR - Change Address",service_id:1},
        {id:4, name:"BBMP - Change Name",service_id:2},
        {id:5, name:"BBMP - Change Phone",service_id:2},
        {id:6, name:"BBMP - Change Address",service_id:2},
        {id:7, name:"PASSPORT - Change Name",service_id:3},
        {id:8, name:"PASSPORT - Change Phone",service_id:3},
        {id:9, name:"PASSPORT - Change Address",service_id:3},
        {id:10, name:"BESCOM - Change Name",service_id:4},
        {id:11, name:"BESCOM - Change Phone",service_id:4},
        {id:12, name:"BESCOM - Change Address",service_id:4},
        {id:13, name:"TRANSPORT - Change Name",service_id:5},
        {id:14, name:"TRANSPORT - Change Phone",service_id:5},
        {id:15, name:"TRANSPORT - Change Address",service_id:5},
    ]);

    
    let subServ = []
    let nonSubServ = []
    let obj = {}
    for (let i = 0; i < navServices.length; i++) {
        obj.id = navServices[i].id
        obj.title = navServices[i].title
        obj.logo = navServices[i].logo
        obj.price = navServices[i].price
        for (let j = 0; j < subNavServices.length; j++) {
            if (subNavServices[j].service_id === navServices[i].id) {
                nonSubServ.push(subNavServices[j])
            }
        }
        if (nonSubServ.length !== 0) {
            obj.sub_services = nonSubServ
            nonSubServ = [];
        } else {
            obj.sub_services = null
            nonSubServ = [];
        }
        subServ.push(obj);
        obj = {};

    }

    const user = null;
    const logoutHandler = () => {
        
    }
    



    return (
        <nav className="navBar">
            <Container>
                <div className="desktop__nav">
                    <div className="row">
                        <div className="dropdown__div">
                            <div className="row" style={{ justifyContent: "space-evenly" }}>
                                <div className="services_div">
                                    <div>



                                        <Dropdown className="dropdown__btn" title="Services" icon={<GoThreeBars style={{ color: "rgba(0, 160, 139, 1)" }} />} >
                                            
                                            {subServ.map(item => {
                                                if (item.sub_services != null) {
                                                   
                                                    return (<Dropdown.Menu title={item.title} key={item.id}>
                                                        {item.sub_services.map(innerElement => (
  
                                                               <Dropdown.Item eventKey="e-1" key={innerElement.id}> {innerElement.name}</Dropdown.Item>
                                                               
                                                            
                                                      ))}</Dropdown.Menu>)

                                                } else {
                                                    return (<Dropdown.Item eventKey="a" key={item.id}>{item.title}</Dropdown.Item>)
                                                }


                                            })}
                                        </Dropdown>


                                    </div>

                                </div>
                                <div className="location_div">

                                    <button><GoLocation style={{ color: "rgba(0, 160, 139, 1)" }} /> Bengaluru</button>
                                </div>
                            </div>
                        </div>
                        <div className="logo__div">
                            <div className="row" style={{ justifyContent: "center" }}>
                                <div className="logo">
                                    <Link to="/"><p><GrStackOverflow /> GServes</p></Link>
                                </div>
                            </div>
                        </div>
                        <div className="auth__div">
                            {user === null ?
                                <div className="row" style={{ justifyContent: "space-evenly" }}>

                                    <div className="register_div">
                                        <Link to="/register"><button><FaRegEdit style={{ color: "rgba(0, 160, 139, 1)" }} /> Register</button></Link>
                                    </div>
                                    <div className="login_div">
                                        <Link to="/login"><button><FaUserAlt style={{ color: "rgba(0, 160, 139, 1)" }} /> Login</button></Link>
                                    </div>
                                </div>
                                :
                                <div className="row" style={{ justifyContent: "space-evenly" }}>

                                    <div className="register_div">
                                        <Link to="/"><button><FaUserAlt style={{ color: "rgba(0, 160, 139, 1)" }} /> Profile</button></Link>
                                    </div>
                                    <div className="login_div">
                                        <button onClick={logoutHandler}><BiExit style={{ color: "rgba(0, 160, 139, 1)" }} /> Logout</button>
                                    </div>
                                </div>
                            }

                        </div>
                    </div>
                </div>
                <div className="mobile__nav">
                    <div className="navbar navbar-expand-lg navbar-light">
                        <Link className="navbar-brand" to="/"><div className="logo">
                            <p><GrStackOverflow /> GServes</p>
                        </div></Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <GoThreeBars style={{ color: "rgba(0, 160, 139, 1)" }} />
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">

                                <li className="nav-item">
                                    <div className="register_div nav-link">
                                        <Link to="/"><button><FaRegEdit style={{ color: "rgba(0, 160, 139, 1)" }} /> Register</button></Link>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <div className="login_div">
                                        <Link to="/"><button><FaUserAlt style={{ color: "rgba(0, 160, 139, 1)" }} /> Login</button></Link>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <div className="location_div">

                                        <button><GoLocation style={{ color: "rgba(0, 160, 139, 1)" }} /> Bengaluru</button>
                                    </div>
                                </li>

                                <li className="nav-item">
                                    <div className="services_div">
                                        <div>


                                            <div className="dropdown">
                                               
                                                <Dropdown className="dropdown__btn" title="Services" icon={<GoThreeBars style={{ color: "rgba(0, 160, 139, 1)" }} />} >
                                            
                                            {subServ.map(item => {
                                                if (item.sub_services != null) {
                                                   
                                                    return (<Dropdown.Menu title={item.title} key={item.id}>
                                                        {item.sub_services.map(innerElement => (
  
                                                               <Dropdown.Item eventKey="e-1" key={innerElement.id}> {innerElement.name}</Dropdown.Item>
                                                               
                                                            
                                                      ))}</Dropdown.Menu>)

                                                } else {
                                                    return (<Dropdown.Item eventKey="a" key={item.id}>{item.title}</Dropdown.Item>)
                                                }


                                            })}
                                        </Dropdown>
                                            </div>


                                        </div>

                                    </div>
                                </li>

                            </ul>

                        </div>
                    </div>
                </div>
            </Container>
        </nav>
    )
}

export default Navbar
