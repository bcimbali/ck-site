import { Link, StaticQuery, graphql } from 'gatsby'

import Img from 'gatsby-image'
import Layout from '../components/layout'
import React from 'react'
import SEO from '../components/seo'
import styled from 'styled-components'

const CardContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`

const PortfolioCard = styled.article`
  align-items: center;
  border: 2px solid #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1rem;
  min-height: 40vh;
  overflow: hidden;
  width: 23vw;

  img {
    filter: grayscale(100%);
  }

  :hover {
    background-color: rgba(255, 255, 255, 0.2);
    h2 {
      color: blue;
    }
    img {
      filter: none;
    }
  }

  @media (max-width: 768px) {
    width: 38vw;
  }

  @media (max-width: 414px) {
    flex-direction: column;
    width: 80vw;
  }
`

const PortfolioImgContainer = styled.div`
  width: 100%;

  @media (max-width: 414px) {
    width: 80vw;
  }
`

const PortfolioTitle = styled.div`
  align-items: center;
  min-height: 10vh;
  display: flex;
  h2 {
    color: #ffffff;
    font-size: 1rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    min-height: 8vh;
  }

  @media (max-width: 414px) {
    min-height: 10vh;
  }
`

const PortfolioWrapper = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  width: 80vw;

  a {
    text-decoration: none;
  }
`

const SubtitleText = styled.h2`
  border-bottom: 1px solid white;
  color: #ffffff;
  font-size: 1.5rem;
  margin: 1rem 0;
  padding-bottom: 0.25rem;
  text-align: left;
  width: 100%;
`;

const TitleText = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
`

const PORTFOLIO_QUERY = graphql`
  query PortfolioQuery {
    allMarkdownRemark {
      edges {
        node {
          html
          excerpt
          frontmatter {
            hero {
              childImageSharp {
                fluid(maxWidth: 500, maxHeight: 500) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            title
            slug
            portfolioType
          }
        }
      }
    }
  }
`

const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio" />
    <PortfolioWrapper>
      <TitleText>Portfolio</TitleText>
      <SubtitleText>Writing:</SubtitleText>
      <CardContainer>
        <StaticQuery
          query={PORTFOLIO_QUERY}
          render={({ allMarkdownRemark, ...props }) =>
            allMarkdownRemark.edges.map(({ node }) => {
              if (node.frontmatter.portfolioType === 'writing') {
                return (
                <Link to={`/portfolio-items${node.frontmatter.slug}`}>
                  <PortfolioCard key={node.frontmatter.slug}>
                    <PortfolioImgContainer>
                      <Img fluid={node.frontmatter.hero.childImageSharp.fluid} />
                    </PortfolioImgContainer>
                    <PortfolioTitle>
                      <h2>{node.frontmatter.title}</h2>
                    </PortfolioTitle>
                  </PortfolioCard>
                </Link>
              )
              }
            })
          }
        />
      </CardContainer>
      <SubtitleText>Marketing:</SubtitleText>
      <CardContainer>
        <StaticQuery
          query={PORTFOLIO_QUERY}
          render={({ allMarkdownRemark, ...props }) =>
            allMarkdownRemark.edges.map(({ node }) => {
              if (node.frontmatter.portfolioType === 'marketing') {
                return (
                <Link to={`/portfolio-items${node.frontmatter.slug}`}>
                  <PortfolioCard key={node.frontmatter.slug}>
                    <PortfolioImgContainer>
                      <Img fluid={node.frontmatter.hero.childImageSharp.fluid} />
                    </PortfolioImgContainer>
                    <PortfolioTitle>
                      <h2>{node.frontmatter.title}</h2>
                    </PortfolioTitle>
                  </PortfolioCard>
                </Link>
              )
              }
            })
          }
        />
      </CardContainer>
      <SubtitleText>Videos:</SubtitleText>
      <CardContainer>
        <StaticQuery
          query={PORTFOLIO_QUERY}
          render={({ allMarkdownRemark, ...props }) =>
            allMarkdownRemark.edges.map(({ node }) => {
              if (node.frontmatter.portfolioType === 'video') {
                return (
                <Link to={`/portfolio-items${node.frontmatter.slug}`}>
                  <PortfolioCard key={node.frontmatter.slug}>
                    <PortfolioImgContainer>
                      <Img fluid={node.frontmatter.hero.childImageSharp.fluid} />
                    </PortfolioImgContainer>
                    <PortfolioTitle>
                      <h2>{node.frontmatter.title}</h2>
                    </PortfolioTitle>
                  </PortfolioCard>
                </Link>
              )
              }
            })
          }
        />
      </CardContainer>
    </PortfolioWrapper>
  </Layout>
)

export default Portfolio
