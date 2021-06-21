import React from "react";
import "./ProjectCard.scss";
import kwikstarter from "../../assests/images/kwikstarter-transparent.png";
import veble from "../../assests/images/UseOnDark_icon.png";
import LanguageIcon from '@material-ui/icons/Language';
import psp from "../../images/psp.jpeg";
import { Link } from "react-router-dom";


function ProjectCard(props) {
  const as=props;
  const source=as.linking.src;
  console.log(as.linking);
  return (
    <>
    <Link to={as.linking.link}>
    <div className="projectCard">
      <div className="cardHeader">
        <div className="logo">
          <img src={as.linking.name=="Polkasocial"?psp:veble} alt={as.linking.name} />
        </div>
        <div className="headerInfo">
          <h1>{as.linking.name}</h1>
          <div className="links">
            <div className="socialLink">
              <a href={as.linking.medium}><i className="fab fa-medium-m"></i></a>
            </div>
            <div className="socialLink">
              <a href={as.linking.twiiter}><i className="fab fa-twitter"></i></a>
            </div>
            <div className="socialLink">
              <a href={as.linking.telegrame}><i className="fab fa-telegram-plane"></i></a>
            </div>
            <div className="socialLink">
              <a href={as.linking.Language}><LanguageIcon /></a>
            </div>
          </div>
          <div className="status">
            <div className="dot"></div>
            <h4>TBA</h4>
          </div>
          <h4 className="buds">BNB</h4>
        </div>
      </div>
      <div className="cardInfo">
        {/* <p>
          A full service #NFT & DeFi platform that tokenizes, launches and
          trades intellectual property rights from Arts and Inventions.
        </p> */}
        <Link to={as.linking.link}><p>Learn More</p></Link>
        <div className="moreInfo">
          <div className="info">
            <p>Swap Rate</p>
            <h1>$0.18</h1>
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
            <h4>0.0000/0.00</h4>
          </div>
        </div>
      </div>
    </div>
    </Link>
    </>
  );
}

export default ProjectCard;
