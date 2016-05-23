import React, { Component, PropTypes } from 'react'
import R from 'ramda'
import List from './List'
import Letter from './Letter'

const letter = char =>
    <Letter letter={char} />

const Word = ({ word }) => {
    const chars   = R.split('', word)
    const letters = R.map(letter, chars)

    return (
        <List items={letters} className="word" />
    )
}

Word.propTypes = {
  word: PropTypes.string.isRequired
}

export default Word
