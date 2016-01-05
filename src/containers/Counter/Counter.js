import React, { Component, PropTypes } from 'react';
import render from 'react-dom';

const CounterHandlers = {
  _calculation(props, context) {
    return {

    }

  },
  _onIncrement() {
    return this.props.COUNTER_INCREMENT()
  },
  _onDecrement() {
    return this.props.COUNTER_DECREMENT()
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
    const { counterNumber } = this.props;
    return (
      <div>
        <h1>The number is: {counterNumber}</h1>
        <div>
          <button onClick={this._onIncrement}>+</button>
          {' '}
          <button onClick={this._onDecrement}>-</button>
        </div>
      </div>
    );
  }
};
