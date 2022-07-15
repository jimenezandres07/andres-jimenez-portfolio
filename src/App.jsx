import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import {
	Footer,
	Contact,
	Hero,
	Navbar,
	Projects,
	Skills,
	Header
} from "./Components";


function App() {
	return (
		<div className="App">
			<Header />
			<Navbar/>
			<Hero />
			<Projects />
			<Skills />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
