import { Link } from 'gatsby'
import Nav from './nav'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  background: #B1B0E5;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.45rem;
  padding: 1.45rem 1.0875rem;
`;

const NameToHome = styled.div`
  /* margin: 0 auto; */
  a {
    color: white;
    text-decoration: none;
  }
`;

const Header = ({ siteTitle, menuLinks }) => (
  <HeaderWrapper>
    <NameToHome>
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
    </NameToHome>
    <Nav menuLinks={menuLinks} />
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
