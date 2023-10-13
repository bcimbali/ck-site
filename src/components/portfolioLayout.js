import React from 'react'

import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from './layout'
import { graphql, Link } from 'gatsby'
import styled, { css } from 'styled-components'

const BlogLinkWrapper = styled.a`
  ${({
    theme: {
      transitions: { opacityHover },
    },
  }) => opacityHover};
`

const ContentImgWrapper = styled.div`
  ${({ theme: { mq } }) => css`
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr;
    max-width: 900px;
    margin: 0 auto;

    ${mq('md')`
      align-items: center;
      grid-template-columns: 1fr 1fr;
    `}
  `}
`

const Divider = styled.hr`
  ${({ theme: { colors } }) => css`
    border: none;
    height: 1px;
    width: 100%;
    background-color: ${colors.white};
  `}
`

const ImgContainer = styled.div`
  border-radius: 12px;
  margin-bottom: 2rem;
  overflow: hidden;
  width: 100%;
  &:hover {
    box-shadow: ${({ theme: { shadows } }) => shadows.low};
  }
`

const KeywordsText = styled.p`
  ${({ theme: { colors } }) => css`
    color: ${colors.black};
    font-family: 'Quicksand';
    font-style: italic;
    text-align: center;
  `}
`

const MarkdownContent = styled.div`
  ${({ theme: { colors, headings } }) => css`
    background-color: ${colors.green};
    border-radius: 12px;
    color: ${colors.black};
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
    padding: 1rem;
    text-align: center;
    width: 100%;
    h1 {
      ${headings.h1}
    }
    h2 {
      ${headings.h2}
      margin-bottom: 1.5rem;
    }
    p {
      font-size: 1.25rem;
      line-height: normal;
    }
  `}
`

const TitleText = styled.h1`
  ${({ theme: { colors, headings } }) => css`
    color: ${colors.white};
    margin-bottom: 0.5rem;
    text-align: center;
    ${headings.h1}
  `}
`

const SourceText = styled.p`
  ${({ theme: { colors, mq } }) => css`
    color: ${colors.white};
    font-size: 1.25rem;
    text-align: center;
    ${mq('md')`
      font-size: 1.5rem;
    `}
  `}
`

const PdfLinkWrapper = styled.a`
  max-width: 600px;
  width: 100%;
  ${({
    theme: {
      transitions: { opacityHover },
    },
  }) => opacityHover};
`

const StyledLink = styled(Link)`
  ${({
    theme: {
      transitions: { linkHover },
    },
  }) => linkHover}
  margin: 0 auto;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 3rem;
`

const PortfolioLayout = ({ data: { markdownRemark } }) => {
  return (
    <Layout>
      <TitleContainer>
        <SourceText>{markdownRemark?.frontmatter?.source}</SourceText>
        <TitleText>{markdownRemark?.frontmatter?.title}</TitleText>
        <KeywordsText>{markdownRemark?.frontmatter?.keywords}</KeywordsText>
        <Divider />
      </TitleContainer>
      <ContentImgWrapper>
        {markdownRemark.frontmatter.content === 'ebook' ? (
          <>
            <PdfLinkWrapper
              aria-label={`Link to ${markdownRemark?.frontmatter?.title} PDF`}
              href={markdownRemark.frontmatter.ebook.publicURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GatsbyImage
                image={markdownRemark.frontmatter.hero.childImageSharp.fluid}
              />
            </PdfLinkWrapper>
          </>
        ) : markdownRemark.frontmatter.content === 'blog' ? (
          <ImgContainer>
            <BlogLinkWrapper
              aria-label={`Link to ${markdownRemark?.frontmatter?.title} article`}
              href={markdownRemark.frontmatter.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GatsbyImage
                image={
                  markdownRemark.frontmatter.hero.childImageSharp
                    .gatsbyImageData
                }
                alt={markdownRemark?.frontmatter?.portfolioDetailTitle}
              />
            </BlogLinkWrapper>
          </ImgContainer>
        ) : null}
        <MarkdownContent
          dangerouslySetInnerHTML={{
            __html: markdownRemark.html,
          }}
        />
        <StyledLink
          aria-label={`Link to ${markdownRemark?.frontmatter?.title} article`}
          href={markdownRemark.frontmatter.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {`Link to ${markdownRemark.frontmatter.type}`}
        </StyledLink>
      </ContentImgWrapper>
    </Layout>
  )
}

export const query = graphql`
  query PortfolioPageQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        hero {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
            fluid(maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
        homepage
        slug
        title
        content
        link
        portfolioDetailTitle
        type
        source
        keywords
        # Commenting out until ebook support is added back:
        # ebook {
        #   publicURL
        # }
      }
    }
  }
`

export default PortfolioLayout
