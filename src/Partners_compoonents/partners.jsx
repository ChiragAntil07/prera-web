import '../CSS/Partners.css';
import React from "react";
import Nav from '../Navbar.jsx';
import canvalogo from '../assets/partners/canvalogo.png';
import redbull from '../assets/partners/redbull.png';

function Partners() {
  return (
    <div className="partnerPage">

      <div className="partnerTop">

        <h1 className="mainHeading">
          OUR <span>PARTNERS</span>
        </h1>

        <p className="subText">
          We collaborate with leading brands to create impactful event
          experiences and meaningful partnerships.
        </p>
      </div>

      <div className="logoGrid">
        <div className="logoBox"><img src={canvalogo} alt="logo 1" /></div>
        <div className="logoBox"><img src={redbull} alt="logo 2" /></div>
        <div className="logoBox"><img src={canvalogo} alt="logo 3" /></div>
        <div className="logoBox"><img src={canvalogo} alt="logo 4" /></div>
        <div className="logoBox"><img src={canvalogo} alt="logo 5" /></div>
        <div className="logoBox"><img src={canvalogo} alt="logo 6" /></div>
        <div className="logoBox"><img src={canvalogo} alt="logo 7" /></div>
        <div className="logoBox"><img src={canvalogo} alt="logo 8" /></div>
        <div className="logoBox"><img src={canvalogo} alt="logo 9" /></div>
        <div className="logoBox"><img src={canvalogo} alt="logo 10" /></div>
        <div className="logoBox"><img src={canvalogo} alt="logo 11" /></div>
        <div className="logoBox"><img src={canvalogo} alt="logo 12" /></div>
        <div className="logoBox"><img src={canvalogo} alt="logo 13" /></div>
        <div className="logoBox"><img src={canvalogo} alt="logo 14" /></div>
        <div className="logoBox"><img src={canvalogo} alt="logo 15" /></div>
        <div className="logoBox"><img src={canvalogo} alt="logo 16" /></div>
        <div className="logoBox"><img src={canvalogo} alt="logo 17" /></div>
        <div className="logoBox"><img src={canvalogo} alt="logo 18" /></div>
        <div className="logoBox"><img src={canvalogo} alt="logo 19" /></div>
        <div className="logoBox"><img src={canvalogo} alt="logo 20" /></div>
        <div className="logoBox"><img src={canvalogo} alt="logo 21" /></div>
        <div className="logoBox"><img src={canvalogo} alt="logo 22" /></div>
      </div>

    </div>
  );
}

export default Partners;