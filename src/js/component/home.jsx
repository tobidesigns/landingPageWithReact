import React from "react";

//include images into your bundle

import { TopBar } from "./topbar.jsx";
import { LandingCard } from "./landingcard.jsx";
import { Jumbotron } from "./jumbotron.jsx";
//import { Footer } from "./footer.jsx";


//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
			<TopBar />
			<Jumbotron />
			<div className="container" >
			<div className="row row-cols-1 row-cols-md-4 g-4">
			<LandingCard />
			<LandingCard />
			<LandingCard />
			<LandingCard />
			</div>
			</div>
			
		</div>
	)
};



export default Home;
