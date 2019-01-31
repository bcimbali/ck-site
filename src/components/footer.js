import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: #A5DBCB;
  color: #FFFFFF;
  display: flex;
  justify-content: center;
`;

const Footer = ({ siteTitle }) => (
  <FooterWrapper>
    © {new Date().getFullYear()}
  </FooterWrapper> 
);

export default Footer