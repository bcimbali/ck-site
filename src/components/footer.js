import { FaEnvelope, FaLinkedin } from 'react-icons/fa'

import React from 'react'
import styled, { css } from 'styled-components'

const FooterWrapper = styled.footer`
  ${({ theme: { colors } }) => css`
    align-items: center;
    background: ${colors.green};
    color: ${colors.white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0.25rem 0;
  `}
`

const FooterText = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 0.75rem;
  padding: 0.25rem 0;
`

const Icons = styled.div`
  a {
    margin: 0 0.5rem;
    ${({
      theme: {
        transitions: { linkHover },
      },
    }) => linkHover};
  }
  font-size: 2rem;
  padding: 0.25rem 0;
`

const Footer = ({ siteTitle }) => (
  <FooterWrapper>
    <FooterText>
      <p>Christine Kanownik © {new Date().getFullYear()}.</p>
      <p>All Rights Reserved.</p>
    </FooterText>
    <Icons>
      <a
        aria-label="link to linkedin page"
        href="https://www.linkedin.com/in/christine-kanownik"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      <a aria-label="link to mail" href="mailto:cnkanownik@gmail.com">
        <FaEnvelope />
      </a>
    </Icons>
  </FooterWrapper>
)

export default Footer
