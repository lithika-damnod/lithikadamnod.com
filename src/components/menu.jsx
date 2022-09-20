import React from "react";

import "./menu.css";

export default function Menu() {
  return (
    <div className="menu-wrapper">
      <div className="logo">
        <img src="Lithika Damnod Logo.png" alt="Lithika Damnod Logo" />
      </div>
      <div className="menu-options">
        <p>Projects</p>
        <p>Contests</p>
        <p>About</p>
        <p>Contact</p>
      </div>
    </div>
  );
}
