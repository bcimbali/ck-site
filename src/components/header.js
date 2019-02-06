import { FaBars, FaTimes } from 'react-icons/fa';
import React, { Component } from 'react';

import DropDown from './dropDown';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/** HEADER STYLING */

const HeaderWrapper = styled.div`
  align-items: center;
  background: #B1B0E5;
  display: flex;
  justify-content: space-between;
  padding: 1.45rem 1.0875rem;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.45rem;
`;

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
`;

/** Styling for Nav in upper-right */
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

const generateNavLinks = link => (
  <li key={link.name}>
    <Link to={link.link}>{link.name}</Link>
  </li>
);

export default class Header extends Component {
  constructor({ menuLinks }) {
    super();
    this.linksMarkup = menuLinks.map(generateNavLinks);
    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.closeDropDown = this.closeDropDown.bind(this);
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

  closeDropDown() {
    this.setState({
      isOpen: false,
    })
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
        <DropDown 
          isOpen={this.state.isOpen}
          linksMarkup={this.linksMarkup}
          closeDropDown={this.closeDropDown}
        />
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
