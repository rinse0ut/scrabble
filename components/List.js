import React, { PropTypes } from 'react'
import R from 'ramda'

const listItem   = (item, key) => <li key ={key}>{item}</li>
const mapIndexed = R.addIndex(R.map)
const list       = mapIndexed(listItem)

const List = ({ items }) => {
    return (
        <ul>
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
