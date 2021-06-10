import React from "react";
import blockchain from "../images/blockchain-cuties.jpg";
import konomi from "../images/konomi-network.jpg";
import oddz from "../images/oddz-finance.png";
import shyft from "../images/shyft-network.jpg";
import convergence from "../images/convergence-finance.jpg";
import chain from "../images/chain-guardiance.png";
import ethernity from "../images/ethernity.jpg";
import EmailIcon from "@material-ui/icons/Email";
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
import TelegramIcon from "@material-ui/icons/Telegram";
import LanguageIcon from "@material-ui/icons/Language";
import banner_img from "../images/hero-section.png";
import image_round from "../images/about-us.png";
import kwikstarter from "../assests/images/kwikstarter-transparent.png";
import veble from "../assests/images/UseOnDark_icon.png";
import psp from "../images/psp.jpeg";
import medium_light from "../images/medium-light.svg";
import medium from "../images/medium.svg";
import rocketArtboard from "../images/rocket-Artboard.png";
import rocketlaunchpad from "../images/kwikswap-rocket-falcon-launchpad.png";
import rocketrocket from "../images/kwikswap-rocket-falcon.png";
import rocketone from "../images/FINAL-ROCKETS-01.svg";
import rockettwo from "../images/FINAL-ROCKETS-02.svg";
import rocketthree from "../images/FINAL-ROCKETS-03.svg";
import rocketfour from "../images/FINAL-ROCKETS-04.svg";
import rocketfive from "../images/FINAL-ROCKETS-05.svg";
import rocketsix from "../images/FINAL-ROCKETS-06.svg";
import linebackground from "../images/lines-bg.png";
import { Link, NavLink } from "react-router-dom";
import { plans } from "../constants/plans/plans";
import { useUpgradeUserPlan } from "../state/stake/hooks";

import "./Homepage.scss";

