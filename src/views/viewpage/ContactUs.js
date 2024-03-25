import React from "react";
import "../../styles/ContactUs.scss";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Member from "../../Compoinent/Member";
import Animation from "../../Compoinent/Animation";
import CompoinentCompany from "../../Compoinent/CompoinentCompany";

class ContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            hide: false
        };
    }
    componentDidMount() {
        this.setState({ active: true });
        const contact = document.getElementById("contact");
        if (contact) {
            window.scrollTo({
                behavior: "smooth",
                top: contact.offsetTop,
            });
        }
    }
    toglehidemember = () => {
        this.setState((prevState) => ({
            hide: !prevState.hide
        }))
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
            <div className="contact" id="contact">
                <section>
                    <div className="image__contact">
                        <div
                            className={
                                this.state.active
                                    ? "back__link__box active1"
                                    : "back__link__box"
                            }
                        >
                            <Link to="/">
                                {" "}
                                <span className="back__link">HOME |</span>
                            </Link>
                            <span className="back__link">CONTACT US</span>
                        </div>
                        <div className="title__contact__box1">
                            <p
                                className={
                                    this.state.active
                                        ? "title__contact__1 active3"
                                        : "title__contact__1"
                                }
                            >
                                CONTACT US
                            </p>
                            <p
                                className={
                                    this.state.active
                                        ? "title__contact__2 active1"
                                        : "title__contact__2"
                                }
                            >
                                CUSTOMER CARE
                            </p>
                            <p
                                className={
                                    this.state.active
                                        ? "hexagon_contact active2"
                                        : "hexagon_contact"
                                }
                            >
                                &gt;
                            </p>
                        </div>
                    </div>
                </section>
                <Animation />
                <section className="sec1_contact">
                    <div className="box__sec1_contact">
                        <div className="box__image__sec1_contact">
                            <img className="image_sec1_contact" src={require("../../assets/image/contact/contact2.jpg")} alt="baner" />
                        </div>

                        <div className="content_sec1_contact">
                            <div className="box_content_sec_1_contact">
                                <p className="title_sec1_contact">LAMBORGHINI
                                    CUSTOMER CARE </p>
                                <p className="discriber_sec1_contact">Automobili Lamborghini is pleased to assist you with an attentive multi-channel service:
                                    You can ask your questions to the Lamborghini Assistant, who will guide you through the Lamborghini world.
                                    If our Assistant is unable to find what you are looking for, please scroll down and get in touch with our dedicated Customer Contact Center via phone or contact form.</p>

                                <div className="link_sec1_contact"><p
                                    className="hexagon_contact hexagon_contact_sec"
                                >
                                    +
                                </p>
                                    <p className="link_sec1_contact_mobile">Ask a Question</p></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="sec2_contact">
                    <p className="title_sec2_contact color_change">MAKE A CALL</p>
                    <div className="box_sec2_contact">
                        <div className="sec2_contact__content">
                            <p className="title_sec2_contact_content">INTERNATIONAL</p>
                            <div className="discriber_sec2_contact_content">
                                <p>PHONE: +39 051 9597282</p>
                            </div>
                        </div>
                        <div className="sec2_contact__content">
                            <p className="title_sec2_contact_content">NORTH AMERICA</p>
                            <div className="discriber_sec2_contact_content">
                                <p>PHONE: +1 866 681 6276</p>
                            </div>
                        </div>
                        <div className="sec2_contact__content">
                            <p className="title_sec2_contact_content">VIETNAM</p>
                            <div className="discriber_sec2_contact_content">
                                <p>PHONE: +84 09090909</p>
                                <p>Monday to Sunday:
                                    9:00am to 7:00pm</p>
                            </div>
                        </div>
                        <div className="sec2_contact__content">
                            <p className="title_sec2_contact_content">CHINA</p>
                            <div className="discriber_sec2_contact_content">
                                <p>PHONE: +86 4001166606</p>
                                <p>Monday to Friday:
                                    9:00am to 6:00pm</p>
                            </div>
                        </div>
                        <div className="sec2_contact__content">
                            <p className="title_sec2_contact_content">JAPAN</p>
                            <div className="discriber_sec2_contact_content">
                                <p>PHONE: +81 (0)120 988 889</p>
                                <p>Monday to Sunday:
                                    9:00am to 7:00pm
                                </p>
                            </div>
                        </div>
                        <div className="sec2_contact__content">
                            <p className="title_sec2_contact_content">SEAP</p>
                            <div className="discriber_sec2_contact_content">
                                <p>PHONE: +65 6566 8888</p>
                                <p>7:00am to 7:00pm
                                </p>
                            </div>
                        </div>
                        <Slider {...settings} className="sec2_contact_content_box__mobile">
                            <div className="sec2_contact__content">
                                <p className="title_sec2_contact_content">INTERNATIONAL</p>
                                <div className="discriber_sec2_contact_content">
                                    <p>PHONE: +39 051 9597282</p>
                                </div>
                            </div>
                            <div className="sec2_contact__content">
                                <p className="title_sec2_contact_content">NORTH AMERICA</p>
                                <div className="discriber_sec2_contact_content">
                                    <p>PHONE: +1 866 681 6276</p>
                                </div>
                            </div>
                            <div className="sec2_contact__content">
                                <p className="title_sec2_contact_content">VIETNAM</p>
                                <div className="discriber_sec2_contact_content">
                                    <p>PHONE: +84 09090909</p>
                                    <p>Monday to Sunday:
                                        9:00am to 7:00pm</p>
                                </div>
                            </div>
                            <div className="sec2_contact__content">
                                <p className="title_sec2_contact_content">CHINA</p>
                                <div className="discriber_sec2_contact_content">
                                    <p>PHONE: +86 4001166606</p>
                                    <p>Monday to Friday:
                                        9:00am to 6:00pm</p>
                                </div>
                            </div>
                            <div className="sec2_contact__content">
                                <p className="title_sec2_contact_content">JAPAN</p>
                                <div className="discriber_sec2_contact_content">
                                    <p>PHONE: +81 (0)120 988 889</p>
                                    <p>Monday to Sunday:
                                        9:00am to 7:00pm
                                    </p>
                                </div>
                            </div>
                            <div className="sec2_contact__content">
                                <p className="title_sec2_contact_content">SEAP</p>
                                <div className="discriber_sec2_contact_content">
                                    <p>PHONE: +65 6566 8888</p>
                                    <p>7:00am to 7:00pm
                                    </p>
                                </div>
                            </div>
                        </Slider>

                    </div>
                </section>
                <section className="sec3_contact">
                    <div className="box__sec3_contact">
                        <div className="box__image__sec3_contact box__image__sec3_contact">
                            <img className="image_sec3_contact" src={require("../../assets/image/contact/contact3.jpg")} alt="baner" />
                        </div>

                        <div className="content_sec3_contact">
                            <div className="box_content_sec3_contact">
                                <p className="title_sec3_contact">SEND A MESSAGE </p>
                                <p className="discriber_sec3_contact">In this section, you can write to us for any request or support needed. If you are a Lamborghini Owner, register on the Unica App in order to keep in touch and stay updated on all Lamborghini news, events and exclusive communications. Fill in the form of your interest and we will be glad to manage your request at the soonest:</p>
                                <div className="link_sec3_contact">
                                    <p className="hexagon_contact hexagon_contact_sec">+</p>
                                    <p className="link_sec3_contact_mobile">SEND A MESSAGE</p>
                                </div>
                                <div className="link_sec3_contact">
                                    <p className="hexagon_contact hexagon_contact_sec">+</p>
                                    <p className="link_sec3_contact_mobile">REGISTER ACCOUNT</p>
                                </div>
                                <div className="link_sec3_contact" onClick={this.toglehidemember}>
                                    <p className="hexagon_contact hexagon_contact_sec">{this.state.hide ? "x" : "+"}</p>
                                    <p className="link_sec3_contact_mobile">CONTACT MEMBER</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <div className={this.state.hide ? "render__sec3_contact show_member_contactus" : "render__sec3_contact"}>
                    <p className="close" onClick={this.toglehidemember}>X</p>
                    <div className="render_sec3_contact_member">
                        <Member />
                    </div>
                </div>

                <CompoinentCompany
                    title1="LAMBORGHINIL"
                    discriber1="MODE"
                    img1={require("../../assets/image/contact/contact4.jpg")}
                    title2="LAMBORGHINIL"
                    discriber2="POLO STORICO"
                    img2={require("../../assets/image/contact/contact5.jpg")}
                />


            </div>
        );
    }
}
export default ContactUs;
