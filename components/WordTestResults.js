import React, { PropTypes } from 'react'
import R from 'ramda'
import DefinitionList from './DefinitionList'

const WordTestResults = ({ items, responses }) => {

    if (responses.length === 0) {
        return ( <div>Nada</div>)
    }

    const isCorrect = word => R.indexOf(R.prop('word', word), responses) !== -1
    const correctResponsess = R.filter(isCorrect, items)

    return (
        <div>
            <DefinitionList items={correctResponsess} />
        </div>
    )
}

WordTestResults.propTypes = {
  items: PropTypes.array.isRequired,
  responses: PropTypes.array.isRequired
}

export default WordTestResults
