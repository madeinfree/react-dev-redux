import React, { Component } from 'react';
import render from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Counter from '../Counter/Counter';

import counterReducer from '../../stores/counterData';

const store = createStore(counterReducer);

const AppHandlers = {
  _calculation(props, context) {

    return {

    }

  }
}

export default class App extends Component {
  constructor(props, context, oldState) {
    super(props, context, oldState);
    for (let fn in AppHandlers) {
      this[fn] = this::AppHandlers[fn];
    }
    this.state = this._calculation(props, context)
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>Stage1: Number</h1>
          <Counter />
          <hr />
        </div>
      </Provider>
    );
  }
};
