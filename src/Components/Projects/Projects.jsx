import React from "react";
import { projectsArray } from "../../assets/images";
import ProjectCard from "./ProjectCard";
import "./projects.css";

import { CardsContainer } from "../../Containers/Containers";

const Projects = () => {
	return (
		<section id="projects">
			<h5>Some of my</h5>
			<h2>My Projects 🧧</h2>
			<CardsContainer className="cards__container">
				{projectsArray.map((projects) => (
					<ProjectCard
						projectImage={projects.projectImage}
						projectName={projects.projectName}
						projectDescription={projects.projectDescription}
						deployLink={projects.projectDeployLink}
						githubLink={projects.projectGithubLink}
					/>
				))}
			</CardsContainer>
		</section>
	);
};

export default Projects;
