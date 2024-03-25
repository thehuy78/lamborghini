import React from "react";
import { Link } from "react-router-dom"
import "../../../styles/Ownershipchild.scss"
import "../../../styles/MobilityProgram.scss"
import CompoinentLeft from "../../../Compoinent/CompoinentLeft";
import CompoinentRight from "../../../Compoinent/CompoinentRight"


class MobilityProgram extends React.Component {
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
                    <div className="image__ownershipmobility image__ownership_child">
                        <div className={this.state.active ? "back__link__box active1" : "back__link__box"}>
                            <Link to="/"> <span className="back__link">HOME |</span></Link><Link to="/ownership"> <span className="back__link">OWNERSHIP |</span></Link><span className="back__link">MOBILITY PROGRAM</span>
                        </div>
                        <div className="title__ownership__box1">
                            <p className={this.state.active ? "title__ownership__1 active3" : "title__ownership__1"} >LAMBORGHINI</p>
                            <p className={this.state.active ? "title__ownership__2 active1" : "title__ownership__2"} >MOBILITY PROGRAM</p>
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


                <CompoinentRight title=" UTMOST CONVENIENCE, EVEN IF YOU HAVE A BREAKDOWN"
                    discriber="With the Lamborghini Excellence Mobility Program, owners of new vehicles with standard or extended warranty coverage and owners of vehicles with active Selezione Lamborghini Certified Pre-Owned program that fall within the specified warranty period get the ultimate in assistance convenience.
                        Lamborghini Excellence Mobility offers, free of charge, the use of a Courtesy Car for the period the covered vehicle is off the road and vehicle Pick-up & Delivery service by a Lamborghini representative. "
                    img={require("../../../assets/image/ownership/mobility/mobilityprogram2.jpg")}
                />
                <CompoinentLeft
                    title="COURTESY CAR"
                    discriber="If you bring your vehicle to an official Lamborghini Dealer or Service Point for mechanical or body repair, servicing, accessory installation or any other type of work that will require you to leave the vehicle with them, you will be offered a courtesy car, either a Lamborghini Urus or another available model.
                        The courtesy car service, which must be booked in advance, is completely free of charge and is provided for the entire period your Lamborghini remains in the service center, with no mileage limits attached."
                    img={require("../../../assets/image/ownership/mobility/mobilityprogram3.jpg")}

                />
                <CompoinentRight title="PICK UP & DELIVERY"
                    discriber="You can ask for pick-up and delivery of your Lamborghini from/to your home or other address you provide with a simple telephone call.
                        Pick-up & Delivery service is completely free-of-charge and is really useful when commitments prevent you from delivering your vehicle in person, allowing you to optimize the management and stay of your vehicle at the official Lamborghini Dealer/Service Point.
                        *The service can be booked subject to verification that your Dealer is a member of the Lamborghini Excellence Mobility Program. To request the Courtesy Car or Pick-up & Delivery service, you will need to contact your dealer in advance to check availability. "
                    img={require("../../../assets/image/ownership/mobility/mobilityprogram4.jpg")}
                />

                <section className="sec1_mobilityprogram">
                    <div className="box_image_mobilityprogram">
                        <img className="image_mobilityprogram" src={require("../../../assets/image/ownership/mobility/mobilityprogram5.jpg")} alt="" />
                    </div>
                    <div className="content_sec1_mobilityprogram">
                        <p className="title_sec1_mobilityprogram">LAMBORGHINI AFTER SALES</p>
                        <p className="dis_sec1_mobilityprogram">BROWSE THE BROCHURE</p>
                    </div>
                </section>






            </div>
        )
    }

}
export default MobilityProgram;