import React from "react";
import { Link } from "react-router-dom";
import CompoinentLeft from "../../../Compoinent/CompoinentLeft";
import "../../../styles/Ownershipchild.scss";
import "../../../styles/Campaign.scss";


class Campaign extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        }

    }
    componentDidMount() {
        this.setState({ active: true });
        const ownership_connect = document.getElementById("ownership_connect");
        if (ownership_connect) {
            window.scrollTo({
                behavior: "smooth",
                top: ownership_connect.offsetTop,
            });
        }
    }
    render() {
        return (
            <div className="ownership_connect_container">
                <section className="ownership_connect" id="ownership_connect">
                    <div className="image__ownershipcampaign image__ownership_child">
                        <div className={this.state.active ? "back__link__box active1" : "back__link__box"}>
                            <Link to="/"> <span className="back__link">HOME |</span></Link><Link to="/ownership"> <span className="back__link">OWNERSHIP |</span></Link><span className="back__link">RECALL CAMPAIGN</span>
                        </div>
                        <div className="title__ownership__box1">
                            <p className={this.state.active ? "title__ownership__1 active3" : "title__ownership__1"} >RECALL CAMPAIGN</p>
                            <p className={this.state.active ? "title__ownership__2 active1" : "title__ownership__2"} >LAMBORGHINI</p>
                            <p className={this.state.active ? "hexagon_ownership active2" : "hexagon_ownership"}>&gt;</p>
                        </div>
                    </div>
                </section>

                <section className="sec1_campaign">
                    <p className="title_sec1_campaign">FIND YOUR CAR</p>
                    <div className="box_input_campaign">
                        <input className="input_campaign" type="text" placeholder="Type your Lamborghini VIN*"></input>
                        <button className="button_campaign">VALIDATE</button>
                    </div>
                    <p className="dis_sec1_campaign">THE VEHICLE IDENTIFICATION NUMBER ALLOWS US TO OFFER YOU A PROMPT AND PERSONALIZED SERVICE.</p>
                </section>


                <CompoinentLeft
                    title="RECALL CAMPAIGN"
                    discriber="Lamborghini's responsibility for your safety lasts through the years. In fact, we are committed to constantly checking the proper operation of the vehicles throughout the entirety of their life cycle. The development of new solutions to improve the quality of the Lamborghini models on the road allows us to set in motion adequate Recall Campaigns whenever necessary. The owners of vehicles affected by a Recall Campaign are notified by letter and are asked to go to the nearest Lamborghini Service Partner for the checks and work."
                    img={require("../../../assets/image/ownership/campaign/campaign2.jpg")}
                />





            </div>
        )
    }

}
export default Campaign;