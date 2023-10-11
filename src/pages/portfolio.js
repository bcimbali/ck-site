import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import React from 'react'
import Seo from '../components/seo'
import styled from 'styled-components'
import maxWidth from '../lib/utils'
import PortfolioCard from '../components/portfolioCard'
import CardIndex from '../components/cardIndex'

const PortfolioWrapper = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  max-width: ${maxWidth};

  a {
    text-decoration: none;
  }
`

const TitleText = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
`

const PORTFOLIO_QUERY = graphql`
  query PortfolioQuery {
    allMarkdownRemark(sort: [{ frontmatter: { portfolioOrder: ASC } }]) {
      edges {
        node {
          html
          excerpt
          id
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

          return (
            <>
              <CardIndex>
                {writingItems.map(({ node }, idx) => {
                  return (
                    <PortfolioCard
                      altText={node.frontmatter.title}
                      key={node.id}
                      image={
                        node.frontmatter.hero.childImageSharp.gatsbyImageData
                      }
                      slug={node.frontmatter.slug}
                      title={node.frontmatter.title}
                    />
                  )
                })}
              </CardIndex>
            </>
          )
        }}
      />
    </PortfolioWrapper>
  </Layout>
)

export default Portfolio
