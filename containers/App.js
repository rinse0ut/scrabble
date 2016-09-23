import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import R from 'ramda'
import DefinitionList from '../components/DefinitionList'
import ProgressBar from '../components/ProgressBar'
import WordTextInput from '../components/WordTextInput'
import FlashMessage from '../components/FlashMessage'
import threeLetterWords from '../stores/words-three-letter.json';
import { addResponse, setLetter } from '../actions'
import { isCorrectResponse, getCorrectItems, getProgress } from '../reducers/wordTest'
import { filterWords } from '../reducers/wordFilter'

export class App extends Component {

    next() {
        this.props.onComplete(this.props.wordFilter, threeLetterWords)
    }

    renderProgressBar() {
        const { progress } = this.props

        if (progress === undefined) return

        return <ProgressBar progress={progress} />
    }

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

    renderWordTextInput() {
        const { onSave, wordFilter } = this.props
        const startingLetters = wordFilter.letters
        return  (
            <div>
                <WordTextInput startingLetters={startingLetters} onSave={onSave} />
            </div>
        )
    }

    renderCorrectItems() {
        const { correctItems } = this.props

        if (R.isEmpty(correctItems)) return

        return (
            <DefinitionList items={correctItems} />
        )
    }

    render() {
        const { progress, onComplete } = this.props

        // if (this.props.progress === 100) {
        //     setTimeout(onComplete(), 3000)
        // }

        return (
            <div>
                <h1>Scrabble Don</h1>
                { this.renderProgressBar() }
                { this.renderFlashMessage() }
                { this.props.progress === 100 ?
                    <button className="next" onClick={this.next.bind(this)}>Continue</button> :
                    this.renderWordTextInput()
                }
                { this.renderCorrectItems() }
            </div>
        )
    }
}

App.propTypes = {
  onSave: PropTypes.func.isRequired,
  wordFilter: PropTypes.object.isRequired,
  correctItems: PropTypes.array.isRequired,
  progress: PropTypes.number,
  lastResponse: PropTypes.string
}

const mapStateToProps = (state) => {
  const items = filterWords(state.wordFilter, threeLetterWords)
  return {
    wordFilter: state.wordFilter,
    correctItems: getCorrectItems(state.wordTest.responses, items),
    progress: getProgress(state.wordTest.responses, items),
    lastResponse: R.last(state.wordTest.responses)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSave: (text) => {
        dispatch(addResponse(text))
    },
    onComplete: (wordFilter, wordList) => {

        const findNextLetter = letter => {
            let words = []
            while (words.length === 0) {
               letter = String.fromCharCode(letter.charCodeAt(0) + 1)
               words = filterWords( { letters: [wordFilter.letters[0], letter] }, wordList)

            }
            return letter
        }

        dispatch(setLetter(1, findNextLetter(wordFilter.letters[1])))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
