import { Document, Page } from 'react-pdf';

import Layout from '../components/layout';
import React from 'react';
import SEO from '../components/seo';
import samplePDF from './../pdf/Christine_Kanownik_Resume.pdf';
import styled from 'styled-components';

const PDFWrapper = styled.div`
  margin-bottom: 2rem;
  height: 80vh;
  width: 80vw;
  iframe {
    width: 80vw;
    height: 100%;
  }
`;

const Resume = () => (
  <Layout>
    <SEO title="Resume" />
    <PDFWrapper>
      <iframe src={samplePDF}></iframe>
    </PDFWrapper>
  </Layout>
)

export default Resume
