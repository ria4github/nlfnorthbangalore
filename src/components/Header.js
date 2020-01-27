import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import logoWhite from "../images/logo-white.svg";

const Header = ({ siteTitle }) => {
  const [color, setColor] = useState(false); //color -> state , setColor -> function that updates the state
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", changeHeader);
    return () => {
      window.removeEventListener("scroll", changeHeader);
    };
  });

  const changeHeader = () => {
    console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop > 100) {
      setColor(true);
    } else setColor(false);
  };

  return (
    <section id="header-container">
      <div className={`header ${color}`}>
        <Link to="/" className={"logo-brand"}></Link>
        <nav id="nav-menu-container">
          <div className="visible-xs toggle">
            <div
              onClick={() => setMenu(!menu)}
              className={`menu ${menu ? "active" : "inactive"}`}
            >
              <div>
                <span></span>
                <span></span>
              </div>
              <svg>
                <use xlinkHref="#path" />
              </svg>
              <svg>
                <use xlinkHref="#path" />
              </svg>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
              <symbol
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 44 44"
                id="path"
              >
                <path d="M22,22 L2,22 C2,11 11,2 22,2 C33,2 42,11 42,22"></path>
              </symbol>
            </svg>
          </div>
          <ul className={`nav-menu ${menu ? "active" : "inactive"}`}>
            <li className="logo visible-xs">
              <Link to="/">
                <img src={logoWhite} />
              </Link>
            </li>
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
