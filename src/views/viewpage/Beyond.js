import React from "react";
import "../../styles/Beyond.scss"
import { Link } from "react-router-dom";

class Beyond extends React.Component {
constructor(props) {
        super(props);
        this.state = {
            active: false,
        }
    }

     componentDidMount() {
     this.setState({ active: true });
      const beyond = document.getElementById('beyond');
    if (beyond) {
      window.scrollTo({
        behavior: 'smooth',
        top: beyond.offsetTop, 
      });
    }

  }
 

    render() {
        return (
            <>
               <div className="beyond__container" id="beyond">
                <section>
                    <div className="image__beyond">
                        <div className={this.state.active?"back__link__box active1" :"back__link__box"}>
                           <Link to="/"> <span  className="back__link">HOME |</span></Link><span className="back__link">BEYOND</span>
                        </div>
                        <div className="title__beyond__box1">
                            <p className={this.state.active?"title__beyond__1 active3" :"title__beyond__1"} >DRIVING HUMANS</p>
                            <p className={this.state.active?"title__beyond__2 active1" :"title__beyond__2"} >BEYOND</p>
                            <p className={this.state.active?"hexagon_beyond active2" :"hexagon_beyond"}>&gt;</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="sec1__beyond">
                        <div className="box_sec1_beyond">
                             <img className="image__sec1__beyond" src={require('../../assets/image/beyond/beyond1.jpg')} alt="baner" />
                        </div>
                        <div className="box_title_sec1_beyond">
                            <div className="box_dis__beyond">
                            <p className="title_sec1_beyond">OVERVIEW</p>
                            <p className="dis_sec1_beyond">The greatest challenge ever: moving forward and always raising the bar, going beyond the status quo to build a brand new limitless world.</p>
                            <div className="box_link_sec1_beyond">
                                  <p className='hexagon_beyond hexagon_beyond__1'>&gt;</p>
                                  <p className="dis_link_beyond">Brands Manifesto</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="sec2__beyond">
                    <div className="sec2__beyond__box sec2__beyond__box1">
                        <img className="image__sec2__beyond" src={require('../../assets/image/beyond/beyond2.jpg')} alt="baner" />
                        <div className="dis__sec2_beyond">
                            <p className="date__sec2_beyond">6 MARCH 2023</p>
                            <p className="title__sec2_beyond">AUTOMOBILI LAMBORGHINI TOP EMPLOYER ITALY 2022</p>
                            <Link to=""><p className="readmore__sec2_beyond">READ MORE</p></Link>
                        </div>
                    </div>
                    <div className="sec2__beyond__box sec2__beyond__box2">
                        <img className="image__sec2__beyond" src={require('../../assets/image/beyond/beyond3.jpg')} alt="baner" />
                     <div className="dis__sec2_beyond">
                            <p className="date__sec2_beyond">21 FEBRUARY 2023</p>
                            <p className="title__sec2_beyond">CHASING THE FUTURE: IKEUCHI X LAMBORGHINI</p>
                            <Link to=""><p className="readmore__sec2_beyond">READ MORE</p></Link>
                        </div>
                    </div>
                    <div className="sec2__beyond__box sec2__beyond__box3">
                        <img className="image__sec2__beyond" src={require('../../assets/image/beyond/beyond4.jpg')} alt="baner" /> 
                     <div className="dis__sec2_beyond">
                            <p className="date__sec2_beyond">20 JANUARY 2023</p>
                            <p className="title__sec2_beyond">RACE TO INSPIRE: IRON DAMES</p>
                            <Link to=""><p className="readmore__sec2_beyond">READ MORE</p></Link>
                        </div>
                    </div>
                </section>
                </div>
               
            </>
        )
    }
}
export default Beyond;