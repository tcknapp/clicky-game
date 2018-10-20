import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <nav className= "navbar navbar-dark bg-dark">
        <div className="navbar-brand">
        </div>
          <p className="navbar-right" id="currentscore">Score: {props.score}</p>
  </nav>
);

export default Navbar;
