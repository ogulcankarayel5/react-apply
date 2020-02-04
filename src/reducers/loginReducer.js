import {LOGIN_SUCCESS,LOGIN_ERROR} from '../actions/login';

const initialState={
    loginPending:true,
    loggedIn:false,
    user:{},
    error:{}
};

export default (state=initialState,action) => {
    switch(action.type){
       case LOGIN_SUCCESS:
           return{
               ...state,
               loggedIn:true,
               user:action.payload,
               loginPending:false
           }
        case LOGIN_ERROR:
            return{
                ...state,
                loggedIn:false,
                error:action.payload,
                loginPending:false
            }

        default:
            return state;
    }
}