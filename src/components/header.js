import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import logowhite from "../images/logo-white.svg";
import logoblack from "../images/logo-black.svg";

const Header = ({ siteTitle }) => {
  const [color, setColor] = useState(false); //color -> state , setColor -> function that updates the state
  useEffect(() => {
    window.addEventListener("scroll", changeHeader);
    return () => {
      window.removeEventListener("scroll", changeHeader);
    };
  });

  const changeHeader = () => {
    if (document.documentElement.scrollTop > 50) {
      setColor(true);
    } else setColor(false);
  };

  return (
    <section id="header-container">
      <div className={`header ${color}`}>
        <div className="logo-brand">
          {color ? <img src={logoblack} /> : <img src={logowhite} />}
          {/* <img src={logo}/> */}
        </div>
        <nav id="nav-menu-container">
          <div className="visible-xs">Menu</div>
          <ul className="nav-menu">
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/sermons">Sermons</Link>
            </li>
            <li>
              <Link to="/blog">Blogs</Link>
            </li>
            <li>
              <Link to="/connect">Connect</Link>
            </li>
            <li>
              <Link to="/give ">Give</Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
    // <header id="header">
    //   <div className="container-fluid">
    //   <div id="logo" className="pull-left">
    //               <a href="/"><img src={logo} /></a>
    //   </div>
    //   <nav id="nav-menu-container" className="pull-left">
    //       <ul className="nav-menu">
    //         <li><a href="#about">About Us</a></li>
    //         <li><a href="#services">Sermons</a></li>
    //         <li><a href="#portfolio">Blogs</a></li>
    //         <li><a href="#team">Connect</a></li>
    //         <li><a href="#contact">Give</a></li>
    //       </ul>
    //      </nav>
    //   </div>
    // </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
