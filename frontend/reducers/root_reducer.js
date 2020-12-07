import { combineReducers } from 'redux';

import entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';
// import sessionErrorsReducer from './session_errors_reducer'
import errorsReducer from './errors_reducer';

const RootReducer = combineReducers({
    entities: entitiesReducer, 
    sesssion: sessionReducer, 
    errors: errorsReducer
})

export default RootReducer;