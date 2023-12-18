import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavStyle = styled(NavLink)`
  color: white;
  padding: 20px;
  font-size: 20px;
  font-weight: 400;
  margin: 5px;
  outline: invert;
  background-color: black;

  &:link {
    transition: 0.5s;
    text-decoration: none;
  }

  &:hover {
    color: aquamarine;
    scale: 1.3;
    transition: 1s;
  }

  &.active {
    color: white;
    position: relative;
    top: 2px;
  }
`;

function Menu({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <NavStyle
      to={href}
      className={({ isActive }) => (isActive ? 'active' : '')}
    >
      {children}
    </NavStyle>
  );
}

export default Menu;
