/* eslint-disable prettier/prettier */
import React from 'react';
import './styles/style.css';

function Landing() {
  return (
    <section className="landing">
      <p className="landing-intro">Hey there 👋, I'm</p>
      <h1 className="landing-title landing-title-primary">Payton Burr</h1>
      <h1 className="landing-title">I am a developer</h1>

      <p className="landing-desc">
        I am a Front End Developer with a passion for creating cool webistes and
        learning new things. Currently I am expanding my skills by learning Node
        &amp; Express
      </p>

      <button type="button" className="landing-btn">
        Projects
      </button>
    </section>
  );
}

export default Landing;
