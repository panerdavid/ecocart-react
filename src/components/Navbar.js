import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import logo from "../img/logo.png";
import "../App.css";

const Navbar = ({ sticky }) => (
  <nav className={sticky ? "navbar navbar-sticky" : "navbar"}>
    <div className="navbar--logo-holder">
      {sticky ? (
        <>
          <img src={logo} alt="logo" className="navbar--logo" />
          <Button className="add-button navbar-button" size="lg">
            <strong>Add to Chrome</strong> - It's Free
          </Button>
        </>
      ) : null}
    </div>
  </nav>
);
export default Navbar;
