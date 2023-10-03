import breakpoints from './breakpoints'

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
    white: '#FFFFFF',
  },
  mq: mediaQueries,
}

export default theme
