import Layout from '../components/layout';
import { Link } from 'gatsby';
import React from 'react';
import SEO from '../components/seo';
import resume from './../pdf/Christine_Kanownik_Resume.pdf';
import styled from 'styled-components';

const PDFWrapper = styled.div`
  margin-bottom: 2rem;
  height: 80vh;
  width: 80vw;
  object {
    width: 100%;
    height: 100%;
  }
`;

const Resume = () => (
  <Layout>
    <SEO title="Resume" />
    <PDFWrapper>
      <object data={resume} type="application/pdf" width="100%" height="800px">
        <p>It appears you don't have a PDF plugin for this browser.
        No biggie... you can <Link to={resume}>click here to
          download the PDF file.</Link></p>
      </object>
    </PDFWrapper>
  </Layout>
)

export default Resume
