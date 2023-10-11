import { Link } from 'gatsby'

import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.article`
  align-items: center;
  border: 0.125rem solid #ffffff;
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  width: 100%;

  transition: all
    ${({
      theme: {
        transitions: { transitionSpeed },
      },
    }) => transitionSpeed};

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    box-shadow: ${({ theme: { shadows } }) => shadows.low};
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
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
`

const TitleText = styled.h2`
  color: #ffffff;
  font-size: 1rem;
  padding: 1.5rem;
  text-align: center;
`

const SourceText = styled.p``

const StyledLink = styled(Link)`
  display: flex;
  width: 100%;
`

const TypeText = styled.p``

const PortfolioCard = ({ altText, image, slug, source, title, type }) => {
  return (
    <StyledLink to={`/portfolio-items${slug}`}>
      <CardContainer key={slug}>
        <ImgContainer>
          <GatsbyImage
            image={image}
            alt={altText}
            objectFit="cover"
            style={{ width: '100%' }}
          />
        </ImgContainer>
        <TitleContainer>
          <SourceText>{source}</SourceText>
          <TitleText>{title}</TitleText>
          <TypeText>{type}</TypeText>
        </TitleContainer>
      </CardContainer>
    </StyledLink>
  )
}

export default PortfolioCard
