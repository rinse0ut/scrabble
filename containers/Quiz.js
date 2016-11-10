import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import R from 'ramda'
import AnswerInput from '../components/AnswerInput'
import ProgressBar from '../components/ProgressBar'
import FlashMessage from '../components/FlashMessage'
import DefinitionList from '../components/DefinitionList'
import Definition from '../components/Definition'
import { addResponse, resetResponses } from '../actions'
import { isCorrectResponse, correctItems, percentage } from '../reducers/quiz'
import { wordsStartingWith } from '../reducers/words'

export class Quiz extends Component {

    constructor(props) {
        super(props);
        props.onInit()
    }

    renderActions() {
        const { startingLetter, progress, onSave } = this.props

        return (progress !== 100)
            ? <AnswerInput startingLetter={startingLetter} onSave={onSave} />
            : <FlashMessage status="success" message="Quiz complete!" />
    }

    renderAnswerMessage() {
        const { responses, correctItems } = this.props
        const lastResponse = R.last(responses)

        if (R.isNil(lastResponse)) {
            return
        }

        return isCorrectResponse(lastResponse, correctItems)
            ? <FlashMessage status="success" message={lastResponse + ' is correct!'} />
            : <FlashMessage status="danger" message={lastResponse + ' is incorrect!'} />
    }

    renderCorrectAnswers() {
        const { correctItems } = this.props

        return R.isEmpty(correctItems)
            ? null
            : <DefinitionList items={correctItems} />
    }

    render() {
        const { startingLetter, progress, correctItems, onSave } = this.props

        return (
            <div>
                <h1>Scrabble Quiz</h1>
                <ProgressBar progress={progress} />
                { this.renderAnswerMessage() }
                { this.renderActions() }
                { this.renderCorrectAnswers() }
            </div>
        )
    }
}

Quiz.propTypes = {
  onSave: PropTypes.func.isRequired,
  onInit: PropTypes.func.isRequired,
  startingLetter: PropTypes.string.isRequired,
  progress: PropTypes.number,
  correctItems: PropTypes.array.isRequired,
  responses: PropTypes.array
}

const mapStateToProps = (state) => {
  const items = wordsStartingWith(state.words, state.quiz.startingLetter)
  const correctAnswers = correctItems(state.quiz.responses, items)
  return {
    startingLetter: state.quiz.startingLetter,
    progress: percentage(correctAnswers, items),
    correctItems: correctAnswers,
    responses: state.quiz.responses
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSave: (text) => dispatch(addResponse(text)),
    onInit: () => dispatch(resetResponses())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz)
