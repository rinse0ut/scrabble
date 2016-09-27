import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import DefinitionList from '../components/DefinitionList'
import { words, getWordsByLength } from '../reducers/words'

export class WordList extends Component {

    render() {
        const { words } = this.props

        console.log('WORDS', words(this.props.route.len))

        return (
            <div>
                <h1>Word List</h1>
                <DefinitionList items={words(this.props.route.len)} />
            </div>
        )
    }
}

// WordList.propTypes = {
//   words: PropTypes.function.isRequired
// }

export default WordList

const mapStateToProps = (state) => {
  return {
    words: getWordsByLength(state)
  }
}

export default connect(
  mapStateToProps
)(WordList)
