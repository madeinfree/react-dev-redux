import {
  ADD_VOTE_ITEM,
  VOTE_COMPLETED,
  VOTE_CASE
} from '../constants/actionType'

const initialState = [
  {
    _id: 1,
    text: 'Taiwan',
    completed: false,
    voted: 30
  },
  {
    _id: 2,
    text: 'China',
    completed: false,
    voted: 18
  },
  {
    _id: 3,
    text: 'Japan',
    completed: true,
    voted: 25
  }
]

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_VOTE_ITEM:
      return [
        ...state,
        {
          _id: state.length + 1,
          text: action.text,
          completed: false,
          voted: 0
        }
      ]
    case VOTE_CASE:
      return state.map( item =>
        item._id === action._id ?
          Object.assign({}, item, { voted: item.voted + 1 } ) :
          item
      )
    case VOTE_COMPLETED:
      return state.map( item =>
        item._id === action._id ?
          Object.assign({}, item, { completed: !item.completed } ) :
          item
      )
    default:
      return state
  }
}
