import React from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import "./Project.scss";

export default function Projects() {
  return (
    <div className="container">
      <div className="projectsOpen">
        <h1>PROJECTS OPEN NOW</h1>
        <div className="projectCards">
          <ProjectCard linking={{
            medium:"https://medium.com/@polkasocial/about",
            twiiter:"https://twitter.com/polkasocial",
            telegrame:"https://t.me/polkasocial",
            Language:"https://polkasocial.org/",
            name:"Polkasocial",
            src:"../../assests/images/kwikstarter-transparent.png",
            link:'/featured-pool-next',
            }}
          />
          <ProjectCard linking={{
            medium:"https://medium.com/@vabble",
            twiiter:"https://twitter.com/VabbleApp",
            telegrame:" https://t.me/vabble",
            Language:" https://www.vabble.com",
            name:"Vabble",
            src:"../../assests/images/UseOnDark_icon.png",
            link:'/vab-featured'
          } }
          />
        </div>
        
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
