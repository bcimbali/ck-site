import { StaticQuery, graphql } from 'gatsby'

import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import React from 'react'
import Seo from '../components/seo'
import styled from 'styled-components'

const AboutWrapper = styled.main`
  display: flex;
  flex-direction: column;
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
            Hello! I'm a copywriter, strategist, and editor who has worked with
            incredible brands such as Meta, Porsche, Booking.com, and Vosges
            Haut-Chocolat.
          </Paragraph>

          <Paragraph>
            What sets me apart from other writers is my borderline obsession
            with the written word. In my free time, I'm thinking about
            etymology, language histories, and creative comma usage. Why do
            words change meaning or fall out of fashion? And how can we use
            these funny little words to communicate across cultures and
            distances?
          </Paragraph>

          <Paragraph>
            When I'm not working, I'm writing poetry, attending literary events
            in my hometown of Chicago, and hanging out with my partner Brett and
            my cat Browser.
          </Paragraph>
        </TextWrapper>
      </Content>
    </AboutWrapper>
  </Layout>
)

export default About
