import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'
import R from 'ramda'
import List from '../components/List'
import { getLetterIndex } from '../reducers/words'

// import { words, getWordsByLength, getTwoLetterWordSections, getThreeLetterWordSections } from '../reducers/words'

export class RouterWrapper extends Component {

    render() {
        // const link = item => <a href={'/#/two-letter-words/' + item}>{item}</a>
        // const menuItems = R.map(link)

        return (
            <Router history={hashHistory}>
              <Route path="/" component={Index}/>
              <Route path="/about" foo="bar" component={About}/>
              <Route path="/two-letter-words" len="2" component={LetterIndex}/>
                <Route path="/two-letter-words/B" letter="B" component={WordList}/>
              <Route path="/quiz" len="2" component={Quiz}/>
            </Router>
        )
    }
}

export default RouterWrapper

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
)(RouterWrapper)
