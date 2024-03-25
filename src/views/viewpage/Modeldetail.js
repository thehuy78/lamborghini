import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Modeldetail.scss";
import "../../styles/ModeldetailMobile.scss";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Modeldetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      isImageVisible: false,
      isPlaying: false,
      isTableVisible: false,
      isTable1Visible: false,
      isTable2Visible: false,
      windowWidth: window.innerWidth,
      imageUrl: require("../../assets/image/product__detail/revuelto/im3.jpg"),
    };
    this.audioUrl = require("../../assets/audio/revuelto.mp3");
    this.imageUrl = require("../../assets/audio/revuelto.mp3");
    this.audioRef = React.createRef();
  }

  componentDidMount() {
    this.setState({ active: true });
    const productdetail = document.getElementById("product__detail");
    if (productdetail) {
      window.scrollTo({
        behavior: "smooth",
        top: productdetail.offsetTop,
      });
    }
    const audio = this.audioRef.current;
    audio.addEventListener("ended", this.audioend);
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }
  audioend = () => {
    this.setState({ isPlaying: false });
  };

  clickaudio = () => {
    const audio = this.audioRef.current;
    if (this.state.isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    this.setState({ isPlaying: !this.state.isPlaying });
  };
  handleResize = () => {
    this.setState({ windowWidth: window.innerWidth }, () => {
      if (this.state.windowWidth < 1024) {
        this.setState({
          imageUrl: require("../../assets/image/product__detail/revuelto/im5.jpg"),
        });
      } else {
        this.setState({
          imageUrl: require("../../assets/image/product__detail/revuelto/im3.jpg"),
        });
      }
    });
  };

  toggle1 = () => {
    this.setState((prevState) => ({
      isImageVisible: !prevState.isImageVisible,
    }));
  };
  toggle2 = () => {
    this.setState({ isTableVisible: !this.state.isTableVisible });
  };
  toggle3 = () => {
    this.setState({ isTable1Visible: !this.state.isTable1Visible });
  };
  toggle4 = () => {
    this.setState({ isTable2Visible: !this.state.isTable2Visible });
  };
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <main className="product__detail">
        <div className="video-container" id="product__detail">
          <video
            id="video__model__detail"
            className="video-background"
            autoPlay
            muted
            loop
            playsInline
            webkit-playsinline
            preload="metadata"
          >
            <source
              src={require("../../assets/video/model/revuelto1.mp4")}
              type="video/mp4"
            />
          </video>

          <div
            className={
              this.state.active ? "back__link__box active1" : "back__link__box"
            }
          >
            <Link to="/">
              {" "}
              <span className="back__link">HOME |</span>
            </Link>
            <Link to="/">
              <span className="back__link">MODELS |</span>
            </Link>
            <span className="back__link">REVUELTO</span>
          </div>
          <div className="title__product__detail__box1">
            <p
              className={
                this.state.active
                  ? "title__product__detail__1 active4"
                  : "title__product__detail__1"
              }
            >
              REVUELTO
            </p>
            <p
              className={
                this.state.active
                  ? "title__product__detail__2 active1"
                  : "title__product__detail__2"
              }
            >
              FROM NOW ON
            </p>
            <p
              className={
                this.state.active
                  ? "hexagon_1 active3_product__detail"
                  : "hexagon_1"
              }
              onClick={this.scrollToElement}
            >
              &gt;
            </p>
          </div>
          <div className="title__product__detail__box2">
            <div
              className={
                this.state.active
                  ? "title__product__detail__box2__2 active2"
                  : "title__product__detail__box2__2"
              }
            >
              <p className="title__product__detail__3_box1">
                <p className="product__detail__title__dis1">
                  POWER (combined ICE+EE)
                </p>
                <p className="product__detail__title__dis2">1015 CV</p>
              </p>
              <p className="title__product__detail__3_box1">
                <p className="product__detail__title__dis1">MAX. SPEED</p>
                <p className="product__detail__title__dis2">&gt;350 km/h</p>
              </p>
              <p className="title__product__detail__3_box1">
                <p className="product__detail__title__dis1">0-100 km/h</p>
                <p className="product__detail__title__dis2">2.5 s</p>
              </p>
            </div>
            <div className="title__product__detail__box2__1">
              <p
                className={
                  this.state.active
                    ? "title__product__detail__3 active2"
                    : "title__product__detail__3"
                }
              >
                MODELS OVERVIEW
              </p>
              <p
                className={
                  this.state.active
                    ? "title__product__detail__4 active2"
                    : "title__product__detail__4"
                }
              >
                All Lamborghini Models
              </p>
            </div>
          </div>
        </div>

        <section className="sec1__product__detail">
          <div className="box1__sec1__product__detail">
            <img
              className="image__sec1__product__detail"
              src={require("../../assets/image/product__detail/revuelto/im1.jpg")}
              alt="baner"
            />
          </div>
          <div className="box2__sec1__product__detail">
            <p className="title__sec1__product__detail title__mobile__modeldetail">
              AUGMENTED REALITY
            </p>
            <p className="dis__sec1__product__detail dis__mobile__modeldetail">
              Frame the QR code with your smartphone and turn on the Lamborghini
              Augmented Reality experience.
            </p>
          </div>
        </section>

        <section className="sec2__product__detail">
          <div className="box1__sec2__product__detail">
            <iframe
              className="video__sec2__product__detail"
              width="2000px"
              height=""
              src="https://www.youtube.com/embed/qZdjdfochkI"
              title="Lamborghini Revuelto: track testing by factory driver Andrea Caldarelli"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </section>

        <section>
          <div className="sec3__product__detail">
            <div className="sec3__product__detail__box1">
              <img
                className="sec3__product__detail__image"
                src={require("../../assets/image/product__detail/revuelto/im2.jpg")}
                alt="baner"
              />
            </div>
            <div className="sec3__product__detail__box2">
              <div className="sec3__product__detail__box2__content">
                <p className="sec3__product__detail__title title__mobile__modeldetail">
                  OVERVIEW
                </p>
                <p className="sec3__product__detail__dis dis__mobile__modeldetail">
                  Just before the 60th anniversary of the marque, Lamborghini
                  unveiled Revuelto, the first HPEV (High Performance
                  Electrified Vehicle) hybrid super sports car. With the
                  Revuelto, Lamborghini has established a new benchmark in
                  performance, on-board technology, and driving pleasure. The
                  ultimate thrill provided by the Revuelto is reached thanks to
                  a powertrain that delivers 1015 CV total, combining the power
                  of a brand-new 12-cylinder internal combustion engine with
                  three high-density electric motors and a groundbreaking
                  transversal dual clutch e-gearbox. The power of hybridization
                  is harnessed to take performance and driving emotions to an
                  unprecedented level. Availability of the Lamborghini models
                  may vary depending on the country. For more information,
                  contact your local dealer.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="sec5__product__detail">
          <div className="box__sec5__product__detail">
            <div className="box__image__sec5__product__detail">
              <img
                className="image__sec5__product__detail"
                src={this.state.imageUrl}
                alt="baner"
              />
            </div>
            <div className="box__sec5__product__detail_content">
              <p className="sec5__product__detail_title title__mobile__modeldetail">
                EXTERIOR
              </p>
              <p className="sec5_product__detail_dis dis__mobile__modeldetail">
                The Revuelto honors the Lamborghini tradition and ushers in a
                new era even in its exterior design. While the car's silhouette
                follows the iconic single center line, the sharply sculpted
                lines and smooth negative radiuses create a high-tech shape that
                puts the Revuelto unmistakably in the new generation of
                Lamborghini supercars. The iconic V12 is celebrated by being on
                full display in the rear.
              </p>
              <Link>
                <p className="link__sec5__motorsport">EXTERIOR DESIGN VIEW</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="sec6_product_detail">
          <div className="box1_sec6_product_detail">
            <div className="box1_image_sec6_product_detail">
              <img
                className="immage1__sec6_product_detail"
                src={require("../../assets/image/product__detail/revuelto/im4.jpg")}
                alt="baner"
              />
            </div>
            <div className="box2_image_sec6_product_detail">
              <img
                className="immage2__sec6_product_detail"
                src={require("../../assets/image/product__detail/revuelto/im5.jpg")}
                alt="baner"
              />
            </div>
          </div>
          <div className="box2_sec6_product_detail">
            <div className="box3_image_sec6_product_detail">
              <img
                className="immage3__sec6_product_detail"
                src={require("../../assets/image/product__detail/revuelto/im6.jpg")}
                alt="baner"
              />
            </div>
            <div className="box4_image_sec6_product__detail">
              <div className="box_content_sec6_product__detail">
                <p className="title__sec6__product__detail title__mobile__modeldetail">
                  INTERIOR
                </p>
                <p className="dis__sec6__product__detail dis__mobile__modeldetail">
                  The interior of the Revuelto brings the “Feel Like a Pilot”
                  concept to its utmost expression: simple volumes, symmetry,
                  and a driver-focused approach make the cockpit an empowering
                  station for the driver. The futuristic environment creates a
                  seamless connection between driver and machine, while
                  exclusive hexagon-shaped elements fulfill the dual mission of
                  evoking past models and highlighting brand-new functional
                  features.
                </p>
                <p className="link__sec6__motor_sport">INTERIOR DESIGN VIEW</p>
              </div>
            </div>
          </div>
        </section>

        <section className="sec7_product_detail">
          <div className="box1_sec7_product_detail">
            <p className="box_sec7_product_detail_title title__mobile__modeldetail">
              FEEL THE ENGINE
            </p>
            <p className="box_sec7_product_detail_dis dis__mobile__modeldetail">
              Listen to the all-encompassing sound of hybridization technology:
              the unmistakable roar of the V12 aspirated engine coupled with
              powerful electric motors. Let yourself be swept away by the
              strength of the new Lamborghini sound.
            </p>
            <div className="box1_sec7_product_detail_content">
              <div className="box_img_sec7_product_detail">
                <img
                  className="image__sec7_product_detail"
                  src={require("../../assets/image/product__detail/revuelto/headphones.JPG")}
                  alt="baner"
                />
              </div>
              <p className="title__image__sec7_product_detail dis__mobile__modeldetail">
                Use headphones or earphones for an 8D sound experience.
              </p>
            </div>
          </div>
          <div className="box1__image__sec8_product_detail__mobile">
            <img
              className="image1__sec8_product_detail"
              src={require("../../assets/image/product__detail/audioimage.png")}
              alt="baner"
            />
            <audio ref={this.audioRef} src={this.audioUrl}></audio>
            <i
              className={
                this.state.isPlaying
                  ? "fa-solid icon__sec8__product_detail fa-pause"
                  : "fa-solid icon__sec8__product_detail fa-play"
              }
              onClick={this.clickaudio}
            ></i>
          </div>
          <div className="box2_sec7_product_detail">
            <p className="box_sec7_product_detail_title title__mobile__modeldetail">
              CENTRO STILE
            </p>
            <p className="box_sec7_product_detail_dis dis__mobile__modeldetail">
              The Revuelto combines classic Lamborghini proportions with strong,
              sculpted lines that promise a new future. Explore a silhouette
              that embodies confidence, power, strength, and groundbreaking
              aerodynamics.
            </p>
          </div>
        </section>

        <section>
          <div className="sec8_product_detail">
            <div className="box__sec8_product_detail">
              <div className="box1__image__sec8_product_detail">
                <img
                  className="image1__sec8_product_detail"
                  src={require("../../assets/image/product__detail/audioimage.png")}
                  alt="baner"
                />
                <audio ref={this.audioRef} src={this.audioUrl}></audio>
                <i
                  className={
                    this.state.isPlaying
                      ? "fa-solid icon__sec8__product_detail fa-pause"
                      : "fa-solid icon__sec8__product_detail fa-play"
                  }
                  onClick={this.clickaudio}
                ></i>
              </div>
              <div className="box2__image__sec8_product_detail">
                <img
                  className="image2__sec8_product_detail"
                  src={require("../../assets/image/product__detail/revuelto/im7.jpg")}
                  alt="baner"
                />
              </div>
            </div>
            <div className="click__sec8_showhide">
              <div className="box_click__sec8__show" onClick={this.toggle1}>
                <p className="hexagon__sec8_prodcut_detail">
                  {this.state.isImageVisible ? "X" : "+"}
                </p>
                <p className="dis__mobile__modeldetail dis__mobile__modeldetail__click">
                  Lamborghini Centro Stile Design
                </p>
              </div>
              {this.state.isImageVisible && (
                <div className="box__image__src8_showhide">
                  <p
                    className="hexagon__sec8_prodcut_detail"
                    onClick={this.toggle1}
                  >
                    x
                  </p>
                  <img
                    className="image__src8_showhide"
                    src={require("../../assets/image/product__detail/revuelto/im7.jpg")}
                    alt="baner"
                  />
                  <img
                    className="image__src8_showhide"
                    src={require("../../assets/image/product__detail/revuelto/im8.jpg")}
                    alt="baner"
                  />
                  <img
                    className="image__src8_showhide"
                    src={require("../../assets/image/product__detail/revuelto/im9.jpg")}
                    alt="baner"
                  />
                  <img
                    className="image__src8_showhide"
                    src={require("../../assets/image/product__detail/revuelto/im10.jpg")}
                    alt="baner"
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="sec9__product__detail__container">
          <div className="sec9__product__detail">
            <div className="box_sec9_product__detail">
              <img
                className="image__sec9__product__detail"
                src={require("../../assets/image/product__detail/revuelto/im11.jpg")}
                alt="baner"
              />
            </div>
            <div className="box_title_sec9_product__detail">
              <div className="box_dis__product__detail">
                <p className="title_sec9_product__detail title__mobile__modeldetail">
                  CONNECT WITH YOUR REVUELTO
                </p>
                <p className="dis_sec9_product__detail dis__mobile__modeldetail">
                  The suite of connected technologies featured in the Revuelto
                  takes the best of two worlds from the services already
                  available for Urus and Huracán to bring driving engagement to
                  a level never experienced before.
                </p>
                <div
                  className="box_link_sec9_product__detail"
                  onClick={this.toggle2}
                >
                  <p className="hexagon_product__detail hexagon_product__detail__1">
                    {this.state.isTableVisible ? "x" : "+"}
                  </p>
                  <p className="dis_link_product__detail dis__mobile__modeldetail__click">
                    Connected Services of REVUELTO
                  </p>
                </div>
              </div>
            </div>
          </div>
          {this.state.isTableVisible && (
            <div className="box__image__sec9_showhide">
              <p className="box_hide__sec9__model_detail">
                <p className="hide__sec9__model_detail" onClick={this.toggle2}>
                  X
                </p>
              </p>
              <div className="box__show__sec9_showhide">
                <div className="box__sec9__showhide__content">
                  <p className="title__sec9__showhide__content title__mobile__modeldetail">
                    CONNECTED NAVIGATION SERVICES
                  </p>
                  <p className="dis__sec9__showhide__content dis__mobile__modeldetail">
                    Precise real-time travel, route, and destination updates.
                  </p>
                  <ul className="ul__sec9__showhide__content">
                    <li className="li__sec9_showhide__content dis__mobile__modeldetail">
                      First/Last Mile Navigation
                    </li>
                    <li className="li__sec9_showhide__content dis__mobile__modeldetail">
                      Real-Time Traffic Information / VICS (Japan)
                    </li>
                    <li className="li__sec9_showhide__content dis__mobile__modeldetail">
                      What3Words
                    </li>
                    <li className="li__sec9_showhide__content dis__mobile__modeldetail">
                      Map Update Over the Air
                    </li>
                    <li className="li__sec9_showhide__content dis__mobile__modeldetail">
                      Online POI Search
                    </li>
                    <li className="li__sec9_showhide__content dis__mobile__modeldetail">
                      Weather Information
                    </li>
                    <li className="li__sec9_showhide__content dis__mobile__modeldetail">
                      Online Smart Routing
                    </li>
                    <li className="li__sec9_showhide__content dis__mobile__modeldetail">
                      On/Off Street Parking Information
                    </li>
                    <li className="li__sec9_showhide__content dis__mobile__modeldetail">
                      Tank Stop Information
                    </li>
                    <li className="li__sec9_showhide__content dis__mobile__modeldetail">
                      Charging Station Information
                    </li>
                  </ul>
                </div>
                <div className="box__sec9__showhide__content">
                  <p className="title__sec9__showhide__content title__mobile__modeldetail">
                    PEACE OF MIND
                  </p>
                  <p className="dis__sec9__showhide__content dis__mobile__modeldetail">
                    The maximum convenience in managing the status and condition
                    of your car. Your Revuelto right at your fingertips,
                    whenever and wherever you need it.
                  </p>
                  <ul className="ul__sec9__showhide__content">
                    <li className="li__sec9_showhide__content dis__mobile__modeldetail">
                      Amazon Alexa Entertainment
                    </li>
                    <li className="li__sec9_showhide__content dis__mobile__modeldetail">
                      Amazon Alexa Car Management
                    </li>
                    <li className="li__sec9_showhide__content dis__mobile__modeldetail">
                      Amazon Alexa Home2Car
                    </li>
                    <li className="li__sec9_showhide__content dis__mobile__modeldetail">
                      Infotainment Over the Air Update
                    </li>
                    <li className="li__sec9_showhide__content dis__mobile__modeldetail">
                      Online Dealer Appointment
                    </li>
                    <li className="li__sec9_showhide__content dis__mobile__modeldetail">
                      Car Finder (*)
                    </li>
                    <li className="li__sec9_showhide__content dis__mobile__modeldetail">
                      Remote Horn & Light (*)
                    </li>
                    <li className="li__sec9_showhide__content dis__mobile__modeldetail">
                      Remote Lock/Unlock (*)
                    </li>
                    <li className="li__sec9_showhide__content dis__mobile__modeldetail">
                      Vehicle Status Report (*)
                    </li>
                    <li className="li__sec9_showhide__content dis__mobile__modeldetail">
                      Remote Trip Statistics (*)
                    </li>
                  </ul>
                </div>
                <div className="box__sec9__showhide__content">
                  <p className="title__sec9__showhide__content title__mobile__modeldetail">
                    SAFETY AND SECURITY
                  </p>
                  <p className="dis__sec9__showhide__content dis__mobile__modeldetail">
                    Advanced assistance services to monitor your vehicle
                    anywhere in the world.
                  </p>
                  <ul className="ul__sec9__showhide__content">
                    <li className="li__sec9_showhide__content dis__mobile__modeldetail">
                      Online Roadside Assistance
                    </li>
                    <li className="li__sec9_showhide__content dis__mobile__modeldetail">
                      Speed Alert (*)
                    </li>
                    <li className="li__sec9_showhide__content dis__mobile__modeldetail">
                      Curfew Alert (*)
                    </li>
                    <li className="li__sec9_showhide__content dis__mobile__modeldetail">
                      Valet Alert (*)
                    </li>
                    <li className="li__sec9_showhide__content dis__mobile__modeldetail">
                      Geofencing Alert (*)
                    </li>
                    <li className="li__sec9_showhide__content dis__mobile__modeldetail">
                      Stolen Vehicle Locator
                    </li>
                    <li className="li__sec9_showhide__content dis__mobile__modeldetail">
                      Antitheft Alarm Notification
                    </li>
                    <li className="li__sec9_showhide__content dis__mobile__modeldetail">
                      Lamborghini Vehicle Tracking System
                    </li>
                    <li className="li__sec9_showhide__content dis__mobile__modeldetail">
                      Emergency Call
                    </li>
                  </ul>
                </div>
                <div className="box__sec9__showhide__content">
                  <p className="title__sec9__showhide__content title__mobile__modeldetail">
                    ENTERTAINMENT
                  </p>
                  <p className="dis__sec9__showhide__content dis__mobile__modeldetail">
                    Cutting-edge features that make the driving experience even
                    more enjoyable and engaging.
                  </p>
                  <ul className="ul__sec9__showhide__content">
                    <li className="li__sec9_showhide__content dis__mobile__modeldetail">
                      Smartphone Interface
                    </li>
                    <li className="li__sec9_showhide__content dis__mobile__modeldetail">
                      Online Radio
                    </li>
                  </ul>
                </div>
                <div className="box__sec9__showhide__content">
                  <p className="title__sec9__showhide__content title__mobile__modeldetail">
                    FUN-TO-DRIVE
                  </p>
                  <p className="dis__sec9__showhide__content dis__mobile__modeldetail">
                    Innovative services aimed at improving driving pleasure and
                    your skills as a driver.
                  </p>
                  <ul className="ul__sec9__showhide__content">
                    <li className="li__sec9_showhide__content dis__mobile__modeldetail">
                      Board Diaries
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </section>

        <section className="sec10__product__detail">
          <p className="title__sec10__product__detail title__mobile__modeldetail">
            TECHNICAL SPECIFICATIONS
          </p>
          <div className="box__sec10__product__detail">
            <p className="title__box__sec10__product__detail dis1__mobile__modeldetail">
              DISPLACEMENT
            </p>
            <p className="dis__box__sec10__product__detail dis__mobile__modeldetail">
              6498.5 cm³ (396.6 cu in)
            </p>
          </div>
          <div className="box__sec10__product__detail">
            <p className="title__box__sec10__product__detail dis1__mobile__modeldetail">
              MAX POWER (COMBINED ICE+EE)
            </p>
            <p className="dis__box__sec10__product__detail dis__mobile__modeldetail">
              1015 CV
            </p>
          </div>
          <div className="box__sec10__product__detail">
            <p className="title__box__sec10__product__detail dis1__mobile__modeldetail">
              TOP SPEED
            </p>
            <p className="dis__box__sec10__product__detail dis__mobile__modeldetail">
              &gt;350 km/h
            </p>
          </div>
          <div className="box__sec10__product__detail">
            <p className="title__box__sec10__product__detail dis1__mobile__modeldetail">
              ACCELERATION 0-100 KM/H (0-62 MPH)
            </p>
            <p className="dis__box__sec10__product__detail dis__mobile__modeldetail">
              2.5 s
            </p>
          </div>
          <div className="box__sec10__product__detail">
            <p className="title__box__sec10__product__detail dis1__mobile__modeldetail">
              COMBINED CONSUMPTION*
            </p>
            <p className="dis__box__sec10__product__detail dis__mobile__modeldetail">
              The fuel consumption and emissions data is in the type approval
              stage
            </p>
          </div>
          <div className="box__sec10__product__detail">
            <p className="title__box__sec10__product__detail dis1__mobile__modeldetail">
              COMBINED CO2 EMISSIONS*
            </p>
            <p className="dis__box__sec10__product__detail dis__mobile__modeldetail">
              The fuel consumption and emissions data is in the type approval
              stage
            </p>
          </div>

          <div
            className="box_link_sec9_product__detail box_link_sec10_product__detail"
            onClick={this.toggle3}
          >
            <p className="hexagon_product__detail hexagon_product__detail__1">
              {this.state.isTableVisible ? "x" : "+"}
            </p>
            <p className="dis_link_product__detail dis__mobile__modeldetail__click">
              Connected Services of REVUELTO
            </p>
          </div>
        </section>
        <section className="sec11_product__detail">
          {this.state.isTable1Visible && (
            <div className="box__image__sec10_showhide">
              <p className="box_hide__sec9__model_detail">
                <p className="hide__sec9__model_detail" onClick={this.toggle3}>
                  X
                </p>
              </p>
              <div className="box__show__sec11_showhide">
                <div className="box__show__sec11_showhide_left">
                  <div className="box__show__sec11_showhide_content">
                    <p className="title__sec11__product__detail title__sec1__product__detail">
                      CONSUMPTION
                    </p>
                    <div className="box__sec11__product__detail">
                      <p className="title__box__sec11__product__detail dis1__mobile__modeldetail">
                        COMBINED CONSUMPTION*
                      </p>
                      <p className="dis__box__sec11__product__detail dis__sec1__product__detail">
                        The fuel consumption and emissions data is in the type
                        approval stage
                      </p>
                    </div>
                    <div className="box__sec11__product__detail">
                      <p className="title__box__sec11__product__detail dis1__mobile__modeldetail">
                        COMBINED CO2 EMISSIONS*
                      </p>
                      <p className="dis__box__sec11__product__detail dis__sec1__product__detail">
                        The fuel consumption and emissions data is in the type
                        approval stage
                      </p>
                    </div>
                  </div>

                  <div className="box__show__sec11_showhide_content">
                    <p className="title__sec11__product__detail title__sec1__product__detail">
                      INTERNAL COMBUSTION ENGINE
                    </p>
                    <div className="box__sec11__product__detail">
                      <p className="title__box__sec11__product__detail dis1__mobile__modeldetail">
                        ENGINE
                      </p>
                      <p className="dis__box__sec11__product__detail dis__sec1__product__detail">
                        V12 NA 6.5 l
                      </p>
                    </div>
                    <div className="box__sec11__product__detail">
                      <p className="title__box__sec11__product__detail dis1__mobile__modeldetail">
                        DISPLACEMENT
                      </p>
                      <p className="dis__box__sec11__product__detail dis__sec1__product__detail">
                        6498.5 cm³ (396.6 cu in)
                      </p>
                    </div>

                    <div className="box__sec11__product__detail">
                      <p className="title__box__sec11__product__detail dis1__mobile__modeldetail">
                        BORE X STROKE
                      </p>
                      <p className="dis__box__sec11__product__detail dis__sec1__product__detail">
                        95 mm x 76.4 mm (3.74 x 3.01 in)
                      </p>
                    </div>
                    <div className="box__sec11__product__detail">
                      <p className="title__box__sec11__product__detail dis1__mobile__modeldetail">
                        COMPRESSION RATIO
                      </p>
                      <p className="dis__box__sec11__product__detail dis__sec1__product__detail">
                        12.6:1
                      </p>
                    </div>
                    <div className="box__sec11__product__detail">
                      <p className="title__box__sec11__product__detail dis1__mobile__modeldetail">
                        MAX. POWER (KW/CV)
                      </p>
                      <p className="dis__box__sec11__product__detail dis__sec1__product__detail">
                        825 CV (607 kW) @ 9250 rpm
                      </p>
                    </div>
                    <div className="box__sec11__product__detail">
                      <p className="title__box__sec11__product__detail dis1__mobile__modeldetail">
                        MAX POWER (COMBINED ICE+EE)
                      </p>
                      <p className="dis__box__sec11__product__detail dis__sec1__product__detail">
                        1115 CV
                      </p>
                    </div>
                    <div className="box__sec11__product__detail">
                      <p className="title__box__sec11__product__detail dis1__mobile__modeldetail">
                        MAX. TORQUE
                      </p>
                      <p className="dis__box__sec11__product__detail dis__sec1__product__detail">
                        725 Nm @ 6750 rpm
                      </p>
                    </div>
                    <div className="box__sec11__product__detail">
                      <p className="title__box__sec11__product__detail dis1__mobile__modeldetail">
                        WEIGHT-TO-POWER RATIO
                      </p>
                      <p className="dis__box__sec11__product__detail dis__sec1__product__detail">
                        1.75 kg/CV
                      </p>
                    </div>
                    <div className="box__sec11__product__detail">
                      <p className="title__box__sec11__product__detail dis1__mobile__modeldetail">
                        LUBRICATION SYSTEM
                      </p>
                      <p className="dis__box__sec11__product__detail dis__sec1__product__detail">
                        Dry sump
                      </p>
                    </div>
                    <div className="box__sec11__product__detail">
                      <p className="title__box__sec11__product__detail dis1__mobile__modeldetail">
                        COOLING SYSTEM
                      </p>
                      <p className="dis__box__sec11__product__detail dis__sec1__product__detail">
                        Liquid cooled - dedicated circuit for HV components
                      </p>
                    </div>
                    <div className="box__sec11__product__detail">
                      <p className="title__box__sec11__product__detail dis1__mobile__modeldetail">
                        ENGINE MANAGEMENT SYSTEM
                      </p>
                      <p className="dis__box__sec11__product__detail dis__sec1__product__detail">
                        PFI - Bosch
                      </p>
                    </div>
                    <div className="box__sec11__product__detail">
                      <p className="title__box__sec11__product__detail dis1__mobile__modeldetail">
                        EMISSION CLASS
                      </p>
                      <p className="dis__box__sec11__product__detail dis__sec1__product__detail">
                        EU6; LEV III; CN6b
                      </p>
                    </div>
                    <div className="box__sec11__product__detail">
                      <p className="title__box__sec11__product__detail dis1__mobile__modeldetail">
                        EMISSION CONTROL SYSTEM
                      </p>
                      <p className="dis__box__sec11__product__detail dis__sec1__product__detail">
                        4 pre-cats close to engine, 4 lambda sonds
                      </p>
                    </div>
                  </div>
                  <div className="box__show__sec11_showhide_content">
                    <p className="title__sec11__product__detail title__sec1__product__detail">
                      TRANSMISSION
                    </p>
                    <div className="box__sec11__product__detail">
                      <p className="title__box__sec11__product__detail dis1__mobile__modeldetail">
                        TRANSMISSION
                      </p>
                      <p className="dis__box__sec11__product__detail dis__sec1__product__detail">
                        AMT
                      </p>
                    </div>
                    <div className="box__sec11__product__detail">
                      <p className="title__box__sec11__product__detail dis1__mobile__modeldetail">
                        GEARBOX
                      </p>
                      <p className="dis__box__sec11__product__detail dis__sec1__product__detail">
                        8 gears
                      </p>
                    </div>
                    <div className="box__sec11__product__detail">
                      <p className="title__box__sec11__product__detail dis1__mobile__modeldetail">
                        CLUTCH
                      </p>
                      <p className="dis__box__sec11__product__detail dis__sec1__product__detail">
                        Dual clutch
                      </p>
                    </div>
                  </div>

                  <div className="box__show__sec11_showhide_content">
                    <p className="title__sec11__product__detail title__sec1__product__detail">
                      HYBRID SYSTEM
                    </p>
                    <div className="box__sec11__product__detail">
                      <p className="title__box__sec11__product__detail dis1__mobile__modeldetail">
                        BATTERY
                      </p>
                      <p className="dis__box__sec11__product__detail dis__sec1__product__detail">
                        Lithium-ion high specific power battery with pouch cells
                      </p>
                    </div>
                    <div className="box__sec11__product__detail">
                      <p className="title__box__sec11__product__detail dis1__mobile__modeldetail">
                        GENERATOR
                      </p>
                      <p className="dis__box__sec11__product__detail dis__sec1__product__detail">
                        Rear P2-P3 eMotor (110kW @10000rpm)
                      </p>
                    </div>
                    <div className="box__sec11__product__detail">
                      <p className="title__box__sec11__product__detail dis1__mobile__modeldetail">
                        ELECTRIC ENGINES
                      </p>
                      <p className="dis__box__sec11__product__detail dis__sec1__product__detail">
                        Front e-axle (220kW @3500rpm)
                      </p>
                    </div>
                  </div>

                  <div className="box__show__sec11_showhide_content">
                    <p className="title__sec11__product__detail title__sec1__product__detail">
                      PERFORMANCE
                    </p>
                    <div className="box__sec11__product__detail">
                      <p className="title__box__sec11__product__detail dis1__mobile__modeldetail">
                        TOP SPEED
                      </p>
                      <p className="dis__box__sec11__product__detail dis__sec1__product__detail">
                        &gt;350 km/h
                      </p>
                    </div>
                    <div className="box__sec11__product__detail">
                      <p className="title__box__sec11__product__detail dis1__mobile__modeldetail">
                        ACCELERATION 0-100 KM/H (0-62 MPH)
                      </p>
                      <p className="dis__box__sec11__product__detail dis__sec1__product__detail">
                        2.5 s
                      </p>
                    </div>
                  </div>
                </div>
                <div className="box__show__sec11_showhide_right">
                  <div className="box__show__sec11_showhide_content">
                    <p className="title__sec11__product__detail title__sec1__product__detail">
                      BODY AND CHASSIS
                    </p>
                    <div className="box__sec11__product__detail">
                      <p className="title__box__sec11__product__detail dis1__mobile__modeldetail">
                        FRAME
                      </p>
                      <p className="dis__box__sec11__product__detail dis__sec1__product__detail">
                        Multi-technology carbon fiber monocoque, front structure
                        in Forged Composites
                      </p>
                    </div>
                    <div className="box__sec11__product__detail">
                      <p className="title__box__sec11__product__detail dis1__mobile__modeldetail">
                        BODY
                      </p>
                      <p className="dis__box__sec11__product__detail dis__sec1__product__detail">
                        Carbon fiber body, aluminium doors, thermoplastic front
                        and rear bumpers
                      </p>
                    </div>
                    <div className="box__sec11__product__detail">
                      <p className="title__box__sec11__product__detail dis1__mobile__modeldetail">
                        AERODYNAMICS
                      </p>
                      <p className="dis__box__sec11__product__detail dis__sec1__product__detail">
                        Active rear wing featuring 3 positions according to the
                        different driving modes and driving dynamics
                      </p>
                    </div>
                  </div>

                  <div className="box__show__sec11_showhide_content">
                    <p className="title__sec11__product__detail title__sec1__product__detail">
                      WHEELS
                    </p>
                    <div className="box__sec11__product__detail">
                      <p className="title__box__sec11__product__detail dis1__mobile__modeldetail">
                        FRONT RIMS
                      </p>
                      <p className="dis__box__sec11__product__detail dis__sec1__product__detail">
                        20 x 9.5j (21 x 9.5j optional)
                      </p>
                    </div>
                    <div className="box__sec11__product__detail">
                      <p className="title__box__sec11__product__detail dis1__mobile__modeldetail">
                        REAR RIMS
                      </p>
                      <p className="dis__box__sec11__product__detail dis__sec1__product__detail">
                        21 x 12j (22 x 12.5j optional)
                      </p>
                    </div>
                    <div className="box__sec11__product__detail">
                      <p className="title__box__sec11__product__detail dis1__mobile__modeldetail">
                        FRONT TIRES
                      </p>
                      <p className="dis__box__sec11__product__detail dis__sec1__product__detail">
                        265/35 ZR20 - Potenza Sport Runflat (265/30 ZR21 -
                        Runflat optional)
                      </p>
                    </div>
                    <div className="box__sec11__product__detail">
                      <p className="title__box__sec11__product__detail dis1__mobile__modeldetail">
                        REAR TIRES
                      </p>
                      <p className="dis__box__sec11__product__detail dis__sec1__product__detail">
                        345/30 ZR21 - Potenza Sport Runflat (355/25 ZR22 -
                        Runflat optional)
                      </p>
                    </div>
                  </div>

                  <div className="box__show__sec11_showhide_content">
                    <p className="title__sec11__product__detail title__sec1__product__detail">
                      STEERING AND SUSPENSION
                    </p>
                    <div className="box__sec11__product__detail">
                      <p className="title__box__sec11__product__detail dis1__mobile__modeldetail">
                        CONTROL SYSTEM
                      </p>
                      <p className="dis__box__sec11__product__detail dis__sec1__product__detail">
                        ELECTRONIC STABILITY CONTROL (ESC) integrating ABS and
                        TCS with different characteristics according to the
                        driving mode selected
                      </p>
                    </div>
                    <div className="box__sec11__product__detail">
                      <p className="title__box__sec11__product__detail dis1__mobile__modeldetail">
                        SUSPENSION TYPE
                      </p>
                      <p className="dis__box__sec11__product__detail dis__sec1__product__detail">
                        Front and rear double wishbone with LMR dampers -
                        Lamborghini Magneride
                      </p>
                    </div>
                    <div className="box__sec11__product__detail">
                      <p className="title__box__sec11__product__detail dis1__mobile__modeldetail">
                        STEERING SYSTEM
                      </p>
                      <p className="dis__box__sec11__product__detail dis__sec1__product__detail">
                        EPS - Electric Power Steering
                      </p>
                    </div>
                  </div>

                  <div className="box__show__sec11_showhide_content">
                    <p className="title__sec11__product__detail title__sec1__product__detail">
                      BRAKES
                    </p>
                    <div className="box__sec11__product__detail">
                      <p className="title__box__sec11__product__detail dis1__mobile__modeldetail">
                        BRAKES
                      </p>
                      <p className="dis__box__sec11__product__detail dis__sec1__product__detail">
                        CCB Plus (Carbon Ceramic Brakes Plus) brakes with fixed
                        monoblock calipers in aluminum with 10 pistons (front)
                        and 4 pistons (rear)
                      </p>
                    </div>
                    <div className="box__sec11__product__detail">
                      <p className="title__box__sec11__product__detail dis1__mobile__modeldetail">
                        CARBON CERAMIC BRAKES (FRONT)
                      </p>
                      <p className="dis__box__sec11__product__detail dis__sec1__product__detail">
                        410x38mm discs
                      </p>
                    </div>
                    <div className="box__sec11__product__detail">
                      <p className="title__box__sec11__product__detail dis1__mobile__modeldetail">
                        CARBON CERAMIC BRAKES (REAR)
                      </p>
                      <p className="dis__box__sec11__product__detail dis__sec1__product__detail">
                        390x32mm discs
                      </p>
                    </div>
                  </div>

                  <div className="box__show__sec11_showhide_content">
                    <p className="title__sec11__product__detail title__sec1__product__detail">
                      SAFETY
                    </p>
                    <div className="box__sec11__product__detail">
                      <p className="title__box__sec11__product__detail dis1__mobile__modeldetail">
                        AIRBAGS
                      </p>
                      <p className="dis__box__sec11__product__detail dis__sec1__product__detail">
                        Driver, passenger, side airbags. Knee airbags only for
                        specific markets
                      </p>
                    </div>
                  </div>

                  <div className="box__show__sec11_showhide_content">
                    <p className="title__sec11__product__detail title__sec1__product__detail">
                      DIMENSIONS
                    </p>
                    <div className="box__sec11__product__detail">
                      <p className="title__box__sec11__product__detail dis1__mobile__modeldetail">
                        LENGTH
                      </p>
                      <p className="dis__box__sec11__product__detail dis__sec1__product__detail">
                        4947 mm
                      </p>
                    </div>

                    <div className="box__sec11__product__detail">
                      <p className="title__box__sec11__product__detail dis1__mobile__modeldetail">
                        WIDTH (EXCLUDING MIRRORS)
                      </p>
                      <p className="dis__box__sec11__product__detail dis__sec1__product__detail">
                        2033 mm
                      </p>
                    </div>

                    <div className="box__sec11__product__detail">
                      <p className="title__box__sec11__product__detail dis1__mobile__modeldetail">
                        WIDTH (INCLUDING MIRRORS)
                      </p>
                      <p className="dis__box__sec11__product__detail dis__sec1__product__detail">
                        2266 mm
                      </p>
                    </div>

                    <div className="box__sec11__product__detail">
                      <p className="title__box__sec11__product__detail dis1__mobile__modeldetail">
                        HEIGHT
                      </p>
                      <p className="dis__box__sec11__product__detail dis__sec1__product__detail">
                        1160 mm
                      </p>
                    </div>

                    <div className="box__sec11__product__detail">
                      <p className="title__box__sec11__product__detail dis1__mobile__modeldetail">
                        FRONT TRACK
                      </p>
                      <p className="dis__box__sec11__product__detail dis__sec1__product__detail">
                        1720 mm
                      </p>
                    </div>

                    <div className="box__sec11__product__detail">
                      <p className="title__box__sec11__product__detail dis1__mobile__modeldetail">
                        REAR TRACK
                      </p>
                      <p className="dis__box__sec11__product__detail dis__sec1__product__detail">
                        1701 mm
                      </p>
                    </div>
                    <div className="box__sec11__product__detail">
                      <p className="title__box__sec11__product__detail dis1__mobile__modeldetail">
                        WHEELBASE
                      </p>
                      <p className="dis__box__sec11__product__detail dis__sec1__product__detail">
                        2779 mm
                      </p>
                    </div>
                    <div className="box__sec11__product__detail">
                      <p className="title__box__sec11__product__detail dis1__mobile__modeldetail">
                        DRY WEIGHT
                      </p>
                      <p className="dis__box__sec11__product__detail dis__sec1__product__detail">
                        1772 kg
                      </p>
                    </div>
                    <div className="box__sec11__product__detail">
                      <p className="title__box__sec11__product__detail dis1__mobile__modeldetail">
                        WEIGHT DISTRIBUTION
                      </p>
                      <p className="dis__box__sec11__product__detail dis__sec1__product__detail">
                        % 44/56
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        <section>
          <div className="sec15__product__detail">
            <Slider {...settings} className="sec15__product__detail__container">
              <div className="box_image_sec14_product__detail">
                <img
                  className="image_sec14_product__detail"
                  src={require("../../assets/image/product__detail/revuelto/m1.jpg")}
                  alt="baner"
                />
                <p className="dis__image_sec14_product__detail">MONOCOQUE</p>
              </div>
              <div className="box_image_sec14_product__detail">
                <img
                  className="image_sec14_product__detail"
                  src={require("../../assets/image/product__detail/revuelto/m2.jpg")}
                  alt="baner"
                />
                <p className="dis__image_sec14_product__detail">MONOCOQUE</p>
              </div>
              <div className="box_image_sec14_product__detail">
                <img
                  className="image_sec14_product__detail"
                  src={require("../../assets/image/product__detail/revuelto/m3.jpg")}
                  alt="baner"
                />
                <p className="dis__image_sec14_product__detail">MONOCOQUE</p>
              </div>
              <div className="box_image_sec14_product__detail">
                <img
                  className="image_sec14_product__detail"
                  src={require("../../assets/image/product__detail/revuelto/m4.jpg")}
                  alt="baner"
                />
                <p className="dis__image_sec14_product__detail">MONOCOQUE</p>
              </div>
              <div className="box_image_sec14_product__detail">
                <img
                  className="image_sec14_product__detail"
                  src={require("../../assets/image/product__detail/revuelto/m5.png")}
                  alt="baner"
                />
                <p className="dis__image_sec14_product__detail">MONOCOQUE</p>
              </div>
              <div className="box_image_sec14_product__detail">
                <img
                  className="image_sec14_product__detail"
                  src={require("../../assets/image/product__detail/revuelto/m6.jpg")}
                  alt="baner"
                />
                <p className="dis__image_sec14_product__detail">MONOCOQUE</p>
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
              <div className="box_click__sec8__show" onClick={this.toggle4}>
                <p className="hexagon__sec8_prodcut_detail">
                  {this.state.isTable2Visible ? "X" : "+"}
                </p>
                <p>Expand all Feature Highlights</p>
              </div>
            </div>
          </div>
          {this.state.isTable2Visible && (
            <div className="show__sec15__product__detail">
              <p className="box_hide__sec9__model_detail">
                <p className="hide__sec9__model_detail" onClick={this.toggle4}>
                  X
                </p>
              </p>

              <div className="show__sec15__product__detail__container">
                <div className="show__sec15__product__detail__box">
                  <img
                    className="show__sec15__product__detail__image"
                    src={require("../../assets/image/product__detail/revuelto/m1.jpg")}
                    alt="baner"
                  />
                  <p className="show__sec15__product__detail__title">
                    MONOCOQUE
                  </p>
                  <p className="show__sec15__product__detail__dis">
                    In the Revuelto, the concept of the carbon fiber monocoque
                    is taken to a whole new level by extending it all the way to
                    the front end, creating a monofuselage that looks to
                    aeronautics for inspiration. This has given life to a
                    revolutionary chassis with a central monocoque in Forged
                    Composites, a far more sustainable technology than
                    traditional manufacturing processes. This new solution
                    maximizes weight reduction (-9 kg vs. the Aventador front
                    frame), tensional stiffness (&gt; 40.000 NM/°), and strength
                    to protect the vehicle and its occupants in case of
                    accident.
                  </p>
                </div>
                <div className="show__sec15__product__detail__box">
                  <img
                    className="show__sec15__product__detail__image"
                    src={require("../../assets/image/product__detail/revuelto/m2.jpg")}
                    alt="baner"
                  />
                  <p className="show__sec15__product__detail__title">ENGINE</p>
                  <p className="show__sec15__product__detail__dis">
                    The Revuelto entirely rewrites the Lamborghini technical
                    paradigm, starting with the iconic V12 engine that finds in
                    the first Lamborghini hybrid a chance for evolution; for
                    starters, it has been rotated by 180° and optimized to
                    harmoniously co-exist with three e-motors (two on the front
                    e-Axle and one behind the engine itself). The one underwent
                    by the V12 engine is a full-on revolution: a new, higher
                    efficient combustion system, a new exhaust system that
                    reduces backpressure at high revs, a new intake system with
                    improved torque and power, a new oil and water system, an
                    improved valve train with new HLA radius tappet for high
                    speed, and, finally, a weight reduction of -33.5 kg. The new
                    V12 engine can produce a whopping 825 PS in combination with
                    the electric engines for a maximum speed of over 350 km/h.
                    The vehicle is not yet offered for sale and is therefore not
                    subject to Directive 1999/94/EC. The fuel consumption and
                    emissions data is in the type approval stage
                  </p>
                </div>
                <div className="show__sec15__product__detail__box">
                  <img
                    className="show__sec15__product__detail__image"
                    src={require("../../assets/image/product__detail/revuelto/m3.jpg")}
                    alt="baner"
                  />
                  <p className="show__sec15__product__detail__title">GEARBOX</p>
                  <p className="show__sec15__product__detail__dis">
                    The Revuelto is equipped with an 8-speed double-clutch
                    gearbox installed transversally behind the engine. This
                    location choice presents several advantages, such as helping
                    to balance weight, improving cabin roominess, and maximizing
                    the Revuelto's hybrid potential thanks to the configuration
                    with the rear electric motor, allowing the gearbox to either
                    start the engine and recharge the battery or support the
                    electric drive and perform regenerative braking. In
                    addition, a higher clutch torque capability improves
                    performance. Finally, the gearbox's Dual Clutch System
                    allows for various shift profiles to optimize the driving
                    modes - from city driving to the thrill of maximum
                    acceleration.
                  </p>
                </div>
                <div className="show__sec15__product__detail__box">
                  <img
                    className="show__sec15__product__detail__image"
                    src={require("../../assets/image/product__detail/revuelto/m4.jpg")}
                    alt="baner"
                  />
                  <p className="show__sec15__product__detail__title">
                    DRIVING MODES
                  </p>
                  <p className="show__sec15__product__detail__dis">
                    The combination of driving and hybrid modes allows the
                    active intersection between V12 engine and e-motors to
                    provide 13 different driving experiences that guarantee new,
                    indescribable emotions. The experiences span four main
                    categories according to the environment: Città (fully
                    electric,also AWD on demand), Strada (for comfort and
                    smoothness), Sport (for reactiveness and fun-to-drive), and
                    Corsa (thrilling, high-end performance).
                  </p>
                </div>
                <div className="show__sec15__product__detail__box">
                  <img
                    className="show__sec15__product__detail__image"
                    src={require("../../assets/image/product__detail/revuelto/m5.png")}
                    alt="baner"
                  />
                  <p className="show__sec15__product__detail__title">
                    AERODYNAMICS
                  </p>
                  <p className="show__sec15__product__detail__dis">
                    The Revuelto presents a shifted aerodynamics paradigm based
                    on four newly defined pillars: efficiency to improve
                    downforce and drag, components synergy to guarantee the
                    correct level of mass flow, integration for brake cooling
                    via aerodynamics, and design inspiration to include
                    aerodynamics elements in the creative approach from the very
                    beginning. This new strategy results in an enhanced
                    aerodynamic performance that delivers unparalleled emotions.
                  </p>
                </div>
                <div className="show__sec15__product__detail__box">
                  <img
                    className="show__sec15__product__detail__image"
                    src={require("../../assets/image/product__detail/revuelto/m6.jpg")}
                    alt="baner"
                  />
                  <p className="show__sec15__product__detail__title">
                    LDVI 2.0
                  </p>
                  <p className="show__sec15__product__detail__dis">
                    The Lamborghini Integrated Vehicle Dynamics (LDVI) also
                    underwent a redesign. This advanced and highly efficient 2.0
                    version manages the torque on the single wheel and in terms
                    of longitudinal and lateral distribution for a more dynamic
                    traction central logic that fully adapts to specific wheel
                    behaviors during acceleration and braking. Moreover, this
                    revamped version of the LDVI can predict the terrain grip
                    and adjust the acceleration and braking power distribution
                    to guarantee the best performance and control.
                  </p>
                </div>
              </div>
            </div>
          )}
        </section>

        <section>
          <div className="sec12__product__detail">
            <div className="box1__sec12__product__detail">
              <video
                className="video__sec2__product__detail"
                width="5000px"
                height="715px"
                muted={true}
                controls={true}
              >
                <source
                  src={require("../../assets/video/model/revuelto_1.mp4")}
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="box2__sec12__product__detail">
              <div className="box__image__sec12_product__detail">
                <img
                  className="image__sec12_product__detail"
                  src={require("../../assets/image/product__detail/revuelto/im12.jpg")}
                  alt="baner"
                />
                <p>POWERTRAIN</p>
              </div>
              <div className="box__image__sec12_product__detail">
                <img
                  className="image__sec12_product__detail"
                  src={require("../../assets/image/product__detail/revuelto/im13.jpg")}
                  alt="baner"
                />
                <p>MONOCOQUE</p>
              </div>
              <div className="box__image__sec12_product__detail">
                <img
                  className="image__sec12_product__detail"
                  src={require("../../assets/image/product__detail/revuelto/im14.jpg")}
                  alt="baner"
                />
                <p>DRIVING MODES</p>
              </div>
            </div>
          </div>
        </section>

        <section className="sec13__product__detail">
          <div className="sec13__product__detail__content">
            <p className="sec13__product__detail__content__title title__mobile__modeldetail">
              DISCOVER MORE
            </p>
            <p className="sec13__product__detail__content__dis dis__mobile__modeldetail">
              Connected Services of REVUELTO
            </p>
          </div>
          <div className="sec13__product__detail__box__image">
            <img
              className="sec13__product__detail__image"
              src={require("../../assets/image/product__detail/revuelto/im15.png")}
              alt="baner"
            />
          </div>
        </section>

        <section className="sec14__product__detail">
          <Slider {...settings} className="slider__sec14_product_detail">
            <div className="box_image_sec14_product__detail">
              <img
                className="image_sec14_product__detail"
                src={require("../../assets/image/product__detail/revuelto/s1.jpg")}
                alt="baner"
              />
            </div>

            <div className="box_image_sec14_product__detail">
              <img
                className="image_sec14_product__detail"
                src={require("../../assets/image/product__detail/revuelto/s2.jpg")}
                alt="baner"
              />
            </div>

            <div className="box_image_sec14_product__detail">
              <img
                className="image_sec14_product__detail"
                src={require("../../assets/image/product__detail/revuelto/s3.jpg")}
                alt="baner"
              />
            </div>
            <div className="box_image_sec14_product__detail">
              <img
                className="image_sec14_product__detail"
                src={require("../../assets/image/product__detail/revuelto/s4.jpg")}
                alt="baner"
              />
            </div>
            <div className="box_image_sec14_product__detail">
              <img
                className="image_sec14_product__detail"
                src={require("../../assets/image/product__detail/revuelto/s5.jpg")}
                alt="baner"
              />
            </div>
          </Slider>
        </section>
      </main>
    );
  }
}

export default Modeldetail;
