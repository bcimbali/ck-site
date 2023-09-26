import { StaticQuery, graphql } from 'gatsby'

import { GatsbyImage } from "gatsby-plugin-image";
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
  display: flex;
  margin-bottom: 2rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`

const ImgContainer = styled.section`
  margin-bottom: 2rem;
  padding: 3rem;
  width: 50%;

  @media (max-width: 600px) {
    padding: 0;
    width: 80vw;
  }
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
  border-left: 1px solid #ffffff;
  color: #0d0d0d;
  display: flex;
  font-size: 1.15rem;
  flex-direction: column;
  padding: 0 3rem;
  width: 50%;

  @media (max-width: 600px) {
    border-left: 0;
    border-top: 1px solid #ffffff;
    padding: 0;
    width: 100%;
  }
`

const ABOUT_QUERY = graphql`query AboutImageQuery {
  file(name: {regex: "/yellow/"}) {
    childImageSharp {
      id
      gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
    }
  }
}`

const About = () => (
  <Layout>
    <Seo title="About" />
    <AboutWrapper>
      <MainText>About</MainText>
      <Content>
        <StaticQuery
          query={ABOUT_QUERY}
          render={data => (
            <ImgContainer>
              <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} />
            </ImgContainer>
          )}
        />
        <TextWrapper>
          <Paragraph>
            Christine Kanownik is a dedicated digital marketing professional
            with almost 10 years in the field. I specialize in content creation,
            email delivery, and CRM management/ integration (especially in
            Salesforce). I am that perfect mix of creative talent with a mind
            for reporting and analytics. I have experience both creating
            strategy and getting my hands dirty performing crucial tasks. I have
            strong communication and leadership skills and have negotiated
            working with stakeholders in various departments.
          </Paragraph>

          <Paragraph>
            Specialties: CRM integration, email marketing, marketing automation,
            SEO and SEM, brand development, paid and organic social media,
            content creation and storytelling, proofreading, digital
            advertising, Google Analytics, A/B testing, CMS management, mobile
            marketing, lead nurturing, and growth.
          </Paragraph>

          <Paragraph>
            Technical Skills: Proficient with all Microsoft and Macintosh
            operating systems. Advanced knowledge of Microsoft Word, Excel,
            PowerPoint, Confluence, Photoshop, Indesign, Wordpress, SalesForce,
            Marketing Cloud, Adestra, Constant Contact, Hubspot, Survey Monkey,
            Function Point, Trello, Google Adwords and Analytics. Knowledge of
            intermediate HTML and CSS.
          </Paragraph>
        </TextWrapper>
      </Content>
    </AboutWrapper>
  </Layout>
)

export default About
