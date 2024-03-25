import React from "react";
import { Link } from "react-router-dom";
import CompoinentFour from "../../../Compoinent/CompoinentFour";
import CompoinentLeft from "../../../Compoinent/CompoinentLeft";
import CompoinentRight from "../../../Compoinent/CompoinentRight"
import "../../../styles/Motorsportchild.scss"

class MotorsportTrofeo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            dis1: "The longest established Lamborghini championship takes place on the famous circuits of Europe in tandem with five of the races in the GT World Challenge Europe Powered by AWS. The Lamborghini Super Trofeo Europe is one of the most competitive one-make championships in the world. Over the years, some of the top GT racers, gentleman drivers and motorsport champions have battled it out on iconic tracks such as Monza, Silverstone, Paul Ricard and Spa-Francorchamps.",
            dis2: "From the East Coast to California, the Lamborghini Super Trofeo takes in circuits that have gone down in American motorsport history. It made its debut in North America in 2013 and from the very beginning it attracted professionals and gentleman drivers who were keen to put themselves to the test behind the wheel of a racing Lamborghini on tracks such as Laguna Seca and Watkins Glen. It has provided young drivers with invaluable experience and helped to pave their way to success in legendary races such as the 24 Hours of Daytona.",

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
                        <div className="image__motorsporttrofeo image__motorsport_child">

                            <div className={this.state.active ? "back__link__box active1" : "back__link__box"}>
                                <Link to="/"> <span className="back__link">HOME |</span></Link><Link to="/"> <span className="back__link">MOTORSPORT |</span></Link><span className="back__link">SUPER TROFEO</span>
                            </div>

                            <div className="title__ownership__box1">
                                <p className={this.state.active ? "title__ownership__1 active3" : "title__ownership__1"} >LAMBORGHINI</p>
                                <p className={this.state.active ? "title__ownership__2 active1" : "title__ownership__2"} >SUPER TROFEO</p>
                                <p className={this.state.active ? "hexagon_ownership active2" : "hexagon_ownership"}>&gt;</p>
                            </div>
                        </div>
                    </section>
                    <CompoinentFour
                        title1="SUPER TROFEO EUROPE"
                        title2="SUPER TROFEO NORTH AMERICA"

                        discriber1={this.state.dis1}
                        discriber2={this.state.dis2}

                        img1={require("../../../assets/image/motorsport/trofeo/t1.jpg")}
                        img2={require("../../../assets/image/motorsport/trofeo/t2.jpg")}
                        img3={require("../../../assets/image/motorsport/trofeo/t3.jpg")}
                        img4={require("../../../assets/image/motorsport/trofeo/t4.jpg")}


                    />


                    <CompoinentRight title="SUPER TROFEO WORLD FINALS"
                        discriber="The Lamborghini World Final has brought the curtain down on every Super Trofeo season since 2013. Every year, the drivers from all of the continental championships go to a different circuit and take part in two 50-minute Sprint races, with the overall winner being crowned as the Lamborghini world champion. As well as being the biggest racing weekend of the year, the Lamborghini World Final is a genuine motorsport festival that attracts fans and owners from all over the world. "
                        img={require("../../../assets/image/motorsport/trofeo/t5.jpg")}
                    />
                    <CompoinentLeft
                        title="SUPER TROFEO ASIA"
                        discriber="Super Trofeo Asia has been a classic for Lamborghini sports customers since 2012. Over 254 drivers of 30 different nationalities have raced in the series, with an average number of participants growing at a steady pace. The series races are contended on iconic circuits such as Sepang and Fuji, but many Asian countries have hosted this championship. "
                        img={require("../../../assets/image/motorsport/trofeo/t6.jpg")}

                    />
                    <CompoinentRight title="SUPER TROFEO TEAMS"
                        discriber="All of the cars that take part in the Lamborghini Super Trofeo championships are run by private teams, which use their experience to fine-tune them for the drivers. There are both Driver and Team rankings for each of the Lamborghini Super Trofeo continental championships. "
                        img={require("../../../assets/image/motorsport/trofeo/t7.jpg")}
                    />



                </div>
            </>
        )
    }
}
export default MotorsportTrofeo;