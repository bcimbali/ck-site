import { Link, StaticQuery, graphql } from 'gatsby'

import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import React from 'react'
import Seo from '../components/seo'
import styled from 'styled-components'
import maxWidth from '../lib/utils'

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

const PortfolioCard = styled.article`
  align-items: center;
  border: 2px solid #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  transition: all
    ${({
      theme: {
        transitions: { transitionSpeed },
      },
    }) => transitionSpeed};
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

const StyledLink = styled(Link)`
  display: flex;
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
                    <StyledLink
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
                        <PortfolioTitleContainer>
                          <PortfolioTitleText>
                            {node.frontmatter.title}
                          </PortfolioTitleText>
                        </PortfolioTitleContainer>
                      </PortfolioCard>
                    </StyledLink>
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
