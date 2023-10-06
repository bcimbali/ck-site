import breakpoints from './breakpoints'
import maxWidth, { transitionSpeed, opacityHover, linkHover } from './utils'

const mediaQueries = (key) => {
  return (style) => `@media (min-width: ${breakpoints[key]}) { ${style} }`
}

const theme = {
  colors: {
    bg: '#b1b0e5',
    black: '#15171c',
    blue: '#0000FF',
    fg: '#FFFFFF',
    green: '#a5dbcb',
    orange: '#e8af72',
    white: '#FFFFFF',
  },
  mq: mediaQueries,
  maxWidth: maxWidth,
  transitions: {
    linkHover: linkHover,
    opacityHover: opacityHover,
    transitionSpeed: transitionSpeed,
  },
  nav: {
    mobileNavHeight: '60px',
    desktopNavHeight: '80px',
  },
}

export default theme
