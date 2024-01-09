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

<<<<<<< HEAD
const DialogContainer = styled.div``;

const Dialog = styled.dialog`
  position: relative;
  outline: none;
  &::backdrop {
    background: #565656aa;
  }
  padding: 0;
  border: 1px solid #707070;
`;

const DialogInner = styled.div`
  width: 900px;
  height: calc(100vh - 80px);
  background-color: rgb(255, 255, 255);
  color: rgb(51, 51, 51);
  box-shadow:
    rgba(255, 255, 255, 0.1) 0px 2px 3px,
    rgba(255, 255, 255, 0.06) 0px 10px 20px;
  padding: 2.2rem;
  box-sizing: border-box;
`;
const DialogInnerContainer = styled.div`
  display: flex;
`;
const DialogLeftSecion = styled.div`
  width: 25%;
  margin-right: 40px;
  box-sizing: border-box;
`;
const DialogRightSection = styled.div.attrs(() => ({
  className: 'test',
}))`
  width: 65%;
`;
const ProjectTitle = styled.h3`
  font-size: 1.75rem;
  margin-bottom: 10px;
  /* font-weight: 800; */
`;

const ProjectSubtitle = styled.p`
  margin-bottom: 10px;
  font-weight: 800;
  .test &:nth-child(n + 2) {
    margin-top: 40px;
  }
`;

const ProjectContent = styled.div`
  padding-left: 20px;
  margin-bottom: 20px;
`;

const ProjectLink = styled.a`
  &:visited,
  &:active {
    color: #565656aa;
    text-decoration: none;
  }
`;
const ProjectOl = styled.ol``;

const ProjectLi = styled.li``;

const ProjectLiTitle = styled.p`
  font-weight: 700;
  margin-bottom: 12px;
  text-decoration: underline;
`;

const ProjectLiSubtitle = styled.p`
  font-weight: 700;
  margin-bottom: 8px;
  margin-left: 10px;
`;

const ProjectText = styled.p`
  margin-left: 28px;
  margin-bottom: 20px;
  line-height: 20px;
`;

=======
>>>>>>> develop
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
