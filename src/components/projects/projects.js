import React from "react";
import "./projects.css";

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="projectTitle">Projects</h2>
      <span className="projectDesc">
        Here, are some projects I have worked on
      </span>
      <div className="cardList">
        <div className="card">
          <div className="card-details">
            <p className="text-title">Portfolio Website</p>
            <p className="text-body">Here are the details of the card</p>
          </div>
          <button className="card-button">More info</button>
        </div>
        <div className="card">
          <div className="card-details">
            <p className="text-title">Card title</p>
            <p className="text-body">Here are the details of the card</p>
          </div>
          <button className="card-button">More info</button>
        </div>
        <div className="card">
          <div className="card-details">
            <p className="text-title">Card title</p>
            <p className="text-body">Here are the details of the card</p>
          </div>
          <button className="card-button">More info</button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
