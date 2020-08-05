import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../App.css";
import "../stylesheets/Testimonial.css";
import StarIcon from "mdi-react/StarIcon";

function Testimonial(props) {
  return (
    <Carousel interval={4000} controls={false}>
      {props.reviews.map((review, index) => {
        return (
          <Carousel.Item>
            <div className="testimonial row">
              <img className="avatar" src={review.avatar}></img>
              <div className="text col">
                <p className="quote">{review.quote}</p>
                <h3>- {review.author}</h3>
              </div>
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
export default Testimonial;
