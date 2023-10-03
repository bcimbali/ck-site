import { Link, StaticQuery, graphql } from 'gatsby'

import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import React from 'react'
import Seo from '../components/seo'
import styled from 'styled-components'
import maxWidth, { transitionSpeed } from '../lib/utils'

const IndexWrapper = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: ${maxWidth};
`

const PortfolioCard = styled.article`
  align-items: center;
  border: 2px solid #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  transition: all ${transitionSpeed};

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    h2 {
      color: blue;
    }
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

  ${({ theme }) =>
    theme.mq('sm')`
    grid-template-columns: 1fr 1fr;
  `}

  ${({ theme }) =>
    theme.mq('lg')`
    grid-template-columns: 1fr 1fr 1fr;
  `}
`

const PortfolioImgContainer = styled.div`
  width: 100%;
`

const PortfolioTitleContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
`

const PortfolioTitleText = styled.h2`
  color: #ffffff;
  font-size: 1rem;
  padding: 1.5rem;
  text-align: center;
`

const StyledLink = styled(Link)`
  display: flex;
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
                  <StyledLink to={`/portfolio-items${node.frontmatter.slug}`}>
                    <PortfolioCard key={node.frontmatter.slug}>
                      <PortfolioImgContainer>
                        <GatsbyImage
                          image={
                            node.frontmatter.hero.childImageSharp
                              .gatsbyImageData
                          }
                        />
                      </PortfolioImgContainer>
                      <PortfolioTitleContainer>
                        <PortfolioTitleText>
                          {node.frontmatter.title}
                        </PortfolioTitleText>
                      </PortfolioTitleContainer>
                    </PortfolioCard>
                  </StyledLink>
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
