import React from "react";
import "../Compoinent/stylesCompoinent/CompoinentRight.scss";
import "../styles/Main.scss"



class CompoinentRight extends React.Component {

    render() {
        return (
            <>

                <section className="compoinent_right">
                    <div className="box_image_compoinent_right">
                        <img className="image_compoinent_right" src={this.props.img} alt="" />
                    </div>
                    <div className="content_compoinent_right">
                        <div className="box_content_compoinent_right">
                            <p className="title">
                                {this.props.title}
                                <img
                                    className="logo__title"
                                    src={this.props.logotitle}
                                    alt=""
                                />
                            </p>
                            <p className="discriber">{this.props.discriber}</p>
                            <p className="discriber">{this.props.discriber1}</p>
                            <p className="discriber">{this.props.discriber2}</p>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
export default CompoinentRight;