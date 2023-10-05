import { FaBars, FaTimes } from 'react-icons/fa'
import React, { useEffect, useMemo, useState } from 'react'

import DropDown from './dropDown'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  align-items: center;
  background: #b1b0e5;
  display: flex;
  justify-content: space-between;
  padding: 1.45rem 1.0875rem;
`

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.45rem;
`

/** Styling for Name in upper-left */
const NameToHome = styled.div`
  a {
    color: white;
    font-size: 2rem;
    text-decoration: none;
  }
  a:hover {
    color: blue;
  }
`

/** Styling for Nav in upper-right */
const HeaderNav = styled.nav`
  i {
    color: #ffffff;
    cursor: pointer;
    font-size: 1.5rem;

    &:hover {
      color: blue;
    }
  }

  ${({ theme: { mq } }) => mq('md')`
    i {
      display: none;
    }
  `}
`

const HeaderNavLinks = styled.ul`
  a {
    display: none;
  }
  li {
    display: none;
  }

  ${({ theme: { mq } }) => mq('md')`
    display: flex;

    a {
      color: #ffffff;
      display: flex;
      margin: 0 1rem;
      text-decoration: none;
    }
    a:hover {
      color: blue;
    }
    li {
      display: flex;
      list-style-type: none;
    }
  `}
`

const StyledLink = styled(Link)`
  ${({
    theme: {
      transitions: { linkHover },
    },
  }) => linkHover};
`

const MobileIcon = styled.i`
  ${({
    theme: {
      transitions: { linkHover },
    },
  }) => linkHover};
`

const generateNavLinks = (link) => (
  <li key={link.name}>
    <StyledLink to={link.link}>
      <span>{link.name}</span>
    </StyledLink>
  </li>
)

const Header = ({ menuLinks, siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false)
  const linksMarkup = useMemo(
    () => menuLinks.map(generateNavLinks),
    [menuLinks]
  )

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <NameToHome>
          <h1>
            <StyledLink to="/">{siteTitle}</StyledLink>
          </h1>
        </NameToHome>
        <HeaderNav>
          <HeaderNavLinks>{linksMarkup}</HeaderNavLinks>
          <MobileIcon onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </MobileIcon>
        </HeaderNav>
      </HeaderWrapper>
      <DropDown
        isOpen={isOpen}
        linksMarkup={linksMarkup}
        closeDropDown={() => setIsOpen(false)}
      />
    </HeaderContainer>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
