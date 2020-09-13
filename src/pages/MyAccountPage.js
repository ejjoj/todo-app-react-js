import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class MyAccount extends Component {
  state = {
    redirect: false,
  };

  componentDidMount() {
    if (sessionStorage.getItem("userData")) {
      console.log("Call user feed");
    } else {
      this.setState({
        redirect: true,
      });
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/login" />;
    }

    return <div>MyAccountPage</div>;
  }
}

export default MyAccount;
