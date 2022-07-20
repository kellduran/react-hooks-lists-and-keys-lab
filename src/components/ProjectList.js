import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log("This is from ProjectList.js", projects);
  const projectListArray = projects.map((projects)=>(
    <ProjectItem 
    key={projects.id} name={projects.name} about={projects.about} technologies={projects.technologies} />))
    return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectListArray}</div>
    </div>
  );
}

export default ProjectList;
