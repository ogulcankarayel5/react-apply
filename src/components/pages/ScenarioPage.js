import React, { Component } from 'react'
import Scenario from '../scenario';
import {connect} from 'react-redux';
import {fetchScenario} from '../../actions/scenarios';

class ScenarioPage extends Component {

    componentDidMount(){
        const Id=this.props.match.params.Id
        if(Id){
            this.props.fetchScenario(Id);
        }
        else{
            this.props.history.push('/senaryo');
        }
    }
    render() {
        
        return (
            <div>
                <Scenario {...this.props}/>
            </div>
        )
    }
}

const mapDispatchToProps = {
    fetchScenario
};

export default connect (null,mapDispatchToProps)(ScenarioPage);

