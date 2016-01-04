import * as types from '../constants/actionType';

export function ADD_TEXT(text) {
  return {
    text,
    type: types.ADD_TEXT
  }
}
