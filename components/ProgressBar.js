import React, { Component, PropTypes } from 'react'

const ProgressBar = ({ progress }) => {
    return (
        <div className="progress">
          <div className="progress-bar" role="progressbar" arial-valuenow={progress}
          aria-valuemin="0" aria-valuemax="100" style={{width: progress + '%'}}>
            <span className="sr-only">70% Complete</span>
          </div>
        </div>
    )
}

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired
}

export default ProgressBar
