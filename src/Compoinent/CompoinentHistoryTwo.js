import React from "react";
import "./stylesCompoinent/CompoinentHistoryOne.scss"

export default class CompoinentHistoryTwo extends React.Component {
    render() {
        return (
            <div className="box_history_two">
                <div className="box_history_two_child1">
                    <div className="box_content_history_two">
                        <p className="title_history_two">{this.props.title1}</p>
                        <p className="discriber">{this.props.discriber1}</p>
                    </div>
                    <div className="box_image_history_two">
                        <img className="image_history_two1" src={this.props.img1} alt="" />
                    </div>
                </div>
                <div className="box_history_two_child2">
                    <div className="box_content_history_two">
                        <p className="title_history_two">{this.props.title2}</p>
                        <p className="discriber">{this.props.discriber2}</p>
                    </div>
                    <div className="box_image_history_two">
                        <img className="image_history_two2" src={this.props.img2} alt="" />
                    </div>
                </div>
                <div className="year_history_two">{this.props.year}</div>
            </div>
        )
    }
}