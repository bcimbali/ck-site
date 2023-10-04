import { Link, StaticQuery, graphql } from 'gatsby'

import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import React from 'react'
import Seo from '../components/seo'
import styled from 'styled-components'
import maxWidth from '../lib/utils'
import PortfolioCard from '../components/portfolioCard'

const CardContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  width: 100%;

  ${({ theme }) =>
    theme.mq('sm')`
    grid-template-columns: 1fr 1fr;
  `}

  ${({ theme }) =>
    theme.mq('lg')`
    grid-template-columns: 1fr 1fr 1fr;
  `}
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
              <CardContainer>
                {writingItems.map(({ node }, idx) => {
                  return (
                    <PortfolioCard
                      image={
                        node.frontmatter.hero.childImageSharp.gatsbyImageData
                      }
                      slug={node.frontmatter.slug}
                      title={node.frontmatter.title}
                    />
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
