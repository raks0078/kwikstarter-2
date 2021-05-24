import React, { Component } from "react";
import "./LitePaper.scss";

class LitePaper extends Component {
  render() {
    return (
      <div className="litepaper">
        <div className="container">
          <div className="main-heading">
            <h2>Kwikstarter Tier Levels</h2>
            <h5>
              Kwikstarter Tier Levels are influenced by SpaceX Launch Vehicles
            </h5>
          </div>
          <div className="cards">
            <div className="card">
              <b>KWIK Grasshopper</b> 1,000 KWIK
              <br />
              KWIK Staking Length? For launchpad event duration
              <br />
              Whitelist Requirement: Twitter - Like, Comment & Retweet
              <br />
              Allocation Guarantee? Yes
              <br />
              Pool Weight: 10
            </div>
            <div className="card">
              <b>KWIK Falcon 1</b> 2,000 KWIK
              <br />
              KWIK Staking Length? For launchpad event duration
              <br />
              Whitelist Requirement: Twitter - Like, Comment & Retweet
              <br />
              Allocation Guarantee? Yes
              <br />
              Pool Weight: 30
            </div>
            <div className="card">
              <b>KWIK Dragon</b> 5,000 KWIK
              <br />
              KWIK Staking Length? For launchpad event duration
              <br />
              Whitelist Requirement: N/A
              <br />
              Allocation Guarantee? Yes
              <br />
              Pool Weight: 60
            </div>
            <div className="card">
              <b>KWIK Falcon Heavy</b> 10,000 KWIK
              <br />
              KWIK Staking Length? For launchpad event duration
              <br />
              Whitelist Requirement: N/A
              <br />
              Allocation Guarantee? Yes
              <br />
              Pool Weight: 130
            </div>
            <div className="card">
              <b>KWIK Starship</b> 20,000 KWIK
              <br />
              KWIK Staking Length? For launchpad event duration
              <br />
              Whitelist Requirement: N/A
              <br />
              Allocation Guarantee? Yes
              <br />
              Pool Weight: 400
            </div>
            <div className="card">
              <b>KWIK Moon Base</b> Top 10 KWIK holders
              <br />
              KWIK Staking Length? For launchpad event duration
              <br />
              Whitelist Requirement: N/A
              <br />
              Allocation Guarantee? Yes
              <br />
              Pool Weight: Additional Bonus LP
            </div>
          </div>
          <div className="content">
            <h4>
              What type of support do we offer projects we onboard onto
              Kwikstarter?
            </h4>
            <h5>
              To what levels do we support projects and how we rank or rate
              projects on our platform are set out below:
            </h5>
            <h5>
              <b>We classify these in three levels of support:</b>
            </h5>
            <ul>
              <li>
                <b>Level 1 (Incubator class):</b> We are hands on with this type
                of project from their early concept to listing on Kwikswap DEX
                and CEX. We also continue to assist in nurturing the project
                with marketing and community building through our worldwide
                network.
              </li>
              <li>
                <b>Level 2 (Strategic class):</b> Our team’s involvement is
                mainly cantered around marketing and social media strategic
                planning and execution. We will assist across all SNS mediums
                with the project team.
              </li>
              <li>
                <b>Level 3 (Fundraiser class):</b> The relationship we have with
                the project is purely to allow the project team the Kwikstarter
                platform where our only responsibility is managing sales and
                fielding the contributor support channels.
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default LitePaper;
