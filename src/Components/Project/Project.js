/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React from 'react';
import './styles/style.css';
import projectsData from '../../fixtures/projects.json';

function Project({ title, image, desc }) {
  return (
    <div className="card" data-aos="fade-up">
      <img src={image} alt={title} className="card__photo" />
      <div className="card__content">
        <p className="card__title">{title}</p>
        <p className="card__desc">{desc}</p>
        {/* svg's go here */}
      </div>
    </div>
  );
}

function ProjectsContainer() {
  return (
    <section id="projects">
      <h2 className="section-title" data-aos="fade-right">
        Projects
      </h2>
      {projectsData.map((item) => (
        <Project
          key={item.id}
          title={item.title}
          image={item.image}
          description={item.description}
        />
      ))}
    </section>
  );
}

export default ProjectsContainer;
