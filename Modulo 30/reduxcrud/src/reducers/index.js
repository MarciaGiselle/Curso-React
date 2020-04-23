import { combineReducers } from 'redux';
import libroReducer from './libroReducer';

export default combineReducers({
    libro: libroReducer,
})