import React, { Component } from "react";
import { connect } from "react-redux";
import { Apply } from "../actions/applyform";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBInput
} from "mdbreact";

class ApplyForm extends Component {
  state = {
    file: null,

    name: "",
    email: "",
    info: ""
  };

  save = e => {
    this.setState({
      ...this.state,
      file: e.target.files[0]
    });
  };

  onChangeInput = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  onSubmitForm = e => {
    e.preventDefault();

   
    const { name, email, info, file } = this.state;
    const fileName = file.name;
    const formData = new FormData();
    formData.append("file", file);

    this.props.Apply(name, email, info, formData, fileName);
  };

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12">
            <MDBCard>
              <MDBRow>
                <MDBCol md="6">
                  <MDBCardBody>
                    <MDBCardHeader className="form-header deep-blue-gradient rounded">
                      <MDBIcon icon="user-tie" /> Apply Form
                    </MDBCardHeader>
                    <form
                      onSubmit={this.onSubmitForm}
                     
                      className="needs-validation"
                    >
                      <div className="grey-text">
                        <MDBInput
                          label="Adın"
                          icon="user"
                          group
                          type="text"
                          error="wrong"
                          success="right"
                          name="name"
                          onChange={this.onChangeInput}
                          required
                          value={this.state.name}
                        />
                        <div className="invalid-feedback">
                          Please provide a valid state.
                        </div>
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
                        <div className="invalid-feedback">
                          Please provide a valid state.
                        </div>
                        <MDBInput
                          type="textarea"
                          label="Kendinizi tanıtır mısınız ?"
                          rows="2"
                          icon="pencil-alt"
                          name="info"
                          onChange={this.onChangeInput}
                          required
                          value={this.state.info}
                        />
                        <div className="invalid-feedback">
                          Please provide a valid state.
                        </div>
                        <div className="input-group">
                          <div>
                            <label className="custom-label">Cv</label>
                            <input
                              type="file"
                              id="inputGroupFile01"
                              name="file"
                              onChange={this.save}
                              required
                             
                            />
                          </div>
                        </div>
                      </div>

                      <div className="text-center mt-4">
                        <MDBBtn outline color="info" type="submit">
                          Gönder{" "}
                          <MDBIcon far icon="paper-plane" className="ml-1" />
                        </MDBBtn>
                      </div>
                    </form>
                  </MDBCardBody>
                </MDBCol>
                <MDBCol md="6" className="applyform-2">
                  <p>Soldaki formu kullanabilirsin</p>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
const mapStateToProps = state => {
  return {
    form: state.applyForm
  };
};

const mapDispatchToProps = {
  Apply
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApplyForm);
