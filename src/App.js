import React from "react";

import ImpactBox from "./components/ImpactBox";
import FaqBox from "./components/Faq";
import useSticky from "./hooks/useSticky";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Testimonial from "./components/Testimonial";
import Video from "./components/Video";
import ProjectBox from "./components/ProjectBox";
import Button from "react-bootstrap/Button";
import avatar from "./img/avatar.jpg";
import "./App.css";
import { Carousel } from "react-bootstrap";

function App() {
  const { isSticky, element } = useSticky();
  return (
    <>
      <Navbar sticky={isSticky} />
      <Landing element={element} />
      <div className="App">
        <section id="affiliate-stores">
          <h1>Shop Sustainably at</h1>
          <h1>10,000+ stores!</h1>
        </section>
        <section id="how-it-works">
          <Video
            video="videos/works.mp4"
            stepOne="1"
            stepTwo="4"
            stepThree="10"
          ></Video>
        </section>
        <section id="why-ecocart">
          <h1>Why EcoCart?</h1>
        </section>

        <section id="impact">
          <h1>EcoCart community impact</h1>
          <ProjectBox
            title="Protecting forests"
            location="Massachusetts"
            bulletOne="Protects a Spruce forest in Massachusetts that captures over 100,000 metric tonnes of harmful carbon dioxide every year"
            bulletTwo="Protects habitat for a variety of threatened mammals, birs, and reptiles"
            bulletThree="Experienced forest management project operator"
          ></ProjectBox>
        </section>

        <section id="projects"></section>
        <section id="testimonials">
          <h1>See why people love us</h1>
          <Testimonial></Testimonial>
        </section>
        <section id="questions">
          <div class="container">
            <h1>Questions?</h1>
          </div>
          <FaqBox></FaqBox>
          <br></br>
          <div class="container">
            <a href="https://www.google.com/">More FAQs</a>
          </div>
        </section>
        <section id="bottom">
          <h1>
            Ready to start <br></br>shopping sustainably?
          </h1>
          <Button className="add-button" size="lg">
            <b>Add to Chrome</b> - It's Free
          </Button>
        </section>
        {/* <ImpactBox
          count="3,123,477"
          subtitle="lbs of CO2 offset"
          icon="🌎"
        ></ImpactBox>
        <ImpactBox count="6,247" subtitle="trees saved" icon="🌲"></ImpactBox>
      */}
      </div>
    </>
  );
}

export default App;
