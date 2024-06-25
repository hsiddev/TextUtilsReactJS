import React from "react";
import PropTypes from "prop-types";

export default function NavBar(props) {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarExample"
            aria-controls="navbarExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="/">
            <img src="/images/logo192.png" alt="logo" width="36" />
          </a>
          <a href="/" className="navbar-brand">
            {props.titleText}
          </a>
          <div class="collapse navbar-collapse" id="navbarExample">
            <ul class="navbar-nav me-auto mb-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  {props.firstMenu}
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  About Me
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Contact Me
                </a>
              </li>
            </ul>
            <div class="d-flex align-items-center flex-column flex-lg-row">
              <form class="me-2 mb-2 mb-lg-0">
                <input
                  type="text"
                  class="form-control form-control-sm"
                  placeholder="Search"
                />
              </form>
              <a class="btn btn-primary" href="/">
                Search
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

NavBar.propTypes = {
  titleText: PropTypes.string,
  firstMenu: PropTypes.string,
};

NavBar.defaultProps = {
  titleText: "Set Title Name Here",
  firstMenu: "First Menu Item",
};
