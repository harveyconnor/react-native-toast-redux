import { types } from '../actions';
const { SHOW, HIDE } = types;

const initialState = {
  message: null,
  duration: null
};

const rootReducer = (state = initialState, action: any) => {
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
