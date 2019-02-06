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
  align-items: center;
  border: 1px solid #FFFFFF;
  display: flex;
  height: 35vh;
  justify-content: center;
  margin-bottom: 2rem;
  overflow: hidden;
  width: 25vw;

  img {
    flex-shrink: 0;
    min-width: 100%;
    min-height: 100%
  }

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
        <PortfolioBox>
          <img src="https://picsum.photos/600" alt=""/>
        </PortfolioBox>
        <PortfolioBox>
          <img src="https://picsum.photos/300" alt=""/>
        </PortfolioBox>
        <PortfolioBox>
          <img src="https://picsum.photos/500" alt=""/>
        </PortfolioBox>
        <PortfolioBox>
          <img src="https://picsum.photos/200" alt=""/>
        </PortfolioBox>
        <PortfolioBox>
          <img src="https://picsum.photos/700" alt=""/>
        </PortfolioBox>
        <PortfolioBox>
          <img src="https://picsum.photos/800" alt=""/>
        </PortfolioBox>
      </PortfolioContainer>
    </IndexWrapper>
  </Layout>
)

export default IndexPage
