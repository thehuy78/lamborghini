import React from "react";
import { Link } from "react-router-dom"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../styles/Ownershipchild.scss"

import CompoinentLeft from "../../../Compoinent/CompoinentLeft";
import CompoinentRight from "../../../Compoinent/CompoinentRight";


import "../../../styles/Ownershipchild.scss"
import "../../../styles/MobilityProgram.scss"
import "../../../styles/CustomerApp.scss"



class CustomerApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        }

    }
    componentDidMount() {
        this.setState({ active: true });
        const ownership_connect = document.getElementById("ownership_connect");
        if (ownership_connect) {
            window.scrollTo({
                behavior: "smooth",
                top: ownership_connect.offsetTop,
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
            <div className="ownership_connect_container">
                <section className="ownership_connect" id="ownership_connect">
                    <div className="image__ownershipcustomer image__ownership_child">
                        <div className={this.state.active ? "back__link__box active1" : "back__link__box"}>
                            <Link to="/"> <span className="back__link">HOME |</span></Link><Link to="/ownership"> <span className="back__link">OWNERSHIP |</span></Link><span className="back__link">CUSTOMER</span>
                        </div>
                        <div className="title__ownership__box1 title_customer">
                            <p className={this.state.active ? "title__ownership__1 active3" : "title__ownership__1"} >LAMBORGHINI</p>
                            <p className={this.state.active ? "title__ownership__2 active1" : "title__ownership__2"} >UNICA CUSTOMER APP</p>
                            <p className={this.state.active ? "hexagon_ownership active2" : "hexagon_ownership"}>&gt;</p>
                        </div>
                    </div>
                </section>


                <CompoinentRight
                    title="CONNECT TO THE WORLD OF LAMBORGHINI"
                    discriber="Lamborghini UNICA is an exclusive app reserved for Lamborghini customers, enabling them to connect to the Sant'Agata Bolognese-based automaker at a simple tap of a finger.
                Customized and rich in contents, UNICA is an app that serves as a priceless guide to keeping constantly informed of the latest news on Lamborghini's range of products, track activities or lifestyle events and to receiving real-time updates on the production of one's newly purchased car and to easily contacting one's reference dealer."
                    img={require("../../../assets/image/ownership/customer/customer2.jpg")}
                />


                <section>
                    <div className="box_video_ownership_mobility_program">
                        <video
                            className="video__mobility"
                            // width="5000px"
                            // height="715px"
                            muted={true}
                            controls={true}
                            poster={require("../../../assets/image/ownership/connect/ownerconnect3.jpg")}
                        >
                            <source
                                src={require("../../../assets/video/model/revuelto_1.mp4")}
                                type="video/mp4"
                            />
                        </video>
                    </div>
                </section>


                <section className="ownership_customer_sec1">
                    <Slider {...settings} className="slider_ownership_customer_sec1">
                        <div className="box_image_customer_sec1">
                            <img className="image_customer_sec1" src={require("../../../assets/image/ownership/customer/customer3.jpg")} alt="" />
                            <p className="title_image_customer_sec1">REAL-TIME PRODUCTION UPDATES</p>
                        </div>
                        <div className="box_image_customer_sec1">
                            <img className="image_customer_sec1" src={require("../../../assets/image/ownership/customer/customerslide1.jpg")} alt="" />
                            <p className="title_image_customer_sec1">MY GARAGE</p>
                        </div>
                        <div className="box_image_customer_sec1">
                            <img className="image_customer_sec1" src={require("../../../assets/image/ownership/customer/customerslide2.jpg")} alt="" />
                            <p className="title_image_customer_sec1">CUSTOMER CARE AND ASSISTANCE</p>
                        </div>
                        <div className="box_image_customer_sec1">
                            <img className="image_customer_sec1" src={require("../../../assets/image/ownership/customer/customerslide3.jpg")} alt="" />
                            <p className="title_image_customer_sec1">A PREVIEW OF THE WORLD OF LAMBORGHINI</p>
                        </div>
                        <div className="box_image_customer_sec1">
                            <img className="image_customer_sec1" src={require("../../../assets/image/ownership/customer/customerslide4.jpg")} alt="" />
                            <p className="title_image_customer_sec1">A VIRTUAL DRIVE ON BOARD OF YOUR LAMBORGHINI</p>
                        </div>
                        <div className="box_image_customer_sec1">
                            <img className="image_customer_sec1" src={require("../../../assets/image/ownership/customer/customerslide5.jpg")} alt="" />
                            <p className="title_image_customer_sec1">ON TRACK WITH LAMBORGHINI SQUADRA CORSE</p>
                        </div>
                        <div className="box_image_customer_sec1">
                            <img className="image_customer_sec1" src={require("../../../assets/image/ownership/customer/customerslide6.jpg")} alt="" />
                            <p className="title_image_customer_sec1">LAMBORGHINI “MASTERPIECES” AT A TAP</p>
                        </div>
                        <div className="box_image_customer_sec1">
                            <img className="image_customer_sec1" src={require("../../../assets/image/ownership/customer/customerslide7.jpg")} alt="" />
                            <p className="title_image_customer_sec1">YOUR NEXT LAMBORGHINI</p>
                        </div>
                    </Slider>
                    <div className="box_content_customer_sec1">
                        <p className="title_customer_sec1">REAL-TIME PRODUCTION UPDATES</p>
                        <p className="dis_customer_sec1">It enables you to monitor the early production phases of your Lamborghini and receive information on the progress made in production, crowned with an exclusive photo of the car at the very last production step, before it leaves Sant'Agata Bolognese.</p>
                    </div>
                </section>

                <section className="ownership_customer_sec2">
                    <div className="image_ownership_customer_sec2_container">
                        <div className="box_image_ownership_customer_sec2">
                            <img className="image_ownership_customer_sec2 image1_ownership_customer_sec2" src={require("../../../assets/image/ownership/customer/customer4.jpg")} alt="" />
                        </div>
                        <div className="box_image_ownership_customer_sec2">
                            <img className="image_ownership_customer_sec2 image2_ownership_customer_sec2" src={require("../../../assets/image/ownership/customer/customer5.jpg")} alt="" />
                        </div>
                    </div>
                    <div className="content_ownership_customer_sec2">
                        <div className="box_content_ownership_customer_sec2">
                            <p className="title_contentownership_customer_sec2">
                                ACCESS A “UNIQUE” EXPERIENCE
                            </p>
                            <p className="dis_content_ownership_customer_sec2">To gain access to the exclusive functions of Lamborghini UNICA and enjoy all its benefits, you are required to apply for your access credentials by filling out a form. To submit the application, all you need is your VIN (Vehicle Identification Number) and your certificate of ownership. </p>
                            <div className="box_link_content_ownership_customer_sec2">
                                <p className="hexagon_customer">+</p>
                                <p className="link_content_ownership_customer_sec2">Ask for your access credentials</p>
                            </div>
                        </div>
                    </div>
                </section>



                <CompoinentLeft
                    title="REMOTELY MANAGE YOUR LAMBORGHINI"
                    discriber="Lamborghini UNICA enables users to access the remote services offered by Lamborghini Connect through an advanced connectivity system which gives the possibility of remotely controlling the status and conditions of one's Lamborghini at a simple tap of a finger."
                    img={require("../../../assets/image/ownership/customer/customer6.jpg")}
                />







            </div>
        )
    }

}
export default CustomerApp;