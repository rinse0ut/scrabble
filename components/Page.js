import React, { Component, PropTypes } from 'react'
import R from 'ramda'

const P = (text, key) => <p key={key}>{text}</p>

const Page = ({ title, paragraphs }) => {
    return (
        <div>
            <h1>{title}</h1>
            {
                R.map(P, paragraphs)
            }
        </div>
    )
}

// Page.propTypes = {
//   title: PropTypes.string.isRequired,
//   paragraphs: PropTypes.array.isRequired
// }

export default Page
