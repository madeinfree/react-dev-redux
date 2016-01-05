import React, { Component } from 'react';
import render from 'react-dom'

import ListItemOperation from '../../components/ListItemOperation/list-item-operation';

const ListOperationHandlers = {
  _calculation(props, context, oldState) {

    return {

    }
  }
}

export default class ListOperation extends Component {
  constructor(props, context, oldState) {
    super(props, context, oldState);
    for (let fn in ListOperationHandlers) {
      this[fn] = this::ListOperationHandlers[fn]
    }
    this.state = this._calculation(props, context, oldState)
  }

  render() {
    return (
      <div>
        <ListItemOperation {...this.props}/>
      </div>
    );
  }
};
