import React from 'react'
import projectData from "../../projectgallery.json";
import './Projects.css'

const ProjectsPage = () => {
  console.log('projectData', projectData);

  return (
    <div className="project-container mx-3">
      <h1 className='display-5'>My Projects</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {projectData.map((project) => (
          <div className="col" key={project.id}>
            <Project project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
const Project = ({ project }) => {
  return (
    <div className="card mb-3">
      <img src={project.image} className="card-img-top" alt={project.title} />
      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text">{project.description}</p>
        </div>
        <div className="card-footer border-0">
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectsPage;