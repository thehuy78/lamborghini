import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Ownership.scss"

class Ownership extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        }
    }
    componentDidMount() {
        this.setState({ active: true });
        const ownership = document.getElementById('ownership');
        if (ownership) {
            window.scrollTo({
                behavior: 'smooth',
                top: ownership.offsetTop,
            });
        }

    }


    render() {
        return (
            <>
                <div className="ownership__container" id="ownership">
                    <section>
                        <div className="image__ownership">
                            <div className={this.state.active ? "back__link__box active1" : "back__link__box"}>
                                <Link to="/"> <span className="back__link">HOME |</span></Link><span className="back__link">OWNERSHIP</span>
                            </div>
                            <div className="title__ownership__box1">
                                <p className={this.state.active ? "title__ownership__1 active3" : "title__ownership__1"} >DRIVING HUMANS</p>
                                <p className={this.state.active ? "title__ownership__2 active1" : "title__ownership__2"} >OWNERSHIP</p>
                                <p className={this.state.active ? "hexagon_ownership active2" : "hexagon_ownership"}>&gt;</p>
                            </div>
                        </div>
                    </section>


                    <section>
                        <div className="sec1__ownership">
                            <div className="box_sec1_ownership">
                                <img className="image__sec1__ownership" src={require('../../assets/image/ownership/ownership2.jpg')} alt="baner" />
                            </div>
                            <div className="box_title_sec1_ownership">
                                <div className="box_dis__ownership">
                                    <p className="title_sec1_ownership">CONNECTIVITY</p>
                                    <p className="dis_sec1_ownership">Lamborghini connected services can be used from the moment you get in the car via the Lamborghini Infotainment System (LIS), an intuitive system that accesses information directly from the Web and allows you to manage it quickly and easily.</p>

                                    <Link to="/connect"> <p className="dis_link_ownership">DISCOVER MORE</p></Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="sec2__ownership">
                            <div className="box__sec2__cut__image">
                                <div className="image__ownership__box1">
                                    <img className="image__ownership_1" src={require('../../assets/image/ownership/ownership4.jpg')} alt="baner" />
                                </div>
                                <div className="image__ownership__box2">
                                    <img className="image__ownership_2" src={require('../../assets/image/ownership/ownership3.jpg')} alt="baner" />
                                </div>
                            </div>

                            <p className="describe__sec2__ownership">
                                <div className="describe__sec2__ownership__content">
                                    <p className="title__sec2_ownership">CUSTOMER APP</p>
                                    <p className="dis__sec2__ownership">Lamborghini UNICA is an exclusive app reserved for Lamborghini customers, enabling them to connect to the Sant’Agata Bolognese-based automaker at a simple tap of a finger.</p>
                                    <Link to="/customerapp"><p className="link__sec2_ownership ">DISCOVER MORE</p></Link>

                                </div>
                            </p>
                        </div>
                    </section>

                    <section>

                        <div className="sec3__ownership">
                            <p className="describe__sec3__ownership">
                                <div className="describe__sec3__ownership__content">
                                    <p className="title__sec3_ownership">CLASSICS</p>
                                    <p className="dis__sec3__ownership">With its new Polo Storico, Automobili Lamborghini sets out to keep its heritage and exclusive know-how intact. There are many services created ad hoc to preserve the integrity of the historic vehicles, with maintenance and restoration aimed at faithfully following the original characteristics of the car. The Lamborghini Historic Archive, which preserves all documents made by the House of the Raging Bull over its long history, is also of enormous value.</p>
                                    <Link to="/classics"><p className="link__sec3_ownership ">DISCOVER MORE</p></Link>

                                </div>
                            </p>
                            <div className="box__sec3__cut__image">
                                <div className="image__sec3__ownership__box1">
                                    <img className="image__sec3__ownership_1" src={require('../../assets/image/ownership/ownership5.jpg')} alt="baner" />
                                </div>
                                <div className="image__sec3__ownership__box2">
                                    <img className="image__sec3__ownership_2" src={require('../../assets/image/ownership/ownership6.jpg')} alt="baner" />
                                </div>
                            </div>


                        </div>
                    </section>
                </div>
            </>
        )
    }
}

export default Ownership;