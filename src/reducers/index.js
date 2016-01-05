import { combineReducers } from 'redux'
import counter from './counter'
import list from './list'
import listOperation from './list-operation'

const rootReducer = combineReducers({
  counter,
  list,
  listOperation
})

export default rootReducer
