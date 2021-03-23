/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React from 'react';
import './styles/style.css';
import projectsData from '../../fixtures/projects.json';

function Project({ title, description, image, tech, github, preview }) {
  return (
    <div className="project" data-aos="fade-up">
      <div className="left">
        <h3 className="project_title">{title}</h3>
        <div className="project_desc-container">
          <p className="project_desc">{description}</p>

          <div className="techstack">
            {tech.map((item) =>
              item.includes('svg') ? (
                <img className="techstack_img" src={item} alt={title} />
              ) : (
                <p className="techstack_tech">{item}</p>
              )
            )}
          </div>

          <div className="project_links">
            <a href={github}>
              <img
                className="project_link_img"
                src="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg"
                alt="Github"
              />
            </a>
            <a href={preview} className="project-preview-link">
              <div style={{ fontSize: '1rem' }}>
                <i className="fas fa-link" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="right">
        <img className="project_img" src={image} alt={title} />
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
          tech={item.tech}
          github={item.github}
          preview={item.preview}
        />
      ))}
    </section>
  );
}

export default ProjectsContainer;
