import React from "react";
import CompoinentFour from "../../Compoinent/CompoinentFour";
import Slider from "react-slick";
import "../../styles/Sustainability.scss"
import CompoinentHistoryOne from "../../Compoinent/CompoinentHistoryOne";
import CompoinentHistoryTwo from "../../Compoinent/CompoinentHistoryTwo";



export default class Sustainability extends React.Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.state = {
            indexstep: 1,

        };

    }
    next() {
        this.slider.slickNext();
        this.setState((prevState) => {
            const newIndexStep = prevState.indexstep + 1;
            if (newIndexStep <= 6) {
                return {
                    indexstep: newIndexStep,

                };
            } else {
                return null;
            }
        }, () => {
            const newIndexStep = this.state.indexstep;
            console.log(newIndexStep);

        });
    }
    previous() {
        this.slider.slickPrev();
        this.setState((prevState) => {
            const newIndexStep = prevState.indexstep - 1;
            if (newIndexStep >= 1) {
                return {
                    indexstep: newIndexStep,

                };
            } else {
                return null;
            }
        }, () => {
            const newIndexStep = this.state.indexstep;
            console.log(newIndexStep);

        });

    }
    componentDidMount() {
        this.setState({ indexstep: 1 });


    }
    render() {


        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1500,

            vertical: true,
            verticalSwiping: true,
            swipeToSlide: true,




        };
        return (
            <div>

                <CompoinentFour
                    title1="AUTOMOBILI LAMBORGHINI AND SUSTAINABILITY"
                    title2="SUPPORTING THE UN'S SUSTAINABLE DEVELOPMENT GOALS"
                    discriber1="Safeguarding the world and the environment is a key element of Lamborghini's conduct as an industrial enterprise. The Company pursues a specific business strategy based on the concept of ESG (Environment, Social and Governance values), which describes how sustainability is found where three factors come together: environmental impact, social impact, and the more internal aspects of Company structure and governance. Lamborghini's goal is to create value by acting responsibly towards the world in which it operates, thereby contributing to the sustainable development of society and the economy."
                    discriber2="In 2020, Lamborghini celebrated 75 years since the establishment of the United Nations by adopting 14 of its 17 SDGs (Sustainable Development Goals), continuing its commitment to supporting these goals and recognizing them as guidelines to be followed. 2021 also saw the creation of the Sustainability Project Team, an interdepartmental unit within the Company to better coordinate the activities, initiatives and projects implemented in order to further Lamborghini's pursuit of environmental sustainability."
                    img1={require("../../assets/image/sustainability/im1.jpg")}
                    img2={require("../../assets/image/sustainability/im2.jpg")}
                    img3={require("../../assets/image/sustainability/im3.jpg")}
                    img4={require("../../assets/image/sustainability/im4.jpg")}
                />



                <div className="slick_height_container">

                    <Slider ref={c => (this.slider = c)} {...settings} className="slick_height">
                        <CompoinentHistoryOne
                            title="LAMBORGHINI WINS THE “GREEN STAR 2022” AWARD"
                            discriber="For the second year in a row, the company ranks among the most sustainable in Italy. The award is given annually by the German Institute for Quality and Finance (ITQF) and the Institute for Management and Economic Research (IMWF) of Hamburg, which determine which companies are most committed to green economy strategies."
                            img={require("../../assets/image/sustainability/m1.jpg")}
                            year="2022"

                        />
                        <CompoinentHistoryTwo

                            title1="A NEW GREEN LOGISTICS PROJECT"
                            discriber1="Thanks to an agreement with ÖBB Rail Cargo, a leading European rail freight transportation company, the Urus body shells are delivered from Zwickau, Germany, to Sant’Agata Bolognese via a more sustainable route, with an 85% reduction in CO2 emissions."
                            title2="LAMBORGHINI WINS THE “GREEN STAR 2021” AWARD"
                            discriber2="Ranking among the most sustainable companies in Italy."
                            img1={require("../../assets/image/sustainability/m2.jpg")}
                            img2={require("../../assets/image/sustainability/m3.jpg")}
                            year="2021"
                        />

                        <CompoinentHistoryTwo

                            title1="RECYCLING OF COMPOSITE MATERIALS"
                            discriber1="Automobili Lamborghini reuses and regenerates its carbon fiber scraps in research and development activities. Since 2020, the company has reclaimed approximately 27 tons of waste that could not be used for other purposes. As an alternative to regeneration, materials are also donated to specialized organizations that reuse them for educational purposes during the training of new technicians and engineers."
                            title2="THE CARTIERA PROJECT"
                            discriber2="The leather offcuts from our Upholstery Department are sorted and transformed into high-quality leather goods thanks to the project for the recycling and reuse of Lamborghini leather, in collaboration with the Cartiera laboratory."
                            img1={require("../../assets/image/sustainability/m4.jpg")}
                            img2={require("../../assets/image/sustainability/m5.jpg")}
                            year="2020"
                        />
                        <CompoinentHistoryTwo

                            title1="THE CLASS-A URUS PAINT SHOP"
                            discriber1="The verticalization of this new plant reduced its footprint by 30%. 95% percent of the colors used are water-based. A water condensate recycling system recovers up to 15% of the industrial water used. Energy consumption was reduced by 25% compared to traditional equipment."
                            title2="SUSTAINABILITY AMONG OUR SUPPLIERS"
                            discriber2="Lamborghini introduces a global rating system for its suppliers, with the aim of assessing the sustainability conduct of its business partners."
                            img1={require("../../assets/image/sustainability/m6.jpg")}
                            img2={require("../../assets/image/sustainability/m7.jpg")}
                            year="2019"
                        />

                        <CompoinentHistoryTwo

                            title1="MAINTENANCE OF CO2 NEUTRAL CERTIFICATION"
                            discriber1="Despite the doubling of the production site, from 80,000 to 160,000 m2 for the launch of the Urus project, the new buildings are all rated “A” according to the Emilia-Romagna regional energy classification and have allowed the Sant’Agata Bolognese production plant to be carbon neutral."
                            title2="RECYCLABLE PACKAGING"
                            discriber2="Introduction of reusable packaging for the supply of vehicle components."
                            img1={require("../../assets/image/sustainability/m8.jpg")}
                            img2={require("../../assets/image/sustainability/m9.jpg")}
                            year="2018"
                        />
                        <CompoinentHistoryTwo

                            title1="TORRE 1963"
                            discriber1="Inauguration of the new office building, which received a record score for Italy in the LEED Platinum certification, the highest standard in the world for energy and environmental certification in the building industry. It is the first office building within a manufacturing site in Italy to receive this certification."
                            title2="CREATION OF THE ENERGY HUB"
                            discriber2="For the centralized supply of different forms of energy and services to the North and South areas."
                            img1={require("../../assets/image/sustainability/m10.jpg")}
                            img2={require("../../assets/image/sustainability/m11.jpg")}
                            year="2017"
                        />

                        <CompoinentHistoryOne
                            title="ENVIRONMENTAL BIOMONITORING STATION WITH BEES"
                            discriber="The entire apiary consists of 13 hives, with a total population of some 600,000 bees, of which 120,000 foraging. This project is used to monitor the level of pollution around the production plant and in the town of Sant'Agata Bolognese."
                            img={require("../../assets/image/sustainability/m12.jpg")}
                            year="2016"

                        />


                    </Slider>
                    <div style={{ textAlign: "center" }} className="btn_slick">
                        <button className="btn_sustainability" onClick={this.previous}>
                            <i class="fa-solid fa-angle-up"></i>
                        </button>
                        <button className="btn_sustainability" onClick={this.next}>
                            <i class="fa-solid fa-angle-down"></i>
                        </button>
                    </div>
                </div>

            </div>

        )
    }
}