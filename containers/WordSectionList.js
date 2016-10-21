import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import R from 'ramda'
import List from '../components/List'
import { words, getWordsByLength, getTwoLetterWordSections, getThreeLetterWordSections } from '../reducers/words'

export class WordSectionList extends Component {

    render() {
        const labels = R.keys(this.props.sections)

        return (
            <div>
                <h1>Word Section List</h1>
                <List items={labels} className="sections" />
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