const Homepage = () => {
  const setPlan = useUpgradeUserPlan();

  return (
    <div className="homepage">
      <div className="hero-section">
        <div className="container hero-text-container">
          <div className="wrap-content">
            {/* <img src={rocketArtboard} /> */}
            <h2>
              Kwikstarter is a decentralized IDO platform <br />
              on the binance smart chain network
            </h2>
            <h5>
              Kwikstarter BSC IDO Launchpad enables crypto start-ups and
              projects the ability
              <br />
              to raise liquidity, distribute tokens and go-to-market through
              Kwikswap DEX!
            </h5>
            <span className="mt-4">
              <Link to="/projects" className="custom-btn button-secondary">
                View All Projects
              </Link>
              <a
                href="https://app.kwikswap.org"
                target="_blank"
                rel="noreferrer"
                className="custom-btn button-primary"
              >
                Buy On Kwikswap
              </a>
              <a
                href="https://home.kwikswap.org/application-for-kwi"
                rel="noreferrer"
                target="_blank"
                className="custom-btn button-secondary"
              >
                Apply For IDO
              </a>
            </span>
          </div>
        </div>
        <div className="container">
          <div className="wrap-content">
            <h2>What is Kwikstarter?</h2>
            <h5>
              Kwikstarter BSC IDO Launchpad enables crypto start-ups and
              projects the ability to raise liquidity, distribute tokens and
              go-to-market through Kwikswap DEX. We assist in incubating and
              nurturing projects while leveraging of our Kwikswap Network of
              partners to help elevate them to outer space!
            </h5>
            <div className="d-flex mt-4">
              <Link to="/projects">
                <button className="button-primary">View All Projects</button>
              </Link>
              <Link to="/litepaper">
                <button className="button-secondary">Learn More</button>
              </Link>
            </div>
          </div>
          <div className="wrap-img">
            <img src={rocketArtboard} />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="about-us">
          <div className="heading">About Us</div>
          <div className="d-flex">
            <div className="circle-animation">
              <img src={rocketlaunchpad} />
            </div>
            <div className="content">
              <div>
                <h4>Why choose Kwikstarter?</h4>
                <h5>
                  Kwikstarter BSC IDO will create the most fair decentralized
                  launches for projects which allows all token holders a
                  guaranteed allocation. We will also integrate an anti-bot
                  mechanism that stops the use of automatic bots that reduce
                  allocation size from users generally in other launchpads. We
                  believe you will find Kwikstarter Launchpad the fairest IDO
                  launchpad on offer!
                  <br />
                  <br />
                  Our model ensures that anyone who whitelists in the specified
                  time *launch window* will receive a token allocation on
                  Kwikstarter.
                </h5>
                <small>
                  At Kwikstarter, we will offer an onboarding experience like no
                  other for projects and assist in the nurturing stages of their
                  listing and continue to offer that support mechanism through
                  to market creation on Kwikswap.
                </small>
              </div>
              <div>
                <h4>What’s in it for KWIK Token holders?</h4>
                <h5>
                  KWIK Token holders will not only be able to take a role in the
                  governance of Kwikswap DEX, but also play an integral part of
                  fielding ONLY THE BEST projects onto the Kwikstarter
                  Launchpad.
                </h5>
              </div>
            </div>
          </div>
          <div className="d-flex">
            <div className="content content-full">
              <div>
                <h4>
                  How to contribute to Projects that are launching on
                  Kwikstarter…
                </h4>
                <h5>
                  Every Project will feature an allocation and will launch over
                  two Sales Stages. To participate in the launchpad sales
                  stages, contributors must hold a minimum of 1000 KWIK Tokens
                  to be whitelisted.
                </h5>
                <small>
                  We will ensures that everyone that whitelists in the required
                  time frame will receive a token allocation.
                </small>
              </div>
              <div>
                <h4>How does a punter join Kwikstarter?</h4>
                <h5>
                  Firstly it is a requirement that prospective contributors hold
                  KWIK Tokens. Another value add of holding KWIK Tokens is that
                  holders/stokers appreciate a solid 12% APY staking reward that
                  is paid monthly.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="upcoming-pools">
          <div className="heading">Upcoming Pools</div>
          <div className="d-flex flex-wrap mt-5">
            {/* <Link to="/featured-pool-next"> */}
            <Link to="/featured-pool-next" className="card newcard">
              <div className="square-box">
                <img src={psp} />
                Polkasocial
              </div>
              <div className="total-text">
                <small>Total Raise</small>
                <h3>Polkasocial</h3>
              </div>
              <div className="d-flex block">
                <ul>
                  <li>
                    <small>Min Allocation</small>
                    <span>$150k</span>
                  </li>
                  <li>
                    <small>Max Allocation</small>
                    <span>$600k</span>
                  </li>
                  <li>
                    <small>Access</small>
                    <span>public</span>
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
                TBA
              </div>
            </Link>
            {/* </Link> */}

            {/* <Link to="/featured-pool-next"> */}
            <Link to="/vab-featured" className="card">
              <div className="square-box">
                <img src={veble} />
                Vabble
              </div>
              <div className="total-text">
                <small>Total Raise</small>
                <h3>Vabble</h3>
              </div>
              <div className="d-flex block">
                <ul>
                  <li>
                    <small>Min Allocation</small>
                    <span>TBA</span>
                  </li>
                  <li>
                    <small>Max Allocation</small>
                    <span>TBA</span>
                  </li>
                  <li>
                    <small>Access</small>
                    <span>TBA</span>
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
                TBA
              </div>
            </Link>
            {/* </Link> */}

            {/* <Link to="/featured-pool-next"> */}

            <Link to="/featured-pool-next" className="card">
              <div className="square-box">
                <img src={kwikstarter} />
                TBA
              </div>
              <div className="total-text">
                <small>Total Raise</small>
                <h3>TBA</h3>
              </div>
              <div className="d-flex block">
                <ul>
                  <li>
                    <small>Min Allocation</small>
                    <span>TBA</span>
                  </li>
                  <li>
                    <small>Max Allocation</small>
                    <span>TBA</span>
                  </li>
                  <li>
                    <small>Access</small>
                    <span>TBA</span>
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
                TBA
              </div>
            </Link>
            {/* </Link> */}

            <Link to="/featured-pool-next" className="card">
              <div className="square-box">
                <img src={kwikstarter} />
                TBA
              </div>
              <div className="total-text">
                <small>Total Raise</small>
                <h3>TBA</h3>
              </div>
              <div className="d-flex block">
                <ul>
                  <li>
                    <small>Min Allocation</small>
                    <span>TBA</span>
                  </li>
                  <li>
                    <small>Max Allocation</small>
                    <span>TBA</span>
                  </li>
                  <li>
                    <small>Access</small>
                    <span>TBA</span>
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
                TBA
              </div>
            </Link>
            <Link to="/featured-pool-next" className="card">
              <div className="square-box">
                <img src={kwikstarter} />
                TBA
              </div>
              <div className="total-text">
                <small>Total Raise</small>
                <h3>TBA</h3>
              </div>
              <div className="d-flex block">
                <ul>
                  <li>
                    <small>Min Allocation</small>
                    <span>TBA</span>
                  </li>
                  <li>
                    <small>Max Allocation</small>
                    <span>TBA</span>
                  </li>
                  <li>
                    <small>Access</small>
                    <span>TBA</span>
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
                TBA
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="featured-pools">
          <div className="heading">Featured Pools</div>
          <div className="inline-content">
            <div className="d-flex flex-wrap">
              <Link to="/featured-pool-next" className="card">
                <div className="square-box">
                  <img src={kwikstarter} />
                  <span>
                    TBA
                    <small>TBA</small>
                  </span>
                </div>
                <div className="total-text">
                  <small>Ratio per 1 BNB</small>
                  <h3>TBA</h3>
                </div>
                <div className="total-text mt-1">
                  <small>Progress</small>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "100%" }}
                      aria-valuetext="100"
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                  <div className="counts d-flex justify-content-between">
                    <small>TBA</small>
                    <small>TBA</small>
                  </div>
                </div>
                <div className="d-flex block">
                  <ul>
                    <li>
                      <small>Participants</small>
                      <span>TBA</span>
                    </li>
                    <li>
                      <small>Maximum</small>
                      <span>TBA</span>
                    </li>
                    <li>
                      <small>Access</small>
                      <span>TBA</span>
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
                  TBA
                </div>
              </Link>
              <Link to="/featured-pool-next" className="card">
                <div className="square-box">
                  <img src={kwikstarter} />
                  <span>
                    TBA
                    <small>TBA</small>
                  </span>
                </div>
                <div className="total-text">
                  <small>Ratio per 1 BNB</small>
                  <h3>TBA</h3>
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
                    <small>TBA</small>
                    <small>TBA</small>
                  </div>
                </div>
                <div className="d-flex block">
                  <ul>
                    <li>
                      <small>Participants</small>
                      <span>TBA</span>
                    </li>
                    <li>
                      <small>Maximum</small>
                      <span>TBA</span>
                    </li>
                    <li>
                      <small>Access</small>
                      <span>TBA</span>
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
                  TBA
                </div>
              </Link>
              <Link to="/featured-pool-next" className="card">
                <div className="square-box">
                  <img src={kwikstarter} />
                  <span>
                    TBA
                    <small>TBA</small>
                  </span>
                </div>
                <div className="total-text">
                  <small>Ratio per 1 BNB</small>
                  <h3>TBA</h3>
                </div>
                <div className="total-text mt-1">
                  <small>Progress</small>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "100%" }}
                      aria-valuetext={"100"}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                  <div className="counts d-flex justify-content-between">
                    <small>TBA</small>
                    <small>TBA</small>
                  </div>
                </div>
                <div className="d-flex block">
                  <ul>
                    <li>
                      <small>Participants</small>
                      <span>TBA</span>
                    </li>
                    <li>
                      <small>Maximum</small>
                      <span>TBA</span>
                    </li>
                    <li>
                      <small>Access</small>
                      <span>TBA</span>
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
                  TBA
                </div>
              </Link>
            </div>
            <img src={rocketrocket} className="rocket-img" />
          </div>
          <div className="d-flex justify-content-end">
            <a className="single-link" href="javascript:void(0)">
              View All Pools
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="tiered-system">
          <div className="main-heading">
            <h2>Kwikstarter Member Tiers</h2>
            <h5>
              We have a series of tiered levels at Kwikstarter, each containing
              their own unique benefits as set out below:
            </h5>
          </div>
          <div className="heading">Tiers</div>
          <div className="carousel">
            <div className="container">
              <ul className="cards">
                {Object.keys(plans).map((key) => {
                  const items = plans[key];
                  return (
                    <React.Fragment key={key}>
                      <li className="card">
                        <img src={items.planSrc} alt={items.planName} />
                        <div className="card-carousel">
                          <div className="square-box">
                            <span>{items.planName}</span>
                          </div>
                          <div className="total-text">
                            <small>$KWIK Staked</small>
                            <h3>{items.neededStakeAmount}</h3>
                          </div>
                          <div className="d-flex block">
                            <ul>
                              <li>
                                <small>KWIK Staking Length</small>
                              </li>
                              <li>
                                <small>For launchpad event duration</small>
                              </li>
                              <li>
                                <small>Pool Weight</small>
                                <span>{items.poolWeight}</span>
                              </li>
                            </ul>
                          </div>

                          {items.isWhiteListed ? (
                            <div className="d-flex flex-column whitelist-req">
                              <small>Whitelist Requirement: Twitter</small>

                              <div className="d-flex flex-column">
                                <div className="d-flex mb-10">
                                  <span>Like</span>
                                  <span>Comment</span>
                                </div>
                                <div>
                                  <span>Retweet</span>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="d-flex flex-column whitelist-req">
                              <small>Whitelist Requirement</small>
                              <div className="d-flex flex-column">
                                <div className="d-flex mb-10">
                                  <span>No Required</span>
                                </div>
                              </div>
                            </div>
                          )}
                          <Link to="/staking">
                            <button
                              className="time-limit stakeNow"
                              onClick={() => {
                                return setPlan(
                                  items.neededStakeAmount,
                                  items.poolWeight,
                                  items.planSrc,
                                  items.planName
                                );
                              }}
                            >
                              Stake Now
                            </button>
                          </Link>
                        </div>
                      </li>
                    </React.Fragment>
                  );
                })}
              </ul>
            </div>
          </div>
          <img src={linebackground} className="line-background" />
        </div>
      </div>
      <div className="container">
        <div className="contact">
          <div className="heading">Contact</div>
          <div className="d-flex justify-content-center">
            <div className="circle-animation-wrap">
              <a
                href="https://marketing@kwikswap.org"
                target="_blank"
                rel="noreferrer"
                className="circle-animation"
              >
                <EmailIcon />
              </a>
            </div>
            <div className="circle-animation-wrap">
              <div className="circle-animation">
                <i className="fab fa-discord"></i>
              </div>
            </div>
            <div className="circle-animation-wrap">
              <a
                href="https://t.me/kwikswapdex"
                target="_blank"
                rel="noreferrer"
                className="circle-animation"
              >
                <TelegramIcon />
              </a>
            </div>
            <div className="circle-animation-wrap">
              <a
                href="https://kwikswap.org"
                target="_blank"
                rel="noreferrer"
                className="circle-animation"
              >
                <LanguageIcon />
              </a>
            </div>
            <div className="circle-animation-wrap">
              <a
                href="https://medium.com/@kwikswap"
                target="_blank"
                rel="noreferrer"
                className="circle-animation medium-logo"
              >
                <React.Fragment>
                  <img src={medium_light} />
                </React.Fragment>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
