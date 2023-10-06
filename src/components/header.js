import { FaBars, FaTimes } from 'react-icons/fa'
import React, { useEffect, useMemo, useState } from 'react'

import DropDown from './dropDown'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const HeaderWrapper = styled.div`
  ${({ theme: { colors, mq, nav } }) => css`
    align-items: center;
    background: ${colors.bg};
    border-bottom: 1px solid ${colors.white};
    display: flex;
    justify-content: space-between;
    height: ${nav.mobileNavHeight};
    padding: 0 1.0875rem;

    ${mq('md')(`
      height: ${nav.desktopNavHeight};
    `)}
  `}
`

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.45rem;
`

/** Styling for Name in upper-left */
const NameToHome = styled.div`
  ${({ theme }) => css`
    margin-right: 1rem;

    a {
      color: ${theme.colors.white};
      font-size: 1.25rem;
      text-decoration: none;
    }
    a:hover {
      color: ${theme.colors.blue};
    }

    ${theme.mq('md')`
      a {
        font-size: 2rem;
      }
    `}
  `}
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

const NavLinkWrapper = styled.li`
  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `}
`

const Header = ({ menuLinks, siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false)
  let url = {}
  if (typeof window !== 'undefined') {
    url = new URL(window.location.href)
  }
  const pathname = url?.pathname
  const path = pathname.replace(/\/$/, '')

  const generateNavLinks = (link) => {
    return (
      <NavLinkWrapper key={link.name} $isDisabled={link.link === path}>
        <StyledLink to={link.link}>
          <span>{link.name}</span>
        </StyledLink>
      </NavLinkWrapper>
    )
  }

  const linksMarkup = useMemo(
    () => menuLinks.map(generateNavLinks),
    [menuLinks]
  )

  useEffect(() => {
    document.body.classList.toggle('no-scroll', isOpen)
  }, [isOpen])

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
