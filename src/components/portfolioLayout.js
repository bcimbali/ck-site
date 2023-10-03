import React, { Component } from 'react'

import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from './layout'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { opacityHover } from './../lib/utils'

const BlogLinkWrapper = styled.a`
  ${opacityHover}
`

const ImgContainer = styled.div`
  margin-bottom: 2rem;
  width: 40vw;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const InfoBlurb = styled.div`
  color: #ffffff;
  margin-bottom: 2rem;
  text-align: center;
  width: 60vw;

  iframe {
    margin-top: 2rem;
  }

  @media (max-width: 414px) {
    width: 100%;
  }
`

const TitleText = styled.h1`
  color: #15171c;
  font-size: 1.75rem;
  margin-bottom: 1rem;
  text-align: center;

  img {
    margin-top: 1rem;
  }
`

const PortfolioWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
  width: 80vw;
`

const PdfLinkWrapper = styled.a`
  max-width: 600px;
  width: 100%;
  ${opacityHover}
`

export default class portfolioLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data
    console.log(
      'In portfolioLayout.js, this is markdownRemark: ',
      markdownRemark
    )
    return (
      <Layout>
        <PortfolioWrapper>
          <TitleText>{markdownRemark.frontmatter.title}</TitleText>
          <InfoBlurb
            dangerouslySetInnerHTML={{
              __html: markdownRemark.html,
            }}
          />
          {markdownRemark.frontmatter.content === 'ebook' ? (
            <>
              <PdfLinkWrapper
                aria-label={`Link to ${markdownRemark?.frontmatter?.title} PDF`}
                href={markdownRemark.frontmatter.ebook.publicURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GatsbyImage
                  image={
                    markdownRemark.frontmatter.hero.childImageSharp
                      .gatsbyImageData
                  }
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
                />
              </BlogLinkWrapper>
            </ImgContainer>
          ) : null}
        </PortfolioWrapper>
      </Layout>
    )
  }
}

export const query = graphql`
  query PortfolioPageQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        hero {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          }
        }
        homepage
        slug
        title
        content
        link
        # Commenting out until ebook support is added back:
        # ebook {
        #   publicURL
        # }
      }
    }
  }
`
