/* eslint-disable prettier/prettier */
import React from 'react';
import './styles/style.css';

function Landing() {
  return (
    <section className="landing">
      <p className="landing-intro" data-aos="fade-up" data-aos-delay="900">
        Hey there 👋, I'm
      </p>
      <h1
        className="landing-title landing-title-primary"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        Payton Burr
      </h1>
      <h1 className="landing-title" data-aos="fade-up" data-aos-delay="1100">
        I am a developer
      </h1>

      <p className="landing-desc" data-aos="fade-up" data-aos-delay="1200">
        I am a Front End Developer with a passion for creating cool webistes and
        learning new things. Currently I am expanding my skills by learning Node
        &amp; Express
      </p>

      <a
        href="#projects"
        className="landing-btn"
        data-aos="fade-up"
        data-aos-delay="2000"
      >
        Projects
      </a>

      <a href="#projects" className="scroll-down">
        <div className="mouse">
          <span />
        </div>
      </a>
    </section>
  );
}

export default Landing;
