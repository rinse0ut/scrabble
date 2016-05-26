import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import R from 'ramda'
import DefinitionList from '../components/DefinitionList'
import ProgressBar from '../components/ProgressBar'
import WordTextInput from '../components/WordTextInput'
import FlashMessage from '../components/FlashMessage'
import threeLetterWords from '../stores/words-three-letter.json';
import { addResponse } from '../actions'
import { isCorrectResponse, getCorrectItems, getProgress } from '../reducers/wordTest'

export class App extends Component {

    renderCorrectItems() {
        const { correctItems } = this.props

        if (R.isEmpty(correctItems)) {
            return null
        }

        return (
            <DefinitionList items={correctItems} />
        )
    }

    renderFlashMessage() {
        const { lastResponse, correctItems } = this.props

        if (lastResponse === undefined) {
            return null
        }

        const isCorrectResponse = (response, items) => {
            return R.indexOf(response, R.pluck('word', items)) !== - 1
        }

        return isCorrectResponse(lastResponse, correctItems)
            ? <FlashMessage status="success" message={lastResponse + ' is correct!'} />
            : <FlashMessage status="danger" message={lastResponse + ' is incorrect!'} />
    }

    render() {
        const { onSave, progress } = this.props

        return (
            <div>
                <h1>Scrabble Words</h1>
                <ProgressBar progress={progress} />
                { this.renderFlashMessage() }
                <div>
                    <WordTextInput onSave={onSave} />
                </div>
                { this.renderCorrectItems() }
            </div>
        )
    }
}

App.propTypes = {
  onSave: PropTypes.func.isRequired,
  correctItems: PropTypes.array.isRequired,
  progress: PropTypes.number.isRequired,
  lastResponse: PropTypes.string
}

const items = [
    {
      "word": "AAH",
      "def": "to exclaim in surprise [v -ED, -ING, -S]"
    },
    {
      "word": "AAL",
      "def": "an East Indian shrub [n -S]"
    },
    {
      "word": "AAS",
      "def": "AA, a rough cindery lava [n]"
    },
    {
      "word": "ABA",
      "def": "a Syrian cloth, also ABAYA [n -S]"
    },
    {
      "word": "ABB",
      "def": "a wool yarn [n -S]"
    },
    {
      "word": "ABO",
      "def": "an aborigine [n -S]"
    },
    {
      "word": "ABS",
      "def": "AB, an abdominal muscle [n]"
    },
    {
      "word": "ABY",
      "def": "to pay a penalty [v ABOUGHT, ABYING, ABYS or ABIES]"
    },
]

const mapStateToProps = (state) => {
  return {
    correctItems: getCorrectItems(state.responses, items),
    progress: getProgress(state.responses, items),
    lastResponse: R.last(state.responses)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSave: (text) => {
        dispatch(addResponse(text))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
