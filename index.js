import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import Quiz from './containers/Quiz'
import LetterIndex from './containers/LetterIndex'
import WordList from './containers/WordList'
import Index from './components/Index'
import About from './components/About'
import scrabbleApp from './reducers'
import { getWords, letterIndex } from './actions'
import './css/bootstrap.css'
import './css/style.css'

import WordSectionList from './containers/WordSectionList'

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
          <Router history={hashHistory}>
            <Route path="/" component={Index}/>
            <Route path="about" component={About}/>
            <Route path="two-letter-words" component={LetterIndex}/>
            <Route path="two-letter-words/letter/:letter" component={WordList}/>
            <Route path="quiz" component={LetterIndex}/>
            <Route path="quiz/letter/:letter" component={Quiz}/>
          </Router>
      </Provider>,
      document.getElementById('root')
    )
}

render()
store.subscribe(render)
