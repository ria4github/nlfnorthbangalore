import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import logoWhite from "../images/logo-white.svg";
import DropDown from "./DropDown";

const Header = ({ siteTitle }) => {
  const [color, setColor] = useState(false); //color -> state , setColor -> function that updates the state
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (document.documentElement.scrollTop > 10) {
      setColor(true);
    } else {
      setColor(false);
    }
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  const listener = (e) => {
    if (document.documentElement.scrollTop > 10) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  return (
    <section id="header-container">
      <div className={`header ${color}`}>
        <Link to="/" className={"logo-brand"}></Link>
        <nav id="nav-menu-container">
          <div className="visible-xs toggle">
            <div
              tabIndex={0}
              role="button"
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
                <img alt="logo" src={logoWhite} />
              </Link>
            </li>
            <li className="comingSoon">
              <Link to="/blog">Blogs</Link>
            </li>
            <li>
              <Link to="/ministries">Ministries</Link>
            </li>
            <DropDown title="Sermons">
              <li>
                <Link to="/sermons-english">English</Link>
              </li>
              <li>
                <Link to="/sermons-kannada">Kannada</Link>
              </li>
            </DropDown>

            <li>
              <Link to="/connect">Connect</Link>
            </li>
            <li>
              <Link to="/give ">Give</Link>
            </li>
            <li>
              <Link to="/roots">Roots</Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
