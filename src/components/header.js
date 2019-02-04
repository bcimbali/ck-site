import { FaBars, FaTimes } from 'react-icons/fa';
import React, { Component } from 'react';

import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/** HEADER STYLING */

const HeaderWrapper = styled.div`
  background: #B1B0E5;
  display: flex;
  justify-content: space-between;
  padding: 1.45rem 1.0875rem;
`;

const NameToHome = styled.div`
  a {
    color: white;
    text-decoration: none;
  }
  a:hover {
    color: blue;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.45rem;
`;

/** NAV STYLING */

const HeaderNav = styled.nav`
  i {
      color: #FFFFFF;
      cursor: pointer;
      font-size: 1.5rem;
    }
  i:hover {
    color: blue;
  }

  @media (min-width: 700px) {
    i {
      display: none;
    } 
  }
  }
`;

const HeaderNavLinks = styled.div`
  display: flex;
  
  a {
    color: #FFFFFF;
    margin: 0 1rem;
    text-decoration: none;
  }
  a:hover {
      color: blue;
    }
  li {
    list-style-type: none;
  }
  @media (max-width: 700px) {
    a {
      display: none;
    }
    li {
      display: none;
    }
  }
`;

const DropDownNav = styled.div`
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

const DropDownNavLinks = styled.div`
    background-color: #B1B0E5;
    display: flex;
    flex-direction: column;
    position: absolute;
`;

const generateNavLinks = link => (
  <li key={link.name}>
    <Link to={link.link}>{link.name}</Link>
  </li>
);

export default class Header extends Component {
  constructor({ menuLinks }) {
    super();
    this.linksMarkup = menuLinks.map(generateNavLinks)
    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.state = {
      isOpen: false,
    }
  }

  toggleDropDown() {
      this.setState((prevState) => ({
        isOpen: !prevState.isOpen,
      })
    );
    };

  render() {
    const { siteTitle } = this.props;
    return (
      <HeaderContainer>
        <HeaderWrapper>
          <NameToHome>
            <h1>
              <Link to="/">
                {siteTitle}
              </Link>
            </h1>
          </NameToHome>
          <HeaderNav>
            <HeaderNavLinks>
              {this.linksMarkup}
            </HeaderNavLinks>
            <i onClick={() => this.toggleDropDown()}>{
              this.state.isOpen
              ? (
                <FaTimes />
              )
              : (
                <FaBars />
              )
            }</i>
          </HeaderNav>
        </HeaderWrapper>
        <DropDownNav>
          {
            this.state.isOpen
            ? (
                <DropDownNavLinks>
                  {this.linksMarkup}
                </DropDownNavLinks>
            )
            : (
              null
            )
          }
        </DropDownNav>
    </HeaderContainer>

    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
