import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import App from './containers/App'
import scrabbleApp from './reducers'
import { getWords } from './actions'
import './css/bootstrap.css'
import './css/style.css'

const middleware = process.env.NODE_ENV === 'production' ?
  [ thunk ] :
  [ thunk, logger() ]

const store = createStore(
  scrabbleApp,
  applyMiddleware(...middleware)
)

// Log the initial state
console.log(store, store.getState())

store.dispatch(getWords())

function render() {
  ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)
