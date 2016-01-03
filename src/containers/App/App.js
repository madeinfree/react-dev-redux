import React, { Component } from 'react';
import render from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Counter from '../Counter/Counter';
import List from '../List/List';

import * as CounterActions from '../../actions/counterAction'

const AppHandlers = {
  _calculation(props, context) {
    return {
    }

  }
}

class App extends Component {
  constructor(props, context, oldState) {
    super(props, context, oldState);
    for (let fn in AppHandlers) {
      this[fn] = this::AppHandlers[fn];
    }
    this.state = this._calculation(props, context)
  }

  render() {
    const { counterNumber, actions } = this.props;
    return (
      <div>
        <h1>Stage1: Number</h1>
        <Counter counterNumber={counterNumber} actions={actions}/>
        <hr />
        <h1>Stage2: List</h1>
        <List />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { counterNumber: state.counter.counterNumber };
}
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(CounterActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
