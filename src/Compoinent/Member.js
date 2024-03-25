import React from "react";
import "./stylesCompoinent/Member.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

class Member extends React.Component {

    constructor(props){
        super(props);
        this.state={
            hideshow1: false,
            hideshow2: false,
            transform: false
        };
    }

hidemember_1 = () => {
    this.setState((prevState) => ({
      hideshow1: !prevState.hideshow1,
      transform: !prevState.transform
    }));
  }
  hidemember_2 = () => {
    this.setState((prevState) => ({
      hideshow2: !prevState.hideshow2
    }));
  }

    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <>
                <div className="member">
                    <p className="title__member color_change">CONTACT MEMBER</p>
                    <Slider {...settings} className="list__member">
                        <div className="box_discriber__member">
                            <p className="name_member">NGUYEN THE HUY</p>
                            <p className="position__member">FOUNDER</p>
                            <p className="mission__member">Cảm giác của một lập trình viên trong ngành công nghệ thông tin có sự đa dạng. Họ thường phải đối mặt với sự kích thích và tò mò khi giải quyết các vấn đề phức tạp, cùng với áp lực thời gian và đôi khi cảm thấy mệt mỏi sau những giờ làm việc dài hạn. Tuy nhiên, khi họ hoàn thành một dự án và thấy sản phẩm hoạt động, họ thường cảm thấy tự hào với công việc của mình và đạt được cảm giác thành tựu.</p>
                        </div>
                        <div className="box_discriber__member">
                            <p className="name_member">TRAN QUOC VIET</p>
                            <p className="position__member">FOUNDER</p>
                            <p className="mission__member">Cảm giác của một lập trình viên trong ngành công nghệ thông tin có sự đa dạng. Họ thường phải đối mặt với sự kích thích và tò mò khi giải quyết các vấn đề phức tạp, cùng với áp lực thời gian và đôi khi cảm thấy mệt mỏi sau những giờ làm việc dài hạn. Tuy nhiên, khi họ hoàn thành một dự án và thấy sản phẩm hoạt động, họ thường cảm thấy tự hào với công việc của mình và đạt được cảm giác thành tựu.</p>
                        </div>
                    </Slider>
                    <div className="box_member">
                        <div className="fill__boxmember"></div>
                        <div className="fill1__boxmember"></div>
                        <div className={this.state.hideshow1?"box_member_num box_member_num_animation":"box_member_num"}>
                            <div className={this.state.transform?"box_image_member box_image_member_1 box_image_member_transform":"box_image_member box_image_member_1"} onClick={this.hidemember_1}>
                                <img className="image_member" src={require("../assets/image/member/member1.jpg")} alt="" />
                            </div>
                            <div className={this.state.hideshow1?"info__member box_image_member_transform  visiable ":"info__member info__member1"}>
                                <p className="info__member__name">NGUYEN THE HUY</p>
                                <div className="info__member__media">
                                <div className="box_media_member"> <i class="fa-solid fa-phone media_member_link"></i><span className={this.state.hideshow1?"dis_social dis_social_transform":"dis_social"}>09090909099</span></div>
                                    <div className="box_media_member"><i class="fa-brands fa-facebook media_member_link"></i><p className={this.state.hideshow1?"dis_social dis_social_transform":"dis_social"}>ADD FRIEND</p></div>
                                    <div className="box_media_member"><i class="fa-brands fa-weixin media_member_link"></i><p className={this.state.hideshow1?"dis_social dis_social_transform":"dis_social"}>SEND TO</p></div>
                                </div>
                            </div>
                        </div>
                        <div className={this.state.hideshow2?"box_member_num box_member_num_animation":"box_member_num"}>
                        <div className={this.state.hideshow2?"box_image_member info__member2":"box_image_member"} onClick={this.hidemember_2}>
                                <img className="image_member" src={require("../assets/image/member/member2.jpg")} alt="" />
                            </div>
                            <div className={this.state.hideshow2?"info__member info__member1_transform visiable":"info__member info__member2"}>
                                <p className="info__member__name">NGUYEN THE HUY</p>
                                <div className="info__member__media">
                                   <div className="box_media_member"> <i class="fa-solid fa-phone media_member_link"></i><span className={this.state.hideshow2?"dis_social dis_social_transform":"dis_social"}>09090909099</span></div>
                                    <div className="box_media_member"><i class="fa-brands fa-facebook media_member_link"></i><p className={this.state.hideshow2?"dis_social dis_social_transform":"dis_social"}>ADD FRIEND</p></div>
                                    <div className="box_media_member"><i class="fa-brands fa-weixin media_member_link"></i><p className={this.state.hideshow2?"dis_social dis_social_transform":"dis_social"}>SEND TO</p></div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Member;