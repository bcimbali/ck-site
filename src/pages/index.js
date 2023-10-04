import { Link, StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import React from 'react'
import Seo from '../components/seo'
import styled from 'styled-components'
import PortfolioCard from '../components/portfolioCard'

const IndexWrapper = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: ${({ theme: { maxWidth } }) => maxWidth};
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

  ${({ theme }) =>
    theme.mq('sm')`
    grid-template-columns: 1fr 1fr;
  `}

  ${({ theme }) =>
    theme.mq('lg')`
    grid-template-columns: 1fr 1fr 1fr;
  `}
`

const HOMEPAGE_QUERY = graphql`
  query HomepageQuery {
    allMarkdownRemark(sort: [{ frontmatter: { homepageOrder: ASC } }]) {
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
      <PortfolioContainer>
        <StaticQuery
          query={HOMEPAGE_QUERY}
          render={({ allMarkdownRemark }) =>
            allMarkdownRemark.edges.map(({ node }) => {
              if (node.frontmatter.homepage === 'yes') {
                return (
                  <PortfolioCard
                    image={
                      node.frontmatter.hero.childImageSharp.gatsbyImageData
                    }
                    slug={node.frontmatter.slug}
                    title={node.frontmatter.title}
                  />
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
