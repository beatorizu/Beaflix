import React from "react";
import Logo from "../../assets/img/Logo.png"
import "./Menu.css"

function Menu() {
	return (
    <nav className="Menu">
      <a href="/">
        <img src={Logo} alt="Beaflix logo" className="Logo" />
      </a>
    </nav>
  );
}

export default Menu;
