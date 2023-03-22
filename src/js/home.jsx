import React from "react";

//include images into your bundle

import { TopBar } from "./component/topbar.jsx";
import { LandingCard } from "./component/landingcard.jsx";
import { Jumbotron } from "./component/jumbotron.jsx";
import { Footer } from "./component/footer.jsx";


//create your first component
const cardContent = [{
	cardImg: 'https://via.placeholder.com/500x350.png?text=Placeholder',
	title: 'Card title',
	text: `Some quick example text to build on the card title and make up the bulk of the card's content.`
},
{
	headMessage: 'A Warm Welcome!',
	mainPara:'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.',
	secondPara:'It uses utility classes for typography and spacing to space content out within the larger container.'
}]

const Home = () => {
	return (
		<div className="container-fluid">
			<TopBar />
			<Jumbotron headMessage={cardContent[1].headMessage} mainPara={cardContent[1].mainPara} secondPara={cardContent[1].secondPara} />
			<div className="container" >
			<div className="row row-cols-1 row-cols-md-4 g-4">
			<LandingCard title = {cardContent[0].title} text = {cardContent[0].text} cardImg = {cardContent[0].cardImg} />
			<LandingCard title = {cardContent[0].title} text = {cardContent[0].text} cardImg = {cardContent[0].cardImg} />
			<LandingCard title = {cardContent[0].title} text = {cardContent[0].text} cardImg = {cardContent[0].cardImg} />
			<LandingCard title = {cardContent[0].title} text = {cardContent[0].text} cardImg = {cardContent[0].cardImg} />
			<LandingCard title = {cardContent[0].title} text = {cardContent[0].text} cardImg = {cardContent[0].cardImg} />
			<LandingCard title = {cardContent[0].title} text = {cardContent[0].text} cardImg = {cardContent[0].cardImg} />
			<LandingCard title = {cardContent[0].title} text = {cardContent[0].text} cardImg = {cardContent[0].cardImg} />
			<LandingCard title = {cardContent[0].title} text = {cardContent[0].text} cardImg = {cardContent[0].cardImg} />
			</div>
			</div>
			<Footer />
		</div>
	)
};



export default Home;
