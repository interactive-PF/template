import pb from '@/api/pocketBase';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
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

const Title = styled.a`
  font-size: 2rem;
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 333px;
`;

const Menu = styled.a`
  font-size: 1.5rem;
  min-width: 90px;
  background-color: yellow;
  margin: 0 15px;
  padding: 10px 30px;
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
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/project">Project</Link>
        <Menu>첫번째</Menu>
        <Menu>두번째</Menu>
        <Menu>세번째</Menu>
        <Menu>네번째</Menu>
      </MenuWrapper>
    </Head>
  );
}

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
