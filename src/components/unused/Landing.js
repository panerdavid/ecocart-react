import React from "react";
import logo from "../img/logo.png";
import Button from "react-bootstrap/Button";
import "../App.css";

const Landing = ({ element }) => {
  return (
    <main>
      <section id="landing">
        <div ref={element}>
          <img src={logo} alt="EcoCart" id="logo" />
          <div id="content">
            <h1>Click Button. Save Planet.</h1>
            <h3>
              EcoCart instantly makes your online orders carbon neutral at no
              cost to you
            </h3>
            <Button className="add-button" size="lg">
              <b>Add to Chrome</b> - It's Free
            </Button>
          </div>
          <a href="#how-it-works">
            <div className="scroll-down"></div>
          </a>
          </div>
        </section>
      
    </main>
  );
};

export default Landing;
