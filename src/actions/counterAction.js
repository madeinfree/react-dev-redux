import * as types from '../constants/actionType';

export function COUNTER_INCREMENT() {
  return { type: types.COUNTER_INCREMENT }
}

export function COUNTER_DECREMENT() {
  return { type: types.COUNTER_DECREMENT }
}
