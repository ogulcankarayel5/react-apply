import {POST_SCENARIO_PENDING,POST_SCENARIO_FULFILLED,POST_SCENARIO_REJECTED} from '../actions/newScenario';

const initialState = {
    scenario:{},
    fetching:false,
    done:true,
    error:{}
};

export default (state=initialState,action) => {
    switch(action.type){
        case POST_SCENARIO_PENDING:
            return{
                ...state,
                fetching:true,
                done:false,
            }
        case POST_SCENARIO_FULFILLED:
            return{
                ...state,
                scenario:action.payload,
                done:true,
                fetching:false
            }
        case POST_SCENARIO_REJECTED:
            return{
                ...state,
                error:action.payload,
                done:false,
                fetching:false
            }
        default:
            return state;
        
    }
}