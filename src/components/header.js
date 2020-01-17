import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import logo from "../images/logo.png"

const Header = ({ siteTitle }) => {
  const name = 'ria';

  
  return (
  <header id="header">
    <div className="container-fluid">
    <div id="logo" className="pull-left">
                <a href="/"><img src={logo} /></a>
    </div>
    <nav id="nav-menu-container" className="pull-left">
        <ul className="nav-menu">
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Sermons</a></li>
          <li><a href="#portfolio">Blogs</a></li>
          <li><a href="#team">Connect</a></li>
          <li><a href="#contact">Give</a></li>
        </ul>
       </nav>
    </div>
  </header>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
