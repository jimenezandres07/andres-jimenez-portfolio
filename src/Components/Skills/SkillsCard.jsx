import React from "react";

const SkillsCard = ({ name, image }) => {
	return (
		<div className="card__container-top">
			<div className="skills__card">
				<h3>{name}</h3>
				<div className="skills__card-image">
					<img src={image} alt={name} />
				</div>
			</div>
		</div>
	);
};

export default SkillsCard;
