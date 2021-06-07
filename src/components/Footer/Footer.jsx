import React, { Component } from "react"
import "./Footer.scss"
import { BrowserRouter as Router, Link, Switch } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          Copyright © 2021. All Rights Reserved by Kwikstarter
          <ul>
            <li>
            <Link to="/policy">Privacy Policy</Link>
              {/* <a href="javascript:void(0)">Privacy Policy</a> */}
            </li>
            <li>
            <Link to="/terms">Terms of Use</Link>
              {/* <a href="javascript:void(0)">Terms of Use</a> */}
            </li>
          </ul>
        </div>
      </footer>
    )
  }
}

export default Footer
