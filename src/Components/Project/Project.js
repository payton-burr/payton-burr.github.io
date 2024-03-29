/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React from 'react';
import './styles/style.css';
import projectsData from '../../fixtures/projects.json';

function Project({ title, image, desc, github, preview }) {
  return (
    <div className="card" data-aos="fade-up">
      <img src={image} alt={title} className="card__photo" />
      <div className="card__content">
        <p className="card__title">{title}</p>
        <p className="card__desc">{desc}</p>
        <div className="card__links">
          <a
            href={preview}
            className="card__link"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/link.svg" alt="link" />
          </a>
          <a
            href={github}
            className="card__link"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/github.svg" alt="github" />
          </a>
        </div>
      </div>
    </div>
  );
}

function ProjectsContainer() {
  return (
    <section id="projects">
      <h2 className="projects__title" data-aos="fade-right">
        Projects
      </h2>
      <div className="projects__container">
        {projectsData.map((item) => (
          <Project
            key={item.id}
            title={item.title}
            image={item.image}
            desc={item.description}
            github={item.github}
            preview={item.preview}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsContainer;
