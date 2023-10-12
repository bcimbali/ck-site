import { Link } from 'gatsby'

import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled, { css } from 'styled-components'

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
    h2,
    p {
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
  gap: 0.75rem;
  justify-content: space-between;
  padding: 1rem;
`

const TitleText = styled.h2`
  ${({
    theme: {
      headings: { h2 },
      colors,
    },
  }) => css`
    ${h2}
    color: ${colors.white};
    text-align: center;
  `};
`

const SourceText = styled.p`
  ${({ theme: { colors } }) => css`
    color: ${colors.white};
  `}
`

const StyledLink = styled(Link)`
  display: flex;
  width: 100%;
`

const TypeText = styled.p`
  ${({ theme: { colors } }) => css`
    color: ${colors.white};
  `}
`

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
