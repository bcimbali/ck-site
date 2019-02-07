import React, { Component } from 'react';

import { Spring } from 'react-spring';
import onClickOutside from "react-onclickoutside";
import styled from 'styled-components';

const DropDownContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    display: none;
  }
`;

const DropDownItems = styled.div`
    width: 100vw;
`;

const DropDownUl = styled.ul`
  background-color: #B1B0E5;
  position: absolute;
  width: 100vw;

  li a {
    border-bottom: 1px solid #FFFFFF;
    color: white;
    display: inline-block;
    padding: 1rem;
    text-align: center;
    text-decoration: none;
    width: 100vw;
  }

  li a:hover {
      background-color: rgba(255, 255, 255, 0.2);
      color: blue;
  }
`;

class DropDown extends Component {

  handleClickOutside = evt => {
    this.props.closeDropDown();
  };
  
  render() {

    return (
      <DropDownContainer>
      {
        this.props.isOpen
        ? (
            <DropDownItems>
              <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
                {props => <DropDownUl style={props}>{this.props.linksMarkup}</DropDownUl>}
              </Spring>
            </DropDownItems>
        )
        : (
          null
        )
      }
      </DropDownContainer>
    )
  }
};

export default onClickOutside(DropDown);