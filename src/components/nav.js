import React, { Component } from 'react';

import { FaBars } from 'react-icons/fa';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Navbar = styled.nav`
  a { 
    color: white;
    text-decoration: none;
    padding: 1rem;
  }
  list-style-type: none;
  }
`;

const NavWide = styled.div`
  display: flex;
  a:hover {
      color: blue;
    }
  @media (max-width: 700px) {
    a {
      display: none;
    }
  }
`;

const NavNarrow = styled.div`
    display: flex;
    flex-direction: column;
  i {
      color: #FFFFFF;
      cursor: pointer;
      font-size: 1.5rem;
    }
  i:hover {
    color: blue;
  }
  @media (min-width: 700px) {
    display: none;
  }
`;

const NarrowLinks = styled.div`
    display: none;
    flex-direction: column;
    a:hover {
      color: blue;
    }
`;

const Nav = ({ menuLinks }) => {
  function burgerMenuToggle() {
  let linksEl = document.querySelector('.narrowLinks');
  if (linksEl.style.display === 'flex') {
            linksEl.style.display = 'none';
        } else {
            linksEl.style.display = 'flex';
        }
}

  return (
  <Navbar>
    <NavWide>
      {
        menuLinks.map(link =>
          <li key={link.name}>
            <Link to={link.link}>{link.name}</Link>
          </li>)
      }
    </NavWide>
    <NavNarrow>
      <i onClick={() => burgerMenuToggle()}><FaBars /></i>
      <NarrowLinks className="narrowLinks">
        {
        menuLinks.map(link =>
          <li key={link.name}>
            <Link to={link.link} onClick={() => burgerMenuToggle()}>{link.name}</Link>
          </li>)
        }
      </NarrowLinks>
    </NavNarrow>
  </Navbar>
  );
}


export default Nav
