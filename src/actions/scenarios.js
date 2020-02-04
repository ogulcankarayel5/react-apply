import axios from 'axios';
import {API_BASE_SCENARIO} from '../config/env';

export const FETCH_SCENARIOS_PENDING="FETCH_SCENARIOS_PENDING";
export const FETCH_SCENARIOS_FULFILLED="FETCH_SCENARIOS_FULFILLED";
export const FETCH_SCENARIOS_REJECTED="FETCH_SCENARIOS_REJECTED";

export const FETCH_SCENARIO_PENDING="FETCH_SCENARIO_PENDING";
export const FETCH_SCENARIO_FULFILLED="FETCH_SCENARIO_FULFILLED";
export const FETCH_SCENARIO_REJECTED="FETCH_SCENARIO_REJECTED";

export function fetchScenarios(){
    return dispatch => {
        dispatch({
            type:"FETCH_SCENARIOS",
            payload:axios.get(`${API_BASE_SCENARIO}/scenarioapi`)
            .then(result =>JSON.parse(result.data))
            .then(data=>data.Items)
            .catch(err=>err)
        })
    }
}

export function fetchScenario(id){
    return dispatch => {
        dispatch({
            type:"FETCH_SCENARIO",
            payload:axios.get(`${API_BASE_SCENARIO}/scenarioapi/scenario/?Id=${id}`)
            .then(result => JSON.parse(result.data))
            .then(data=>data.Item)
            
        })
    }
}