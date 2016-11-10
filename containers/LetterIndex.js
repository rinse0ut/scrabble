import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import R from 'ramda'
import List from '../components/List'
import { letterIndex } from '../reducers/words'
import { setStartingLetter } from '../actions'

export class LetterIndex extends Component {

    handleClick(item) {
        // console.log('log handleClick', item)
        this.props.onClick(item)
    }

    render() {
        const { letters, route } = this.props
        const link = item => <Link to={'/' + route.path + '/letter/' + item} onClick={() => this.handleClick(item)}>{item}</Link>
        const menuItems = R.map(link)
        // console.log(this.props)
        return (
            <div>
                <h1>Letter Index</h1>
                <List items={menuItems(letters)} />
            </div>
        )
    }
}

export default LetterIndex

// const mapStateToProps = R.assoc('letters', ['Z'])
// const props = (letters) => { letters: letters }
// const mapStateToProps = R.compose(props, letterIndex, R.pluck('words'))
// const mapStateToProps = R.compose(R.assoc('letters', R.__, {}), letterIndex)

const mapStateToProps = (state) => {
  return {
      letters: letterIndex(state.words)
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (letter) => {
            dispatch(setStartingLetter(letter))
        }
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LetterIndex)
