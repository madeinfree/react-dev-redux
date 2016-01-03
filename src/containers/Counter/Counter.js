import React, { Component, PropTypes } from 'react';
import render from 'react-dom';

const CounterHandlers = {
  _calculation(props, context) {
    return {

    }

  },
  _onIncrement(actions) {
    return actions.COUNTER_INCREMENT
  },
  _onDecrement(actions) {
    return actions.COUNTER_DECREMENT
  }
}

export default class Counter extends Component {
  constructor(props, context, oldState) {
    super(props, context, oldState);
    for (let fn in CounterHandlers) {
      this[fn] = this::CounterHandlers[fn];
    }
    this.state = this._calculation(props, context)
  }

  render() {
    const { counterNumber, actions } = this.props;
    const { _onIncrement, _onDecrement } = this;
    return (
      <div>
        <h1>The number is: {counterNumber}</h1>
        <div>
          <button onClick={_onIncrement(actions)}>+</button>
          {' '}
          <button onClick={_onDecrement(actions)}>-</button>
        </div>
      </div>
    );
  }
};
