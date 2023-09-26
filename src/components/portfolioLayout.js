import React, { Component } from 'react'

import { GatsbyImage } from "gatsby-plugin-image";
import Layout from './layout'
import { graphql } from 'gatsby'
import styled from 'styled-components'

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

export default class portfolioLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data
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
            <object
              aria-label="ebook content"
              alt="ebook content"
              data={markdownRemark.frontmatter.ebook.publicURL}
              width="100%"
              height="800px"
            />
          ) : markdownRemark.frontmatter.content === 'blog' ? (
            <ImgContainer>
              <a
                href={markdownRemark.frontmatter.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GatsbyImage image={markdownRemark.frontmatter.hero.childImageSharp.gatsbyImageData} />
              </a>
            </ImgContainer>
          ) : null}
        </PortfolioWrapper>
      </Layout>
    );
  }
}

export const query = graphql`query PortfolioPageQuery($slug: String!) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    html
    frontmatter {
      hero {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
        }
      }
      homepage
      slug
      title
      content
      link
      ebook {
        publicURL
      }
    }
  }
}`
