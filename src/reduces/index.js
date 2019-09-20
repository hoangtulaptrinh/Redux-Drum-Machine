import { combineReducers } from 'redux';

import Power from './Power'
import Volume from './Volume'
import Display from './Display'
import SourceSound from './SourceSound'
const myReducer = combineReducers({
    Power : Power,
    Volume : Volume,
    Display : Display,
    SourceSound : SourceSound
});

export default myReducer;