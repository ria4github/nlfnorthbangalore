import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import logo from "../images/logo.png"

const Header = ({ siteTitle }) => {
  const name = 'ria';

  
  return (
  <header>
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="/">
        <img src={logo} width="30" height="30" alt="" />
      </a>
        <ul class="nav-menu">
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Sermons</a></li>
          <li><a href="#portfolio">Blogs</a></li>
          <li><a href="#team">Connect</a></li>
          <li><a href="#contact">Give</a></li>
        </ul>
    </nav>
  </header>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
