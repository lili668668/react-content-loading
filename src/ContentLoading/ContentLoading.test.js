import React from 'react'
import { shallow } from 'enzyme'

import ContentLoading, { getHeight, getWidth, getPlaceholderColor, getLoadingBackground } from './ContentLoading'

describe('ContentLoading', () => {
  it ('should render correctly', () => {
    const component = shallow(<ContentLoading />)
    expect(component).toMatchSnapshot()
  })
  it ('should get item of style props correctly', () => {
    const props = {
      height: '300px',
      width: '300px',
      placeholderColor: '#efefef',
      loadingBackground: 'linear-gradient(to right, rgba(239, 239, 239, 0.1) 5%, rgba(230, 230, 230, 0.8) 15%, rgba(230, 230, 230, 0.9) 50%, rgba(230, 230, 230, 0.8) 85%, rgba(239, 239, 239, 0.1) 95%)'
    }
    expect(getHeight(props)).toBe(props.height)
    expect(getWidth(props)).toBe(props.width)
    expect(getPlaceholderColor(props)).toBe(props.placeholderColor)
    expect(getLoadingBackground(props)).toBe(props.loadingBackground)
  })
})


