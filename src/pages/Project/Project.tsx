import mainImage1 from '@/assets/images/main_banner_1.webp';
import mainImage2 from '@/assets/images/main_banner_2.webp';
import {
  ButtonReset,
  MainLeft,
  MainRight,
  Section,
  UnderLineLong,
} from '@/styles/common.tsx';
import React, { useEffect, useRef, useState } from 'react';
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
  &::backdrop {
    background: #565656aa;
  }
  width: 800px;
  height: 200px;

  background-color: rgb(255, 255, 255);
  color: rgb(51, 51, 51);
  box-shadow:
    rgba(255, 255, 255, 0.1) 0px 2px 3px,
    rgba(255, 255, 255, 0.06) 0px 10px 20px;
  padding: 1.25rem;
`;

const H3 = styled.h3`
  height: 400px;
`;

export default function Project() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isModalOpen) {
      dialogRef.current?.showModal();
    } else if (dialogRef.current?.open) {
      dialogRef.current?.close();
    }
  }, [isModalOpen]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) {
      setIsModalOpen(false);
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
              <ThumbnailBox
                onClick={() => {
                  setIsModalOpen(true);
                }}
              >
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
          <H3>test</H3>
        </Dialog>
      </DialogContainer>
    </>
  );
}
