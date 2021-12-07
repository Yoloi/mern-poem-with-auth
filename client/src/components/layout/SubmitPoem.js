import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

class SubmitPoem extends Component {

render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Submit New Poem</h3>
        <form onSubmit={this.onSubmit}>
         
        </form>
      </div>
    );
  }
}

export default SubmitPoem;