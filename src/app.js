import React, { Component } from 'react'
import { render } from 'react-dom'
// import { Router, Route, Link, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import configureStore from './stores/configureStore'
import App from './containers/App/App'

const store = configureStore()

render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app')
)
