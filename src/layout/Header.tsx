import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import pb from '@/api/pocketBase';

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

const TitleWrapper = styled.div``;

const Title = styled.a`
  font-size: 2rem;
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 333px;
`;

const Menu = styled.button`
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
  const { data, isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: fetchTitle,
  });

  if (isLoading) {
    return <div>로딩중</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <Head>
      <TitleWrapper>
        <Title>{data[0].name}</Title>
      </TitleWrapper>
      <MenuWrapper>
        <Menu>첫번째</Menu>
        <Menu>두번째</Menu>
        <Menu>세번째</Menu>
        <Menu>네번째</Menu>
      </MenuWrapper>
    </Head>
  );
}
