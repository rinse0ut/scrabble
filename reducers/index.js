import { combineReducers } from 'redux'
import words from './words'
import quiz from './quiz'
import wordFilter from './wordFilter'
import wordTest from './wordTest'

const scrabbleApp = combineReducers({
  words,
  quiz
})

export default scrabbleApp
