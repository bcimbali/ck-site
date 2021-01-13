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
    color: #15171c;
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

      <SectionHeading>Skills</SectionHeading>

      <SkillsListing>
      Copywriting, Editing, Creative Writing, Storytelling, Staff Management, 
      Project Management, Digital Marketing, Email Marketing, Event Planning, 
      Brand Development, Customer Journeys, Customer Outreach, Leadership, 
      Social Media Management, Direct Mail, Content Creation, Digital Advertising, 
      Mobile Marketing, Effective Communication, Organizational Skills
      </SkillsListing>

      <SectionHeading>Experience</SectionHeading>

      <ThickDivider />

      <JobTitle>
        <div class="job-header">
          <p>Copywriter</p>
          <p>November 2019 - Present</p>
          <p>Remedy Health Media</p>
          <p>New York, NY</p>
        </div>
        <ul>
          <li>
          Sourced and wrote articles based on trending Google searches for 
          the fast-growing health media company.
          </li>
          <li>
          Interviewed medical professionals on contemporary topics relating 
          to the pandemic and society.
          </li>
        </ul>
      </JobTitle>

      <ThinDivider />

      <JobTitle>
        <div class="job-header">
          <p>Copywriter</p>
          <p>May 2018 - Present</p>
          <p>Gruppe</p>
          <p>Berlin, Germany</p>
        </div>
        <ul>
          <li>
            Wrote, edited, and proofread lifestyle and travel articles for 
            agency clients including Porsche’s community app, Roads By Porsche.
          </li>
          <li>
            Communicated edits and changes with a team of editors to make sure 
            articles were up to rigorous standards.
          </li>
        </ul>
      </JobTitle>

      <ThinDivider />

      <JobTitle>
        <div class="job-header">
          <p>Marketing Manager</p>
          <p>Apr 2019 - Nov 2020</p>
          <p>Zacks Investment Research</p>
          <p>Chicago, IL</p>
        </div>
        <ul>
          <li>
          Curated the weekly promotional calendar with copywriters, designers, managers, 
          and editors to produce at least two articles and six emails per week.
          </li>
          <li>
          Launched a comprehensive A/B testing program to determine the effectiveness of 
          digital marketing efforts which resulted in a 30% increase in conversion and 
          the most profitable quarter in company history.
          </li>
        </ul>
      </JobTitle>

      <ThinDivider />

      <JobTitle>
        <div class="job-header">
          <p>Assistant Director of Communication</p>
          <p>Aug 2017 - Apr 2019</p>
          <p>Illinois Institute of Technology</p>
          <p>Chicago, IL</p>
        </div>
        <ul>
          <li>
          Managed the editorial calendar in an agency-style setting and developed 
          creative content with designers and videographers to create social media 
          advertisements, infographics, videos, flyers, and more.
          </li>
          <li>
          Wrote and automated over 300 dynamic email campaigns for the graduate 
          enrollment funnel, increasing engagement and click-through numbers by 
          over 70%.
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
          Acted as editor for two key professional blogs, Mastering Film and 
          Mastering Photo, creating content such as articles and videos to post 
          at least three times a week.
          </li>
          <li>
          Improved communication across the marketing and editorial departments 
          by hosting monthly meetings to discuss concerns and upcoming projects.
          </li>
          <li>
          Managed a team of five employees, including their workload and performance.
          </li>
          <li>
          Working closely with editors and authors, I promoted a list of professional 
          titles through social media, paid advertising, marketing emails, press releases, 
          author videos, conferences, and book launches.
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
          Spearheaded an international rebranding campaign across digital and 
          print channels, working closely with stakeholders in the United Kingdom.
          </li>
          <li>
          Wrote articles and composed marketing emails to promote a list of recent 
          titles to the global retail audience.
          </li>
        </ul>
      </JobTitle>

      <ThinDivider />

      <JobTitle>
        <div class="job-header">
          <p>Sales & Marketing assistant</p>
          <p>Jan 2011 - Jul 2012</p>
          <p>Rizzoli International Publications</p>
          <p>New York, NY</p>
        </div>
        <ul>
          <li>
          Represented the press and its authors at nationwide conventions and conferences.
          </li>
          <li>
          Worked closely with the Social Media Manager to promote titles 
          on Facebook, YouTube, and more.
          </li>
          <li>
          Managed the international publicity for all titles with worldwide 
          distribution and responded to press requests.
          </li>
        </ul>
      </JobTitle>

      <SectionHeading>Education</SectionHeading>

      <EducationListing>
        <p class="first">
          M.F.A. in Writing <br />
          GPA: 3.92
        </p>
        <p>New School University</p>
        <p>New York, NY</p>
      </EducationListing>

      <EducationListing>
        <p class="first">
          B.A. in English <br /> GPA: 3.62
        </p>
        <p>North Park University</p>
        <p>Chicago, IL</p>
      </EducationListing>
    </ResumeWrapper>
  </Layout>
)

export default Resume
