import pb from '@/api/pocketBase';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2rem;
`;

async function fetchTitle() {
  const response = await pb.collection('SM').getFullList();
  return response;
}

export default function TitleWrapper() {
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
