import React, { Component } from 'react';
import ListItemVoteOperation from '../../components/ListVoteItemOperation/list-vote-item-operation';

const ListVoteOperationHandlers = {
  _calculation(props, context, oldState) {
    return {
      text: ''
    }
  },
  _onSubmit(e) {
    e.preventDefault();
    this.props.ADD_VOTE_ITEM(this.state.text)
  },
  _onChange(e) {
    this.setState({
      text: e.target.value
    })
  }
}

export default class ListVoteOperation extends Component {
  constructor(props, context, oldState) {
    super(props, context, oldState);
    for (let fn in ListVoteOperationHandlers) {
      this[fn] = this::ListVoteOperationHandlers[fn]
    }
    this.state = this._calculation(props, context, oldState)
  }

  render() {
    return (
      <div>
        <ListItemVoteOperation items={this.props.items} {...this.props}  />
      </div>
    );
  }
};
