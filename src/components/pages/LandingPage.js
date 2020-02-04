import React, { Component } from "react";

import "../../assets/css/landingpage.css";
import { Link } from "react-router-dom";
import { MDBAnimation } from "mdbreact";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <div className="center center-div">
          <div className="center animation-text">
            <MDBAnimation type="flipInX" duration="1s" count={2}>
              <p>
                İletişim yazılım tarafından geliştirilmiş, geliştirici tanıma
                platformuna hoşgeldin.
              </p>
            </MDBAnimation>
          </div>
          <div className="center animation">
            <Link to="/senaryo" className="link" />
            <Link to="/senaryo" className="link" />
            <Link to="/senaryo" className="link" />
          </div>
        </div>

        <div className="features-bottom">
          <div className="features">
            <div className="left">
            <i class="fa fa-thumbs-up fa-2x" aria-hidden="true"></i>
              <h5>Doğru yerdesin</h5>
              <p>Doğru yerdesin</p>
            </div>
            <div className="middle">
            <i class="fas fa-question fa-2x"></i>
              <h5>Soruların mı var ?</h5>
              <Link className="landing-link" to="/faq">Cevaplarını al!</Link>
            </div>
            <div className="right">
            <i class="fa fa-thumbs-up fa-2x" aria-hidden="true"></i>
              <h5>Başvuru Yap!</h5>
              <Link className="landing-link" to="/applyform">Başvuru</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
