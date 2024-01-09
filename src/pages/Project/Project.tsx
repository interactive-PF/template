import mainImage1 from '@/assets/images/main_banner_1.webp';
import mainImage2 from '@/assets/images/main_banner_2.webp';
import {
  ButtonReset,
  MainLeft,
  MainRight,
  Section,
  UnderLineLong,
} from '@/styles/common.tsx';

import styled from 'styled-components';
import Container from './Container.tsx';
// import close_icon from '@/assets/images/close_icon.svg';

const mainImageList = [mainImage1, mainImage2];

const ProjectContainer = styled.div`
  padding: 5.75rem 3.25rem 0px;
`;

const Title = styled.h2`
  font-size: 1.563rem;
`;

const ToolUl = styled.ul`
  display: flex;
`;

const ToolLi = styled.li``;

const ToolButton = styled(ButtonReset)`
  background: none;
  font-size: 1rem;
  font-weight: 500;
  margin-right: 10px;
  /* border-bottom: 2px solid #dfdfde; */
`;

const ThumbnailContainer = styled.div`
  margin-top: 1.875rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const ThumbnailImageWrapper = styled.div`
  cursor: pointer;
  height: 18rem;
  margin: 1.563rem;
  background-color: rgb(62, 62, 62);
  overflow: hidden;
  position: relative;
  transform: none;
  transform-origin: 50% 50% 0px;
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ThumbnailMemo = styled.section`
  padding: 20px 10px;
  background: #fbf3db;
  border-radius: 6px;
  margin-bottom: 20px;
`;
const ThumbnailMemoTitle = styled.p`
  margin-bottom: 10px;
  font-weight: 600;
`;

const ThumbnailMemoText = styled.p`
  margin: 0px 20px;
  line-height: 20px;
`;

// const DialogCloseButton = styled(ButtonReset)`
//   position: absolute;
//   padding: 0;
//   top: 1.3rem;
//   right: 0.5rem;
//   background-color: transparent;
//   background-image: url(${close_icon});
//   width: 24px;
//   height: 24px;
//   background-size: 100% 100%;
//   transform: translateY(-50%);
// `;

export default function Project() {
  const openDialog = () => {
    dialogRef.current?.showModal();
  };

  return (
    <>
      <Section>
        <MainLeft>왼쪽 구역</MainLeft>
        <MainRight>
          <ProjectContainer>
            <Title>Project</Title>
            <UnderLineLong />
            <ToolUl>
              <ToolLi>
                <ToolButton>All</ToolButton>
              </ToolLi>
              <ToolLi>
                <ToolButton>JS</ToolButton>
              </ToolLi>
              <ToolLi>
                <ToolButton>React</ToolButton>
              </ToolLi>
            </ToolUl>
            <ThumbnailContainer>
              <ThumbnailImageWrapper onClick={openDialog}>
                <ThumbnailImage src={mainImageList[0]} />
              </ThumbnailImageWrapper>
              <ThumbnailImageWrapper>
                <ThumbnailImage src={mainImageList[1]} />
              </ThumbnailImageWrapper>
              <ThumbnailImageWrapper />
              <ThumbnailImageWrapper />
              <ThumbnailImageWrapper />
              <ThumbnailImageWrapper />
            </ThumbnailContainer>
          </ProjectContainer>
        </MainRight>
      </Section>
      <Container />
    </>
  );
}
