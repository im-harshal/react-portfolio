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
            <p className="text-body">React | HTML | CSS | Javascript</p>
          </div>
          <a href="https://github.com/im-harshal/react-portfolio">
            <button className="card-button">More info</button>
          </a>
        </div>
        <div className="card">
          <div className="card-details">
            <p className="text-title">Contact List App</p>
            <p className="text-body">
              React - Frontend <br /> Spring Boot - Backend
            </p>
          </div>
          <a href="https://github.com/im-harshal/crm-app">
            <button className="card-button">More info</button>
          </a>
        </div>
        <div className="card">
          <div className="card-details">
            <p className="text-title">Word Guess Game</p>
            <p className="text-body">
              Python <br /> NLTK - Natural Language Toolkit{" "}
            </p>
          </div>
          <a href="https://github.com/im-harshal/word-guess-game">
            <button className="card-button">More info</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
