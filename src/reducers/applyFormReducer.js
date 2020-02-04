import {APPLY_PENDING,APPLY_FULFILLED,APPLY_REJECTED} from '../actions/applyform';


const initialState={
    form:{},
    fetching:false,
    error:{},
    done:false
};

export default (state=initialState,action)=>{
    switch(action.type){
        case APPLY_PENDING:
            return{
                ...state,
                fetching:true
            }
        case APPLY_FULFILLED:
            return{
                ...state,
                form:action.payload,
                fetching:false,
                done:true
            }
        case APPLY_REJECTED:
            return{
                ...state,
                error:action.payload,
                fetching:false,
                done:false
            }
        default:
            return state;
    }
}