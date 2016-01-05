import React, { Component } from 'react';
import render from 'react-dom'

import ListItem from '../../components/ListItem/list-item';

const ListHandlers = {
  _caculation(props, context) {
    return {
      text: this.props.listProps.text,
    }
  },
  _onSubmit(e) {
    e.preventDefault();
  },
  _onChange(e) {
    this.setState({
      text: e.target.value
    })
  },
  _onKeyDown(e) {
    if (e.which === 13) {
      this.props.ADD_TEXT(e.target.value)
      this.setState({
        text: ''
      })
    }
  }
}

class List extends Component {
  constructor(props, context, oldState) {
    super(props, context, oldState);
    for (let fn in ListHandlers) {
      this[fn] = this::ListHandlers[fn]
    }
    this.state = this._caculation(props, context)
  }
  render() {
    let { listProps } = this.props
    return (
      <div>
        <form onSubmit={this._onSubmit}>
          <input ref="inp" value={this.state.text} onKeyDown={this._onKeyDown} onChange={this._onChange}/>
          {' '}
          <button>ADD</button>
        </form>
        <ListItem items={listProps.items}/>
      </div>
    );
  }
}

export default List;
