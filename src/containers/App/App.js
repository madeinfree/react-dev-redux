import React, { Component } from 'react';
import render from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Counter from '../Counter/Counter';
import List from '../List/List';

import * as CounterActions from '../../actions/counterAction'
import * as ListActions from '../../actions/listAction';

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
    const { counterNumber, listProps ,CounterActions, ListActions } = this.props;
    return (
      <div>
        <h1>Stage1: Number</h1>
        <Counter counterNumber={counterNumber} actions={CounterActions}/>
        <hr />
        <h1>Stage2: List</h1>
        <List listProps={listProps} {...ListActions} />
        <h1>Stage3: List Operation</h1>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    counterNumber: state.counter.counterNumber,
    listProps: state.list
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    ListActions: bindActionCreators(ListActions, dispatch),
    CounterActions: bindActionCreators(CounterActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
