import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center black-text"
            >
              Home
            </Link>
            <br/>
            <Link
              to="/register"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center black-text"
            >
              Register
            </Link>
            <br/>
            <Link
              to="/login"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center black-text"
            >
              Login
            </Link>
            <br/>
            <Link
              to="/submitpoem"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center black-text"
            >
              Submit Poem
            </Link>
            <br/>
            <Link
              to="/viewjudges"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center black-text"
            >
              View Judges
            </Link>
            <br/>
            <Link
              to="/choosewinner"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center black-text"
            >
              Choose winner
            </Link>
            <br/>
            <Link
              to="/viewwinners"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center black-text"
            >
              View winners
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
