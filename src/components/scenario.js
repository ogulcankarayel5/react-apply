import React, { Component } from "react";
import { connect } from "react-redux";
import { MDBIcon, MDBBtn, MDBInput } from "mdbreact";
import {postAnswer} from '../actions/scenario';
class Scenario extends Component {
  state = {
    name: "",
    email:'',
    answer:''
  };

  onChangeInput = e => {
    this.setState({
      ...this.state,
      [e.target.name]:e.target.value
    })
  }

  onSubmitForm = e => {
    e.preventDefault();
    const {Id,ScenarioName}=this.props.scenario;
    const {name,email,answer}=this.state;
    this.props.postAnswer(Id,ScenarioName,answer,name,email);
  }
  render() {
    
    return (
      <div className="single-scenario">
        <div className="left" />
        <div className="right">
          <form className="scenario-form" onSubmit={this.onSubmitForm}>
            <div className="scenario-input">
              <MDBInput
                label="Email adresin"
                icon="envelope"
                group
                type="email"
                name="email"
                onChange={this.onChangeInput}
                required
                value={this.state.email}
              />
            </div>

            <div className="scenario-input">
              <MDBInput
                label="Adın"
                icon="user"
                group
                type="text"
                name="name"
                onChange={this.onChangeInput}
                required
                value={this.state.name}
              />
            </div>
            <div className="scenario-input">
              <MDBInput
                type="textarea"
                label="Cevabın ?"
                rows="2"
                icon="pencil-alt"
                name="answer"
                onChange={this.onChangeInput}
                required
                value={this.state.answer}
                
              />
            </div>

            <MDBBtn outline color="info" type="submit">
              Gönder <MDBIcon far icon="paper-plane" className="ml-1" />
            </MDBBtn>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    scenario: state.scenarios.scenario,
    answer:state.scenarioAnswer
  }
};

const mapDispatchToProps = {
  postAnswer
};

export default connect(mapStateToProps,mapDispatchToProps)(Scenario);
