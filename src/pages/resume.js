import Layout from '../components/layout'
import React from 'react'
import SEO from '../components/seo'
import styled from 'styled-components'

const Contact = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`

const EducationListing = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
  width: 90%;

  p {
    text-align: center;
  }

  .first {
    text-align: left;
  }
`

const JobTitle = styled.section`
  display: flex;
  flex-direction: column;
  width: 90%;

  .job-header {
    color: #4d4d4d;
    display: flex;
    font-size: 1.05rem;
    font-style: italic;
    margin-bottom: 1rem;
    text-align: center;

    p {
      border-left: 1px solid #ffffff;

      :nth-child(1) {
        border: none;
        text-align: left;
      }
    }
  }

  ul {
    margin: auto;
    list-style-position: inside;
    list-style-type: square;
    width: 90%;
  }

  li {
    margin: 0.75rem 0;
  }

  @media (max-width: 768px) {
    .job-header {
      align-items: center;
      flex-direction: column;
      width: 100%;
      p {
        border-left: none;
        border-bottom: 1px solid #000000;
        padding: 0.5rem 0;

        :nth-child(1) {
          color: #000000;
          border-bottom: 1px solid #000000;
          text-align: center;
        }
      }
    }
  }

  @media (max-width: 414px) {
    ul {
      width: 100%;
    }
  }
`

const ResumeWrapper = styled.main`
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  color: #2d2d2d;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  padding: 1rem 0;
  width: 80vw;

  a {
    color: #ffffff;
    text-decoration: none;
  }

  a:hover {
    color: blue;
  }

  h1 {
    color: #000000;
    font-size: 2rem;
    text-align: center;
  }

  p {
    width: 90%;
  }
`

const SectionHeading = styled.h2`
  color: #6409b3;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin: 1rem 0;
`

const SkillsListing = styled.section`
  margin: 0.5rem 0;
  width: 90%;
`

const ThickDivider = styled.hr`
  border: 2px solid #ffffff;
  width: 90%;
`

const ThinDivider = styled.hr`
  border: 1px solid #ffffff;
  width: 90%;
`

const Resume = () => (
  <Layout>
    <SEO title="Resume" />
    <ResumeWrapper>
      <h1>CHRISTINE KANOWNIK</h1>

      <Contact>
        <div>Chicago, IL</div>
        <div>cnkanownik[at]gmail[dot]com</div>
      </Contact>

      <SectionHeading>Marketing and Soft Skills</SectionHeading>

      <SkillsListing>
        CRM integration and management, email marketing, marketing automation
        and personalization, SEO and SEM, brand development, paid and organic
        social media, content marketing, strategic marketing, and storytelling,
        proofreading, digital advertising, Google Analytics, A/B testing, CMS
        management, mobile marketing, lead nurturing, and growth.
      </SkillsListing>
      <SkillsListing>
        Team leadership, management, effective communication, organizational
        skills, flexibility, and grace under pressure.
      </SkillsListing>

      <SectionHeading>Experience</SectionHeading>

      <ThickDivider />

      <JobTitle>
        <div class="job-header">
          <p>Assistant Director of Marketing</p>
          <p>Aug 2017 - Present</p>
          <p>Illinois Institute of Technology</p>
          <p>Chicago, IL</p>
        </div>
        <ul>
          <li>
            Created and automated over 300 dynamic emails campaigns for the
            graduate enrollment funnel, increasing engagement and click-through
            numbers by over 70%.
          </li>
          <li>
            Implemented a successful multi-tiered, cross-channel digital
            marketing campaign to foster brand awareness and customer growth
            through LinkedIn, Google Adwords, Facebook, and other outlets.
          </li>
          <li>
            Managed the editorial calendar and developed content with designers
            and videographers to create infographics, videos, flyers,
            advertisements, and more.
          </li>
          <li>
            Utilized Google analytics, focus groups, A/B testing, and reporting
            to analyze the effectiveness of each marketing effort.
          </li>
          <li>
            Served as a collaborative liaison across the university by forging
            relationships and partnerships with recruitment advisors, designers,
            and other internal and external stakeholders.
          </li>
          <li>
            Promoted and participated in several high-profile recruitment events
            both locally and abroad.
          </li>
        </ul>
      </JobTitle>

      <ThinDivider />

      <JobTitle>
        <div class="job-header">
          <p>Marketing Manager</p>
          <p>Sept 2015 - Aug 2017</p>
          <p>Routledge</p>
          <p>New York, NY</p>
        </div>
        <ul>
          <li>
            Improved communication across the marketing and editorial
            departments by hosting monthly meetings to discuss concerns and
            upcoming projects.
          </li>
          <li>
            Acted as editor of two key professional blogs, Mastering Film and
            Mastering Photo, creating content such as articles and videos to
            post on the blogs three times a week.
          </li>
          <li>
            Hired three direct-reports and managed their training, schedules and
            workloads.
          </li>
        </ul>
      </JobTitle>

      <ThinDivider />

      <JobTitle>
        <div class="job-header">
          <p>Senior Marketing Associate</p>
          <p>Jul 2012 - Sept 2015</p>
          <p>Cambridge University Press</p>
          <p>New York, NY</p>
        </div>
        <ul>
          <li>
            Spearheaded international rebranding campaigns across digital and
            print channels, working closely with colleagues in the United
            Kingdom.
          </li>
          <li>
            Planned and attended Cambridge’s presence at global conferences and
            expos.
          </li>
          <li>
            Influenced and advised a group of six marketing team members across
            different departments.
          </li>
          <li>
            Improved upon budgetary and scheduling concerns by building
            relationships with external vendors to ensure the effectiveness of
            each marketing piece.
          </li>
        </ul>
      </JobTitle>

      <SectionHeading>Education</SectionHeading>

      <EducationListing>
        <p class="first">
          M.F.A. in Writing <br />
          GPA: 4.0
        </p>
        <p>New School University</p>
        <p>New York, NY</p>
      </EducationListing>

      <EducationListing>
        <p class="first">
          B.A. in Creative Writing Cum Laude <br /> GPA: 3.62
        </p>
        <p>North Park University</p>
        <p>Chicago, IL</p>
      </EducationListing>

      <SectionHeading>Technical Skills</SectionHeading>

      <SkillsListing>
        Proficient with all Microsoft and Macintosh operating systems. Advanced
        knowledge of Microsoft Word, Excel, PowerPoint, Confluence, Photoshop,
        Indesign, Wordpress, SalesForce, Marketing Cloud, Adestra, Constant
        Contact, Hubspot, Survey Monkey, Function Point, Trello, Google Adwords
        and Analytics. Knowledge of intermediate HTML and CSS. Intermediate
        Spanish.
      </SkillsListing>
    </ResumeWrapper>
  </Layout>
)

export default Resume
