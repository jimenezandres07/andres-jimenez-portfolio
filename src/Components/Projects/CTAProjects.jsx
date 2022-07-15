import React from "react";

const CTAProjects = ({githubLink, deployLink}) => {
	return (
		<div className="cta">
			<a href={githubLink} className="btn">
				Source Code
			</a>
			<a href={deployLink} className="btn btn-primary">
				Check out the project
			</a>
		</div>
	);
};

export default CTAProjects;
