import Layout from '../components/layout'
import React from 'react'
import SEO from '../components/seo'
import styled from 'styled-components';

const MainText = styled.h1`
  font-size: 1.75rem;
  text-align: center
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`marketing`, `digital marketing`, `chicago`, `content marketing`]} />
    <MainText>
      Content + Digital Marketing
    </MainText>
  </Layout>
)

export default IndexPage
