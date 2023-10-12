import { FaBars, FaTimes } from 'react-icons/fa'
import React, { useEffect, useMemo, useState } from 'react'

import DropDown from './dropDown'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const HeaderWrapper = styled.div`
  ${({ theme: { colors, layout, mq, nav, shadows } }) => css`
    background: ${colors.bg};
    border-bottom: 1px solid ${colors.white};
    box-shadow: ${shadows.low};
    display: flex;
    height: ${nav.mobileNavHeight};
    justify-content: center;
    padding: 0 ${layout.mobileMargin};
    width: 100%;

    ${mq('md')(`
      box-shadow: unset;
      height: ${nav.desktopNavHeight};
      padding: 0 ${layout.desktopMargin};
    `)}
  `}
`

const InnerHeaderWrapper = styled.div`
  ${({ theme: { maxWidth } }) => css`
    align-items: center;
    display: flex;
    justify-content: space-between;
    max-width: ${maxWidth};
    width: 100%;
  `}
`

const HeaderContainer = styled.header`
  ${({ theme: { mq } }) => css`
    align-items: center;
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 5;

    ${mq('md')`
      position: static;
    `}
  `}
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
    gap: 1.5rem;

    a {
      color: #ffffff;
      display: flex;
      margin: 0;
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
  }) => linkHover}
`

const MobileIcon = styled.i`
  ${({
    theme: {
      transitions: { linkHover },
    },
  }) => linkHover};
`

const NavLinkWrapper = styled.li`
  ${({ $isDisabled, theme: { colors } }) =>
    $isDisabled &&
    css`
      opacity: 0.5;
      pointer-events: none;
      span {
        text-decoration: underline;
      }
    `}
`

const Header = ({ menuLinks, siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false)
  let url = {}
  if (typeof window !== 'undefined') {
    url = new URL(window.location.href)
  }
  const pathname = url?.pathname
  const path = pathname?.replace(/\/$/, '')

  const linksMarkup = useMemo(
    () =>
      menuLinks.map((link) => {
        return (
          <NavLinkWrapper key={link.name} $isDisabled={link.link === path}>
            <StyledLink to={link.link}>
              <span>{link.name}</span>
            </StyledLink>
          </NavLinkWrapper>
        )
      }),
    [menuLinks, path]
  )

  useEffect(() => {
    document.body.classList.toggle('no-scroll', isOpen)
  }, [isOpen])

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <InnerHeaderWrapper>
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
        </InnerHeaderWrapper>
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
