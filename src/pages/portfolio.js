import { Link, StaticQuery, graphql } from 'gatsby'

import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import React from 'react'
import Seo from '../components/seo'
import styled from 'styled-components'
import breakpoints from '../lib/breakpoints'
import maxWidth, { transitionSpeed } from '../lib/utils'

const CardContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  width: 100%;

  @media (min-width: ${breakpoints.sm}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${breakpoints.lg}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const PortfolioCard = styled.article`
  align-items: center;
  border: 2px solid #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  width: 100%;

  img {
    filter: grayscale(100%);
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    h2 {
      color: blue;
    }
    img {
      filter: none;
    }
  }
`

const PortfolioImgContainer = styled.div`
  width: 100%;
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
  max-width: ${maxWidth};
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
`

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
                gatsbyImageData(
                  width: 500
                  height: 500
                  placeholder: BLURRED
                  layout: CONSTRAINED
                )
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
    <Seo title="Portfolio" />
    <PortfolioWrapper>
      <TitleText>Portfolio</TitleText>
      <StaticQuery
        query={PORTFOLIO_QUERY}
        render={({ allMarkdownRemark, ...props }) => {
          const writingItems = allMarkdownRemark.edges.filter(
            ({ node }) => node.frontmatter.portfolioType === 'writing'
          )
          const marketingItems = allMarkdownRemark.edges.filter(
            ({ node }) => node.frontmatter.portfolioType === 'marketing'
          )
          const videoItems = allMarkdownRemark.edges.filter(
            ({ node }) => node.frontmatter.portfolioType === 'video'
          )

          return (
            <>
              <SubtitleText>Writing:</SubtitleText>
              <CardContainer>
                {writingItems.map(({ node }, idx) => {
                  return (
                    <Link
                      to={`/portfolio-items${node.frontmatter.slug}`}
                      key={`writing-${idx}`}
                    >
                      <PortfolioCard key={node.frontmatter.slug}>
                        <PortfolioImgContainer>
                          <GatsbyImage
                            image={
                              node.frontmatter.hero.childImageSharp
                                .gatsbyImageData
                            }
                          />
                        </PortfolioImgContainer>
                        <PortfolioTitle>
                          <h2>{node.frontmatter.title}</h2>
                        </PortfolioTitle>
                      </PortfolioCard>
                    </Link>
                  )
                })}
              </CardContainer>
              <SubtitleText>Marketing:</SubtitleText>
              <CardContainer>
                {marketingItems.map(({ node }, idx) => {
                  return (
                    <Link
                      to={`/portfolio-items${node.frontmatter.slug}`}
                      key={`marketing-${idx}`}
                    >
                      <PortfolioCard key={node.frontmatter.slug}>
                        <PortfolioImgContainer>
                          <GatsbyImage
                            image={
                              node.frontmatter.hero.childImageSharp
                                .gatsbyImageData
                            }
                          />
                        </PortfolioImgContainer>
                        <PortfolioTitle>
                          <h2>{node.frontmatter.title}</h2>
                        </PortfolioTitle>
                      </PortfolioCard>
                    </Link>
                  )
                })}
              </CardContainer>
              <SubtitleText>Videos:</SubtitleText>
              <CardContainer>
                {videoItems.map(({ node }, idx) => {
                  return (
                    <Link
                      to={`/portfolio-items${node.frontmatter.slug}`}
                      key={`videos-${idx}`}
                    >
                      <PortfolioCard key={node.frontmatter.slug}>
                        <PortfolioImgContainer>
                          <GatsbyImage
                            image={
                              node.frontmatter.hero.childImageSharp
                                .gatsbyImageData
                            }
                          />
                        </PortfolioImgContainer>
                        <PortfolioTitle>
                          <h2>{node.frontmatter.title}</h2>
                        </PortfolioTitle>
                      </PortfolioCard>
                    </Link>
                  )
                })}
              </CardContainer>
            </>
          )
        }}
      />
    </PortfolioWrapper>
  </Layout>
)

export default Portfolio
