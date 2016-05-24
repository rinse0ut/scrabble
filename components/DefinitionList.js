import React, { Component, PropTypes } from 'react'
import R from 'ramda'
import List from './List'
import Definition from './Definition'

const definition = item =>
    <Definition item={item} />

const DefinitionList = ({ items }) => {
    const definitions = R.map(definition, items)
    return (
        <List items={definitions} className="definitions" />
    )
}

DefinitionList.propTypes = {
  items: PropTypes.array.isRequired
}

export default DefinitionList
