import React, { Component } from 'react';

import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Navbar = styled.nav`
  a { 
    color: white;
    text-decoration: none;
    padding: 1rem;
  }
  display: flex;
  list-style-type: none;
`;

const Nav = ({ menuLinks }) => (
  <Navbar>
    {
      menuLinks.map(link =>
        <li key={link.name}>
          <Link to={link.link}>{link.name}</Link>
        </li>)
    }
  </Navbar>
)


export default Nav
