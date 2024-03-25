import React from "react";
import { Link } from "react-router-dom"
import "../../../styles/Ownershipchild.scss"
import CompoinentFour from "../../../Compoinent/CompoinentFour";
import CompoinentLeft from "../../../Compoinent/CompoinentLeft";
import CompoinentRight from "../../../Compoinent/CompoinentRight";


class OwnershipConnect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            discriber1: "The journey is more important than the destination. That's why Automobili Lamborghini is constantly committed to improving the driving experience, paving the way to new horizons that look to the future of mobility. Lamborghini connected services can be used from the moment you get in the car via the Lamborghini Infotainment System (LIS), an intuitive system that accesses information directly from the Web and allows you to manage it quickly and easily. The experience doesn't stop upon reaching your destination but also continues remotely.",
            discriber2: "The Lamborghini UNICA app is the key to accessing an exclusive and personalized experience. Reserved for Lamborghini customers, the app allows you to conveniently and simply manage, command and control your car remotely from wherever you are. In addition, with its innovative services, Lamborghini UNICA allows you to receive the latest updates from the Sant'Agata Bolognese company in preview and gives you access to exclusive content and events."
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
                    <div className="image__ownershipconnect image__ownership_child">
                        <div className={this.state.active ? "back__link__box active1" : "back__link__box"}>
                            <Link to="/"> <span className="back__link">HOME |</span></Link><Link to="/ownership"> <span className="back__link">OWNERSHIP |</span></Link><span className="back__link">OWNERSHIP CONNECT</span>
                        </div>
                        <div className="title__ownership__box1">
                            <p className={this.state.active ? "title__ownership__1 active3" : "title__ownership__1"} >LAMBORGHINI</p>
                            <p className={this.state.active ? "title__ownership__2 active1" : "title__ownership__2"} >CONNECT</p>
                            <p className={this.state.active ? "hexagon_ownership active2" : "hexagon_ownership"}>&gt;</p>
                        </div>
                    </div>
                </section>
                <CompoinentFour
                    title1="LAMBORGHINI CONNECT"
                    title2="CONNECT REMOTELY WHENEVER YOU WANT"
                    discriber1={this.state.discriber1}
                    discriber2={this.state.discriber2}
                    img1={require("../../../assets/image/ownership/connect/ownerconnect2.jpg")}
                    img2={require("../../../assets/image/ownership/connect/ownerconnect3.jpg")}
                    img3={require("../../../assets/image/ownership/connect/ownerconnect4.jpg")}
                    img4={require("../../../assets/image/ownership/connect/ownerconnect5.jpg")}
                />

                <CompoinentRight
                    logotitle={require("../../../assets/image/product/model-product/revuelto.png")}

                    discriber="The suite of connected technologies featured in Lamborghini's first HPEV hybrid super sports car merges the best of two worlds from the Connected Services already available for Urus and Huracán to bring driving engagement to a level never experienced before.
                    Step further into the future of Lamborghini with exclusive technology that keeps you always connected to your Revuelto."
                    img={require("../../../assets/image/ownership/connect/ownerconnect6.jpg")}

                />
                <CompoinentLeft
                    logotitle={require("../../../assets/image/product/model-product/huracan.png")}
                    discriber="The exclusive and advanced suite of connected technologies are ready to raise driving engagement to a level never experienced before. Lamborghini Connect gives EVO drivers peace of mind when they are not at the wheel and always up to date functions on board while driving."
                    img={require("../../../assets/image/ownership/connect/ownerconnect7.jpg")}

                />
                <CompoinentRight
                    logotitle={require("../../../assets/image/product/model-product/urus.png")}
                    discriber="Thanks to state-of-the-art connectivity with exclusive navigation, comfort, safety and entertainment features, the driving experience with Urus reaches unparalleled levels both onboard and remotely."
                    img={require("../../../assets/image/ownership/connect/ownerconnect8.jpg")}

                />
                <CompoinentLeft
                    title="REMOTE CONNECTED SERVICES TUTORIALS"
                    discriber="Learn how the connected services of Urus and Huracán work with Lamborghini Unica."
                    img={require("../../../assets/image/ownership/connect/ownerconnect9.jpg")}

                />




            </div>
        )
    }

}
export default OwnershipConnect;