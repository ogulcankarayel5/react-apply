import {POST_ANSWER_PENDING,POST_ANSWER_FULFILLED,POST_ANSWER_REJECTED} from '../actions/scenario';

const initialState = {
    fetching:false,
    error:{},
    done:false,
    answer:{}

};
export default (state=initialState,action) => {
    switch(action.type){
        case POST_ANSWER_PENDING:
            return{
                ...state,
                fetching:true,
                done:false
            }
        case POST_ANSWER_FULFILLED:
            return{
                ...state,
                fetching:false,
                done:true,
                answer:action.payload
            }
        case POST_ANSWER_REJECTED:
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