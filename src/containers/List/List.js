import React, { Component } from 'react';
import render from 'react-dom'

import ListItem from '../../components/ListItem/list-item';

const ListHandlers = {
  _caculation(props, context) {
    return {

    }
  },
  _onSubmit(e) {
    e.preventDefault();
  }
}

class List extends Component {
  constructor(props, context, oldState) {
    super(props, context, oldState);
    for (let fn in ListHandlers) {
      this[fn] = this::ListHandlers[fn]
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this._onSubmit}>
          <input />
          {' '}
          <button>ADD</button>
        </form>
        <ListItem />
      </div>
    );
  }
}

export default List;
