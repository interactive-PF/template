import styled from 'styled-components';
import CategoryMenu from './MenuCategory';
import TitleWrapper from './TitleWrapper';

const Head = styled.header`
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

export default function Header() {
  return (
    <Head>
      <TitleWrapper />
      <CategoryMenu />
    </Head>
  );
}
