import { combineReducers } from 'redux'
import wordFilter from './wordFilter'
import wordTest from './wordTest'

const scrabbleApp = combineReducers({
  wordFilter,
  wordTest
})

export default scrabbleApp
