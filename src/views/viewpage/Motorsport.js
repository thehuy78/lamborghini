import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import "../../styles/Motorsport.scss";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Motorsport extends React.Component {
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
  scroll1 = () => {
    const sec3 = document.getElementById("sec3__motorsport");
    if (sec3) {
      window.scrollTo({
        behavior: "smooth",
        top: sec3.offsetTop,
      });
    }
  };
  scroll2 = () => {
    const sec7 = document.getElementById("sec7__motorsport");
    if (sec7) {
      window.scrollTo({
        behavior: "smooth",
        top: sec7.offsetTop,
      });
    }
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
      <div id="motorsport">
        <section>
          <div className="baner__motorsport">
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
              <span className="back__link">MOTORSPORT</span>
            </div>
            <div className="title__motorsport_box1">
              <p
                className={
                  this.state.active
                    ? "title__motorsport__1 active4"
                    : "title__motorsport__1"
                }
              >
                LAMBORGHINI
              </p>
              <p
                className={
                  this.state.active
                    ? "title__motorsport__2 active1"
                    : "title__motorsport__2"
                }
              >
                SQUADRA CORSE
              </p>
              <p
                className={
                  this.state.active
                    ? "hexagon__motorsport_1 active3_motorsport"
                    : "hexagon__motorsport"
                }
                onClick={this.scroll1}
              >
                &gt;
              </p>
            </div>
            <div className="title__motorsport_box2">
              <p
                className={
                  this.state.active
                    ? "title__motorsport__3 active2"
                    : "title__motorsport__3"
                }
              >
                MODELS OVERVIEW
              </p>
              <p
                className={
                  this.state.active
                    ? "title__motorsport__4 active2"
                    : "title__motorsport__4"
                }
              >
                Races cars & One-off
              </p>
              <p
                className={
                  this.state.active
                    ? "hexagon__motorsport active3_motorsport"
                    : "hexagon__motorsport"
                }
                onClick={this.scroll2}
              >
                &gt;
              </p>
            </div>
          </div>
        </section>

        <section className="sec2_motorsport">
          <p className="title_sec2_motorsport">MOTORSPORT NEW</p>
          <div className="slip_box_sec2_motorsport">
            <div className="box1__sec2_motorsport">
              <div className="box1__immage__sec2_motorsport">
                <img
                  className="immage1__sec2_motorsport"
                  src={require("../../assets/image/motorsport/img1.jpg")}
                  alt="baner"
                />
              </div>
              <div className="box1_dis__sec2_motorsport">
                <p className="date1__sec2_motorsport">28 SEPTEMBER 2023</p>
                <p className="title1__sec2_motorsport">
                  SUPER TROFEO STORIES: GABRIEL RINDONE
                </p>
                <p className="read_more_motorsport">READ MORE</p>
              </div>
            </div>
            <div className="box2__sec2_motorsport">
              <div className="box1__immage__sec2_motorsport">
                <img
                  className="immage1__sec2_motorsport"
                  src={require("../../assets/image/motorsport/img2.jpg")}
                  alt="baner"
                />
              </div>
              <div className="box1_dis__sec2_motorsport">
                <p className="date1__sec2_motorsport">25 SEPTEMBER 2023</p>
                <p className="title1__sec2_motorsport">
                  LAMBORGHINI TAKES FOURTH GT OPEN VICTORY OF THE SEASON WITH
                  PAUL AND CHOVET AT MONZA
                </p>
                <p className="read_more_motorsport">READ MORE</p>
              </div>
            </div>
            <div className="box3__sec2_motorsport">
              <div className="box1__immage__sec2_motorsport">
                <img
                  className="immage1__sec2_motorsport"
                  src={require("../../assets/image/motorsport/img3.jpg")}
                  alt="baner"
                />
              </div>
              <div className="box1_dis__sec2_motorsport">
                <p className="date1__sec2_motorsport">21 SEPTEMBER 2023</p>
                <p className="title1__sec2_motorsport">
                  TEAM INSIGHT: THE WILD CAT AND THE RAGING BULL
                </p>
                <p className="read_more_motorsport">READ MORE</p>
              </div>
            </div>
          </div>
        </section>
        <section className="sec2_motorsport_mobile">
          <p className="title_sec2_motorsport">MOTORSPORT NEW</p>
          <Slider {...settings} className="slider__motorsport">
            <div className="box1__sec2_motorsport_mobile">
              <Link to="/">
                <div className="box1__immage__sec2_motorsport">
                  <img
                    className="immage1__sec2_motorsport"
                    src={require("../../assets/image/motorsport/img1.jpg")}
                    alt="baner"
                  />
                </div>
                <div className="box1_dis__sec2_motorsport">
                  <p className="date1__sec2_motorsport_mobile">
                    28 SEPTEMBER 2023
                  </p>
                  <p className="title1__sec2_motorsport_mobile">
                    SUPER TROFEO STORIES: GABRIEL RINDONE
                  </p>
                </div>
              </Link>
            </div>
            <div className="box2__sec2_motorsport_mobile">
              <Link to="/">
                <div className="box1__immage__sec2_motorsport">
                  <img
                    className="immage1__sec2_motorsport"
                    src={require("../../assets/image/motorsport/img2.jpg")}
                    alt="baner"
                  />
                </div>
                <div className="box1_dis__sec2_motorsport">
                  <p className="date1__sec2_motorsport_mobile">
                    25 SEPTEMBER 2023
                  </p>
                  <p className="title1__sec2_motorsport_mobile">
                    LAMBORGHINI TAKES FOURTH GT OPEN VICTORY OF THE SEASON WITH
                    PAUL AND CHOVET AT MONZA
                  </p>
                </div>
              </Link>
            </div>
            <div className="box3__sec2_motorsport_mobile">
              <Link to="/">
                <div className="box1__immage__sec2_motorsport">
                  <img
                    className="immage1__sec2_motorsport"
                    src={require("../../assets/image/motorsport/img3.jpg")}
                    alt="baner"
                  />
                </div>
                <div className="box1_dis__sec2_motorsport">
                  <p className="date1__sec2_motorsport_mobile">
                    21 SEPTEMBER 2023
                  </p>
                  <p className="title1__sec2_motorsport_mobile">
                    TEAM INSIGHT: THE WILD CAT AND THE RAGING BULL
                  </p>
                </div>
              </Link>
            </div>
          </Slider>
        </section>

        <section className="sec3_motorsport" id="sec3__motorsport">
          <div className="box__sec3__motorsport">
            <div className="box__image__sec3_motorsport">
              <img
                className="immage1__sec3_motorsport"
                src={require("../../assets/image/motorsport/img4.jpg")}
                alt="baner"
              />
            </div>
            <div className="box__sec3_motorsport_content">
              <p className="sec3_motorsport_title">SQUADRA CORSE</p>
              <p className="sec3_motorsport_dis">
                Squadra Corse is the name of Automobili Lamborghini's motorsport
                department. It was created to offer unparalleled support to
                Automobili Lamborghini's customers in the field. The cars that
                compete in the most prestigious GT championships all over the
                world are designed and produced in-house by Squadra Corse. It
                also organizes the Lamborghini Super Trofeo: the fastest
                one-make championship in the world.
              </p>
            </div>
          </div>
        </section>

        <section className="sec4_motorsport">
          <div className="box__sec4__motorsport">
            <div className="box__image__sec4_motorsport">
              <img
                className="immage1__sec4_motorsport"
                src={require("../../assets/image/motorsport/img5.jpg")}
                alt="baner"
              />
            </div>
            <div className="box__sec4_motorsport_content">
              <p className="sec4_motorsport_title">
                <img
                  className="immage1_logo_sec4_motorsport"
                  src={require("../../assets/image/motorsport/lg1.png")}
                  alt="baner"
                />
              </p>
              <p className="sec4_motorsport_dis">
                SC63 is the really first LMDh class hybrid prototype designed by
                Lamborghini Squadra Corse. The car will race in the FIA World
                Endurance Championship 2024 Hypercar class, including the 24
                Hours of Le Mans, and in the GTP class of the IMSA WeatherTech
                Sports Car Championship Endurance Cup. The SC63 is the most
                complex racing car Lamborghini has ever produced and follows the
                'Direzione Cor Tauri' drawn up by the car maker for the
                electrification of the range.
              </p>
              <Link to="/motorsportsc">
                <p className="link__sec4__motorsport">SC63</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="sec5_motorsport">
          <div className="box__sec5__motorsport">
            <div className="box__image__sec5_motorsport">
              <img
                className="immage1__sec5_motorsport"
                src={require("../../assets/image/motorsport/img6.jpg")}
                alt="baner"
              />
            </div>
            <div className="box__sec5_motorsport_content">
              <p className="sec5_motorsport_title">
                <img
                  className="immage1_logo_sec5_motorsport"
                  src={require("../../assets/image/motorsport/lg2.jpg")}
                  alt="baner"
                />
              </p>
              <p className="sec5_motorsport_dis">
                Passion, performance and innovation. The Lamborghini Super
                Trofeo has been the pinnacle of the global one-make championship
                scene since 2009. The Super Trofeo is exclusively for Huracán
                Super Trofeo Evo model vehicles, which are racing versions of
                the road-approved supercars. There are three different series,
                in three continents: America, Asia and Europe. Every series
                consists of six rounds, each of which feature free practice
                sessions, qualifying and two races lasting 50 minutes each.
                There are four categories of drivers: Pro, Pro-Am, Am and
                Lamborghini Cup. The season culminates in the World Final, when
                the Lamborghini world champions are crowned.
              </p>
              <Link to="/motorsporttrofeo">
                <p className="link__sec5__motorsport">SUPER TROFEO</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="sec6_motorsport">
          <div className="box1_sec6_motorsport">
            <div className="box1_image_sec6_motorsport">
              <img
                className="immage1__sec6_motorsport"
                src={require("../../assets/image/motorsport/img7.jpg")}
                alt="baner"
              />
            </div>
            <div className="box2_image_sec6_motorsport">
              <img
                className="immage2__sec6_motorsport"
                src={require("../../assets/image/motorsport/img8.jpg")}
                alt="baner"
              />
            </div>
          </div>
          <div className="box2_sec6_motorsport">
            <div className="box3_image_sec6_motorsport">
              <img
                className="immage3__sec6_motorsport"
                src={require("../../assets/image/motorsport/img9.jpg")}
                alt="baner"
              />
            </div>
            <div className="box4_image_sec6_motorsport">
              <div className="box_content_sec6_motorsport">
                <p className="title__sec6__motorsport">GT CUSTOMER RACING</p>
                <p className="dis__sec6__motorsport">
                  In contrast with the Super Trofeo, GT3 championships are open
                  to a range of constructors. There are more than 20 Automobili
                  Lamborghini customer teams who have chosen to compete in
                  Huracán GT3 EVO race cars. Since the Huracán GT3 launch in
                  2015, the cars have claimed more than 40 titles on a global
                  scale. What better calling card could there be for Automobili
                  Lamborghini on the GT racing scene?
                </p>
                <Link to="/motorsportdriver"><p className="link__sec6__motor_sport">GT3 CHAMPIONSHIP</p></Link>
              </div>
            </div>
          </div>
        </section>

        <section id="sec7__motorsport">
          <div className="sec7__motorsport">
            <div className="box1__sec7__motorsport">
              <div className="box1__image__sec7__mortorsport">
                <img
                  className="image1__sec7__mortorsport"
                  src={require("../../assets/image/motorsport/img11.jpg")}
                  alt="baner"
                />
              </div>
              <div className="box2__image__sec7__mortorsport">
                <img
                  className="image2__sec7__mortorsport"
                  src={require("../../assets/image/motorsport/img10.jpg")}
                  alt="baner"
                />
              </div>
            </div>

            <p className="box2__sec7__motorsport">
              <div className="box2__sec7__motorsport__content">
                <p className="title__sec7__motorsport">MOTORSPORT MODELS</p>
                <p className="dis__sec7__motorsport">
                  Lamborghini Squadra Corse's cars for motorsport customers are
                  designed and produced in-house. The construction approach used
                  in Automobili Lamborghini supercars is also applied to race
                  models. Concepts such as superior technology and attention to
                  detail are taken to peerless heights for customers who compete
                  on race tracks all over the world.
                </p>
                <Link to="/motorsportmodels">
                  <p className="link__sec7__motorsport link_product">
                    RACE CARS
                  </p>
                </Link>
                <Link to="/motorsportmodels">
                  <p className="link__sec7__motorsport link_product">
                    ONE-OFFS
                  </p>
                </Link>
              </div>
            </p>
          </div>
        </section>

        <section className="sec4_motorsport sec8__motorsport">
          <div className="box__sec4__motorsport">
            <div className="box__image__sec4_motorsport">
              <img
                className="immage1__sec4_motorsport"
                src={require("../../assets/image/motorsport/img12.jpg")}
                alt="baner"
              />
            </div>
            <div className="box__sec4_motorsport_content">
              <p className="sec4_motorsport_title">EXPERIENCE</p>
              <p className="sec4_motorsport_dis">
                Become a Lamborghini Super Trofeo driver thanks to the official
                Lamborghini Pilota driving course, or enjoy the exclusive
                experience of a Super Trofeo race weekend in the glamorous
                atmosphere of Lamborghini Hospitality.
              </p>
              <Link to="/motorsportexperience">
                <p className="link__sec4__motorsport">LAMBORGHINI EXPERIENCE</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="sec9__motorsport">
          <p className="title__sec9__motorsport">PARTNERS</p>
          <div className="box__sec9__motorsport">
            <div className="box__image__Sec9__motorsport">
              <img
                className="image__sec9_motorsport"
                src={require("../../assets/image/motorsport/p7.png")}
                alt="baner"
              />
            </div>
            <div className="box__image__Sec9__motorsport">
              <img
                className="image__sec9_motorsport"
                src={require("../../assets/image/motorsport/p3.png")}
                alt="baner"
              />
            </div>
            <div className="box__image__Sec9__motorsport">
              <img
                className="image__sec9_motorsport"
                src={require("../../assets/image/motorsport/p5.png")}
                alt="baner"
              />
            </div>
            <div className="box__image__Sec9__motorsport">
              <img
                className="image__sec9_motorsport"
                src={require("../../assets/image/motorsport/p1.png")}
                alt="baner"
              />
            </div>
            <div className="box__image__Sec9__motorsport">
              <img
                className="image__sec9_motorsport"
                src={require("../../assets/image/motorsport/p2.png")}
                alt="baner"
              />
            </div>
            <div className="box__image__Sec9__motorsport">
              <img
                className="image__sec9_motorsport"
                src={require("../../assets/image/motorsport/p4.png")}
                alt="baner"
              />
            </div>
            <div className="box__image__Sec9__motorsport">
              <img
                className="image__sec9_motorsport"
                src={require("../../assets/image/motorsport/p6.png")}
                alt="baner"
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Motorsport;
