import React from "react";
import "./Unstake.scss";

import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import ReportProblemIcon from "@material-ui/icons/ReportProblem";
import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
function UnStake() {
  return (
    <div className="stake">
      <h2>UnStake your kwikswap</h2>
      <div className="stackIcons">
        <div className="iconBox">
          <div className="icon">
            <PriorityHighIcon />
          </div>
          <h4>Warning</h4>
        </div>

        <div className="iconBox">
          <div className="icon">
            <FormatListBulletedIcon />
          </div>
          <h4>Checkpoints</h4>
        </div>

        <div className="iconBox">
          <div className="icon">
            <AttachMoneyIcon />
          </div>
          <h4>Amount to Unstake</h4>
        </div>

        <div className="iconBox">
          <div className="icon">
            <AttachMoneyIcon />
          </div>
          <h4>Initialize Unstake</h4>
        </div>

        <div className="iconBox">
          <div className="icon">
            <DoneOutlineIcon />
          </div>
          <h4>Confirmation</h4>
        </div>
      </div>

      <div className="warning_Box">
        <ReportProblemIcon className="warning_Icon" />
        <p>
          After Unstaking, you must wait 30 days before you can withdraw your
          kwikswap and rewards. <br />
          The amount of tokens you Unstake will not count towards your tier
          level for upcoming <a href="/projects">Projects</a>.
        </p>
      </div>

      <div className="buttons">
        <Button variant="contained" color="primary">
          <ArrowBackIcon /> Previous
        </Button>
        <Button variant="contained" color="primary">
          Next <ArrowForwardIcon />
        </Button>
      </div>
    </div>
  );
}

export default UnStake;
