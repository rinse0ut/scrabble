import { combineReducers } from 'redux'
import words from './words'
import wordFilter from './wordFilter'
import wordTest from './wordTest'

const scrabbleApp = combineReducers({
  words,
  wordFilter,
  wordTest
})

export default scrabbleApp
