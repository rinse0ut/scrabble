import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import R from 'ramda'
import { words, getWordsByLength, getTwoLetterWordSections, getThreeLetterWordSections } from '../reducers/words'

export class WordSectionList extends Component {

    render() {
        // const labels = R.keys(this.props.sections)
        const labels = 'abcdefghijklmnopqrstuvwxyz'.split('')
        const toUpperCaseArr = R.compose(R.split(''), R.toUpper)

        return (
            <div>
                <h1>Word Section List</h1>
            </div>
        )
    }
}

WordSectionList.propTypes = {
  sections: PropTypes.object.isRequired
}

export default WordSectionList

const mapStateToProps = (state) => {
  const words = getWordsByLength(state.words, 2)
  return {
    sections: getTwoLetterWordSections(words, 14)
  }
}
//
export default connect(
  mapStateToProps
)(WordSectionList)
