import React, { Component } from 'react';

import { Spring } from 'react-spring';
import onClickOutside from "react-onclickoutside";
import styled from 'styled-components';

const DropDownContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  a { 
    color: white;
    text-decoration: none;
    padding: 1rem;
  }
  a:hover {
    color: blue;
  }
  li {
    border-bottom: 1px solid #FFFFFF;
    list-style-type: none;
    padding: 1.5rem 0;
    text-align: center;
    width: 100vw;
  }

  @media (min-width: 700px) {
    display: none;
  }
`;

const DropDownItems = styled.div`
    background-color: #B1B0E5;
    display: flex;
    flex-direction: column;
    position: absolute;

    li:hover {
      background-color: rgba(255, 255, 255, 0.2);
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
                {props => <div style={props}>{this.props.linksMarkup}</div>}
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