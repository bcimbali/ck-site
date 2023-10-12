import breakpoints from './breakpoints'
import maxWidth, { transitionSpeed, opacityHover, linkHover } from './utils'
import { css } from 'styled-components'

const mediaQueries = (key) => {
  return (style) => `@media (min-width: ${breakpoints[key]}) { ${style} }`
}

const h2 = css`
  font-size: 1.25rem;

  ${mediaQueries('lg')`
    font-size: 1.75rem;
  `}
`

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
  headings: {
    h2: h2,
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
  layout: {
    mobileMargin: '1.5rem',
    desktopMargin: '1.75rem',
  },
  shadows: {
    low: '0 3px 10px rgb(0 0 0 / 0.2);',
  },
}

export default theme
