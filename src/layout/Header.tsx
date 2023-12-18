import pb from '@/api/pocketBase';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Head = styled.nav`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 10px 3% 0 3%;
  background-color: skyblue;
  width: 100%;
  position: fixed;
  height: 70px;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2rem;
`;

const MenuWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 333px;
`;

const MenuMiddleWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Menu = styled(Link)`
  font-size: 1.5rem;
  min-width: 90px;
  background-color: white;
  margin: 0 15px;
  padding: 10px 30px;
  text-decoration: none;
  color: black;
  text-align: center;

  &:hover {
    background-color: skyblue;
    color: white;
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
  }
`;

async function fetchTitle() {
  const response = await pb.collection('SM').getFullList();
  return response;
}

export default function Header() {
  return (
    <Head>
      <TitleWrapper />
      <MenuWrapper>
        <MenuMiddleWrapper>
          <Menu href="/">Home</Menu>
        </MenuMiddleWrapper>
        <MenuMiddleWrapper>
          <Menu href="/about">About</Menu>
        </MenuMiddleWrapper>
        <MenuMiddleWrapper>
          <Menu href="/project">Project</Menu>
        </MenuMiddleWrapper>
        <MenuMiddleWrapper>
          <Menu href="/">Board</Menu>
        </MenuMiddleWrapper>
      </MenuWrapper>
    </Head>
  );
}

function Link({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <NavStyle
      to={href}
      className={({ isActive }) => (isActive ? 'active' : '')}
    >
      {children}
    </NavStyle>
  );
}

const NavStyle = styled(NavLink)`
  color: white;
  padding: 20px;
  font-size: 20px;
  font-weight: 400;
  margin: 5px;
  outline: invert;
  &:link {
    transition: 0.5s;
    text-decoration: none;
  }
  &:hover {
    color: aquamarine;
    scale: 1.5;
  }
  &.active {
    color: black;
    position: relative;
    top: 2px;
    scale: 0.5;
  }
`;

function TitleWrapper() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: fetchTitle,
  });

  if (isLoading) {
    return <Title>내가 누구게...</Title>;
  }

  if (isError) {
    return <Title>에러발생에러발생~~~</Title>;
  }

  return <Title>{data[0].name}</Title>;
}
