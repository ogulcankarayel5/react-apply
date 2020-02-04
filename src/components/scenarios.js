import React from "react";
import {Link} from 'react-router-dom';

const Scenarios = props => {
  console.log(props.scenario);
  return (

    <div>
      <div className="senaryo">
      <div class="app">
  <header>
    <a href="">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/154571/Official.png" alt="Earth News"></img>
    </a>
  </header>
  <nav>
    
    
  </nav>
  <main>
    <h3>{props.scenario.ScenarioName}</h3>
    <p>{props.scenario.ScenarioDescription}.</p>
    <Link to={`/senaryo/${props.scenario.Id}`} className="main-link"></Link>
  </main>
</div>

        <div className="animation-senaryo">
          <Link to="" className="link" />
          <Link to="" className="link" />
        </div>
      </div>
      
    </div>
  );
}

export default Scenarios;
