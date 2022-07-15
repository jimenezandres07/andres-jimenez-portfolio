import React from "react";
import { CTA, HeaderSocials } from "../index";
import Me from "../../assets/ANDY-ROJO-IZQUIERDA.jpg";
import "./header.css";

import { HeaderContainer, GlobalContainer } from "../../Containers/Containers";

const Header = () => {
	return (
		<header>
			<GlobalContainer className="container header__container">
				<h5>Hi! I'm</h5>
				<h1>Andres Jimenez</h1>
				<h5 className="text-light">Full Stack Developer based in Argentina!</h5>
				<CTA />
				<HeaderSocials />

				<div className="me">
					<img src={Me} alt="me" />
				</div>

				<a href="#contact" className="scroll__down">
					Scroll Down
				</a>
			</GlobalContainer>
		</header>
	);
};

export default Header;
