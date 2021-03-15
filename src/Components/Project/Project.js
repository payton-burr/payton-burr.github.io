/* eslint-disable react/prop-types */
import React from 'react';
import './styles/style.css';

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

export default Project;
