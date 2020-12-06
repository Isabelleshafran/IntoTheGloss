import { combineReducers } from 'redux';

import entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';

const RootReducer = combineReducers({
    entities: entitiesReducer, 
    sesssion: sessionReducer
})

export default RootReducer;