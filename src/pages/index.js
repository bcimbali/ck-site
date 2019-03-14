import { Link, StaticQuery, graphql } from 'gatsby'

import Img from 'gatsby-image'
import Layout from '../components/layout'
import React from 'react'
import SEO from '../components/seo'
import styled from 'styled-components'

const MainText = styled.h1`
  font-size: 1.75rem;
  margin-bottom: 2rem;
  text-align: center;
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

  :hover {
    background-color: rgba(255, 255, 255, 0.2);
    h2 {
      color: blue;
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

const PortfolioContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80vw;

  a {
    text-decoration: none;
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

const IndexWrapper = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
`

const HOMEPAGE_QUERY = graphql`
  query HomepageQuery {
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
            homepage
            slug
          }
        }
      }
    }
  }
`

const IndexPage = () => {
  const homepagePieces = allMarkdownRemark.edges.filter(piece => {
    piece.frontmatter.homepage === 'yes'
  })

  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[
          `marketing`,
          `digital marketing`,
          `chicago`,
          `content marketing`,
        ]}
      />
      <IndexWrapper>
        <MainText>Content + Digital Marketing</MainText>
        <PortfolioContainer>
          <StaticQuery
            query={HOMEPAGE_QUERY}
            render={() =>
              homepagePieces.map(({ node }) => {
                return (
                  <Link to={`/portfolio-items${node.frontmatter.slug}`}>
                    <PortfolioCard key={node.frontmatter.slug}>
                      <PortfolioImgContainer>
                        <Img
                          fluid={node.frontmatter.hero.childImageSharp.fluid}
                        />
                      </PortfolioImgContainer>
                      <PortfolioTitle>
                        <h2>{node.frontmatter.title}</h2>
                      </PortfolioTitle>
                    </PortfolioCard>
                  </Link>
                )
              })
            }
          />
        </PortfolioContainer>
      </IndexWrapper>
    </Layout>
  )
}

export default IndexPage
