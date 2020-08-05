import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import logo from "../img/logo.png";
import "../stylesheets/Navbar.css";
import "../App.css";

const Navbar = ({ sticky }) => (
  <nav className={sticky ? "navbar navbar-sticky" : "navbar"}>
    <div className="navbar--logo-holder">
      {sticky ? (
        <div className="nav-row">
          <img src={logo} alt="logo" className="navbar--logo" />
          <Button className="navbar-button" size="small">
            <strong>Add to Chrome</strong> - It's Free
          </Button>
        </div>
      ) : null}
    </div>
  </nav>
);
export default Navbar;
