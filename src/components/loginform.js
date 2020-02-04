import React, { Component } from "react";

import { Redirect } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBInput,
  MDBAlert
} from "mdbreact";
import { connect } from "react-redux";
import { Login } from "../actions/login";

class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  };

  onChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.Login(
      this.state.username,
      this.state.password,
      this.props.history
    );
  };

  render() {
    return (
      <div id="login">
        <MDBContainer>
          <MDBRow>
            <MDBCol md="12">
              <MDBCard>
                <MDBCardBody>
                  <MDBCardHeader className="form-header deep-blue-gradient rounded">
                    <h3 className="my-3">
                      <MDBIcon icon="lock" /> Login:
                    </h3>
                  </MDBCardHeader>
                  <form onSubmit={this.handleFormSubmit}>
                    <div className="grey-text">
                      <MDBInput
                        label="Username"
                        icon="user"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        value={this.state.username}
                        onChange={this.onChange}
                        name="username"
                      />
                      <MDBInput
                        label="Type your password"
                        icon="lock"
                        group
                        type="password"
                        validate
                        value={this.state.password}
                        onChange={this.onChange}
                        name="password"
                      />
                    </div>

                    <div className="text-center mt-4">
                      <MDBBtn color="light-blue" className="mb-3" type="submit">
                        Login
                      </MDBBtn>
                      {!this.props.login.loggedIn &&
                      !this.props.login.loginPending ? (
                        <MDBContainer>
                          <MDBAlert color="danger">
                            {this.props.login.error.message}
                          </MDBAlert>
                        </MDBContainer>
                      ) : null}
                    </div>
                  </form>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    login: state.loginForm
  };
};

const mapDispatchToProps = {
  Login
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
