import Layout from '../components/layout'
import React from 'react'
import SEO from '../components/seo'
import styled from 'styled-components';

const MainText = styled.h1`
  font-size: 1.75rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const PortfolioBox = styled.div`
  border: 1px solid #FFFFFF;
  height: 35vh;
  margin-bottom: 2rem;
  width: 25vw;

  @media (max-width: 768px) {
    width: 35vw;
  }

  @media (max-width: 414px) {
    width: 100vw;
  }
`;

const PortfolioContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80vw;
`;

const IndexWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`marketing`, `digital marketing`, `chicago`, `content marketing`]} />
    <IndexWrapper>
      <MainText>
        Content + Digital Marketing
      </MainText>
      <PortfolioContainer>
        <PortfolioBox>1</PortfolioBox>
        <PortfolioBox>2</PortfolioBox>
        <PortfolioBox>3</PortfolioBox>
        <PortfolioBox>4</PortfolioBox>
        <PortfolioBox>5</PortfolioBox>
        <PortfolioBox>6</PortfolioBox>
      </PortfolioContainer>
    </IndexWrapper>
  </Layout>
)

export default IndexPage
