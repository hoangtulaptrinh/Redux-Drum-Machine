var initialState = '';
  
var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_VOLUME':
          return state = 'Volume :' + action.valueVolume.value;
        case 'OFF':
          return state = ''
        case 'Display' :
          return state = action.display.value;
        default:
          return state
      }
    }

    export default myReducer;