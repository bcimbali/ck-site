import React, { Component } from 'react'

import { Spring } from 'react-spring'
import onClickOutside from 'react-onclickoutside'
import styled from 'styled-components'

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
  background-color: #b1b0e5;
  position: absolute;
  width: 100vw;
  z-index: 9;

  li a {
    border-bottom: 1px solid #ffffff;
    color: white;
    display: inline-block;
    padding: 1rem 0;
    text-align: center;
    text-decoration: none;
    transition: ${({
        theme: {
          transitions: { transitionSpeed },
        },
      }) => transitionSpeed}
      all;
    width: 100vw;
  }

  li a:hover {
    background-color: rgba(255, 255, 255, 0.2);
    color: blue;
  }
`

class DropDown extends Component {
  handleClickOutside = (evt) => {
    this.props.closeDropDown()
  }

  render() {
    return (
      <DropDownContainer>
        {this.props.isOpen ? (
          <DropDownItems>
            <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
              {(props) => (
                <DropDownUl style={props}>{this.props.linksMarkup}</DropDownUl>
              )}
            </Spring>
          </DropDownItems>
        ) : null}
      </DropDownContainer>
    )
  }
}

export default onClickOutside(DropDown)
