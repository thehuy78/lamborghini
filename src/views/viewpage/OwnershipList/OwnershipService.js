import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/OwnershipService.scss";
import CompoinentLeft from "../../../Compoinent/CompoinentLeft";
import CompoinentRight from "../../../Compoinent/CompoinentRight"


class Service extends React.Component {
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
                    <div className="image__ownershipservice">
                        <div className={this.state.active ? "back__link__box active1" : "back__link__box"}>
                            <Link to="/"> <span className="back__link">HOME |</span></Link><Link to="/ownership"> <span className="back__link">OWNERSHIP |</span></Link><span className="back__link">SERVICE</span>
                        </div>
                        <div className="title__ownership__box1 title_customer">
                            <p className={this.state.active ? "title__ownership__1 active3" : "title__ownership__1"} >LAMBORGHINI</p>
                            <p className={this.state.active ? "title__ownership__2 active1" : "title__ownership__2"} >SERVICE</p>
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


                <CompoinentRight title="CERTIFIED REPAIRS AND ORIGINAL SPARE PARTS"
                    discriber="You can count on Lamborghini's After Sales service to deliver excellent quality, reliability and performance in any condition thanks to the qualified support of our official Lamborghini network of Dealers and Service Points. Certified technicians guarantee service geared toward maintaining the integrity of your vehicle to ensure impeccable and perfect functionality regardless of age and mileage. If your vehicle requires repair or restoration work, only original spare parts will be used and in accordance with the manufacturer's specifications in order to ensure the highest standards of quality."
                    img={require("../../../assets/image/ownership/service/service2.jpg")}
                />
                <CompoinentLeft
                    title="ORIGINAL SPARE PARTS"
                    discriber="Our goal has always been to satisfy and exceed the expectations of our customers in terms of quality and service and our spare parts are built and distributed to reflect that goal.
                    Preserving the efficiency of your Lamborghini means preserving the synergy between the elements. The only solution to maintain the superiority and exclusivity of your vehicle intact over time is to use original spare parts. Only components that comply with the specifications of each model can restore the vehicle to its original high comfort and efficiency levels for optimum performance, quality and safety."
                    img={require("../../../assets/image/ownership/service/service3.jpg")}

                />

                <CompoinentRight title="TRAINING AND CERTIFICATION"
                    discriber="Located in Sant'Agata Bolognese and designed to provide training and refresher courses to After Sales staff, the Lamborghini Training Academy is on a mission to provide the needed skills to achieve Customer Experience excellence and the highest standards of service quality."
                    discriber1="Training is led by a team of experts who make sure the dealership staff becomes the perfect representation of the Lamborghini spirit. This spirit is all about precision, attention to details and technological evolution."
                    discriber2="Work on your vehicle will be done by highly specialized and certified professionals – always."
                    img={require("../../../assets/image/ownership/service/service4.jpg")}
                />
                <CompoinentLeft
                    title=" CLASSIC SPARE PARTS"
                    discriber="Classic Spare Parts is the service that makes it possible to replace the components of classic Lamborghini vehicles while preserving their authenticity and increasing their value. Use of original spare parts is essential for the preservation, maintenance and restoration of classic models from Sant'Agata Bolognese."
                    discriber1="The spare parts come from a classic spare parts warehouse or are manufactured on request by the original suppliers. If a specific spare part is not available, it can be faithfully reproduced from the original drawings and technical specifications of the materials used."
                    img={require("../../../assets/image/ownership/service/service5.jpg")}

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
export default Service;