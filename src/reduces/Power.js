var initialState = true;
  
  var myReducer = (state = initialState, action) => {
    if(action.type === 'POWER'){
      state = !state;
      return state;
    }
    return state;
  }

export default myReducer;