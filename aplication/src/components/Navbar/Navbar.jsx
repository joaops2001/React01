import React from "react";
import logo from "../../assets/img/logo.png";
import "./styles.css";
class Navbar extends React.Component {
  render() {
    return (
      <header className="App-header">
        <nav id="navbar">
          <div className="nav-brand">
            <img src={logo} alt="Logo" />
            <h1>Space Flight News</h1>
          </div>
          <ul className="navlist">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Tranding</a>
            </li>
            <li>
              <a href="/">Categories</a>
            </li>
            <li>
              <a href="/">About us</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Navbar;
