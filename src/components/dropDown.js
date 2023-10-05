import React, { Component } from 'react'

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
    background-color: ${theme.colors.bg};
    border-top: 1px solid ${theme.colors.white};
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
      flex: 1 0 auto;
      border-bottom: 1px solid #ffffff;
    }

    li a {
      align-items: center;
      background-color: ${theme.colors.orange};
      color: white;
      display: flex;
      justify-content: center;
      padding: 1rem 0;
      text-align: center;
      text-decoration: none;
      transition: ${theme.transitions.transitionSpeed} all;
      width: 100vw;
    }

    li a span {
      font-size: 3rem;
    }

    ${$isOpen &&
    css`
      height: 100vh;
      max-height: 100vh;
      opacity: 1;
      li {
        display: flex;
      }
    `}

    li a:hover {
      background-color: ${theme.colors.bg};
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
