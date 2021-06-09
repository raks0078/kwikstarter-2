import React from "react";

import LockIcon from "@material-ui/icons/Lock";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import logoBlack from "../../images/logo-black.png";
import logoWhite from "../../images/logo-white.png";
import "./Header.scss";
import { Link, NavLink } from "react-router-dom";

// imports for modal from Material UI
import { makeStyles } from "@material-ui/core/styles";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { useWalletModalToggle } from "../../state/app/hooks";
import { useWeb3React } from "@web3-react/core";
import { shortenAddress } from "utils";
import { useBalance } from "hooks/useBalance";

export default function Header() {
  // render() {

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const openWallet = useWalletModalToggle();

  const { account } = useWeb3React();

  const balance = useBalance();

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={logoWhite} />
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav link-nav">
              <li className="nav-item">
                <Link to="/featured-pool-next">Pools</Link>
              </li>
              <li className="nav-item">
                <NavLink to="/litepaper">Tier level</NavLink>
              </li>
            </ul>
          </div>
          <ul className="navbar-nav navbar-nav-buttons">
            <li>
              <Link to="/projects">
                <button className="button-secondary">
                  <WhatshotIcon />
                  Projects
                </button>
              </Link>
            </li>
            <li>
              <Link to="/staking">
                <button className="button-secondary">
                  <WhatshotIcon />
                  Staking
                </button>
              </Link>
            </li>

            <li className="nav-item">
              {account && (
                <button className="button-primary" type="button">
                  {balance ? `${balance.toFixed(4)} BNB` : "0 BNB"}
                </button>
              )}
            </li>

            <li className="nav-item">
              <button className="button-primary" onClick={openWallet}>
                {account ? (
                  <>{shortenAddress(account)}</>
                ) : (
                  <>
                    <LockIcon /> Connect Wallet
                  </>
                )}
              </button>
            </li>
          </ul>

          <button
            className="navbar-toggler button-secondary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                className="bi"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
  // }
}

// export default Header
