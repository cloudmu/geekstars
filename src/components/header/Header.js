import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import "./header.css";

class Header extends Component {
  render() {
    const pathname = this.props.history.location.pathname;
    const isAboutPage = pathname.indexOf("about") > -1;
    const isUsersPage = pathname.indexOf("users") > -1;
    const isReposPage = pathname.indexOf("repos") > -1;

    return (
      
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <Link to="/" className="navbar-brand">
        <div title="Home" className="brand" />
        Home
      </Link>
      
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        
        <div id="navbarCollapse" className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li
              title="Github Users with over 1000 Followers"
              className={isUsersPage ? "nav-item active" : "nav-item"}
            >
              <Link className="nav-link" to="/users">Most Followed Users</Link>
            </li>
            <li
              title="Github Repos with over 10000 Stars"
              className={isReposPage ? "nav-item active" : "nav-item"}
            >
              <Link className="nav-link" to="/repos">Most Starred Repos</Link>
            </li>
            <li
              title="About"
              className={isAboutPage ? "nav-item active" : "nav-item"}
            >
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  user: PropTypes.string,
  handleLogout: PropTypes.func.isRequired
};

export default withRouter(Header);
