import React, { Component } from "react";
import chain from "../images/chain-guardiance.png";
import LockIcon from "@material-ui/icons/Lock";
import TelegramIcon from "@material-ui/icons/Telegram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkIcon from "@material-ui/icons/Link";
import GitHubIcon from "@material-ui/icons/GitHub";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "./FeaturePollNext.scss";
import kwikstarter from "../assests/images/kwikstarter-transparent.png";
import psp from "../images/psp.jpeg";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";


class FeaturedPoolNext extends Component {
  // constructor(props:any) {
  //   super(props); 
    // this.state = {
    //     instructorID : props.match.params.id
    // };
  // }
  render() {
    
    console.log('as',this.props);
    return (
      <div className="featuredpoolnext">
        <div className="container">
          <div className="featured-pools">
            <div className="card">
              <div className="square-box">
                <div className="d-flex">
                  <img src={psp} />
                  <span>
                  Polkasocial
                    <small>Presale Rate = $0.18</small>
                  </span>
                </div>
                <small>Listing: June 11, 2021 </small>
                {/* <small>{this.props.match.params.id}</small> */}
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <div className="total-text">
                  <small>Maximum 1 BNB</small>
                  <h3>0 BNB Raised</h3>
                </div>
                <div className="participants-chip">0 Participants</div>
              </div>
              <div className="total-text mt-1">
                <small>Progress</small>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuenow={100}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
                <div className="counts d-flex justify-content-between">
                  <small>100.361% (Min 13.333%)</small>
                  <small>752.710/750.000 BNB</small>
                </div>
              </div>
              <div className="d-flex block">
                <ul>
                  <li>
                    <small>Softcap</small>
                    <span>$ 350K</span>
                  </li>
                  <li>
                    <small>Min Per Wallet</small>
                    <span>0.10 BNB</span>
                  </li>
                  <li>
                    <small>Presale Rate</small>
                    <span>$0.18</span>
                  </li>
                  <li>
                    <small>Liquidity Allocation</small>
                    <span>40%</span>
                  </li>
                  <li>
                    <small>Headcap</small>
                    <span>$ 600K</span>
                  </li>
                  <li>
                    <small>Max Per Wallet</small>
                    <span>1.00 BNB</span>
                  </li>
                  <li>
                    <small>PancakeSwap Listing Rate</small>
                    <span>0.0068 BNB</span>
                  </li>
                  <li>
                    <small>Liquidity Lock Duration</small>
                    <span>15% unlock on TGE, then 21.25% for 4 months</span>
                  </li>
                </ul>
              </div>
              <div className="time-limit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                >
                  <circle cx="4" cy="4" r="4" fill="#010415"></circle>
                </svg>
                Open in 11 June
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="your-investment">
            <div className="heading">Your Investment</div>
            <div className="d-flex investment-blocks">
              <span>
                <small>Vote</small>
                <h3>0.000 Start</h3>
                <button className="button-primary button-disable">Vote</button>
              </span>
              <span>
                <small>Your Tokens</small>
                <h3>0.000</h3>
                <button className="button-primary">Claim Tokens</button>
              </span>
              <span>
                <small>Your BNB Investment</small>
                <h3>0.00 BNB</h3>
                <button className="button-primary button-disable">
                  Get Refund
                </button>
              </span>
              <span>
                <small>Buy Tokens</small>
                <h3>1 Token = $0.18</h3>
                <button className="button-primary">Buy</button>
              </span>
              {/* <span>
                <h3>
                  <LockIcon />
                </h3>
                <button className="button-primary">Lock Liq and List</button>
              </span> */}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="imp-links">
            <div className="heading">Important Links</div>
            <div className="d-flex justify-content-between">
              <div>
                <h4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                  >
                    <circle cx="4" cy="4" r="4" fill="#00afff"></circle>
                  </svg>
                  Token Contract Address
                </h4>
              </div>
              <div>
                <h4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                  >
                    <circle cx="4" cy="4" r="4" fill="#00afff"></circle>
                  </svg>
                  PancakeSwap Address
                </h4>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div>
                <h4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                  >
                    <circle cx="4" cy="4" r="4" fill="#00afff"></circle>
                  </svg>
                  Locked Liquidity Address
                </h4>
              </div>
              <div>
                <h4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                  >
                    <circle cx="4" cy="4" r="4" fill="#00afff"></circle>
                  </svg>
                  GoSwapp Address
                </h4>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div>
                <h4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                  >
                    <circle cx="4" cy="4" r="4" fill="#00afff"></circle>
                  </svg>
                  Presale Contract Address
                </h4>
              </div>
              <div>
                <h4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                  >
                    <circle cx="4" cy="4" r="4" fill="#00afff"></circle>
                  </svg>
                  Connect
                </h4>
                <h5>
                  <a href=" https://t.me/polkasocial"><TelegramIcon /></a>
                  <a href=" https://twitter.com/polkasocial"><TwitterIcon /></a>
                  <a href=" https://home.polkasocial.org"><LinkIcon /></a>
                  <a href=""><GitHubIcon /></a>
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="container d-flex">
          <div className="audit">
            <div className="heading">Audit</div>
            <div className="d-flex flex-column">
              <div className="verified-chip">
                <CheckCircleIcon />
                Verified
              </div>
              <div className="d-flex justify-content-end">
                <small>
                  by
                  <span className="text-light-blue">Rug Detectives</span>
                </small>
              </div>
            </div>
            <div className="d-flex">
              <a href="https://drive.google.com/file/d/1dCCl-69PeOtqJyrEQzlAeDpGYWngMm9b/view?usp=sharing">
                https://kwikstarter.finance/RD-Audit-v2.pdf
              </a>
            </div>
          </div>
          <div className="disclaimer">
            <div className="heading">Disclaimer</div>
            <p> 
              The Kwikstarter team does not endorse, support or otherwise
              perform any due diligence on the projects listed on its platform.
              As always, please DO YOUR OWN RESEARCH before investing any of
              your hard-earned BNB into these projects and never invest more
              than you are willing to lose.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default FeaturedPoolNext;
