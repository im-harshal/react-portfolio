import "./about.css";
import React from "react";
import Backend from "../../assets/images/backend.png";
import Frontend from "../../assets/images/frontend.png";
import MlNlp from "../../assets/images/nlp.png";

const About = () => {
  return (
    <section id="about">
      <span className="aboutTitle">About</span>
      <span className="aboutDesc">
        {" "}
        Results-driven Software Engineer with over 3+ years of experience
        developing robust and efficient microservices and REST APIs using Spring
        Boot. Currently pursuing a Master of Science in Computer Science with a
        concentration in Intelligent Systems at The University of Texas at
        Dallas, expected to graduate in May 2025.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img className="skillBarImg" src={Backend} alt="" />
          <div className="skillBarText">
            <h2>Backend</h2>
            <p>Backend Development</p>
          </div>
        </div>
        <div className="skillBar">
          <img className="skillBarImg" src={Frontend} alt="" />
          <div className="skillBarText">
            <h2>Frontend</h2>
            <p>Frontend Development</p>
          </div>
        </div>
        <div className="skillBar">
          <img className="skillBarImg" src={MlNlp} alt="" />
          <div className="skillBarText">
            <h2>ML & NLP</h2>
            <p>Machine Learning and Natural Languauge Processing</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
