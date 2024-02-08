import "./intro.css";
import React from "react";
import bg from "../../assets/images/profile-pic.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hey,</span>
        <span className="introText">
          I'm
          <span className="introName"> Harshal</span> <br />
          Software Engineer
        </span>
        <p className="introPara">
          I believe in building not just software, but experiences that matter.
        </p>
      </div>
      <img className="bg" src={bg} alt="background profile" />
    </section>
  );
};

export default Intro;
