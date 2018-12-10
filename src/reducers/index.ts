import { Map } from 'immutable';
import { types } from '../actions';
const { SHOW, HIDE } = types;

const initState = {
  message: null,
  duration: null
};

const rootReducer = (state = Map(initState), action: any) => {
  switch (action.type) {
    case HIDE:
    case SHOW:
      return {...state, 
        message: action.payload.message,
        duration: action.payload.duration};
    default:
      return state;
  }
};

export default rootReducer;
