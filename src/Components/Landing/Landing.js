/* eslint-disable prettier/prettier */
import React from 'react';
import './styles/style.css';

function Landing() {
  return (
    <div className="landing">
      <p className="landing-intro">Hey there, I'm</p>
      <h1 className="landing-title">
        Payton Burr <br />
        I'm a developer
      </h1>

      <p className="landing-desc">
        I am a Front End Developer with a passion for creating cool webistes and
        learning new things. Currently I am expanding my skills by learning Node
        &amp; Express
      </p>

      <button type="button" className="landing-btn">
        <a>Projects</a>
      </button>
    </div>
  );
}

export default Landing;
