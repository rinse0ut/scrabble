import { combineReducers } from 'redux'
import words from './words'
import quiz from './quiz'

const scrabbleApp = combineReducers({
  words,
  quiz
})

export default scrabbleApp
