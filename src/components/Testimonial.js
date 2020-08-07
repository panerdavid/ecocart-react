import React from "react";
import Carousel from "react-bootstrap/Carousel"; //DOCUMENTATION: https://react-bootstrap.github.io/components/carousel/
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
                <img src="" alt="quote-mark" />
                <p className="quote">{review.quote}</p>
                <div className="row">
                  <h3>— {review.author}</h3>
                  <div style={{ marginLeft: 10 + "px" }}>
                    <StarIcon size={20} />
                    <StarIcon size={20} />
                    <StarIcon size={20} />
                    <StarIcon size={20} />
                    <StarIcon size={20} />
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
export default Testimonial;
