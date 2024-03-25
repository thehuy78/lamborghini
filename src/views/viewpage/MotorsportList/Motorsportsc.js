import React from "react";
import { Link } from "react-router-dom";

import CompoinentFour from "../../../Compoinent/CompoinentFour";

import CompoinentRight from "../../../Compoinent/CompoinentRight";

import SliderEngine from "../../../Compoinent/SliderEngine";

import "../../../styles/Motorsportchild.scss"

class Motorsportsc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            dis1: "The distinctive features of the SC63 bear the signature of Lamborghini Centro Stile, with all the typical details of the Sant'Agata Bolognese cars. The aerodynamic elements comprising the carbon fiber body together with the floor and rear wing are tested in the wind tunnel to ensure the best performance. The characteristic Y-shaped LED headlights follow the strong lines of the car and accentuate its shape, as well as guaranteeing the ideal lighting in the nighttime hours of the race through laser modules. The alternating colors on the livery are: the iconic Verde Mantis (green), Nero Noctis (black), Bianco Alpi (white) and Rosso Sangue (red).",
            dis2: "Lamborghini Centro Stile, together with the Squadra Corse aerodynamics, have succeeded in combining performance requirements with the trademark aesthetics of Automobili Lamborghini.",
            dis3: "The SC63 represents a milestone for Lamborghini Squadra Corse. The first Lamborghini hybrid racing car prototype will make its debut at the 2024 FIA World Endurance Championship (Hypercar class) and at the IMSA WeatherTech SportsCar Championship (GTP class). This will take Lamborghini to the highest level of covered-wheel motorsport, with the chance to race in the world's most prestigious endurance competitions such as the 24 Hours of Le Mans and the 24 hours of Daytona.",

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

        return (
            <>
                <div className="motorsport" id="motorsport">
                    <section>
                        <div className="image__motorsportsc image__motorsport_child">

                            <div className={this.state.active ? "back__link__box active1" : "back__link__box"}>
                                <Link to="/"> <span className="back__link">HOME |</span></Link><Link to="/"> <span className="back__link">MOTORSPORT |</span></Link><span className="back__link">SC63</span>
                            </div>

                            <div className="title__ownership__box1">
                                <p className={this.state.active ? "title__ownership__1 active3" : "title__ownership__1"} >LAMBORGHINI</p>
                                <p className={this.state.active ? "title__ownership__2 active1" : "title__ownership__2"} >SC63</p>
                                <p className={this.state.active ? "hexagon_ownership active2" : "hexagon_ownership"}>&gt;</p>
                            </div>
                        </div>
                    </section>
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
                    <CompoinentFour
                        title1="EXTERIOR"
                        title2="CENTRO STILE"

                        discriber1={this.state.dis1}
                        discriber2={this.state.dis2}

                        img1={require("../../../assets/image/motorsport/sc/sc1.jpg")}
                        img2={require("../../../assets/image/motorsport/sc/sc2.jpg")}
                        img3={require("../../../assets/image/motorsport/sc/sc3.jpg")}
                        img4={require("../../../assets/image/motorsport/sc/sc4.jpg")}



                    />
                    <CompoinentRight
                        title="OVERVIEW"
                        discriber={this.state.dis3}
                        img={require("../../../assets/image/motorsport/sc/sc5.jpg")}
                    />

                    <SliderEngine />

                </div>
            </>
        )
    }
}
export default Motorsportsc;