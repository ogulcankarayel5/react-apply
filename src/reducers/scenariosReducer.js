import {FETCH_SCENARIOS_PENDING,FETCH_SCENARIOS_FULFILLED,FETCH_SCENARIOS_REJECTED,
        FETCH_SCENARIO_PENDING,FETCH_SCENARIO_FULFILLED,FETCH_SCENARIO_REJECTED}
         from '../actions/scenarios';

const initialState = {
    scenarios:[],
    fetching:false,
    done:false,
    error:{},
    scenario:{}
};

export default (state=initialState,action) => {
    switch(action.type){
        case FETCH_SCENARIOS_PENDING:
            return{
                ...state,
                fetching:true,
                done:false
            }
        case FETCH_SCENARIOS_FULFILLED:
            return{
                ...state,
                scenarios:action.payload,
                done:true,
                fetching:false
            }
        case FETCH_SCENARIOS_REJECTED:
            return{
                ...state,
                error:action.payload,
                done:false,
                fetching:false
            }

            //fetch_scenario

        case FETCH_SCENARIO_PENDING:
            return{
                ...state,
                fetching:true,
                done:false
            }
        case FETCH_SCENARIO_FULFILLED:
            return{
                ...state,
                fetching:false,
                done:true,
                scenario:action.payload
            }
        case FETCH_SCENARIO_REJECTED:
            return{
                ...state,
                fetching:false,
                done:false,
                error:action.payload
            }
        default:
            return state;
    }
}