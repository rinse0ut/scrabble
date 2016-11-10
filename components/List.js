import React, { PropTypes } from 'react'
import R from 'ramda'

const listItem   = (item, key) => <li key={key}>{item}</li>
const mapIndexed = R.addIndex(R.map)
const list       = mapIndexed(listItem)

const List = ({ items, className }) => {
    return (
        <ul className={className}>
            {
                list(items)
            }
        </ul>
    )
}

List.propTypes = {
  items: PropTypes.array.isRequired
}

export default List
