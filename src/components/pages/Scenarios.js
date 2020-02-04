import React, { Component } from 'react'
import ScenariosList from '../scenariosList';
import '../../assets/css/senaryo.css';
import {connect} from 'react-redux';
import {fetchScenarios} from '../../actions/scenarios';

class ScenariosPage extends Component {

    componentDidMount(){
        this.props.fetchScenarios();
    }
    render() {
        return (
            <div>
                <ScenariosList/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      scenarios: state.scenarios
    }
}

const mapDispatchToProps = {
    fetchScenarios
};

export default connect(mapStateToProps,mapDispatchToProps)(ScenariosPage);



