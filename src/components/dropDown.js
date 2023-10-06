import React from 'react'

import onClickOutside from 'react-onclickoutside'
import styled, { css } from 'styled-components'

const DropDownContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme: { mq } }) => mq('md')`
    display: none;
  `}
`

const DropDownItems = styled.div`
  width: 100vw;
`

const DropDownUl = styled.ul`
  ${({ $isOpen, theme }) => css`
    --desktopHeader: ${theme.nav.desktopNavHeight};
    --mobileHeader: ${theme.nav.mobileNavHeight};
    background-color: ${theme.colors.bg};
    display: flex;
    flex-direction: column;
    max-height: 0px;
    opacity: 0;
    position: absolute;
    transition: ${theme.transitions.transitionSpeed} all;
    width: 100vw;
    z-index: 9;

    li {
      display: none;
      border-bottom: 1px solid #ffffff;
    }

    li a {
      align-items: center;
      color: white;
      display: flex;
      padding: 1rem 0 1rem 1.0875rem;
      text-decoration: none;
      transition: ${theme.transitions.transitionSpeed} all;
      width: 100vw;
    }

    li a span {
      font-size: 2rem;
    }

    ${$isOpen &&
    css`
      height: calc(100vh - var(--mobileHeader));
      max-height: 100vh;
      opacity: 1;
      li {
        display: flex;
      }
    `}

    li a:hover {
      background-color: ${theme.colors.green};
      color: blue;
    }
  `}
`

const DropDown = ({ isOpen, linksMarkup }) => {
  return (
    <DropDownContainer>
      <DropDownItems>
        <DropDownUl $isOpen={isOpen}>{linksMarkup}</DropDownUl>
      </DropDownItems>
    </DropDownContainer>
  )
}

export default DropDown
