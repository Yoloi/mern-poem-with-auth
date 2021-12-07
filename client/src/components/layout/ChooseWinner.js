import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class ChooseWinner extends Component {

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
      };

  render() {
    const { user } = this.props.auth;
    return (
      <div style={{ height: "100vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              Choose a Winner
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

ChooseWinner.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };

  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(ChooseWinner);

