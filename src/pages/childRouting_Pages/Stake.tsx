import React from "react";
import "./stake.scss";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import { useKwikBalance, useBalance } from "../../hooks/useBalance";
import { useApprove, useStake } from "../../hooks/useApprove";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useStakeData } from "hooks/useStakeData";

function Stake() {
  const kwikBalance = useKwikBalance();
  const bnbBalance = useBalance();

  const { approvalCallback, isApproved } = useApprove();
  const { stakeCallback, isStaked } = useStake();

  const stakingDetails = useStakeData();

  return (
    <div className="stake">
      <h2>Stake your kwikswap</h2>
      <div className="stackIcons">
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
          <h4>Amount to Stake</h4>
        </div>

        <div className="iconBox">
          <div className="icon">
            <PersonAddIcon />
          </div>
          <h4>Pre-authorization</h4>
        </div>

        <div className="iconBox">
          <div className="icon">
            <AssignmentIndIcon />
          </div>
          <h4>Confirm</h4>
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
            <p>
              If not connected, click the &quot;Connect Wallet&quot; button in
              the top right corner
            </p>
          </div>
          <div className="box_card">
            <div className="card_header">
              <h4>kwikswap available to deposit</h4>
              <div className="card_circle"></div>
            </div>
            <p>Current Balance: {kwikBalance ? kwikBalance : "--"}</p>
          </div>
          <div className="box_card">
            <div className="card_header">
              <h4>BNB available in wallet</h4>
              <div className="card_circle"></div>
            </div>
            <p>
              BNB is required to pay transaction fees on the Binance Smart Chain
              network. BNB Balance: {bnbBalance ? bnbBalance : "--"}
            </p>
          </div>
          <div className="box_card">
            <div className="card_header">
              <h4>Eligible to stake</h4>
              <div className="card_circle"></div>
            </div>
            <p>
              You cannot stake if you have an active kwikswap unstake/withdrawal
              request
            </p>
          </div>
        </div>

        <div className="checkBox">
          <input type="checkbox" name="" value="" />
          <p>
            I have read the <Link to="/terms">Terms and Conditions</Link>
          </p>
        </div>
      </div>
      <div className="buttons">
        {isApproved ? (
          <Button
            variant="contained"
            color="primary"
            onClick={stakeCallback}
            disabled={isStaked}
          >
            Stake
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={approvalCallback}
            disabled={isApproved}
          >
            Approve
          </Button>
        )}
      </div>
    </div>
  );
}

export default Stake;
