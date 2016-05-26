import React, { PropTypes } from 'react'
import R from 'ramda'
import DefinitionList from './DefinitionList'

const WordTestResults = ({ items, responses }) => {

    const isCorrectResponse = response => R.indexOf(response, R.pluck('word', items)) !== -1
    const correctResponsess = R.filter(isCorrectResponse, responses)

    const isCorrectItem = item => R.indexOf(R.prop('word', item), correctResponsess) !== -1
    const correctItems = R.filter(isCorrectItem, items)

    return (
        <div>
            <DefinitionList items={correctItems} />
        </div>
    )
}

WordTestResults.propTypes = {
  items: PropTypes.array.isRequired,
  responses: PropTypes.array.isRequired
}

export default WordTestResults
