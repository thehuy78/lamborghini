import React from "react";
import { Link } from "react-router-dom"
import "../../../styles/Motorsportchild.scss"
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CompoinentRight from "../../../Compoinent/CompoinentRight";
import CompoinentLeft from "../../../Compoinent/CompoinentLeft";


export default class MotorsportEsports extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
    }
    componentDidMount() {
        this.setState({ active: true });
        const motorsport = document.getElementById("motorsport");
        if (motorsport) {
            window.scrollTo({
                behavior: "smooth",
                top: motorsport.offsetTop,
            });
        }
    }
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (

            <div className="motorsport" id="motorsport">
                <section>
                    <div className="image__motorsportesports image__motorsport_child">

                        <div className={this.state.active ? "back__link__box active1" : "back__link__box"}>
                            <Link to="/"> <span className="back__link">HOME |</span></Link><Link to="/"> <span className="back__link">MOTORSPORT |</span></Link><span className="back__link">ESPORTS</span>
                        </div>

                        <div className="title__ownership__box1">
                            <p className={this.state.active ? "title__ownership__1 active3" : "title__ownership__1"} >LAMBORGHINI</p>
                            <p className={this.state.active ? "title__ownership__2 active1" : "title__ownership__2"} >ESPORTS</p>
                            <p className={this.state.active ? "hexagon_ownership active2" : "hexagon_ownership"}>&gt;</p>
                        </div>
                    </div>
                </section>

                <CompoinentLeft title="THE REAL RACE"
                    discriber="The fourth edition of “The Real Race” - Lamborghini Super Trofeo Esports is finally off to a start! The drivers will compete in Competition Racing Setup with the Huracán Super Trofeo EVO2, in a thrilling championship around the world that will land in Europe, Asia and America. Online and on-site stages will decide the best drivers, one of whom will be the next Lamborghini number one driver. Do you think you are up to the challenge?"
                    img={require("../../../assets/image/motorsport/esports/e1.jpg")}
                />

                <CompoinentRight title="ESPORTS TEAM"
                    discriber="Sometimes dreams become reality. Thanks to The Real Race, David Tonizza, Luca Losio and Danilo Santoro have become official drivers of the Automobili Lamborghini Esports team. Together they will face up to the top drivers all over the world in the official races to win the most coveted sim racing challenge. Speed, courage and determination have been rewarded: because everything is possible. Driving humans beyond"
                    img={require("../../../assets/image/motorsport/esports/e2.jpg")}
                />


                <section className="sec14__product__detail">
                    <Slider {...settings} className="slider__sec14_product_detail">
                        <div className="box_image_sec14_product__detail">
                            <img
                                className="image_sec14_product__detail"
                                src={require("../../../assets/image/motorsport/esports//s1.jpg")}
                                alt="baner"
                            />
                        </div>

                        <div className="box_image_sec14_product__detail">
                            <img
                                className="image_sec14_product__detail"
                                src={require("../../../assets/image/motorsport/esports//s2.jpg")}
                                alt="baner"
                            />
                        </div>

                        <div className="box_image_sec14_product__detail">
                            <img
                                className="image_sec14_product__detail"
                                src={require("../../../assets/image/motorsport/esports//s3.jpg")}
                                alt="baner"
                            />
                        </div>
                        <div className="box_image_sec14_product__detail">
                            <img
                                className="image_sec14_product__detail"
                                src={require("../../../assets/image/motorsport/esports//s4.jpg")}
                                alt="baner"
                            />
                        </div>
                        <div className="box_image_sec14_product__detail">
                            <img
                                className="image_sec14_product__detail"
                                src={require("../../../assets/image/motorsport/esports//s5.jpg")}
                                alt="baner"
                            />
                        </div>
                        <div className="box_image_sec14_product__detail">
                            <img
                                className="image_sec14_product__detail"
                                src={require("../../../assets/image/motorsport/esports//s6.jpg")}
                                alt="baner"
                            />
                        </div>
                    </Slider>
                </section>
            </div>

        )
    }
}