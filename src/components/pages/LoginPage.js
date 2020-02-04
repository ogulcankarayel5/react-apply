import React, { Component } from "react";
import LoginForm from "../loginform";
import "../../assets/css/loginpage.css";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return <LoginForm history={this.props.history} />;
  }
}
