import { Link, StaticQuery, graphql } from 'gatsby';

import Img from 'gatsby-image';
import Layout from '../components/layout';
import React from 'react';
import SEO from '../components/seo';
import styled from 'styled-components';

const PortfolioImgContainer = styled.div`
  align-items: center;
  border: 1px solid #FFFFFF;
  display: flex;
  height: 40vh;
  justify-content: center;
  /* margin-bottom: 2rem; */
  overflow: hidden;
  width: 25vw;

  /* img {
    flex-shrink: 0;
    min-width: 100%;
    min-height: 100%
  } */

  @media (max-width: 768px) {
    width: 35vw;
  }

  @media (max-width: 414px) {
    width: 100vw;
  }
`;

const PortfolioItemRow = styled.div`
  align-items: center;
  border: 1px solid #FFFFFF;
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
  
  :hover {
    background-color: rgba(255, 255, 255, 0.2);
    h2 {
      color: blue;
    }
  }
`;

const PortfolioWrapper = styled.div`
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
                fluid {
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
                  <PortfolioImgContainer />
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