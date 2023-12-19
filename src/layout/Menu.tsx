import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavStyle = styled(NavLink)`
  color: black;
  padding: 12px 30px;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0 30px;
  background-color: transparent;
  font-weight: 500;
  position: relative;
  border-color: white;

  &:link {
    transition: 0.5s;
    text-decoration: none;
  }

  &:hover {
    /* background-color: black; */
    color: white;
    scale: 1.03;
    transition: 0.5s;
  }

  &:active {
    background-color: black;
    scale: 0.8;
    color: white;
    transition: background-color 0.3s ease;
    border-radius: 5px;
  }

  &.active {
    background-color: black;
    color: white;
    transition: 0.5s;
    border-radius: 5px;
  }

  &::after {
    width: 0;
    top: 0;
    left: 0;
    position: absolute;
    height: 100%;
    color: white;
    content: '';
    z-index: -1;
    transition: all 1s ease;
    background-color: black;
    border-radius: 5px;
  }

  &:hover::after {
    width: 100%;
  }
`;

function Menu({ href, children }: { href: string; children: React.ReactNode }) {
  return <NavStyle to={href}>{children}</NavStyle>;
}

export default Menu;
