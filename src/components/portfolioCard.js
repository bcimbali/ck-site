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
  opacity: 1;
  position: relative;
  width: 100%;

  transition: all
    ${({
      theme: {
        transitions: { transitionSpeed },
      },
    }) => transitionSpeed};

  &:hover {
    opacity: 0.8;
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

const SourceText = styled.p`
  ${({ theme: { colors } }) => css`
    color: ${colors.white};
  `}
`

const StyledLink = styled(Link)`
  display: flex;
  width: 100%;
`

const TitleContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  gap: 0.75rem;
  justify-content: flex-start;
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

const TypeChipText = styled.span`
  ${({ theme: { colors, mq } }) => css`
    font-size: 0.75rem;

    ${mq('md')`
      font-size: 0.875rem;
    `}
  `}
`

const TypeChip = styled.div`
  ${({ theme: { colors }, $type }) => css`
    background-color: ${colors.orange};
    border-bottom: 1px solid ${colors.white};
    border-radius: 0 0 0.75rem 0;
    padding: 0.5rem;
    position: absolute;
    left: 0;
    z-index: 1;

    ${() => {
      switch ($type) {
        case 'Article':
          return css`
            background-color: ${colors.green};
            color: ${colors.black};
          `
        case 'Book':
          return css`
            background-color: ${colors.orange};
            color: ${colors.black};
          `
        case 'Case Study':
          return css`
            background-color: ${colors.yellow};
            color: ${colors.black};
          `
        case 'Website':
          return css`
            background-color: ${colors.red};
            color: ${colors.black};
          `
        case 'Blog Post':
          return css`
            background-color: ${colors.indigo};
            color: ${colors.white};
          `
        case 'Poem':
          return css`
            background-color: ${colors.blue};
            color: ${colors.white};
          `
        case 'Podcast':
          return css`
            background-color: ${colors.black};
            color: ${colors.white};
          `
        default:
          return css`
            background-color: ${colors.green};
            color: ${colors.black};
          `
      }
    }}
  `}
`

const PortfolioCard = ({ altText, image, slug, source, title, type }) => {
  return (
    <StyledLink to={`/portfolio-items${slug}`}>
      <CardContainer key={slug}>
        <TypeChip $type={type}>
          <TypeChipText>{type}</TypeChipText>
        </TypeChip>
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
        </TitleContainer>
      </CardContainer>
    </StyledLink>
  )
}

export default PortfolioCard
