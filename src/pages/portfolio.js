import { Link, StaticQuery, graphql } from 'gatsby';

import Img from 'gatsby-image';
import Layout from '../components/layout';
import React from 'react';
import SEO from '../components/seo';
import styled from 'styled-components';

const PortfolioImgContainer = styled.div`
  width: 15vw;

  @media (max-width: 768px) {
    width: 35vw;
  }

  @media (max-width: 414px) {
    width: 79.5vw;
  }
`;

const PortfolioItemRow = styled.div`
  align-items: center;
  border: 1px solid #FFFFFF;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  width: 60vw;

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

  @media (max-width: 414px) {
    flex-direction: column;
    width: 80vw;
  }
`;

const PortfolioWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  width: 80vw;

  a {
    text-decoration: none;
  }
`;

const ItemContainer = styled.div`
  width: 40vw;
  h2 {
    color: #FFFFFF;
    font-size: 1.5rem;
    text-align: center;
  }
`;

const TitleText = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
`;

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
        <TitleText>
          Portfolio
        </TitleText>
        <StaticQuery
          query={PORTFOLIO_QUERY}
          render={({allMarkdownRemark}) => (
            allMarkdownRemark.edges.map(({node}) => (
              <Link to={`/portfolio-items${node.frontmatter.slug}`}>
                <PortfolioItemRow key={node.frontmatter.slug}>
                  <PortfolioImgContainer>
                    <Img fluid={node.frontmatter.hero.childImageSharp.fluid} />
                  </PortfolioImgContainer>
                  <ItemContainer>
                      <h2>{node.frontmatter.title}</h2>
                  </ItemContainer>
                </PortfolioItemRow>
              </Link>
            ))
          )}
        >
        </StaticQuery>
      </PortfolioWrapper>
  </Layout>
)

export default Portfolio