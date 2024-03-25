import React from "react";
import { Link } from "react-router-dom"
import Slider from "react-slick";
import Iframe from 'react-iframe';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/Ownership_Connect.scss"
import "../../styles/Store.scss"
import Animation from "../../Compoinent/Animation";
import CompoinentFour from "../../Compoinent/CompoinentFour";


class Store extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        }

    }
    componentDidMount() {
        this.setState({ active: true });
        const store = document.getElementById("store");
        if (store) {
            window.scrollTo({
                behavior: "smooth",
                top: store.offsetTop,
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
            <div id="store">
                <section className="ownership_connect" id="ownership_connect">
                    <div className="image__store">
                        <div className={this.state.active ? "back__link__box active1" : "back__link__box"}>
                            <Link to="/"> <span className="back__link">HOME |</span></Link><span className="back__link">STORE</span>
                        </div>
                        <div className="title__ownership__box1">
                            <p className={this.state.active ? "title__ownership__1 active3" : "title__ownership__1"} >LAMBORGHINI</p>
                            <p className={this.state.active ? "title__ownership__2 active1" : "title__ownership__2"} >STORE</p>
                            <p className={this.state.active ? "hexagon_ownership active2" : "hexagon_ownership"}>&gt;</p>
                        </div>
                    </div>
                </section>



                <CompoinentFour
                    title1="AUTOMOBILI LAMBORGHINI MUSEUM"
                    title2="DAYS CLOSED IN 2023"
                    discriber1="The fascinating history, iconic models and tours of the production lines inside the Automobili Lamborghini Museum reveal 60 years of innovation that are projecting Lamborghini into the future."
                    discriber11="The Automobili Lamborghini Museum offers an interactive experience, also provided by the new driving simulator that amplifies the emotions and discovery of the vehicles on display."
                    discriber12="Open every day"
                    discriber13="From October 1 to April 30, from 9:30 a.m. to 6 p.m. (last entrance at 5 p.m.)"
                    discriber14="From May 2 to September 30, from 9:30 a.m. to 7 p.m. (last entrance at 6 p.m.)"
                    discriber2="August: 15"
                    discriber21="September: 12 (early closing at 4 p.m.); 21 (opening delayed to 11 a.m.)"
                    discriber22="October: 26 (early closing at 3 p.m.)"
                    discriber23="December: 24 (early closing at 2 p.m.); 25; 31 (early closing at 2 p.m.)"

                    img1={require("../../assets/image/store/img2.jpg")}
                    img2={require("../../assets/image/store/img3.jpg")}
                    img3={require("../../assets/image/store/img4.jpg")}
                    img4={require("../../assets/image/store/img5.jpg")}


                />

                <CompoinentFour
                    title1="TOUR OF THE PRODUCTION LINES"
                    title2="PRIVATE EVENTS: AN EXCLUSIVE EXPERIENCE"
                    discriber1="From the historic entrance toward the future. Visiting the production lines is a unique journey to witness the birth of Lamborghini's super sports cars. From the brand new Revuelto V12 hybrid, whose production line comprises 15 stations, passing through the V10 line where the Huracán was born, and up to the Upholstery line. The guided tours starting from the Lamborghini Museum make the visit an unforgettable experience for discovering the company's most surprising and technological places."

                    discriber2="Our spaces were created to inspire, for sharing new ideas and for networking. Museo Automobili Lamborghini is the ideal place to organize evening events in an elegant setting. Its area has been renovated with a new approach, similar to that of an art gallery. The new Olimpo, overlooking Manifattura Lamborghini 4.0 – the technological Urus production line – is the perfect scenario for turning conferences and meetings into unique experiences.
                                For more information, write to: museumevents@lamborghini.com."

                    img1={require("../../assets/image/store/img6.jpg")}
                    img2={require("../../assets/image/store/img7.jpg")}
                    img3={require("../../assets/image/store/img8.jpg")}
                    img4={require("../../assets/image/store/img9.jpg")}


                />








                <section className="box_slider_store">
                    <Slider {...settings} className="slider_store">
                        <div className="box_image_ownership_connect_slider">
                            <img className="image_ownership_connect_slider" src={require("../../assets/image/store/img10.jpg")} alt="" />
                        </div>
                        <div className="box_image_ownership_connect_slider">
                            <img className="image_ownership_connect_slider" src={require("../../assets/image/store/slider1.jpg")} alt="" />
                        </div>
                        <div className="box_image_ownership_connect_slider">
                            <img className="image_ownership_connect_slider" src={require("../../assets/image/store/slider2.jpg")} alt="" />
                        </div>
                        <div className="box_image_ownership_connect_slider">
                            <img className="image_ownership_connect_slider" src={require("../../assets/image/store/slider3.jpg")} alt="" />
                        </div>
                        <div className="box_image_ownership_connect_slider">
                            <img className="image_ownership_connect_slider" src={require("../../assets/image/store/slider4.jpg")} alt="" />
                        </div>
                    </Slider>
                </section>
                <section className="box_map_store">
                    <div className="content_map_store">
                        <p className="title_map_store">CONTACTS</p>
                        <p className="dis_map_store">590, CMT8 Ward 11, District 3</p>
                        <p className="dis_map_store">(Ho Chi Minh City) - VIETNAM</p>
                        <p className="dis_map_store">Phone: +39 051 681 7611</p>
                    </div>
                    <div className="map_store">
                        <Iframe
                            url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d475.9685165400432!2d106.6663901830133!3d10.786567574531915!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed2392c44df%3A0xd2ecb62e0d050fe9!2zRlBUIEFwdGVjaCBIQ00gMSAtIEjhu4cgVGjhu5FuZyDEkMOgbyBU4bqhbyBM4bqtcCBUcsOsbmggVmnDqm4gUXXhu5FjIFThur8gKFNpbmNlIDE5OTkp!5e0!3m2!1svi!2s!4v1697181155295!5m2!1svi!2s"
                            width="700"
                            height="300"
                            className="map_local"
                            style={{ border: 0 }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </section>
                <Animation />

                <section className="info_store">
                    <p className="title_info_store">INFORMATION</p>
                    <div className="infor_store_content">
                        <div className="left_info_store">

                            <div className="box_info_store">
                                <p className="title_info_store_child">EDUCATIONAL VISITS</p>
                                <p className="dis_info_store_child">School and university groups must book in advance.</p>
                            </div>
                            <div className="box_info_store">
                                <p className="title_info_store_child">PICTURES AND VIDEO SHOOTING</p>
                                <p className="dis_info_store_child">Pictures and videos may be taken inside the Museum for private use only. No photography or video recording is allowed during the factory visit. Before the start of the tour, participants will be asked to leave cameras, cellphones, and all other equipment able to take photos and/or video recordings in the lockers provided.</p>
                            </div>
                            <div className="box_info_store">
                                <p className="title_info_store_child">ARCHITECTURAL BARRIERS</p>
                                <p className="dis_info_store_child">The Museum has no architectural barriers. Visits take place over two floors, and a lift is available for persons with limited mobility.</p>
                            </div>
                        </div>
                        <div className="right_info_store">
                            <div className="box_info_store">
                                <p className="title_info_store_child">RESTRICTIONS</p>
                                <p className="dis_info_store_child">Visitors are not permitted to touch the vehicles and materials on display, and it is not permitted to enter the vehicles or remove anything from the Museum. Eating is not allowed inside the Museum. Animals may not enter, with the exception of guide dogs for the blind. Visitors are asked to behave in a manner appropriate for a museum, showing respect to the staff and other visitors; this includes their choice of attire and tone of voice. Those accompanying children and minors are responsible for their behavior at all times. The use of cellular phones is permitted as long as care is taken not to disturb or inconvenience others.</p>
                            </div>
                            <div className="box_info_store">
                                <p className="title_info_store_child">REDUCED RATES</p>
                                <p className="dis_info_store_child">Documents certifying the right to reduced admission fees must be shown to staff on request.</p>
                            </div>
                        </div>
                    </div>

                </section>

            </div>
        )
    }
}
export default Store;