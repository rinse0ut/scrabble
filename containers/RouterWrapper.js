import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'
import R from 'ramda'
import LetterIndex from './/LetterIndex'
import Quiz from './Quiz'
import WordList from './WordList'
import Index from '../components/Index'
import About from '../components/About'
import List from '../components/List'
import { getLetterIndex } from '../reducers/words'

const wordListRoute = (letter) => <Route path="/two-letter-words/B" letter={letter} component={WordList} />

export class RouterWrapper extends Component {

    render() {
        const { letters } = this.props

        return (
            <Router history={hashHistory}>
              <Route path="/" component={Index}/>
              <Route path="/about" foo="bar" component={About}/>
              <Route path="/two-letter-words" len="2" component={LetterIndex}/>
              <Route path="/two-letter-words/A" letter="A" component={WordList}/>
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
  console.log('mapStateToProps', state.words, getLetterIndex(state.words))
  return {
      letters: getLetterIndex(state.words)
  }
}

export default connect(
  mapStateToProps
)(RouterWrapper)
