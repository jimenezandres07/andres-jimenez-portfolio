import React from "react";
import { CTA, HeaderSocials } from "../index";
import Me from "../../assets/ANDY-ROJO-IZQUIERDA.jpg";
import "./header.css";

import { HeaderContainer, GlobalContainer } from "../../Containers/Containers";

const Header = () => {
	return (
		<header>
			<GlobalContainer className="container header__container">
				<h5>Hola! Soy</h5>
				<h1>Andres Jimenez</h1>
				<h5 className="text-light">Full Stack Developer actualmente en Argentina!</h5>
				<CTA />
				<HeaderSocials />

				<div className="me">
					<img src={Me} alt="me" className="me__img"/>
				</div>

				<a href="#contact" className="scroll__down">
					Deslizar para abajo
				</a>
			</GlobalContainer>
		</header>
	);
};

export default Header;
