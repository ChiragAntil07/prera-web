import './Partners.css';
import React from "react";
import Nav from '../Navbar.jsx';
import redbull from '../assets/partners/redbill.png';
import canva from '../assets/partners/canva.png';
import axure from '../assets/partners/axure.png';
import denver from '../assets/partners/denver.png';
import dell from '../assets/partners/dell.png';
import truescholar from '../assets/partners/truescholar.png';
import patym from '../assets/partners/patym.png';
import hell from '../assets/partners/hell.png';
import abhibus from '../assets/partners/abhibus.png';
import unstop from '../assets/partners/unstop.png';
import dominos from '../assets/partners/dominos.png';
import unibazar from '../assets/partners/unibazar.png';


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
        <div className="logoBox"><img src={redbull} alt="Red Bull" /></div>
        <div className="logoBox"><img src={canva} alt="Canva" /></div>
        <div className="logoBox"><img src={axure} alt="Axure" /></div>
        <div className="logoBox"><img src={denver} alt="Denver" /></div>
        <div className="logoBox"><img src={dell} alt="Dell" /></div>
        <div className="logoBox"><img src={truescholar} alt="TrueScholar" /></div>
        <div className="logoBox"><img src={patym} alt="Patym" /></div>
        <div className="logoBox"><img src={hell} alt="Hell" /></div>
        <div className="logoBox"><img src={abhibus} alt="Abhibus" /></div>
        <div className="logoBox"><img src={unstop} alt="Unstop" /></div>
        <div className="logoBox"><img src={dominos} alt="Dominos" /></div>
        <div className="logoBox"><img src={unibazar} alt="Unibazar" /></div>

      </div>

    </div>
  );
}

export default Partners;