import React from "react";

import "../styles/Modeldetail.scss";
import "../styles/ModeldetailMobile.scss";
import Slider from "react-slick";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class SliderEngine extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <>
                <section>
                    <div className="sec15__product__detail">
                        <Slider {...settings} className="sec15__product__detail__container">
                            <div className="box_image_sec14_product__detail">
                                <img
                                    className="image_sec14_product__detail"
                                    src={require("../assets/image/product__detail/revuelto/m1.jpg")}
                                    alt="baner"
                                />
                                <p className="dis__image_sec14_product__detail">MONOCOQUE</p>
                            </div>
                            <div className="box_image_sec14_product__detail">
                                <img
                                    className="image_sec14_product__detail"
                                    src={require("../assets/image/product__detail/revuelto/m2.jpg")}
                                    alt="baner"
                                />
                                <p className="dis__image_sec14_product__detail">ENGINE</p>
                            </div>
                            <div className="box_image_sec14_product__detail">
                                <img
                                    className="image_sec14_product__detail"
                                    src={require("../assets/image/product__detail/revuelto/m3.jpg")}
                                    alt="baner"
                                />
                                <p className="dis__image_sec14_product__detail">GEARBOX</p>
                            </div>
                            <div className="box_image_sec14_product__detail">
                                <img
                                    className="image_sec14_product__detail"
                                    src={require("../assets/image/product__detail/revuelto/m4.jpg")}
                                    alt="baner"
                                />
                                <p className="dis__image_sec14_product__detail">DRIVING MODES</p>
                            </div>
                            <div className="box_image_sec14_product__detail">
                                <img
                                    className="image_sec14_product__detail"
                                    src={require("../assets/image/product__detail/revuelto/m5.png")}
                                    alt="baner"
                                />
                                <p className="dis__image_sec14_product__detail">AERODYNAMICS</p>
                            </div>
                            <div className="box_image_sec14_product__detail">
                                <img
                                    className="image_sec14_product__detail"
                                    src={require("../assets/image/product__detail/revuelto/m6.jpg")}
                                    alt="baner"
                                />
                                <p className="dis__image_sec14_product__detail">LDVI 2.0</p>
                            </div>
                        </Slider>
                        <div className="sec15__product__detail__content">
                            <p className="sec15__product__detail__content__title1">
                                FEATURE HIGHLIGHTS
                            </p>
                            <p className="sec15__product__detail__content__title2">
                                AERODYNAMICS
                            </p>
                            <p className="sec15__product__detail__content__dis">
                                The Revuelto presents a shifted aerodynamics paradigm based on
                                four newly defined pillars.
                            </p>

                        </div>
                    </div>

                </section>
            </>
        )
    }
}
export default SliderEngine;