import React, { Component, PropTypes } from 'react';
import render from 'react-dom';

import { connect } from 'react-redux';
import { createStore, bindActionCreators } from 'redux';
import counterReducer from '../../stores/counterData';

import * as CounterActions from '../../actions/counterAction'


const CounterHandlers = {
  _calculation(props, context) {

    return {

    }

  },
  _onIncrement() {

  },
  _onDecrement() {

  }
}

function select(state) {
  return { counterNumber: state.counterNumber };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CounterActions, dispatch)
  }
}

class Counter extends Component {
  constructor(props, context, oldState) {
    super(props, context, oldState);
    for (let fn in CounterHandlers) {
      this[fn] = this::CounterHandlers[fn];
    }
    this.state = this._calculation(props, context)
  }

  render() {
    const { counterNumber, actions } = this.props;

    return (
      <div>
        {counterNumber}
        <button onClick={actions.COUNTER_INCREMENT}>+</button>
        {' '}
        <button onClick={actions.COUNTER_DECREMENT}>-</button>
      </div>
    );
  }
};

Counter.propTypes = {
  counterNumber: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
}

export default connect(
  select,
  mapDispatchToProps
)(Counter)
