import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import App from './containers/App'
import Quiz from './containers/Quiz'
import Index from './components/Index'
import About from './components/About'
import scrabbleApp from './reducers'
import { getWords } from './actions'
import './css/bootstrap.css'
import './css/style.css'

import WordList from './containers/WordList'
import WordSectionList from './containers/WordSectionList'

const middleware = process.env.NODE_ENV === 'production' ?
  [ thunk ] :
  [ thunk, logger() ]

const store = createStore(
  scrabbleApp,
  applyMiddleware(...middleware)
)

// Log the initial state
// console.log(store, store.getState())

store.dispatch(getWords())

function render() {
  ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/" component={Index}/>
          <Route path="/about" foo="bar" component={About}/>
          <Route path="/two-letter-words" len="2" component={WordSectionList}/>
          <Route path="/three-letter-words" len="3" component={WordList}/>
          <Route path="/two-letter-words-test" len="2" component={Quiz}/>
          <Route path="/three-letter-words-teste" len="3" component={App}/>
        </Router>
    </Provider>,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )
