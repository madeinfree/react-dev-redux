import {
  COUNTER_INCREMENT,
  COUNTER_DECREMENT
} from '../constants/actionType';

let initialState = {
  counterNumber: 0
}

export default function counterReducer(state = initialState, action) {
  switch (action.type) {

    case COUNTER_INCREMENT:
      return {
        ...state,
        counterNumber: state.counterNumber + 1
      }
    case COUNTER_DECREMENT:
      return {
        ...state,
        counterNumber: state.counterNumber - 1
      }
    default:
      return state;

  }
};
