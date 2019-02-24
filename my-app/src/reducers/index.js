import { combineReducers } from 'redux';
import Polls from './polls';


const rootReducer = combineReducers({
  polls: Polls,
});

export default rootReducer;