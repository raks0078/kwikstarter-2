import React from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import "./Project.scss";

export default function Projects() {
  return (
    <div className="container">
      <div className="projectsOpen">
        <h1>PROJECTS OPEN NOW</h1>
        <ProjectCard />
      </div>
      <div className="projectsComming">
        <h1>PROJECTS COMING SOON</h1>
      </div>
      <div className="projectsClosed">
        <h1>PROJECTS CLOSED</h1>
      </div>
    </div>
  );
}
