import React from "react";
import { Link } from "react-router-dom"
import "../../../styles/Motorsportchild.scss"
import CompoinentFour from "../../../Compoinent/CompoinentFour";



export default class MotorsportExperience extends React.Component {
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
                    <div className="image__motorsportexperience image__motorsport_child">

                        <div className={this.state.active ? "back__link__box active1" : "back__link__box"}>
                            <Link to="/"> <span className="back__link">HOME |</span></Link><Link to="/"> <span className="back__link">MOTORSPORT |</span></Link><span className="back__link">EXPERIENCE</span>
                        </div>

                        <div className="title__ownership__box1">
                            <p className={this.state.active ? "title__ownership__1 active3" : "title__ownership__1"} >LAMBORGHINI</p>
                            <p className={this.state.active ? "title__ownership__2 active1" : "title__ownership__2"} >EXPERIENCE</p>
                            <p className={this.state.active ? "hexagon_ownership active2" : "hexagon_ownership"}>&gt;</p>
                        </div>
                    </div>
                </section>


                <CompoinentFour
                    title1="CORSO PILOTA LAMBORGHINI"
                    title2="VIP PROGRAM"
                    discriber1="Is the official Lamborghini Squadra Corse driving course which allows drivers to access Super Trofeo competitions. As well as an intensive driving program on the Huracán Super Trofeo Evo, the course also includes classroom time dedicated to the technique and theoretical foundations of track driving. At the end of the course, participants will be able to apply for a racing license to participate in Lamborghini Super Trofeo race weekends."
                    discriber2="Is the gateway to the exclusive Lamborghini Hospitality present at all Super Trofeo weekends. The Lamborghini VIP Program allows you to experience a Super Trofeo weekend in full Lamborghini style. Garage Tours, Hot Laps and Grid Walks are just some of the activities which will make the experience unforgettable."
                    img1={require("../../../assets/image/motorsport/experience/e1.jpg")}
                    img2={require("../../../assets/image/motorsport/experience/e3.jpg")}
                    img3={require("../../../assets/image/motorsport/experience/e2.jpg")}
                    img4={require("../../../assets/image/motorsport/experience/e4.jpg")}


                />



            </div>

        )
    }
}