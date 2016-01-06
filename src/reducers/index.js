import { combineReducers } from 'redux'
import counter from './counter'
import list from './list'
import listOperation from './list-operation'
import listVoteOperation from './list-vote-operation'

const rootReducer = combineReducers({
  counter,
  list,
  listOperation,
  listVoteOperation
})

export default rootReducer
