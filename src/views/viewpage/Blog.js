import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "../../styles/Blog.scss"

import { withRouter } from 'react-router-dom';

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            data: []
        }
    }

    componentDidMount() {


    }

    handelclick = (user) => {
        this.props.history.push(`/blog/${user.blogid}`)
    }
    render() {
        return (
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


                <section className='box_blog'>
                    {this.state.data.map((item) => (
                        <div key={item.blogid} onClick={() => this.handelclick(item)}>
                            <div className='title'>{item.title}</div>
                            <div className='email'>{item.date}</div>
                            <div className='p'>{item.discriber}</div>


                        </div>
                    ))
                    }

                </section>
            </div>


        )
    }
}
export default withRouter(Blog); 
