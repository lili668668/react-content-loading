import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Color from 'color'
import LinearGradient from '../utils/linearGradient'

const StyledContainer = styled.div`
  overflow: hidden;
  height: ${props => props.height};
  width: ${props => props.width};
  background: ${props => props.placeholderColor};
`

const StyledLoading = styled.div`
  height: ${props => props.height};
  width: ${props => props.width};
  background: ${props => props.loadingBackground};

  -moz-animation: 2s ease-in-out 0.5s infinite loading;
  animation: 2s ease-in-out 0.5s infinite loading;

  @-moz-keyframes loading {
    from {
      margin-left: -100%;
    }
    to {
      margin-left: 100%;
    }
  }

  @keyframes loading {
    from {
      margin-left: -100%;
    }
    to {
      margin-left: 100%;
    }
  }
`

class ContentLoading extends Component {
  render() {
    const { placeholderColor, loadingColor, height, width } = this.props

    const placeholderColorInstance = Color(placeholderColor)
    const loadingColorInstance = Color(loadingColor)
    const loadingBackground = new LinearGradient()
      .to('right')
      .appendColorStop(placeholderColorInstance.rgb().alpha(0.1).toString(), '5%')
      .appendColorStop(loadingColorInstance.rgb().alpha(0.8).toString(), '15%')
      .appendColorStop(loadingColorInstance.rgb().alpha(0.9).toString(), '50%')
      .appendColorStop(loadingColorInstance.rgb().alpha(0.8).toString(), '85%')
      .appendColorStop(placeholderColorInstance.rgb().alpha(0.1).toString(), '95%')
      .toString()

    return (
      <StyledContainer height={height} width={width} placeholderColor={placeholderColor}>
        <StyledLoading height={height} width={width} loadingBackground={loadingBackground} />
      </StyledContainer>
    )
  }
}

ContentLoading.propTypes = {
  /** The color of loading background */
  placeholderColor: PropTypes.string,
  /** The color of loading frontground */
  loadingColor: PropTypes.string,
  /** The height of loading */
  height: PropTypes.string,
  /** The width of loading */
  width: PropTypes.string
}

ContentLoading.defaultProps = {
  placeholderColor: '#efefef',
  loadingColor: '#e6e6e6',
  height: '300px',
  width: '300px'
}

export default ContentLoading
