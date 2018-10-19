import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <nav className= "navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/clicky-game/">Click it Game</a>
          <p className="navbar-right" id="currentscore">Score: {props.score}</p>
  </nav>
);

export default Navbar;
