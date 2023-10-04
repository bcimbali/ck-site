import { StaticQuery, graphql } from 'gatsby'

import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import React from 'react'
import Seo from '../components/seo'
import styled from 'styled-components'

const AboutWrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 80vw;
`

const Content = styled.div`
  display: grid;
  gap: 1.5rem;
  margin-bottom: 2rem;

  ${({ theme: { mq } }) => mq('lg')`
    grid-template-columns: 1fr 1fr;
  `}
`

const ImgContainer = styled.section`
  padding: 0;
  width: 100%;
`

const MainText = styled.h1`
  color: #15171c;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`

const Paragraph = styled.p`
  color: #15171c;
  margin: 1rem 0;
`

const TextWrapper = styled.article`
  border-left: 0;
  border-top: 1px solid #ffffff;
  padding: 0.5rem 0 0 0;
  width: 100%;

  ${({ theme: { mq } }) => mq('lg')`
    border-left: 1px solid #ffffff;
    border-top: 0;
    color: #0d0d0d;
    display: flex;
    font-size: 1.15rem;
    flex-direction: column;
    padding: 0 0 0 1.5rem;
  `}
`

const ABOUT_QUERY = graphql`
  query AboutImageQuery {
    file(name: { regex: "/yellow/" }) {
      childImageSharp {
        id
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
  }
`

const About = () => (
  <Layout>
    <Seo title="About" />
    <AboutWrapper>
      <MainText>About</MainText>
      <Content>
        <StaticQuery
          query={ABOUT_QUERY}
          render={(data) => (
            <ImgContainer>
              <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} />
            </ImgContainer>
          )}
        />
        <TextWrapper>
          <Paragraph>
            Creating meaning out of ambiguity and value from complexity.
          </Paragraph>

          <Paragraph>
            I'm a copywriter, strategist, and editor who has worked with some
            incredible brands, such as Meta, Porsche, Booking.com, and Vosges
            Haut-Chocolat.
          </Paragraph>

          <Paragraph>
            I combine research skills, big-picture strategy, and powerful
            writing.
          </Paragraph>

          <Paragraph>
            I'm currently living in Chicago with my partner, Brett, and my cat,
            Browser.
          </Paragraph>
        </TextWrapper>
      </Content>
    </AboutWrapper>
  </Layout>
)

export default About
