import React, { PropTypes } from 'react'
import R from 'ramda'

const isCorrectGuess = R.contains()

const WordTestResults = ({ words, guesses }) => (
    <div>
        <div className="correct">
            {
                R.intersection(guesses, words)
            }
        </div>
        <div className="wrong">
            {
                R.difference(guesses, words)
            }
        </div>
    </div>
)

WordTestResults.propTypes = {
  words: PropTypes.array.isRequired,
  guesses: PropTypes.array.isRequired
}

export default WordTestResults
