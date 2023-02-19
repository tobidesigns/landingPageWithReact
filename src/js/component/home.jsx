import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const TopBar = () => {
	return (
<nav className="navbar bg-dark">
	<div className="container-fluid">
    	<a className="navbar-brand text-white">Start Bootstrap</a>
  </div>
</nav>
	)
}

const Jumbrotron = () => {
	return(
	<div className="jumbotron container border border-secondary p-5">
  		<h1 className="display-4">A Warm Welcome!</h1>
  		<p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  		<p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  		<a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
	</div>
	)
}

const LandingCard = () => {
	return (
<div className="card col-3 m-5">
	<img src="https://via.placeholder.com/500x350.png?text=Placeholder" className="card-img-top" alt="..."/>
	<div className="card-body">
    	<h5 className="card-title">Card title</h5>
    	<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    	<a href="#" className="btn btn-primary">Go somewhere</a>
	</div>
</div>
	)
}
//create your first component
const Home = () => {
	return (
		<div>
			<TopBar />
			<Jumbrotron />
			<LandingCard />
			<LandingCard />
			<LandingCard />
			<LandingCard />
		</div>
	)
};



export default Home;
