import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import R from 'ramda'
import AnswerInput from '../components/AnswerInput'
import ProgressBar from '../components/ProgressBar'
import FlashMessage from '../components/FlashMessage'
import DefinitionList from '../components/DefinitionList'
import Definition from '../components/Definition'
import { addResponse } from '../actions'
import { isCorrectResponse, correctItems, progress } from '../reducers/quiz'
import { wordsStartingWith } from '../reducers/words'


export class Quiz extends Component {

    renderFlashMessage() {
        const { responses, correctItems } = this.props

        if (responses === undefined) return

        const lastResponse = R.last(responses)

        return isCorrectResponse(lastResponse, correctItems)
            ? <FlashMessage status="success" message={lastResponse + ' is correct!'} />
            : <FlashMessage status="danger" message={lastResponse + ' is incorrect!'} />
    }

    render() {
        const { startingLetter, progress, correctItems, onSave } = this.props

        // console.log('QUIZ PROPS', this.props)

        return (
            <div>
                <h1>Scrabble Quiz</h1>
                <ProgressBar progress={progress} />
                { this.renderFlashMessage() }
                {
                    progress === 100 ?
                        <button className="next" onClick={this.next.bind(this)}>Continue</button> :
                        <AnswerInput startingLetter={startingLetter} onSave={onSave} />
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
  // isCorrectResponse: PropTypes.func.isRequired,
  startingLetter: PropTypes.string.isRequired,
  progress: PropTypes.number,
  correctItems: PropTypes.array.isRequired,
  responses: PropTypes.string
}

// const mapStateToProps =

const mapStateToProps = (state) => {
  const items = wordsStartingWith(state.words, state.quiz.startingLetter)
  const correctItems = correctItems(state.quiz.responses, items)
  return {
    startingLetter: state.quiz.startingLetter,
    progress: percentage(correctItems, items),
    correctItems: correctItems,
    responses: state.quiz.responses
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSave: (text) => {
        dispatch(addResponse(text))
    }
  }
}

// onComplete: (wordFilter, wordList) => {
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
// }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz)
