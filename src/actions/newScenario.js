import axios from 'axios';
import {API_BASE_SCENARIO} from '../config/env';

export const POST_SCENARIO_PENDING="POST_SCENARIO_PENDING";
export const POST_SCENARIO_FULFILLED="POST_SCENARIO_FULFILLED";
export const POST_SCENARIO_REJECTED="POST_SCENARIO_REJECTED";

export function postScenario(scenarioName,scenarioDescription){
    return dispatch => {
        dispatch({
            type:"POST_SCENARIO",
            payload:axios.post(`${API_BASE_SCENARIO}/scenarioapi`,{
                ScenarioName:scenarioName,
                ScenarioDescription:scenarioDescription
            })
            .then(result => result)
        })
    }
}