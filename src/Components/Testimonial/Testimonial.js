import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrNext, GrPrevious } from "react-icons/gr";
import "./Testimonial.css"
import testimonialimg from '../../Assets/icons/testimonial.png'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <GrNext
            className={`${className} , slick__next`}
            style={{ ...style }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <GrPrevious
            className={`${className} , slick__prev`}
            style={{ ...style }}
            onClick={onClick}
        />
    );
}



const Testimonial = () => {

    const settings = {
        dots: false,
        infinite: true,
        autoplay: false,
        speed: 2000,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
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


    const [testimonial, setTestimonial] = useState([
        {id:1,name:"Sunil",description:"Happy with the service", image:"../Assets/icons/testimonial.png"},
        {id:2,name:"Chandan",description:"Happy with the service", image:"../Assets/icons/testimonial.png"},
        {id:3,name:"Manoj",description:"Happy with the service", image:"../Assets/icons/testimonial.png"},
        {id:4,name:"Dilip",description:"Happy with the service", image:"../Assets/icons/testimonial.png"},
        {id:5,name:"Shankar",description:"Happy with the service", image:"../Assets/icons/testimonial.png"},
    ]);

    return (
        <div className="testimonial__outer__div">
            <Container>

                <div className="testimonial__headeing">
                    Testimonials
                </div>

                <div className="testimonial__slider">
                    <Slider {...settings}>

                        {testimonial.map((item) => {
                            return (
                                <div key={item.id}>
                                    <div className="testimonial__div">
                                        <div className="testimonial__image">
                                            <img src={item.image} alt="" />
                                        </div>
                                        <div className="testimonial__comment">
                                            <p className="comment">{item.description}</p>
                                            <p className="name">{item.name}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                        

                    </Slider>
                </div>

            </Container>
        </div>
    )
}

export default Testimonial


