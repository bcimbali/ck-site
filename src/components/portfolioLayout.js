import React, { Component } from 'react';

import Img from 'gatsby-image';
import Layout from './layout';
import { graphql } from 'gatsby';
import styled from 'styled-components';

const InfoBlurb = styled.div`
  color: #FFFFFF;
  margin-bottom: 2rem;
  text-align: center;
  /* width: 60vw; */
`;

const TitleText = styled.h1`
  font-size: 1.75rem;
  margin-bottom: 1rem;
  text-align: center;

  img {
    margin-top: 1rem;
  }
`;

const PortfolioWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 80vw;
`;

export default class portfolioLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data;
    return (
      <Layout>
        <PortfolioWrapper>
          <TitleText>
            {markdownRemark.frontmatter.title}
            <Img fluid={markdownRemark.frontmatter.hero.childImageSharp.fluid} />
          </TitleText>
          <InfoBlurb dangerouslySetInnerHTML={{
            __html: markdownRemark.html
          }}/>
        </PortfolioWrapper>
      </Layout>
    )
  }
}

export const query = graphql`
  query PortfolioPageQuery($slug: String!) {
    markdownRemark(frontmatter: {
      slug:{
        eq: $slug
      }
    }) {
      html
      frontmatter {
        hero {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        homepage
        slug
        title
      }
    }
  }
`