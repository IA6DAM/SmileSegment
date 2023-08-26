import React, { Component } from "react";
import "./NavbarStyles.css";

class Navbar extends Component {
  state = {
    clicked: false,
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <>
        <nav>
          <a href="/">
            <img
              id="logo-image"
              src="/images/logo.png"
              alt="Logo"
              style={{ width: "120px", height: "auto" }} // Modifier la taille ici
            />
          </a>
          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "#navbar"}
            >
              <li>
                <a href="/">Ségmentation</a>
              </li>
              <li>
                <a href="vis">Visualisation</a>
              </li>
            </ul>
          </div>
          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={
                this.state.clicked ? "fas fa-times" : "fas fa-bars"
              }
            ></i>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;