import React from "react";

export const TopBar = () => {
	return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top mb-5 ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Start Bootstrap</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Contacts</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
	)
}