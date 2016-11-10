import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Page from '../components/Page'

class About extends Component {
  render() {
      return (
          <Page {...this.props}/>
      )
  }
}

About.propTypes = {
  title: PropTypes.string.isRequired,
  paragraphs: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return {
      title: 'About',
      paragraphs: ['An App for learning two letter scrabble words.']
  }
}

export default connect(
  mapStateToProps
)(About)
