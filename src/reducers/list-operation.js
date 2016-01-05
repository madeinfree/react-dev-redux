import {
  ADD_OPERATION_TEXT,
  OPERATION_COMPLETED
} from '../constants/actionType'

const initialState = {
  items: [
    {
      _id: 0,
      text: 'Stage-1',
      completed: false
    },
    {
      _id: 1,
      text: 'Stage-2',
      completed: true
    }
  ]
}

export default (state = initialState, action ) => {
  switch (action.type) {
    case ADD_OPERATION_TEXT:
        return (
          Object.assign({}, state, {
              items: [
                ...state.items,
                {
                  _id: state.items.length + 1,
                  text: action.text,
                  completed: false
                }
              ]
          })
        )
      break;
    case OPERATION_COMPLETED:
      let newItems = [];
      let getItemsObject = state.items.map(item => {
        item._id === action._id ? newItems.push(Object.assign({}, item, { completed: !item.completed })) : newItems.push(item)
      })
      return (
        {
          items: newItems
        }
      )
      break;
    default:
      return state
  }
}
