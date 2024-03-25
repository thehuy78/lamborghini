import React from "react";
import { Link } from "react-router-dom"
import "../../../styles/Motorsportchild.scss"
import CompoinentFour from "../../../Compoinent/CompoinentFour";
import CompoinentRight from "../../../Compoinent/CompoinentRight";


export default class MotorsportDriver extends React.Component {
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
                    <div className="image__motorsportdriver image__motorsport_child">

                        <div className={this.state.active ? "back__link__box active1" : "back__link__box"}>
                            <Link to="/"> <span className="back__link">HOME |</span></Link><Link to="/"> <span className="back__link">MOTORSPORT |</span></Link><span className="back__link">DRIVERS</span>
                        </div>

                        <div className="title__ownership__box1">
                            <p className={this.state.active ? "title__ownership__1 active3" : "title__ownership__1"} >LAMBORGHINI</p>
                            <p className={this.state.active ? "title__ownership__2 active1" : "title__ownership__2"} >DRIVERS</p>
                            <p className={this.state.active ? "hexagon_ownership active2" : "hexagon_ownership"}>&gt;</p>
                        </div>
                    </div>
                </section>


                <CompoinentFour
                    title1="SUPER TROFEO JUNIOR DRIVERS"
                    title2="GT3 JUNIOR DRIVERS"
                    discriber1="The Young Drivers Program is for the most promising drivers aged under 26 in the Lamborghini Super Trofeo continental championships. Lamborghini Squadra Corse driving coaches analyze the performances of the Young Drivers during every stage of the Lamborghini Super Trofeo. The ones that stand out the most during the season are invited to take part in a track test that is organized by Lamborghini Squadra Corse. As well as their driving skills, their attitudes and their physical and mental health are all painstakingly assessed. The best driver is given the opportunity to race in GT3 cars the following season with support from Lamborghini Squadra Corse and embark on a career as a professional driver."
                    discriber2="Every year, the best young drivers who race Lamborghini cars in GT3 championships are selected to take part in the GT3 Junior Program. They are monitored by Lamborghini driving coaches during all of their races and at the end of the season the most promising ones are invited to take part in a track test that is organized by Lamborghini Squadra Corse. As well as their driving skills, their attitudes and their physical and mental health are all painstakingly assessed. Only the very best stand a chance of earning Factory Driver status."

                    img1={require("../../../assets/image/motorsport/driver/d1.jpg")}
                    img2={require("../../../assets/image/motorsport/driver/d3.jpg")}
                    img3={require("../../../assets/image/motorsport/driver/d2.jpg")}
                    img4={require("../../../assets/image/motorsport/driver/d4.jpg")}


                />


                <CompoinentRight title="FACTORY DRIVERS"
                    discriber="Only the best GT drivers have a chance of becoming official Lamborghini drivers. Factory Drivers have contracts with Automobili Lamborghini and they race in the most prestigious GT championships in the world. As well as being brand ambassadors, Factory Drivers contribute to the development of Automobili Lamborghini cars for both racing and the road."
                    img={require("../../../assets/image/motorsport/driver/d5.jpg")}
                />


                <section className="sec4_contact">
                    <div className="box_image_sec4_contact">
                        <img className="image_sec4_contact" src={require("../../../assets/image/motorsport/driver/d6.jpg")} alt="baner" />
                        <div className="content_sec4_contact">
                            <p className="title__sec4_contact">SUPER TROFEO EVO</p>
                            <p className="dis__sec4_contact">RACE CARS</p></div>
                    </div>
                    <div className="box_image_sec4_contact">
                        <img className="image_sec4_contact" src={require("../../../assets/image/motorsport/driver/d7.jpg")} alt="baner" />
                        <div className="content_sec4_contact">
                            <p className="title__sec4_contact">GT3</p>
                            <p className="dis__sec4_contact">RACE CARS</p></div>
                    </div>
                </section>
            </div>

        )
    }
}