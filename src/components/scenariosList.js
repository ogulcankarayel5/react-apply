import React, { Component } from "react";

import { ClipLoader } from "react-spinners";
import { connect } from "react-redux";
import Scenarios from "./scenarios";

function ScenariosList(props) {
  const List = (
    <div>
      <ClipLoader size={100} loading={props.scenarios.fetching} />
      {props.scenarios.error.response ? 
        <p>{props.scenarios.error.response}</p>
       : 
        props.scenarios.scenarios.map(scenario => 
          <Scenarios key={scenario.Id} scenario={scenario}></Scenarios>
        )
      }
    </div>
  );

  return (
  
        <div>{List}</div>
        
  );
}

const mapStateToProps = state => {
  return {
    scenarios: state.scenarios
  }
}

export default connect(mapStateToProps)(ScenariosList);
