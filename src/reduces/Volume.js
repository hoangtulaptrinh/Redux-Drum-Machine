var initialState = 30;
  
  var myReducer = (state = initialState, action) => {
    if(action.type === 'CHANGE_VOLUME'){
      state = action.valueVolume.value;
      return state;
    }
    return state;
  }

export default myReducer;