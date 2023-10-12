import breakpoints from './breakpoints'
import maxWidth, { transitionSpeed, opacityHover, linkHover } from './utils'
import { css } from 'styled-components'

const mediaQueries = (key) => {
  return (style) => `@media (min-width: ${breakpoints[key]}) { ${style} }`
}

export const headingFonts = 'Quicksand, arial'
export const bodyFonts = 'IBM Plex Mono, monospace'
// export const bodyFonts = 'IBM Plex Serif'

const h1 = css`
  font-family: ${headingFonts};
  font-size: 1.75rem;
  line-height: normal;

  ${mediaQueries('lg')`
    font-size: 2.5rem;
  `}
`

const h2 = css`
  font-family: ${headingFonts};
  font-size: 1.25rem;
  line-height: normal;

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
    indigo: '#6b5b95',
    orange: '#e8af72',
    purple: '#b1b0e5',
    red: '#ff6f69',
    white: '#FFFFFF',
    yellow: '#ffef96',
  },
  fonts: {
    headings: headingFonts,
    body: bodyFonts,
  },
  headings: {
    h1: h1,
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
