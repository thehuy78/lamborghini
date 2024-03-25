import React from "react";
import "./stylesCompoinent/CompoinentHistoryOne.scss"

export default class CompoinentHistoryOne extends React.Component {
    render() {
        return (
            <div className="box_historyone">
                <div className="box_content_historyone">
                    <p className="title_history">{this.props.title}</p>
                    <p className="discriber">{this.props.discriber}</p>
                </div>
                <div className="box_image_history">
                    <img className="image_history" src={this.props.img} alt="" />
                </div>

                <div className="year_history">{this.props.year}</div>
            </div>
        )
    }
}