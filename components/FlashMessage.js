import React, { PropTypes } from 'react'

const FlashMessage = ({ status, message }) => {
    return (
        <div className={'alert alert-' + status}>
            { message }
        </div>
    )
}

FlashMessage.propTypes = {
  status: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
}

export default FlashMessage
