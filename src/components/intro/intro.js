import "./intro.css";
import React from "react";
import bg from "../../assets/images/profile-pic.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm
          <span className="introName"> Harshal</span> <br />
          Software Engineer
        </span>
        <p className="introPara">
          Results-driven Software Engineer with over 3+ years of
          <br />
          experience developing robust and efficient microservices
          <br />
          and REST APIs using Spring Boot.
        </p>
        <Link>
          <button className="btn">Hire Me</button>
        </Link>
      </div>
      <img className="bg" src={bg} alt="background profile" />
    </section>
  );
};

export default Intro;
