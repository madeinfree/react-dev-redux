import * as types from '../constants/actionType';

export function ADD_OPERATION_TEXT(text) {
  return { type: types.ADD_OPERATION_TEXT, text }
}

export function OPERATION_COMPLETED(idx) {
  return { type: types.OPERATION_COMPLETED, _id: idx }
}
