import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  align-items: center;
  background: #A5DBCB;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.25rem 0;
`;

const FooterText = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 0.75rem;
  padding: 0.25rem 0;
`;

const Icons = styled.div`
  a {
    color: #FFFFFF;
    margin: 0 0.5rem;
  }
  a:hover {
    color: blue;
  }
  font-size: 2rem;
  padding: 0.25rem 0;
`;

const Footer = ({ siteTitle }) => (
  <FooterWrapper>
    <FooterText>
      <p>Christine Kanownik © {new Date().getFullYear()}.</p>
      <p>All Rights Reserved.</p>
    </FooterText>
    <Icons>
      <a href="https://www.linkedin.com/in/christine-kanownik" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      <a href="mailto:cnkanownik@gmail.com"><FaEnvelope /></a>
    </Icons>
  </FooterWrapper> 
);

export default Footer