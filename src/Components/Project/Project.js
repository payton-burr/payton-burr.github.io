/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React from 'react';
import './styles/style.css';
import projectsData from '../../fixtures/projects.json';

function Project({ title, description, image }) {
  return (
    <section className="project">
      <div>
        <h3 className="project_title">{title}</h3>
        <div className="project_desc-container">
          <p className="project_desc">{description}</p>
        </div>
      </div>
      <div>
        <img className="project_img" src={image} alt="Netflix Clone" />
      </div>
    </section>
  );
}

function ProjectsContainer() {
  return (
    <>
      <h2 className="section-title">Projects</h2>
      {projectsData.map((item) => (
        <Project
          key={item.id}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </>
  );
}

export default ProjectsContainer;
