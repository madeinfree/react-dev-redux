import React, { Component } from 'react';
import render from 'react-dom';

const ListItemOperationHandlers = {
  _calculation(props, context, oldState) {
    return {
      text: ''
    }
  },
  _onKeyDown(e) {
    e.preventDefault();
    this.props.ADD_OPERATION_TEXT(this.state.text)
  },
  _onChange(e) {
    this.setState({
      text: e.target.value
    })
  }
}

export default class ListItemOperation extends Component {
  constructor(props, context, oldState) {
    super(props, context, oldState);
    for (let fn in ListItemOperationHandlers) {
      this[fn] = this::ListItemOperationHandlers[fn]
    }
    this.state = this._calculation(props, context, oldState)
  }

  render() {
    let itemList = this.props.items.map((item, idx) => {
      return ( item.completed ? (
        <li key={item._id} style={{textDecoration: 'line-through'}} onClick={() => this.props.OPERATION_COMPLETED(item._id)}>{item.text}</li>
      ) : (
        <li key={item._id} onClick={() => this.props.OPERATION_COMPLETED(item._id)}>{item.text}</li>
      ))
    })
    return (
      <div>
        <h3>Press the `Enter` key to add some `TODO` and `Click` `TODO` to completed </h3>
        <form onSubmit={this._onKeyDown}>
          <input value={this.state.text} onChange={this._onChange}/>
          <ul>
            {itemList}
          </ul>
        </form>
      </div>
    );
  }
};
