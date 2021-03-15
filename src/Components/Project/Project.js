import React from 'react';
import './styles/style.css';

function Project() {
  const data = {
    title: 'Netflix Clone',
    // eslint-disable-next-line prettier/prettier
    description:
      'A multi-page rebuid of Netflix with authentication and protected routes. This was built using React, Firebase, Compound Components, Styled Components, and Fuse.js',
    image:
      'https://images.unsplash.com/photo-1615393457304-e0f4d3f47cd8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1946&q=80',
  };
  return (
    <section className="project">
      <div>
        <h3 className="project_title">{data.title}</h3>
        <div className="project_desc-container">
          <p className="project_desc">{data.description}</p>
        </div>
      </div>
      <div>
        <img className="project_img" src={data.image} alt="Netflix Clone" />
      </div>
    </section>
  );
}

export default Project;
