import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import RouterWrapper from './containers/RouterWrapper'
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

store.dispatch(getWords())

function render() {
  ReactDOM.render(
      <Provider store={store}>
          <RouterWrapper />
      </Provider>,
      document.getElementById('root')
  )
}

render()
store.subscribe(render)
