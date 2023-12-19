import mainImage1 from '@/assets/images/main_banner_1.webp';
import mainImage2 from '@/assets/images/main_banner_2.webp';
import {
  ButtonReset,
  MainLeft,
  MainRight,
  Section,
  UnderLineLong,
} from '@/styles/common.tsx';
import { useRef } from 'react';
import styled from 'styled-components';

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

const ThumbnailBox = styled.div`
  cursor: pointer;
  height: 21.25rem;
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
const DialogContainer = styled.div`
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`;
const Dialog = styled.dialog`
  outline: none;
  &::backdrop {
    background: #565656aa;
  }
  padding: 0;
`;

const DialogInner = styled.div`
  width: 800px;
  height: calc(100vh - 140px);
  background-color: rgb(255, 255, 255);
  color: rgb(51, 51, 51);
  box-shadow:
    rgba(255, 255, 255, 0.1) 0px 2px 3px,
    rgba(255, 255, 255, 0.06) 0px 10px 20px;
  padding: 1.25rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.75rem;
  // margin-bottom: 10px;
`;

const ProjectOverview = styled.p`
  /* margin-bottom: 10px; */
`;

const DialogCloseButton = styled.button``;

export default function Project() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = () => {
    dialogRef.current?.showModal();
  };

  const closeDialog = () => {
    dialogRef.current?.close();
  };

  const handleBackdropClick = (e: any) => {
    if (e.target === dialogRef.current) {
      closeDialog();
    }
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
              <ThumbnailBox onClick={openDialog}>
                <ThumbnailImage src={mainImageList[0]} />
              </ThumbnailBox>
              <ThumbnailBox>
                <ThumbnailImage src={mainImageList[1]} />
              </ThumbnailBox>
              <ThumbnailBox />
              <ThumbnailBox />
              <ThumbnailBox />
              <ThumbnailBox />
            </ThumbnailContainer>
          </ProjectContainer>
        </MainRight>
      </Section>
      <DialogContainer>
        <Dialog ref={dialogRef} onClick={handleBackdropClick}>
          <DialogInner>
            <ProjectTitle>MConcept</ProjectTitle>
            <ProjectOverview>MConcept ProjectOverview</ProjectOverview>
            <UnderLineLong></UnderLineLong>
            <DialogCloseButton
              onClick={(e) => {
                e.preventDefault();
                closeDialog();
              }}
            >
              X
            </DialogCloseButton>
          </DialogInner>
        </Dialog>
      </DialogContainer>
    </>
  );
}
