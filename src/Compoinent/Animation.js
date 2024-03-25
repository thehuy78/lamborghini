import React from "react";
import "./stylesCompoinent/Animation.scss"

class Animation extends React.Component {
    render() {
        return (
            <div className="animation">

                <div className="box_animation">
                    <span className="box_image_animation" style={{ '--i': 1 }}><img className="image_animation" src={require("../assets/image/animation/a1.jpg")} alt="" /></span>
                    <span className="box_image_animation" style={{ '--i': 2 }}><img className="image_animation" src={require("../assets/image/animation/a2.jpg")} alt="" /></span>
                    <span className="box_image_animation" style={{ '--i': 3 }}><img className="image_animation" src={require("../assets/image/animation/a3.jpg")} alt="" /></span>
                    <span className="box_image_animation" style={{ '--i': 4 }}><img className="image_animation" src={require("../assets/image/animation/a4.jpg")} alt="" /></span>
                    <span className="box_image_animation" style={{ '--i': 5 }}><img className="image_animation" src={require("../assets/image/animation/a5.jpg")} alt="" /></span>
                    <span className="box_image_animation" style={{ '--i': 6 }}><img className="image_animation" src={require("../assets/image/animation/a6.jpg")} alt="" /></span>
                    <span className="box_image_animation" style={{ '--i': 7 }}><img className="image_animation" src={require("../assets/image/animation/a7.jpg")} alt="" /></span>
                    <span className="box_image_animation" style={{ '--i': 8 }}><img className="image_animation" src={require("../assets/image/animation/a8.jpg")} alt="" /></span>

                </div>

            </div>
        )
    }
}
export default Animation;