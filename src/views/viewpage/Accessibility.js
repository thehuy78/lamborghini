import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "../../styles/Pagefooter.scss"
import "../../styles/Pagefooter.scss"

export default class Accessibility extends Component {
    render() {
        return (
            <div>
                <section>
                    <div className="accessibility">
                        <div className="back__link__box">
                            <Link to="/"> <span className="back__link">HOME |</span></Link><span className="back__link">OWNERSHIP</span>
                        </div>
                        <div className="content_accessibility">
                            <p className='title_accessibility'>ACCESSIBILITY</p>
                            <p className='discriber_accessibility'>Automobili Lamborghini S.p.A. promotes digital accessibility and is committed to making its websites usable by everyone. We assess and continuously improve the user experience to meet the requirements of the Web Content Accessibility Guidelines (WCAG 2.0), in compliance with Italian Legislative Decree no. 106 of August 10, 2018, which adopted Directive EU 2016/2102 of the European Parliament and Council.</p>
                            <p className='discriber_accessibility space_accessibility'>Automobili Lamborghini is committed to helping to ensure that its website (and its digital assets) is constantly being updated according to Accessibility Guidelines.</p>
                            <p className='discriber_accessibility'>If you have difficulty accessing any part of the website, you can contact us at accessibility@lamborghini.com. Please specify the URL address of the web page, or in any case a clear and brief description of the problem encountered and the tools used (operating system, browser, assistive technologies). We will do everything in our power to make the web page accessible as soon as possible.</p>
                            <p className='discriber_accessibility'>Automobili Lamborghini S.p.A. gladly welcomes feedback and contributions regarding our website and the accessibility requirements guaranteed therein.</p>
                            <p className='discriber_accessibility bold_accessibility space_accessibility'>DOWNLOAD THE ACCESSIBILITY STATEMENTS</p>
                            <div className='link_accessibility'>
                                <a target='blank' href='https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/legal/accessibility/files/09_25/Dichiarazione%20di%20accessibilit%C3%A0_Lamborghini_Store.pdf'>www.lamborghini.com</a>
                                <a target='blank' href='https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/legal/accessibility/files/03_03/Dichiarazione%20di%20Accessibilit%C3%A0_preowned.lamborghini.com.pdf'>preowned.lamborghini.com</a>
                                <a target='blank' href='https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/legal/accessibility/files/08_18/Dichiarazione%20di%20accessibilit%C3%A0_Media%20Center.pdf'>media.lamborghini.com</a>
                                <a target='blank' href='https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/legal/accessibility/files/09_25/Dichiarazione%20di%20accessibilit%C3%A0_Lamborghini_Store.pdf'>lamborghinistore.com</a>
                            </div>
                        </div>
                    </div>

                </section >
            </div >
        )
    }
}
