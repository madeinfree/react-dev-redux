import * as types from '../constants/actionType';

export function ADD_VOTE_ITEM(text) {
  return { type: types.ADD_VOTE_ITEM, text }
}

export function VOTE_COMPLETED(idx) {
  return { type: types.VOTE_COMPLETED, _id: idx }
}

export function VOTE_CASE(idx) {
  return { type: types.VOTE_CASE, _id: idx }
}
