import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import R from 'ramda'
import List from '../components/List'
import { getLetterIndex } from '../reducers/words'

// import { words, getWordsByLength, getTwoLetterWordSections, getThreeLetterWordSections } from '../reducers/words'

export class LetterIndex extends Component {

    render() {
        const link = item => <a href={'/#/two-letter-words/' + item}>{item}</a>
        const menuItems = R.map(link)

        return (
            <div>
                <h1>Letter Index</h1>
                <List items={menuItems(this.props.letters)} />
            </div>
        )
    }
}

export default LetterIndex

// const mapStateToProps = R.assoc('letters', ['Z'])
// const props = (letters) => { letters: letters }
// const mapStateToProps = R.compose(props, getLetterIndex, R.pluck('words'))

// const mapStateToProps = R.compose(R.assoc('letters', R.__, {}), getLetterIndex)

const mapStateToProps = (state) => {
  return {
      letters: getLetterIndex(state.words)
  }
}

export default connect(
  mapStateToProps
)(LetterIndex)
