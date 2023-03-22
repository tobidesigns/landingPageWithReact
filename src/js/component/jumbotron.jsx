import React from "react";

export const Jumbotron = (props) => {
	return(
	<div className="jumbotron container border border-secondary  p-5">
  		<h1 className="display-4">{props.headMessage}</h1>
  		<p className="lead">{props.mainPara}</p>
  		<p>{props.secondPara}</p>
  		<a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
	</div>
	)
}
