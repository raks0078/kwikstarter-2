import React from "react";
import "./ProjectCard.scss";
import kwikstarter from "../../assests/images/kwikstarter-transparent.png";
import LanguageIcon from '@material-ui/icons/Language';
import psp from "../../images/psp.jpeg";
import { Link } from "react-router-dom";


function ProjectCard() {
  return (
    <div className="projectCard">
      <div className="cardHeader">
        <div className="logo">
          <img src={psp} alt="kwikstater" />
        </div>
        <div className="headerInfo">
          <h1>Polkasocial</h1>
          <div className="links">
            <div className="socialLink">
              <a href="https://medium.com/@polkasocial/about"><i className="fab fa-medium-m"></i></a>
            </div>
            <div className="socialLink">
              <a href="https://twitter.com/polkasocial"><i className="fab fa-twitter"></i></a>
            </div>
            <div className="socialLink">
              <a href="https://t.me/polkasocial"><i className="fab fa-telegram-plane"></i></a>
            </div>
            <div className="socialLink">
              <a href="https://polkasocial.org/"><LanguageIcon /></a>
            </div>
          </div>
          <div className="status">
            <div className="dot"></div>
            <h4>Opens in 11 June</h4>
          </div>
          <h4 className="buds">BNB</h4>
        </div>
      </div>
      <div className="cardInfo">
        <p>
          A full service #NFT & DeFi platform that tokenizes, launches and
          trades intellectual property rights from Arts and Inventions.
        </p>
        <Link to="/featured-pool-next"><p>Learn More</p></Link>
        <div className="moreInfo">
          <div className="info">
            <p>Swap Rate</p>
            <h1>TBA</h1>
          </div>
          <div className="info">
            <p>Cap</p>
            <h1>$600k</h1>
          </div>
          <div className="info">
            <p>Access</p>
            <h1>Private</h1>
          </div>
        </div>
        <div className="progressBar">
          <p>Progress</p>
          <div className="bar"></div>
          <div className="percentage">
            <h4>0.00%</h4>
            <h4>0.0000/TBA</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
