import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import axios from 'axios';

class ViewJudges extends Component {
    

  render() {
    const { user } = this.props.auth;
    return (
      <div style={{ height: "100vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              Registered Judges are:
            </h4>
            <div>
                
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ViewJudges.propTypes = {
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(ViewJudges);


