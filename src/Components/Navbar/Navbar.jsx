import React from "react";
import styled from "styled-components";
import "./navbar.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { GiSkills } from "react-icons/gi";
import { useState } from "react";

const NavList = styled.nav`
	position: fixed;
	display: block;
	background: rgba(0, 0, 0, 0.3);
	width: max-content;
	padding: 0.7rem 1.7rem;
	z-index: 2;
	left: 50%;
	transform: translateX(-50%);
	bottom: 2rem;
	display: flex;
	gap: 0.8rem;
	border-radius: 3rem;
	background-filter: blur(15px);
`;

const Navbar = () => {
	const [active, setActive] = useState("#");
	return (
		<NavList>
			<a
				href="#"
				className={active === "#" ? "active" : ""}
				onClick={() => setActive("#")}
			>
				<AiOutlineHome />
			</a>
			<a
				href="#about"
				onClick={() => setActive("#about")}
				className={active === "#about" ? "active" : ""}
			>
				<AiOutlineUser />
			</a>
			<a
				href="#projects"
				onClick={() => setActive("#projects")}
				className={active === "#projects" ? "active" : ""}
			>
				<BiBook />
			</a>
			<a
				href="#skills"
				onClick={() => setActive("#skills")}
				className={active === "#skills" ? "active" : ""}
			>
				<GiSkills />
			</a>
			<a
				href="#contact"
				onClick={() => setActive("#contact")}
				className={active === "#contact" ? "active" : ""}
			>
				<RiServiceLine />
			</a>
		</NavList>
	);
};

export default Navbar;
