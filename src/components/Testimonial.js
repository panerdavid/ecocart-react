import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../App.css";
import StarIcon from "mdi-react/StarIcon";

function Testimonial(props) {
  return (
    <Carousel interval={4000} controls={false}>
      <Carousel.Item>
        <div className="testimonial row">
          <img className="avatar" src={require("../img/avatar.jpg")}></img>
          <div className="text col">
            <p className="quote">
              Fighting climate change while shopping at my favorite stores? Sign
              me up!
            </p>
            <h3>- Dane Baker</h3>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="testimonial row">
          <img className="avatar" src={require("../img/avatar.jpg")}></img>
          <div className="text col">
            <p className="quote">
              Fighting climate change while shopping at my favorite stores? Sign
              me up!
            </p>
            <div className="row">
            <h3>- Dane Baker</h3>
            <StarIcon color="fff"/>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="testimonial row">
          <img className="avatar" src={require("../img/avatar.jpg")}></img>
          <div className="text col">
            <p className="quote">
              Fighting climate change while shopping at my favorite stores? Sign
              me up!
            </p>
            <h3>- Dane Baker</h3>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="testimonial row">
          <img className="avatar" src={require("../img/avatar.jpg")}></img>
          <div className="text col">
            <p className="quote">
              Fighting climate change while shopping at my favorite stores? Sign
              me up!
            </p>
            <h3>- Dane Baker</h3>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="testimonial row">
          <img className="avatar" src={require("../img/avatar.jpg")}></img>
          <div className="text col">
            <p className="quote">
              Fighting climate change while shopping at my favorite stores? Sign
              me up!
            </p>
            <h3>- Dane Baker</h3>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="testimonial row">
          <img className="avatar" src={require("../img/avatar.jpg")}></img>
          <div className="text col">
            <p className="quote">
              Fighting climate change while shopping at my favorite stores? Sign
              me up!
            </p>
            <h3>- Dane Baker</h3>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
export default Testimonial;
