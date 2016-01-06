import React, { Component } from 'react';
import render from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Counter from '../Counter/Counter';
import List from '../List/List';
import ListOperation from '../ListOperation/ListOperation';
import ListVoteOperation from '../ListVoteOperation/ListVoteOperation';

import * as CounterActions from '../../actions/counterAction'
import * as ListActions from '../../actions/listAction';
import * as ListOperationActions from '../../actions/listOperationAction';
import * as ListVoteOperationActions from '../../actions/listVoteOperationAction';

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
    const {
      counterNumber,
      listProps ,
      CounterActions,
      ListActions,
      listOperationProps,
      ListOperationActions,
      listVoteOperationProps,
      ListVoteOperationActions } = this.props;
    return (
      <div>
        <h1>(Day.1) Stage1: Number</h1>
        <Counter counterNumber={counterNumber} {...CounterActions}/>
        <hr />
        <h1>(Day.2) Stage2: List</h1>
        <List listProps={listProps} {...ListActions} />
        <hr />
        <h1>(Day.3) Stage3: List Operation</h1>
        <ListOperation { ...listOperationProps } { ...ListOperationActions }/>
        <hr />
        <h1>(Day.4) Stage4: List Vote Operation </h1>
        <ListVoteOperation items={listVoteOperationProps} { ...ListVoteOperationActions }/>
        <hr />
        <h1>(Day.5) Stage5: Shopping-Cart </h1>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    counterNumber: state.counter.counterNumber,
    listProps: state.list,
    listOperationProps: state.listOperation,
    listVoteOperationProps: state.listVoteOperation
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    CounterActions: bindActionCreators(CounterActions, dispatch),
    ListActions: bindActionCreators(ListActions, dispatch),
    ListOperationActions: bindActionCreators(ListOperationActions, dispatch),
    ListVoteOperationActions: bindActionCreators(ListVoteOperationActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
