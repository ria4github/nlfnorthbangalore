import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

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
        <Link to="/" className={"logo-brand"}></Link>
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
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
