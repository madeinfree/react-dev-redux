import React, { Component } from 'react';

const ListItemVoteOperationHandlers = {
  _calculation(props, context, oldState) {
    return {
      text: ''
    }
  },
  _onSubmit(e) {
    e.preventDefault();
    this.props.ADD_VOTE_ITEM(this.state.text)
    this.setState({
      text: ''
    })
  },
  _onChange(e) {
    this.setState({
      text: e.target.value
    })
  }
}

export default class ListItemVoteOperation extends Component {
  constructor(props, context, oldState) {
    super(props, context, oldState);
    for (let fn in ListItemVoteOperationHandlers) {
      this[fn] = this::ListItemVoteOperationHandlers[fn]
    }
    this.state = this._calculation(props, context, oldState)
  }

  render() {
    let items = this.props.items.map( item =>{
      return item.completed ? (
        <div key={item._id}>
          <li style={{textDecoration: 'line-through', cursor: 'pointer'}} onClick={() => this.props.VOTE_COMPLETED(item._id)}>
            {item.text}
          </li>
          <h3 style={{color: 'red'}}>
            票數：{item.voted} - 停止投票
          </h3>
        </div>
      ) : (
        <div key={item._id}>
          <li style={{cursor: 'pointer'}} onClick={() => this.props.VOTE_COMPLETED(item._id)}>
            {item.text}
          </li>
          <h3>
            票數：{item.voted}
            {' '}
            <button onClick={ () => this.props.VOTE_CASE(item._id)}>+</button>
          </h3>
        </div>
      )
    })
    return (
      <div>
        <form onSubmit={this._onSubmit}>
          <input value={this.state.text} onChange={this._onChange} placeholder="write something.."/>
        </form>
        <ul>
          {items}
        </ul>
      </div>
    );
  }
}
