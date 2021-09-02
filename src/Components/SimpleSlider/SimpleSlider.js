import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrNext, GrPrevious } from "react-icons/gr";
import "./SimpleSlider.css"
import {useHistory} from 'react-router-dom'
import aadhar from '../../Assets/icons/aadhar.png'
import bbmp from '../../Assets/icons/bbmp.png'
import bescom from '../../Assets/icons/bescom.png'
import passport from '../../Assets/icons/passport.png'
import transport from '../../Assets/icons/transport.png'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <GrNext
            className={`${className} , service__slider__arrow`}
            style={{ ...style }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <GrPrevious
            className={`${className} , service__slider__arrow`}
            style={{ ...style }}
            onClick={onClick}
        />
    );
}


const SimpleSlider = () => {

    const settings = {
        dots: false,
        infinite: true,
        autoplay: false,
        speed: 2000,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

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

    
    const sliderMouseEnterHandler = (i) => {
        boxRef.current[i].style.background = 'rgba(0, 160, 139, 1)';
        boxRef.current[i].style.borderTopLeftRadius = '10px';
        boxRef.current[i].style.borderTopRightRadius = '10px';
        boxRef.current[i].style.paddingBottom = '15px'
        if(document.querySelector(`#service__slider__inner__div_hover_div${i}`) !== null){
            document.querySelector(`#service__slider__inner__div_hover_div${i}`).style.display = 'block';
            heightFunc(i)
        }
        
    }

    const sliderMouseLeaveHandler = (i) => {
        boxRef.current[i].style.background = 'transparent';
        boxRef.current[i].style.borderTopLeftRadius = '0px';
        boxRef.current[i].style.borderTopRightRadius = '0px';
        boxRef.current[i].style.paddingBottom = '0px'
        if(document.querySelector(`#service__slider__inner__div_hover_div${i}`) !== null){
            document.querySelector(`#service__slider__inner__div_hover_div${i}`).style.display = 'none';
        }
    }

    const boxRef = React.useRef([]);

    const heightFunc = (i) => {
        let height = document.querySelector(`#service__slider__inner__div_hover_div${i}`).offsetHeight-15
        document.querySelector(`#service__slider__inner__div_hover_div${i}`).style.bottom = '-' + height + 'px';
    }

    const sub_service_page =(value) => {
        history.push(`/service`)
    }


    return (
        <div className="service__slider__outer__div" style={{ position: 'relative' }}>

            <Slider {...settings}>

                {navServices.map((item, i) => {
                    return (<div key={item.id} ref={el => boxRef.current[i] = el} onMouseEnter={() => sliderMouseEnterHandler(i)} onMouseLeave={() => sliderMouseLeaveHandler(i)}>
                        <div className="service__slider__inner__div">
                            <div className="service__slider__image__outer">

                                <div className="service__slider__image__div">
                                    <img src={item.logo} alt="" />
                                </div>

                            </div>
                            <div className="service__slider__text">
                                {item.title}
                            </div>
                        </div>

                    </div>)
                })}

            </Slider>
            

            {
                subServ.map((item, i) => {
                    if (item.sub_services != null) {

                        return (<div key={item.id} className="service__slider__inner__div_hover_div" id={`service__slider__inner__div_hover_div${i}`} style={{ display: "none" }} onMouseEnter={() => sliderMouseEnterHandler(i)} onMouseLeave={() => sliderMouseLeaveHandler(i)}>
                            <div className="row">
                            {item.sub_services.map(innerElement => (

                                <div key={innerElement.id} className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
                                    <div className="service__slider__inner__div_hover_div_text">
                                        <p onClick={()=>sub_service_page(innerElement.id)}> {innerElement.name}</p>
                                    </div>
                                </div>


                            ))}
                            </div>
                            </div>)

                    } else {
                        return (null)
                    }


                })
            }

        </div>
    );

}


export default SimpleSlider;
