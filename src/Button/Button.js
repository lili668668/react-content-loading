import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Button extends Component {
  render () {
    const { children, onClick } = this.props
    return (
      <button onClick={onClick}>
        {children}
      </button>
    )
  }
}

Button.defaultProps = {
  children: '',
  onClick: () => {}
}

Button.propTypes = {
  /** The content in Button */
  children: PropTypes.any,
  /** The behavior when clicking Button */
  onClick: PropTypes.func
}

export default Button
