import React, { Component } from "react";
import {connect} from 'react-redux';
import {postScenario} from '../../actions/newScenario';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCard
} from "mdbreact";

 class Senaryoform extends Component {

  state={
    scenarioName:'',
    scenarioDescription:''

  };

  onChangeInput = e => {
    this.setState({
      ...this.state,
      [e.target.name]:e.target.value

    });
  }

  onSubmitForm = e => {
    e.preventDefault();

    const {scenarioName,scenarioDescription}=this.state;
    this.props.postScenario(scenarioName,scenarioDescription);

  }
  
  render() {
    return (
      <MDBContainer>
      <div className="senaryoform">
       
          <MDBRow>
            <MDBCol md="6">
             <MDBCard>
             <form onSubmit={this.onSubmitForm}>
                <p className="h5 text-center mb-4">Senaryo Kaydet</p>
                <div className="grey-text">
                  <MDBInput
                    label="Senaryo"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    onChange={this.onChangeInput}
                    name="scenarioName"
                  />

                  <MDBInput
                    type="textarea"
                    rows="2"
                    label="Senaryo Açıklama"
                    icon="pencil-alt"
                    name="scenarioDescription"
                    onChange={this.onChangeInput}
                  />
                </div>
                
                  
                  <div className="input-group">
                          <div>
                            <label className="custom-label">Pdf</label>
                            <input
                              type="file"
                              id="inputGroupFile01"
                              name="file"
                              
                            />
                          </div>
                        </div>
               
                        <div className="input-group">
                          <div>
                            <label className="custom-label">Img</label>
                            <input
                              type="file"
                              id="inputGroupFile01"
                              name="file"
                              
                            />
                          </div>
                        </div>
                <div className="text-center">
                  <MDBBtn outline color="secondary" type="submit">
                    Senaryo Kaydet{" "}
                    <MDBIcon far icon="paper-plane" className="ml-1" />
                  </MDBBtn>
                </div>
              </form>
             </MDBCard>
            </MDBCol>
          </MDBRow>
        
      </div>
      </MDBContainer>
    );
  }
}

const mapStateToProps = state => {
  return{
    scenario:state.scenario
  }
};

const mapDispatchToProps  = {
  postScenario
};

export default connect (mapStateToProps,mapDispatchToProps)(Senaryoform);