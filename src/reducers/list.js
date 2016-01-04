import {
  ADD_TEXT
} from '../constants/actionType';

const initialState = {
  items: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_TEXT:
      return Object.assign({}, state, {
        items: [
          ...state.items,
          {
            text: action.text
          }
        ]
      })
    default:
      return state;
  }

}
