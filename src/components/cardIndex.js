import React from 'react'
import styled from 'styled-components'

const PortfolioContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
  max-width: 80vw;
  width: 100%;

  a {
    text-decoration: none;
  }

  ${({ theme }) =>
    theme.mq('sm')`
    grid-template-columns: 1fr 1fr;
  `}

  ${({ theme }) =>
    theme.mq('lg')`
    grid-template-columns: 1fr 1fr 1fr;
  `}
`

const CardIndex = ({ children }) => (
  <PortfolioContainer>{children}</PortfolioContainer>
)

export default CardIndex
