import React from 'react'
import projectData from "../../projectgallery.json"

const ProjectsPage = () => {
  console.log('projectData', projectData);

  return (
    <div>
      <h2>Projects</h2>
      <div>
        {projectData.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

const Project = ({ project }) => {
  return (
    <div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <img src={project.image} alt={project.title} />
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
};

export default ProjectsPage;