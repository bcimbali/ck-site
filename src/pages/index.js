import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import React from 'react'
import Seo from '../components/seo'
import styled from 'styled-components'
import PortfolioCard from '../components/portfolioCard'
import CardIndex from '../components/cardIndex'

const IndexWrapper = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: ${({ theme: { maxWidth } }) => maxWidth};
`

const HOMEPAGE_QUERY = graphql`
  query HomepageQuery {
    allMarkdownRemark(sort: [{ frontmatter: { homepageOrder: ASC } }]) {
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
            homepage
            slug
            source
            type
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
        `ferndale`,
        'detroit',
        `content marketing`,
      ]}
    />
    <IndexWrapper>
      <CardIndex>
        <StaticQuery
          query={HOMEPAGE_QUERY}
          render={({ allMarkdownRemark }) =>
            allMarkdownRemark.edges.map(({ node }) => {
              if (node.frontmatter.homepage === 'yes') {
                return (
                  <PortfolioCard
                    altText={node.frontmatter.title}
                    key={node.id}
                    image={
                      node.frontmatter.hero.childImageSharp.gatsbyImageData
                    }
                    slug={node.frontmatter.slug}
                    source={node.frontmatter.source}
                    title={node.frontmatter.title}
                    type={node.frontmatter.type}
                  />
                )
              } else {
                return null
              }
            })
          }
        />
      </CardIndex>
    </IndexWrapper>
  </Layout>
)

export default IndexPage
