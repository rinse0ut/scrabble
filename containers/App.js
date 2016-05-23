import React, { Component } from 'react'
import { connect } from 'react-redux'
import DefinitionList from '../components/DefinitionList'
import letters from '../stores/letters.json'
import threeLetterWords from '../stores/words-three-letter.json';

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
    const { settingsFilter, wordFilter } = this.props.state
    return (
        <div>
            <h1>Scrabble Words</h1>
            <DefinitionList items={items} />
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

export default connect(
    mapStateToProps
)(App)
