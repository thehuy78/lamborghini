import React from "react";
import "../Compoinent/stylesCompoinent/CompoinentFour.scss"
import "../styles/Main.scss"



class CompoinentFour extends React.Component {

    render() {
        return (
            <div className="compoinent_four">
                <section className="compoinent_four_sec1">
                    <div className="box_image_compoinent_four_sec1">
                        <img className="image_compoinent_four_sec1" src={this.props.img1} alt="" />
                    </div>
                    <div className="content_compoinent_four_sec1">
                        <div className="box_content_compoinent_four_sec1">
                            <p className="title">{this.props.title1}</p>
                            <p className="discriber">{this.props.discriber1}</p>
                            <p className="discriber">{this.props.discriber11}</p>
                            <p className="discriber">{this.props.discriber12}</p>
                            <p className="discriber">{this.props.discriber13}</p>
                            <p className="discriber">{this.props.discriber14}</p>
                            <p className="discriber">{this.props.discriber15}</p>
                            <p className="discriber">{this.props.discriber16}</p>
                        </div>
                    </div>
                </section>
                <section className="compoinent_four_sec2">
                    <div className="box_image_compoinent_four_sec2">
                        <img className="image_compoinent_four_sec2 image1_compoinent_four_sec2" src={this.props.img2} alt="" />
                    </div>
                    <div className="box_image_compoinent_four_sec2">
                        <img className="image_compoinent_four_sec2 image2_compoinent_four_sec2" src={this.props.img3} alt="" />
                    </div>
                </section>

                <section className="compoinent_four_sec3">
                    <div className="box_image_compoinent_four_sec3">
                        <img className="image_compoinent_four_sec3" src={this.props.img4} alt="" />
                    </div>
                    <div className="content_compoinent_four_sec3">
                        <div className="box_content_compoinent_four_sec3">
                            <p className="title">{this.props.title2}</p>
                            <p className="discriber">{this.props.discriber2}</p>
                            <p className="discriber">{this.props.discriber21}</p>
                            <p className="discriber">{this.props.discriber22}</p>
                            <p className="discriber">{this.props.discriber23}</p>
                            <p className="discriber">{this.props.discriber24}</p>
                            <p className="discriber">{this.props.discriber25}</p>
                            <p className="discriber">{this.props.discriber26}</p>
                        </div>
                    </div>
                </section>


            </div>
        )
    }
}
export default CompoinentFour;