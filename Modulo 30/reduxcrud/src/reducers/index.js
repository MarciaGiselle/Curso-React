import { combineReducers } from 'redux';
import libroReducer from './libroReducer';
import alertaReducer from './alertaReducer';

export default combineReducers({
    libro: libroReducer,
    alerta: alertaReducer
})      