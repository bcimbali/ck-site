import { Link } from 'gatsby'

import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.article`
  align-items: center;
  border: 2px solid #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  transition: all
    ${({
      theme: {
        transitions: { transitionSpeed },
      },
    }) => transitionSpeed};

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    h2 {
      color: blue;
    }
  }
`

const ImgContainer = styled.div`
  width: 100%;
`

const TitleContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
`

const TitleText = styled.h2`
  color: #ffffff;
  font-size: 1rem;
  padding: 1.5rem;
  text-align: center;
`

const StyledLink = styled(Link)`
  display: flex;
`

const PortfolioCard = ({ image, slug, title }) => {
  return (
    <StyledLink to={`/portfolio-items${slug}`}>
      <CardContainer key={slug}>
        <ImgContainer>
          <GatsbyImage image={image} />
        </ImgContainer>
        <TitleContainer>
          <TitleText>{title}</TitleText>
        </TitleContainer>
      </CardContainer>
    </StyledLink>
  )
}

export default PortfolioCard
