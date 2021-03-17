/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React from 'react';
import './styles/style.css';
import projectsData from '../../fixtures/projects.json';

function Project({ title, description, image }) {
  return (
    <div className="project">
      <div className="left">
        <h3 className="project_title">{title}</h3>
        <div className="project_desc-container">
          <p className="project_desc">{description}</p>
        </div>
      </div>
      <div className="right">
        <img className="project_img" src={image} alt="Netflix Clone" />
      </div>
    </div>
  );
}

function ProjectsContainer() {
  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      {projectsData.map((item) => (
        <Project
          key={item.id}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </section>
  );
}

export default ProjectsContainer;
