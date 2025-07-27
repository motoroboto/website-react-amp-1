import React from "react";
import "../css/navbar.css";
import "../scripts/navbar";
import NavHome from "./navhome";
import NavMixtape from "./navmixtapes";
import NavAlbums from "./navalbums";

class Nav extends React.Component {
  render() {
    const currentPath = window.location.pathname;
    let navbarComponent;
    if (currentPath === "/") {
      navbarComponent = <NavHome />;
    } else if (currentPath.includes("mixtapes")) {
      navbarComponent = <NavMixtape />;
    } else if (currentPath.includes("albums")) {
      navbarComponent = <NavAlbums />;
    } else if (currentPath.includes("mashups")) {
      navbarComponent = <NavHome />;
    } else {
      navbarComponent = <NavHome />;
    }

    return (
      <nav className='navbar fixed-top' id='mainNav'>
        <div class='logo'>
          <a href='/'>RCK.</a>
        </div>
        {navbarComponent}
      </nav>
    );
  }
}

export default Nav;
