import React from "react";
import "../../../styles/OwnershipClassic.scss";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import CompoinentFour from "../../../Compoinent/CompoinentFour";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Classics extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false,
        }
    }
    componentDidMount() {
        this.setState({ active: true });
        const ownershipclassic = document.getElementById('ownershipclassic');
        if (ownershipclassic) {
            window.scrollTo({
                behavior: 'smooth',
                top: ownershipclassic.offsetTop,
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

            <div className="ownershipclassic__container" id="ownershipclassic">
                <section>
                    <div className="image__ownershipclassic">
                        <div className={this.state.active ? "back__link__box active1" : "back__link__box"}>
                            <Link to="/"> <span className="back__link">HOME |</span></Link> <Link to="/ownership"> <span className="back__link">OWNERSHIP |</span></Link><span className="back__link">CLASSICS</span>
                        </div>
                        <div className="title__ownership__box1 box_ownership_classic_backround">
                            <p className={this.state.active ? "title__ownership__1 active3" : "title__ownership__1"} >LAMBORGHINI</p>
                            <p className={this.state.active ? "title__ownership__2 ownership_classic_background active1" : "title__ownership__2 ownership_classic_background"} >POLO STORICO</p>
                            <p className={this.state.active ? "hexagon_ownership active2" : "hexagon_ownership"}>&gt;</p>
                        </div>
                    </div>
                </section>


                <section className="sec1_ownershipclassic">
                    <div className="box_image_sec1_ownershipclassic cl">
                        <img className="image_sec1_ownershipclassic cc" src={require("../../../assets/image/ownership/classic/classic1.jpg")} alt="" />
                    </div>
                    <div className="content_sec1_ownershipclassic">
                        <div className="box_content_sec1_ownershipclassic">
                            <p className="title_sec1_ownershipclassic">LAMBORGHINI POLO STORICO: PRESERVATION OF A GLORIOUS HERITAGE</p>
                            <p className="dis_sec2_ownershipclassic">Lamborghini Polo Storico is the center dedicated to classic Lamborghinis and the preservation of the historical heritage of the House of the Raging Bull.</p>
                            <p className="dis_sec2_ownershipclassic">Opened in Spring 2015 at the Sant'Agata Bolognese headquarters, Polo Storico is now a benchmark for Lamborghini owners all around the world. </p>
                            <p className="dis_sec2_ownershipclassic">Polo Storico's activities are focused on four main pillars: <b> Archive, Certification, Restoration and Original Spare Parts.</b></p>
                        </div>
                    </div>

                </section>




                <CompoinentFour
                    title1="ARCHIVE AND CERTIFICATION"
                    title2="RESTORATION AND ORIGINAL SPARE PARTS"
                    discriber1="The Polo Storico Archive contains all the information relating to the models manufactured in Sant’Agata Bolognese in the past, from the first sketches to the production files and the original technical drawings.
 Under the supervision of the Comitato dei Saggi (Experts Committee), Polo Storico also offers an exclusive Certification of Authenticity service that verifies the originality of each individual component. This service is only possible because of the detailed information available in the Polo Storico Archive."
                    discriber2="The Restoration of a Lamborghini is a complex endeavor that requires great skill, expertise and specialization. Lamborghini Polo Storico oversees the entire process, working in-house on the mechanics and collaborating with highly qualified and experienced specialists for the bodywork and interiors. Each step in the job is discussed with the customer and developed by Polo Storico experts."
                    img1={require("../../../assets/image/ownership/classic/classic2.jpg")}
                    img2={require("../../../assets/image/ownership/classic/classic3.jpg")}
                    img3={require("../../../assets/image/ownership/classic/classic4.jpg")}
                    img4={require("../../../assets/image/ownership/classic/classic5.jpg")}
                />


                <section className="sec2_ownershipclassic">
                    <div className="content_sec2_ownershipclassic">
                        <p className="title_sec2_ownershipclassic">EVENTS</p>
                        <p className="dis_sec2_ownershipclassic">Polo Storico also organizes events where owners can gather in breathtaking locations to drive and show their beloved cars in total safety and freedom. 50th Anniversary Tours, Auto Shows, Concours d’Elegance, and Track Shakedowns are just a few of the many activities organized for the Lamborghini Polo Storico community.</p>
                    </div>
                    <Slider {...settings} className="slider_sec2_ownershipclassic">
                        <div className="box_image_sec2_ownershipclassic">
                            <img className="image_sec2_ownershipclassic" src={require("../../../assets/image/ownership/classic/classicslider1.jpg")} alt="" />
                        </div>
                        <div className="box_image_sec2_ownershipclassic">
                            <img className="image_sec2_ownershipclassic" src={require("../../../assets/image/ownership/classic/classicslider2.jpg")} alt="" />
                        </div>
                        <div className="box_image_sec2_ownershipclassic">
                            <img className="image_sec2_ownershipclassic" src={require("../../../assets/image/ownership/classic/classicslider3.jpg")} alt="" />
                        </div>
                        <div className="box_image_sec2_ownershipclassic">
                            <img className="image_sec2_ownershipclassic" src={require("../../../assets/image/ownership/classic/classicslider4.jpg")} alt="" />
                        </div>
                        <div className="box_image_sec2_ownershipclassic">
                            <img className="image_sec2_ownershipclassic" src={require("../../../assets/image/ownership/classic/classicslider5.jpg")} alt="" />
                        </div>
                        <div className="box_image_sec2_ownershipclassic">
                            <img className="image_sec2_ownershipclassic" src={require("../../../assets/image/ownership/classic/classicslider6.jpg")} alt="" />
                        </div>
                        <div className="box_image_sec2_ownershipclassic">
                            <img className="image_sec2_ownershipclassic" src={require("../../../assets/image/ownership/classic/classicslider7.jpg")} alt="" />
                        </div>
                        <div className="box_image_sec2_ownershipclassic">
                            <img className="image_sec2_ownershipclassic" src={require("../../../assets/image/ownership/classic/classicslider8.jpg")} alt="" />
                        </div>
                        <div className="box_image_sec2_ownershipclassic">
                            <img className="image_sec2_ownershipclassic" src={require("../../../assets/image/ownership/classic/classicslider9.jpg")} alt="" />
                        </div>
                        <div className="box_image_sec2_ownershipclassic">
                            <img className="image_sec2_ownershipclassic" src={require("../../../assets/image/ownership/classic/classicslider10.jpg")} alt="" />
                        </div>
                        <div className="box_image_sec2_ownershipclassic">
                            <img className="image_sec2_ownershipclassic" src={require("../../../assets/image/ownership/classic/classicslider11.jpg")} alt="" />
                        </div>
                        <div className="box_image_sec2_ownershipclassic">
                            <img className="image_sec2_ownershipclassic" src={require("../../../assets/image/ownership/classic/classicslider12.jpg")} alt="" />
                        </div>
                        <div className="box_image_sec2_ownershipclassic">
                            <img className="image_sec2_ownershipclassic" src={require("../../../assets/image/ownership/classic/classicslider13.jpg")} alt="" />
                        </div>
                        <div className="box_image_sec2_ownershipclassic">
                            <img className="image_sec2_ownershipclassic" src={require("../../../assets/image/ownership/classic/classicslider14.jpg")} alt="" />
                        </div>
                        <div className="box_image_sec2_ownershipclassic">
                            <img className="image_sec2_ownershipclassic" src={require("../../../assets/image/ownership/classic/classicslider15.jpg")} alt="" />
                        </div>
                    </Slider>
                </section>

                <section className="sec1_ownershipclassic">
                    <div className="box_image_sec1_ownershipclassic">
                        <img className="image_sec1_ownershipclassic image_sec3_ownershipclassic" src={require("../../../assets/image/ownership/classic/classic6.jpg")} alt="" />
                    </div>
                    <div className="content_sec1_ownershipclassic">
                        <div className="box_content_sec1_ownershipclassic box_content_sec3_ownershipclassic">
                            <p className="title_sec1_ownershipclassic">CONTACTS</p>
                            <p className="dis_sec2_ownershipclassic">Via Modena, 12</p>
                            <p className="dis_sec2_ownershipclassic">40019 Sant'Agata Bolognese (Bo) - Italy</p>
                            <p className="dis_sec2_ownershipclassic">Phone: +39 051 2156282</p>
                        </div>
                    </div>

                </section>

                <section className="sec4_contact">
                    <div className="box_image_sec4_contact">
                        <img className="image_sec4_contact" src={require("../../../assets/image/ownership/classic/classic7.jpg")} alt="baner" />
                        <div className="content_sec4_contact">
                            <p className="title__sec4_contact">LAMBORGHINIL</p>
                            <p className="dis__sec4_contact">HISTORY</p></div>
                    </div>
                    <div className="box_image_sec4_contact">
                        <img className="image_sec4_contact" src={require("../../../assets/image/ownership/classic/classic8.jpg")} alt="baner" />
                        <div className="content_sec4_contact">
                            <p className="title__sec4_contact">LAMBORGHINIL</p>
                            <p className="dis__sec4_contact">SPARE PARTS</p></div>
                    </div>
                </section>
            </div>


        )
    }
}
export default Classics;