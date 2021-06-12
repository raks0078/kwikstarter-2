import React from "react";
import { Link } from 'react-router-dom';
import "./Withdraw.scss";

import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";

import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

function Withdraw() {
  return (
    <div className="stake">
      <h2>Withdraw your kwikswap</h2>
      <div className="Icons">
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
          <h4>Initialize Withdrawal</h4>
        </div>

        <div className="iconBox">
          <div className="icon">
            <DoneOutlineIcon />
          </div>
          <h4>Confirmation</h4>
        </div>
      </div>

      <div className="big_Box">
        <h3>Checkpoints</h3>
        <p className="para">The Following conditions must be met to proceed:</p>
        <div className="box_Cards">
          <div className="box_card">
            <div className="card_header">
              <h4>Connect with MetaMask</h4>
              <div className="card_circle"></div>
            </div>
            <p>If not connected, click the &quot;Connect Wallet&quot; button in the top right corner</p>
          </div>
          <div className="box_card">
            <div className="card_header">
              <h4>30 day waiting period elapsedonnect with MetaMask</h4>
              <div className="card_circle"></div>
            </div>
          </div>
          <div className="box_card">
            <div className="card_header">
              <h4>You have Unstaked Your Kwikswap</h4>
              <div className="card_circle"></div>
            </div>
          </div>
          <div className="box_card">
            <div className="card_header">
              <h4>Approve and Unstake</h4>
              <div className="card_circle"></div>
            </div>
          </div>
        </div>

        <div className="checkBox">
          <input type="checkbox" name="" value="" />
        </div>
      </div>
          <p>
            {/* I have read the <a href="https://kwikstarter.org/terms#/terms">Terms and Conditions</a> */}
            I have read the <a href="/terms">Terms and Conditions</a>
          </p>
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

export default Withdraw;
