import React from "react";
// COMPONENT IMPORTS
import ImpactBox from "./components/ImpactBox";
import FaqBox from "./components/Faq";
import useSticky from "./hooks/useSticky";
import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonial";
import Video from "./components/Video";
import ProjectBox from "./components/ProjectBox";
import Button from "react-bootstrap/Button";
//MEDIA IMPORTS
import avatar from "./img/avatar.jpg";
import works from "./videos/works.mp4";
import tree from "./img/tree.png";
import earth from "./img/earth.png";
import waterProj from "./img/projects/water-project.png";
import forestProj from "./img/projects/forest-project.png";
import windProj from "./img/projects/wind-project.png";
import un6 from "./img/projects/UN-Sustainability-Goal-6.png";
import un7 from "./img/projects/UN-Sustainability-Goal-7.png";
import un8 from "./img/projects/UN-Sustainability-Goal-8.png";
import un9 from "./img/projects/UN-Sustainability-Goal-9.png";
import un13 from "./img/projects/UN-Sustainability-Goal-13.png";
import un14 from "./img/projects/UN-Sustainability-Goal-14.png";
import un15 from "./img/projects/UN-Sustainability-Goal-15.png";
import verifiedCarbon from "./img/projects/verified-carbon-offset.png";
import energyGlobe from "./img/projects/Energy-Globe.jpg";
import americanCarbon from "./img/projects/american-carbon-registry.jpg";
import goldStandard from "./img/projects/gold-standard.png";
import StarIcon from "mdi-react/StarIcon"; //https://www.npmjs.com/package/mdi-react
import logo from "./img/logo.png";

import "./App.css";

function App() {
  const { isSticky, element } = useSticky();
  return (
    <div className="App">
      <Navbar sticky={isSticky} />
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
      <section id="affiliate-stores">
        <h1 id="affiliate-title">
          Shop Sustainably at <br></br>10,000+ stores!
        </h1>
      </section>
      <section id="how-it-works">
        <Video video={works} stepOne="1" stepTwo="4" stepThree="10"></Video>
      </section>
      <section id="why-ecocart">
        <h1>Why EcoCart?</h1>
      </section>

      <section id="impact">
        <h1 className="center">EcoCart community impact</h1>
        <div className="impact-box-container">
          <ImpactBox
          start={0}
            count={3123477}
            duration={4}
            subtitle={
              <>
                lbs of CO<sub>2</sub> offset
              </>
            }
            icon={earth}
          ></ImpactBox>
          <div class="spacer"></div>
          <ImpactBox
          start={0}
            count={6247}
            duration={3}
            subtitle="trees saved"
            icon={tree}
          ></ImpactBox>
        </div>
        <div className="impact-subtitle-container">
          <h2 className="center impact-sub-heading">
            <span>We do this by...</span>
          </h2>
        </div>

        <div className="project-boxes">
          <ProjectBox
            projectImg={forestProj}
            title="Protecting forests"
            location="Massachusetts"
            bullets={[
              "Protects a Spruce forest in Massachusetts that captures over 100,000 metric tonnes of harmful carbon dioxide every year",
              "Protects habitat for a variety of threatened mammals, firs, and reptiles",
              "Experienced forest management project operator",
            ]}
            verifications={[americanCarbon, verifiedCarbon]}
            developments={[un6, un13, un14, un15]}
          ></ProjectBox>

          <ProjectBox
            projectImg={waterProj}
            title="Providing clean water"
            location="Cambodia"
            bullets={[
              "Reduces air pollution while protecting forests and local ecosystems",
              "Creates jobs and economic growth in under-served communities",
              "Reduces child illnesses and deaths caused by contaminated water and indoor pollution",
            ]}
            verifications={[energyGlobe, goldStandard]}
            developments={[un6, un8, un13, un15]}
          ></ProjectBox>

          <ProjectBox
            projectImg={windProj}
            title="Creating wind energy"
            location="Turkey"
            bullets={[
              "Displaces fossil fuel-based energy",
              "Diversifies the country’s energy balance and helps address demand supply gaps",
              "Alleviates poverty in the local community by providing construction and operations jobs",
            ]}
            verifications={[goldStandard]}
            developments={[un7, un8, un9, un13]}
          ></ProjectBox>
        </div>
      </section>

      <section id="testimonials">
        <h1>See why people love us</h1>
        <StarIcon size={40} />
        <StarIcon size={40} />
        <StarIcon size={40} />
        <StarIcon size={40} />
        <StarIcon size={40} />

        <i></i>
        <Testimonial
          reviews={[
            {
              avatar: avatar,
              quote:
                "Fighting climate change while shopping at my favorite stores? Sign me up!",
              author: "Dane Baker",
            },
            {
              avatar: avatar,
              quote:
                "Fighting climate change while shopping at my favorite stores? Sign me up!",
              author: "Dane Baker",
            },
            {
              avatar: avatar,
              quote:
                "Fighting climate change while shopping at my favorite stores? Sign me up!",
              author: "Dane Baker",
            },
            {
              avatar: avatar,
              quote:
                "Fighting climate change while shopping at my favorite stores? Sign me up!",
              author: "Dane Baker",
            },
            {
              avatar: avatar,
              quote:
                "Fighting climate change while shopping at my favorite stores? Sign me up!",
              author: "Dane Baker",
            },
            {
              avatar: avatar,
              quote:
                "Fighting climate change while shopping at my favorite stores? Sign me up!",
              author: "Dane Baker",
            },
          ]}
        ></Testimonial>
      </section>
      <section id="questions">
        <div class="container">
          <h1>Questions?</h1>
        </div>
        <FaqBox
          faqs={[
            {
              title: "What on Earth is a carbon offset?",
              content: `Carbon offsets are a practical and effective way to reduce the effects of climate change by funding wind, solar, and other renewable energy projects.`,
            },
            {
              title: "Free carbon neutral orders? Sounds too good to be true.",
              content: `Carbon offsets are a practical and effective way to reduce the effects of climate change by funding wind, solar, and other renewable energy projects.`,
            },
            {
              title:
                "How do I know the donations are going to the right place?",
              content: `Carbon offsets are a practical and effective way to reduce the effects of climate change by funding wind, solar, and other renewable energy projects.`,
            },
            {
              title: "Do you sell my data?",
              content: `Carbon offsets are a practical and effective way to reduce the effects of climate change by funding wind, solar, and other renewable energy projects.`,
            },
            {
              title: "How can I find stores that support sustainable shopping?",
              content: `Carbon offsets are a practical and effective way to reduce the effects of climate change by funding wind, solar, and other renewable energy projects.`,
            },
          ]}
        ></FaqBox>
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
    </div>
  );
}

export default App;
