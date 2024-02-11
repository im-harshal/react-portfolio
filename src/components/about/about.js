import "./about.css";
import React from "react";
import Backend from "../../assets/images/backend.png";
import Frontend from "../../assets/images/frontend.png";
import MlNlp from "../../assets/images/ml.png";
import Vr from "../../assets/images/vr.png";

const About = () => {
  return (
    <section id="about">
      <span className="aboutTitle">About</span>
      <span className="aboutDesc">
        Fueled by passion and a Master's from UT Dallas, I'm a software engineer
        who thrives on building impactful solutions. <br />
        From India to Texas, I've tackled real-world challenges at BillDesk,
        crafting APIs, mastering microservices, and even exploring ML. <br />
        <br />
        What drives me? Seeing my code improve lives, be it optimizing
        applications or empowering users. <br />
        <br />
        More than just code: I'm a team player, mentoring future coders and
        actively involved in communities like Google DSC. <br />
        This website, built with React, is a glimpse into my passion projects.
        <br />
        <br />
        What sets me apart? <br />
        Experience + Learning: Industry expertise blended with a hunger to stay
        ahead. <br />
        Full-Stack Savvy: Front-end, back-end - I navigate both with ease.{" "}
        <br />
        Problem-solving Prowess: Complex challenges excite me, I find innovative
        solutions.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img className="skillBarImg" src={Backend} alt="" />
          <div className="skillBarText">
            <h2>Backend </h2>
            <h2>& Database</h2>
            <ul>Spring Boot</ul>
            <ul>Oracle</ul>
            <ul>MySql</ul>
          </div>
        </div>
        <div className="skillBar">
          <img className="skillBarImg" src={Frontend} alt="" />
          <div className="skillBarText">
            <h2>Frontend</h2>
            <ul>HTML</ul>
            <ul>CSS</ul>
            <ul>JavaScript</ul>
            <ul>React</ul>
          </div>
        </div>
        <div className="skillBar">
          <img className="skillBarImg" src={MlNlp} alt="" />
          <div className="skillBarText">
            <h2>Machine Learning</h2>
            <h2> & NLP</h2>
            <ul>Python</ul>
            <ul>scikit Learn</ul>
            <ul>Pandas</ul>
            <ul> NumPy</ul>
            <ul>NLTK</ul>
          </div>
        </div>
        <div className="skillBar">
          <img className="skillBarImg" src={Vr} alt="" />
          <div className="skillBarText">
            <h2>Virtual Reality</h2>
            <ul>C#</ul>
            <ul>Unity</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
