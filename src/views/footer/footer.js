import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

class footerbar extends React.Component {
  render() {
    return (
      <div className="footer__box">
        <div className="footer__box__1">
          <Link className="link__footer" to="">
            COMPANY
          </Link>
          <Link className="link__footer" to="">
            CAREERS
          </Link>
          <Link className="link__footer" to="/contact">
            CONTACT US
          </Link>
          <Link className="link__footer" to="/sustainability">
            SUSTAINANILITY
          </Link>
          <Link className="link__footer" to="">
            MEDIA CENTER
          </Link>
          <Link className="link__footer" to="">
            PRIVACY & LEGAL
          </Link>
          <Link className="link__footer" to="">
            COOKIE SETTINGS
          </Link>
          <Link className="link__footer" to="">
            SITEMAP
          </Link>
          <Link className="link__footer" to="/feedback">
            FEEDBACK
          </Link>
          <Link className="link__footer" to="/accessibility">
            ACCESSIBILITY
          </Link>
        </div>
        <div className="footer__box__2">
          <Link to="">
            <i class="fa-brands fa-instagram"></i>
          </Link>
          <Link to="">
            <i class="fa-brands fa-facebook"></i>
          </Link>
          <Link to="">
            <i class="fa-brands fa-youtube"></i>
          </Link>

          <Link to="">
            <i class="fa-brands fa-x-twitter"></i>
          </Link>
          <Link to="">
            <i class="fa-brands fa-tiktok"></i>
          </Link>
          <Link to="">
            <i class="fa-brands fa-linkedin-in"></i>
          </Link>

          <Link to="">
            <i class="fa-brands fa-weixin"></i>
          </Link>
          <Link to="">
            <i class="fa-brands fa-discord"></i>
          </Link>
          <Link to="">
            <i class="fa-regular fa-envelope"></i>
          </Link>
        </div>
        <div className="footer__box__3">
          <p className="title__footer">
            * The consumption and emissions values in the website refer to your
            geographical IP. This value might be unrealistic if you navigate
            using VPN or if the position of your Internet provider is imprecise.
            If you believe you are incorrectly geolocalized, contact your dealer
            to get valid consumption and emissions information in your area.
          </p>
          <p className="dis__footer">
            Copyright © 2023 Automobili Lamborghini S.p.A. a sole shareholder
            company part of Audi Group.
          </p>
          <p className="dis__footer">
            All rights reserved. VAT no. IT 00591801204
          </p>
          <p className="dis__footer">
            WARNING ABOUT ILLEGAL OFFERS OF ALLEGED SHARES OF AUTOMOBILI
            LAMBORGHINI S.P.A.
          </p>
          <p className="dis__footer">
            Automobili Lamborghini S.p.A. got the notice that several third
            parties across different countries are allegedly offering shares in
            Automobili Lamborghini S.p.A. These offers are unlawful and
            originate neither from Volkswagen Aktiengesellschaft nor from any of
            its subsidiaries.
          </p>
        </div>
      </div>
    );
  }
}
export default footerbar;
