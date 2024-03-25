import React from "react";
import "./stylesCompoinent/CompoinentCompany.scss"


export default class CompoinentCompany extends React.Component {
    render() {
        return (
            <section className="compoinent_company">
                <div className="box_image_compoinent_company">
                    <img className="image_compoinent_company" src={this.props.img1} alt="baner" />
                    <div className="content_compoinent_company">
                        <p className="title__compoinent_company">{this.props.title1}</p>
                        <p className="dis__compoinent_company">{this.props.discriber1}</p></div>
                </div>
                <div className="box_image_compoinent_company">
                    <img className="image_compoinent_company" src={this.props.img2} alt="baner" />
                    <div className="content_compoinent_company">
                        <p className="title__compoinent_company">{this.props.title2}</p>
                        <p className="dis__compoinent_company">{this.props.discriber2}</p></div>
                </div>
            </section>
        )
    }
}