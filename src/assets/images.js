import git from "./git.png";
import express from "./express.png";
import javascript from "./javascript.png";
import nodejs from "./nodejs.png";
import postgre from "./postgre.png";
import redux from "./redux.png";
import sequelize from "./sequelize.png";
import react from "./react.png";
import typescript from "./typescript.png";
import dog from "./dog.png";
import suit from "./suit.png";

export const technologiesArray = [
	{
		name: "Git",
		image: git,
	},
	{
		name: "Express",
		image: express,
	},
	{
		name: "JavaScript",
		image: javascript,
	},
	{
		name: "Node JS",
		image: nodejs,
	},
	{
		name: "PostgreSQL",
		image: postgre,
	},
	{
		name: "Redux",
		image: redux,
	},
	{
		name: "Sequelize",
		image: sequelize,
	},
	{
		name: "React",
		image: react,
	},
	{
		name: "Typescript",
		image: typescript,
	},
];

export const projectsArray = [
	{
		projectName: "The Cutest App",
		projectImage: dog,
		projectDescription:
			"Dog page where you can find different breeds of dogs, apply different filters to facilitate the search and even create a breed!",
		projectGithubLink: "https://github.com/jimenezandres07/PI-Dogs/tree/main/PI-Dogs-main",
		projectDeployLink: "#"
	},
	{
		projectName: "Sportbase",
		projectImage: suit,
		projectDescription:
			"Henry's bootcamp group project consisting of a sportswear e-commerce where you can filter by different categories, create a user, add to the shopping cart, check out with Mercado Pago and administrator panel",
		projectGithubLink: "https://github.com/jmarce99/Sportbase-Front",
		projectDeployLink: "https://sportbase.vercel.app/"
	},
];
