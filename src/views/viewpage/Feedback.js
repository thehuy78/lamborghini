import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "../../styles/Feedback.scss"
import Slider from "react-slick";

export default class Feedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            userfeedback: [
                { id: 0, name: 'Mai', feedback: "Feedback sharing shouldn't be an occasion, but a natural part of your everyday company culture. Teamflect provides you with the simplest 360 feedback software to implement just that.", img: require("../../assets/image/member/member1.jpg") },
                { id: 1, name: 'Huy', feedback: "Feedback sharing shouldn't be an occasion, but a natural part of your everyday company culture. Teamflect provides you with the simplest 360 feedback software to implement just that.", img: require("../../assets/image/member/member1.jpg") },
                { id: 2, name: 'VIET', feedback: "Feedback sharing shouldn't be an occasion, but a natural part of your everyday company culture. Teamflect provides you with the simplest 360 feedback software to implement just that.", img: require("../../assets/image/member/member1.jpg") },
            ]

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
        var settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true
        };

        return (

            <div>
                <section>
                    <div className="image__ownership image_feedback">
                        <div className={this.state.active ? "back__link__box active1" : "back__link__box"}>
                            <Link to="/"> <span className="back__link">HOME |</span></Link><span className="back__link">FEEDBACK</span>
                        </div>
                        <div className="title__ownership__box1">
                            <p className={this.state.active ? "title__ownership__1 active3" : "title__ownership__1"} >LAMBORGHINI</p>
                            <p className={this.state.active ? "title__ownership__2 active1" : "title__ownership__2"} >FEEDBACK</p>
                            <p className={this.state.active ? "hexagon_ownership active2" : "hexagon_ownership"}>&gt;</p>
                        </div>
                    </div>
                </section>


                <section className='sec1_feedback'>
                    <div className='form_feedback'>
                        <form>
                            <h3 className='title_form_feedback'>Feedback</h3>
                            <div className='line_feedback'>
                                <label className='label_feedback'>Name:</label>
                                <input className='input_feedback' type='text' placeholder='name user' />
                            </div>
                            <div className='line_feedback'>
                                <label className='label_feedback'>Email:</label>
                                <input className='input_feedback' type='text' placeholder='email user' />
                            </div>
                            <div className='line_feedback'>
                                <label className='label_feedback'>Feedback:</label>
                                <textarea className='input_feedback fedbback_area' placeholder='feedback' />
                            </div>
                            <div className='box_btn_feedback'>
                                <button className='btn_feedback'>
                                    <span className='btn_feedback_span'>Send</span>
                                </button>
                            </div>

                        </form>
                    </div>

                    <div className='feedback_list'>
                        <p className='title'>what our customers say</p>


                        <Slider {...settings} className='feedback_slick'>
                            {this.state.userfeedback.map((item, index) => (
                                <div key={item.id}>
                                    <div className='slick_feedback_box'>
                                        <div className='box_image_user_feedback'>
                                            <img className='image_user_feedback' src={item.img} alt='' />
                                        </div>
                                        <p className='user_name'>{item.name}</p>
                                        <p className='discriber'>{item.feedback}</p>
                                    </div>
                                </div>
                            ))}

                           
                        </Slider>
                    </div>
                </section>

            </div >
        )
    }
}
