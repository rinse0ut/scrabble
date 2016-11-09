import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import R from 'ramda'
import AnswerInput from '../components/AnswerInput'
import ProgressBar from '../components/ProgressBar'
import FlashMessage from '../components/FlashMessage'
import DefinitionList from '../components/DefinitionList'
import Definition from '../components/Definition'
import { addResponse } from '../actions'
import { getCorrectItems, getProgress } from '../reducers/quiz'
import { wordsStartingWith } from '../reducers/words'


export class Quiz extends Component {

    renderFlashMessage() {
        const { lastResponse, correctItems } = this.props

        if (lastResponse === undefined) return

        const isCorrectResponse = (response, items) => {
            return R.indexOf(response, R.pluck('word', items)) !== - 1
        }

        return isCorrectResponse(lastResponse, correctItems)
            ? <FlashMessage status="success" message={lastResponse + ' is correct!'} />
            : <FlashMessage status="danger" message={lastResponse + ' is incorrect!'} />
    }

    render() {
        const { startingLetter, progress, correctItems, onSave } = this.props

        return (
            <div>
                <h1>Scrabble Quiz</h1>
                <ProgressBar progress={progress} />
                { this.renderFlashMessage() }
                {
                    progress === 100 ?
                        <button className="next" onClick={this.next.bind(this)}>Continue</button> :
                        <AnswerInput key="foo" startingLetter={startingLetter} onSave={onSave} />
                }
                {
                    R.isEmpty(correctItems) ?
                        null :
                        <DefinitionList items={correctItems} />
                }
            </div>
        )
    }
}

Quiz.propTypes = {
  onSave: PropTypes.func.isRequired,
  startingLetter: PropTypes.array.isRequired,
  progress: PropTypes.number,
  correctItems: PropTypes.array.isRequired,
  lastResponse: PropTypes.string
}

const mapStateToProps = (state) => {
  const items = wordsStartingWith(state.words, state.quiz.startingLetters)
  console.log('STARTING LETTER', state.quiz.startingLetter)
  return {
    startingLetter: state.quiz.startingLetter,
    progress: getProgress(state.quiz.responses, items),
    correctItems: getCorrectItems(state.quiz.responses, items),
    lastResponse: R.last(state.quiz.responses)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSave: (text) => {
        dispatch(addResponse(text))
    },
    onComplete: (wordFilter, wordList) => {

        // const findNextLetter = letter => {
        //     let words = []
        //     while (words.length === 0) {
        //        letter = String.fromCharCode(letter.charCodeAt(0) + 1)
        //        words = filterWords( { letters: [wordFilter.letters[0], letter] }, wordList)
        //
        //     }
        //     return letter
        // }
        //
        // dispatch(setLetter(1, findNextLetter(wordFilter.letters[1])))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz)
