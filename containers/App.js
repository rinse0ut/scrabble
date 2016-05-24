import React, { Component } from 'react'
import { connect } from 'react-redux'
import WordTestResults from '../components/WordTestResults'
import WordInput from '../components/WordInput'
import letters from '../stores/letters.json'
import threeLetterWords from '../stores/words-three-letter.json';
import { addResponse } from '../actions'

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
    }
]

export default class App extends Component {
  render() {
    const { dispatch }  = this.props.store
    const { responses } = this.props.store.getState()
    return (
        <div>
            <h1>Scrabble Words</h1>
            <WordInput onSave={text => dispatch(addResponse(text))} />
            <WordTestResults
                items={threeLetterWords}
                responses={responses} />
        </div>
    )
  }
}
