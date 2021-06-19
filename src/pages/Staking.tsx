import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import "./Staking.scss";
import Stake from "./childRouting_Pages/Stake";
import UnStake from "./childRouting_Pages/UnStake";
import Withdraw from "./childRouting_Pages/Withdraw";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { useStaking } from "../hooks/useStaking";
import { useStakeData } from "../hooks/useStakeData";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  coontainer: {
    width: "95%",
    margin: "auto",
  },
  navigations: {
    padding: theme.spacing(2),
  },
}));

function Staking() {
  const classes = useStyles();
  const totalStaked = useStaking();
  const totalStakedData = useStakeData();

  return (
    <Router>
      <Grid container spacing={2} className={classes.coontainer}>
        <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
          <Grid container spacing={2} className={classes.navigations}>
            {/* Child navigations............ */}
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <div className="navigations">
                <Link to="/staking">
                  <div className="nav">
                    <h4>Stake</h4>
                  </div>
                </Link>
                <Link to="/staking/unstake">
                  <div className="nav">
                    <h4>Unstake</h4>
                  </div>
                </Link>
                <Link to="/staking/withdraw">
                  <div className="nav">
                    <h4>Withdraw</h4>
                  </div>
                </Link>
              </div>
              <hr />
            </Grid>

            <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
              <div className="kickStater_Info">
                <div className="info_box">
                  <h4>Number of stakers</h4>
                  <hr />
                  <h4>{`--`}</h4>
                </div>
                <div className="info_box">
                  <h4>Total Kwikswap Staked</h4>
                  <hr />
                  <h4>{totalStaked ? totalStaked : 0}</h4>
                </div>
                <div className="info_box">
                  <h4>APY</h4>
                  <hr />
                  <h4>12.00%</h4>
                </div>
              </div>
            </Grid>
          </Grid>
          {/* <Switch> */}
          <Route exact path="/staking">
            <Stake />
          </Route>
          <Route path="/staking/unstake">
            <UnStake />
          </Route>
          <Route path="/staking/withdraw">
            <Withdraw />
          </Route>
          {/* </Switch> */}
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
          <div className="right_Info">
            <div className="input_box">
              <h4>Staked</h4>
              <hr />
              <h3>{totalStakedData ? totalStakedData : 0}</h3>
            </div>
            <div className="input_box">
              <h4>Unstaked</h4>
              <hr />
              <h3>
                0.00
              </h3>
            </div>
            <div className="input_box">
              <h4>Rewards</h4>
              <hr />
              <h3>
                <input type="text" />
              </h3>
              <div className="buttons">
                <Button variant="contained" color="primary">
                  Unstake
                </Button>
                <Button variant="contained" color="primary">
                  Withdraw
                </Button>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Router>
  );
}

export default Staking;
