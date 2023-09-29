import { css } from 'styled-components'

const maxWidth = '1440px'

export const transitionSpeed = '0.2s'

export const opacityHover = css`
  transition: ${transitionSpeed} opacity;

  &:hover {
    opacity: 0.8;
  }
`
export const linkHover = css`
  color: #ffffff;
  transition: ${transitionSpeed} color;

  &:hover {
    color: blue;
  }
`

export default maxWidth
