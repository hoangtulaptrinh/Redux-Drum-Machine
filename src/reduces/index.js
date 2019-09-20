import { combineReducers } from 'redux';

import Power from './Power'
import Volume from './Volume'
import Display from './Display'

const myReducer = combineReducers({
    Power : Power,
    Volume : Volume,
    Display : Display
});

export default myReducer;