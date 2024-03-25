import React from "react";
import "../../styles/Product.scss";
import { Link } from "react-router-dom";
import CompoinentCompany from "../../Compoinent/CompoinentCompany";
class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  componentDidMount() {
    this.setState({ active: true });
    const product = document.getElementById("product");
    if (product) {
      window.scrollTo({
        behavior: "smooth",
        top: product.offsetTop,
      });
    }
  }
  scrollToElement = () => {
    const sec1 = document.getElementById("sec1");
    if (sec1) {
      window.scrollTo({
        behavior: "smooth",
        top: sec1.offsetTop,
      });
    }
  };

  render() {
    return (
      <div className="product__container" id="product">
        <section>
          <div className="image__product">
            <div
              className={
                this.state.active
                  ? "back__link__box active1"
                  : "back__link__box"
              }
            >
              <Link to="/">
                {" "}
                <span className="back__link">HOME |</span>
              </Link>
              <span className="back__link">MODELS</span>
            </div>
            <div className="title__product__box1">
              <p
                className={
                  this.state.active
                    ? "title__product__1 active4"
                    : "title__product__1"
                }
              >
                LAMBORGHINI
              </p>
              <p
                className={
                  this.state.active
                    ? "title__product__2 active1"
                    : "title__product__2"
                }
              >
                MODELS
              </p>
            </div>
            <div className="title__product__box2">
              <p
                className={
                  this.state.active
                    ? "title__product__3 active2"
                    : "title__product__3"
                }
              >
                MODELS OVERVIEW
              </p>
              <p
                className={
                  this.state.active
                    ? "title__product__4 active2"
                    : "title__product__4"
                }
              >
                All Lamborghini Models
              </p>
              <p
                className={
                  this.state.active ? "hexagon active3_product" : "hexagon"
                }
                onClick={this.scrollToElement}
              >
                &gt;
              </p>
            </div>
          </div>
        </section>
        <section id="sec1">
          <div className="image__product_2">
            <div className="image__cut1__product__box1">
              <img
                className="image__cut1__product1"
                src={require("../../assets/image/product/model-product/revuelto2.jpg")}
                alt="baner"
              />
            </div>
            <div className="image__cut1__product__box2">
              <img
                className="image__cut1__product2"
                src={require("../../assets/image/product/model-product/revuelto_4.jpg")}
                alt="baner"
              />
            </div>

            <p className="describe__product">
              <div className="describe__product__content">
                <img
                  className="logo__revuelto"
                  src={require("../../assets/image/product/model-product/revuelto.png")}
                  alt="baner"
                />
                <p>
                  The Revuelto is the beginning of a new era for Lamborghini,
                  who has harnessed the power of hybridization technology to
                  create the first HPEV (High Performance Electrified Vehicle).
                  Responding to the need for sustainability and powerful
                  performance, the Lamborghini Revuelto rewrites all paradigms
                  and represents a technical masterpiece beyond anyone's
                  imagination. The iconic V12 engine finds a new life in this
                  futuristic automotive masterwork that delivers unparalleled
                  performance and driving emotions.
                </p>
                <Link to="">
                  <p className="link__revuelto link_product">REVUELTO</p>
                </Link>
              </div>
            </p>
          </div>
        </section>
        <section>
          <div className="image__product_huracan">
            <div className="image__product_huracan__box1">
              <img
                className="image__product_huracan1"
                src={require("../../assets/image/product/model-product/huracan1.jpg")}
                alt="baner"
              />
            </div>
            <div className="image__product_huracan__box2">
              <img
                className="image__product_huracan2"
                src={require("../../assets/image/product/model-product/huracan2.jpg")}
                alt="baner"
              />
            </div>

            <p className="describe__product__huracan">
              <div className="describe__product__huracan__content">
                <img
                  className="logo__huracan"
                  src={require("../../assets/image/product/model-product/huracan.png")}
                  alt="baner"
                />
                <p>
                  From our past, we've learned perfection. This is how the first
                  model of the Lamborghini Huracán was born. More performance,
                  more control, more innovation. The Huracán is equipped with a
                  powerful V10 engine and the latest technologies to perform at
                  its absolute best. Engineered to guarantee the best
                  performance and control under any driving condition, it's easy
                  to take to the limit, not to mention extremely fun, thanks to
                  technology like the Lamborghini Doppia Frizione (LDF) dual
                  clutch gearbox and the electronically-controlled four-wheel
                  drive. Enjoy the best driving experience, ever. Discover all
                  the Lamborghini Huracán models.
                </p>
                <Link to="">
                  <p className="link__huracan link_product">HURACAN STERRATO</p>
                </Link>
                <Link to="">
                  <p className="link__huracan link_product">HURACAN TECNICA</p>
                </Link>
                <Link to="">
                  <p className="link__huracan link_product">HURACAN STO</p>
                </Link>
                <Link to="">
                  <p className="link__huracan link_product">
                    HURACAN EVO SPYDER
                  </p>
                </Link>
              </div>
            </p>
          </div>
        </section>

        <section>
          <div className="image__product_urus">
            <div className="image__product_urus__box1">
              <img
                className="image__product_urus1"
                src={require("../../assets/image/product/model-product/urus1.jpg")}
                alt="baner"
              />
            </div>
            <p className="describe__product__urus">
              <div className="describe__product__content__urus">
                <img
                  className="logo__urus"
                  src={require("../../assets/image/product/model-product/urus.png")}
                  alt="baner"
                />
                <p>
                  Lamborghini Urus is the world's first Super Sport Utility
                  Vehicle, in which luxury, sportiness and performance meet
                  comfort and versatility. It offers best-in-class driving
                  dynamics, alongside its unmistakable elegance of design. Urus
                  embodies the characteristics of multiple souls: sporty,
                  elegant and off-road, and has a suitability for everyday
                  driving in a range of environments. With its surprisingly
                  distinct engine sound, combined with high performance,
                  Lamborghini Urus is anything but typical.
                </p>
                <Link to="">
                  <p className="link__urus link_product">URUS</p>
                </Link>
                <Link to="">
                  <p className="link__urus link_product">URUS PERFORMANTE</p>
                </Link>
              </div>
            </p>
          </div>
        </section>

        <section>
          <div className="image__product_limited">
            <div className="box__limited__cut__image">
              <div className="image__product_limited__box1">
                <img
                  className="image__product_limited1"
                  src={require("../../assets/image/product/model-product/limited1.jpg")}
                  alt="baner"
                />
              </div>
              <div className="image__product_limited__box2">
                <img
                  className="image__product_limited2"
                  src={require("../../assets/image/product/model-product/limited2.jpg")}
                  alt="baner"
                />
              </div>
            </div>

            <p className="describe__product__limited">
              <div className="describe__product__limited__content">
                <p className="logo__limited">LIMITED SERIES</p>
                <p className="dis__link__limited">
                  The Limited Series Lamborghini are the most exclusive, limited
                  editions to meet a small and select number of clients. Truly
                  representing the state of the art in the domain of super cars,
                  the Limited Series models express the highest Lamborghini
                  spirit in every respect. Indeed, they are equipped with the
                  most advanced features available in the fields of design and
                  technology.
                </p>
                <Link to="">
                  <p className="link__limited link_product">
                    COUNTACH LPI 800-4
                  </p>
                </Link>
                <Link to="">
                  <p className="link__limited link_product">SIÁN FKP 37</p>
                </Link>
                <Link to="">
                  <p className="link__limited link_product">SIÁN ROADSTER</p>
                </Link>
              </div>
            </p>
          </div>
        </section>

        <section>
          <div className="image__product_concept">
            <p className="describe__product__concept">
              <div className="describe__product__concept__content">
                <p className="logo__concept">CONCEPT SERIES</p>
                <p className="dis__link__concept">
                  The most visionary models, these unique specimens are set to
                  define the highest limits of technology and design. Unveiled
                  at the most prestigious international Motor Shows, they offer
                  an exclusive look at the most innovative solutions that
                  Lamborghini may adopt in its future series-production models.
                </p>
                <Link to="">
                  <p className="link__concept link_product">TERZO MILLENNIO</p>
                </Link>
                <Link to="">
                  <p className="link__concept link_product">ASTERION</p>
                </Link>
                <Link to="">
                  <p className="link__concept link_product">ESTOQUE</p>
                </Link>
              </div>
            </p>
            <div className="box__image__concept">
              <div className="image__product_concept__box1">
                <img
                  className="image__product_concept1"
                  src={require("../../assets/image/product/model-product/concept.jpg")}
                  alt="baner"
                />
              </div>
              <div className="image__product_concept__box2">
                <img
                  className="image__product_concept2"
                  src={require("../../assets/image/product/model-product/concept2.jpg")}
                  alt="baner"
                />
              </div>
            </div>
          </div>
        </section>



        <CompoinentCompany
          title1="AUTOMOBILI LAMBORGHINI"
          discriber1="COMPANY"
          img1={require("../../assets/image/product/model-product/company.jpg")}
          title2="MAKE IT UNIQUE MAKE IT YOURS"
          discriber2="AD PERSONAM"
          img2={require("../../assets/image/product/model-product/company1.jpg")}
        />


      </div>
    );
  }
}
export default Product;
