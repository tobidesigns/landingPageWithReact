import React from "react";

export const LandingCard = (props) => {
	return (
        <div className="col mt-5">
    <div className="card ">
	<img src={props.cardImg} className="card-img-top" alt="..."/>
	<div className="card-body">
    	<h5 className="card-title">{props.title}</h5>
    	<p className="card-text">{props.text}</p>
    	<a href="#" className="btn btn-primary">Go somewhere</a>
	</div>
        </div>

</div>
	)
}