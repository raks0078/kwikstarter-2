import React, { Component } from "react"
import "./Footer.scss"
class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          Copyright © 2021. All Rights Reserved by Kwikstarter
          <ul>
            <li>
              <a href="javascript:void(0)">Privacy Policy</a>
            </li>
            <li>
              <a href="javascript:void(0)">Terms of Use</a>
            </li>
          </ul>
        </div>
      </footer>
    )
  }
}

export default Footer
