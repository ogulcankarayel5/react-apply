import {combineReducers} from 'redux';

import loginReducer from './loginReducer';
import applyFormReducer from './applyFormReducer';
import newScenarioReducer from './newScenarioReducer';
import scenariosReducer from './scenariosReducer';
import scenarioReducer from './scenarioReducer';

export default combineReducers({
  loginForm:loginReducer,
  applyForm:applyFormReducer,
  scenario:newScenarioReducer,
  scenarios:scenariosReducer,
 
});
