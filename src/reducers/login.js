import {GET_TRACK_HISTORY, LOG_OUT, LOGIN_USER_ERROR, REGISTER_USER_ERROR, REGISTER_USER_RES} from "../actions/user";

const initialState = {
  user: {},
  errorReg: false,
  errorLog: false,
  trackHistory: []
};

const user = (state = initialState, action) => {
  if(action.type === REGISTER_USER_RES){
    return {...state, user: action.data, errorReg: false};
  }
  if(action.type === REGISTER_USER_ERROR){
    return {...state, errorReg: action.error};
  }

  if(action.type === LOGIN_USER_ERROR){
    return {...state, errorLog: action.error};
  }

  if(action.type === LOG_OUT){
    return initialState;
  }

  if(action.type === GET_TRACK_HISTORY){
    return {...state, trackHistory: action.data};
  }
  return state;
};

export default user;