import React from "react";
import { Link } from "react-router-dom"
import "../../../styles/Motorsportchild.scss"
import CompoinentFour from "../../../Compoinent/CompoinentFour";
import CompoinentRight from "../../../Compoinent/CompoinentRight";


export default class MotorsportModel extends React.Component {
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
        return (

            <div className="motorsport" id="motorsport">
                <section>
                    <div className="image__motorsportmodel image__motorsport_child">

                        <div className={this.state.active ? "back__link__box active1" : "back__link__box"}>
                            <Link to="/"> <span className="back__link">HOME |</span></Link><Link to="/"> <span className="back__link">MOTORSPORT |</span></Link><span className="back__link">MOTORSPORT MODEL</span>
                        </div>

                        <div className="title__ownership__box1">
                            <p className={this.state.active ? "title__ownership__1 active3" : "title__ownership__1"} >LAMBORGHINI</p>
                            <p className={this.state.active ? "title__ownership__2 active1" : "title__ownership__2"} >MOTORSPORT MODEL</p>
                            <p className={this.state.active ? "hexagon_ownership active2" : "hexagon_ownership"}>&gt;</p>
                        </div>
                    </div>
                </section>


                <CompoinentFour
                    title1="RACE CARS"
                    title2="ONE OFFS"

                    discriber1="The race cars that compete in championships all over the world are designed and produced in-house by Squadra Corse.
                    Lamborghini has total control of all engineering and production processes, so it can provide its motorsport customers with vehicles whose superior quality has been underlined by countless victories across the globe."
                    discriber2="Squadra Corse offers its motorsport customers the opportunity to develop special, bespoke track-oriented designs. Thanks to its racing experience, Lamborghini Squadra Corse can make vehicles to measure, catering to its customers' needs."

                    img1={require("../../../assets/image/motorsport/motorsport-Model/m1.jpg")}
                    img2={require("../../../assets/image/motorsport/motorsport-Model/m3.jpg")}
                    img3={require("../../../assets/image/motorsport/motorsport-Model/m2.jpg")}
                    img4={require("../../../assets/image/motorsport/motorsport-Model/m4.jpg")}


                />


                <CompoinentRight title="LIMITED SERIES"
                    discriber="Essenza SCV12 represents the purest track driving experience that our brand can offer. It is equipped with the most powerful V12 naturally aspirated engine ever developed by Lamborghini, combined with aerodynamics inspired by racing prototypes and innovative technical solutions. This car is the perfect combination of our tradition and what we imagine for the future.     "
                    img={require("../../../assets/image/motorsport/motorsport-Model/m5.jpg")}
                />
            </div>

        )
    }
}