import React, { Component } from 'react';

import Img from 'gatsby-image';
import Layout from './layout';
import { graphql } from 'gatsby';
import styled from 'styled-components';

const ImgContainer = styled.div`
  margin-bottom: 2rem;
  width: 40vw;

  @media (max-width: 768px) {
    width: 80vw;
  }

  @media (max-width: 414px) {
    width: 80vw;
  }
`;

const InfoBlurb = styled.div`
  color: #FFFFFF;
  margin-bottom: 2rem;
  text-align: center;
  width: 60vw;

  @media (max-width: 414px) {
    width: 100%;
  }
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
          </TitleText>
          {/* <ImgContainer>
            <Img fluid={markdownRemark.frontmatter.hero.childImageSharp.fluid} />
          </ImgContainer> */}
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