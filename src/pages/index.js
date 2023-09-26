import { Link, StaticQuery, graphql } from 'gatsby'

import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import React from 'react'
import Seo from '../components/seo'
import styled from 'styled-components'

const MainText = styled.h1`
  color: #15171c;
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
  overflow: hidden;

  :hover {
    background-color: rgba(255, 255, 255, 0.2);
    h2 {
      color: blue;
    }
  }

  @media (max-width: 768px) {
  }

  @media (max-width: 414px) {
    flex-direction: column;
  }
`

const PortfolioContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
  max-width: 80vw;
  width: 100%;

  a {
    text-decoration: none;
  }

  @media (min-width: 475px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
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
                gatsbyImageData(
                  width: 500
                  height: 500
                  placeholder: TRACED_SVG
                  layout: CONSTRAINED
                )
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

const IndexPage = () => (
  <Layout>
    <Seo
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
          render={({ allMarkdownRemark }) =>
            allMarkdownRemark.edges.map(({ node }) => {
              if (node.frontmatter.homepage === 'yes') {
                return (
                  <Link to={`/portfolio-items${node.frontmatter.slug}`}>
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
              } else {
                return null
              }
            })
          }
        />
      </PortfolioContainer>
    </IndexWrapper>
  </Layout>
)

export default IndexPage
