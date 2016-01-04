import React, { Component } from 'react';
import render from 'react-dom'

export default class ListItem extends Component {
  constructor(props, context, oldState) {
    super(props, context, oldState);
  }
  render() {
    let { items } = this.props
    let itemList = items.map((v, idx) => {
      return <Item key={idx} value={v.text} />
      })
    return (
      <ul>
        {itemList}
      </ul>
    );
  }
}

class Item extends Component {
  constructor(props, context, oldState) {
    super(props, context, oldState);
  }
  render() {
    return (
      <li key={this.props.key}>{this.props.value}</li>
    );
  }
}
