import styled from 'styled-components';
import { useRef } from 'react';
import {
  UnderLineLong,
  HtmlTag,
  CssTag,
  TailwindTag,
  ReactTag,
  JavaScriptTag,
} from '@/styles/common.tsx';

import mainImage1 from '@/assets/images/main_banner_1.webp';
import mainImage2 from '@/assets/images/main_banner_2.webp';

const mainImageList = [mainImage1, mainImage2];

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

const ThumbnailMemoTitle = styled.p`
  margin-bottom: 10px;
  font-weight: 600;
`;

const ThumbnailMemoText = styled.p`
  margin: 0px 20px;
  line-height: 20px;
`;

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

const DialogRightSection = styled.div.attrs({
  className: 'test',
})`
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

export default function Container() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const closeDialog = () => {
    dialogRef.current?.close();
  };

  const handleBackdropClick = (e: any) => {
    if (e.target === dialogRef.current) {
      closeDialog();
    }
  };
  return (
    <DialogContainer>
      <Dialog ref={dialogRef} onClick={handleBackdropClick}>
        {/* <DialogCloseButton
            onClick={(e) => {
              e.preventDefault();
              closeDialog();
            }}
          /> */}
        <DialogInner>
          <ProjectTitle>MConcept</ProjectTitle>
          <ProjectSubtitle>의류 쇼핑몰 사이트 구현/ 팀프로젝트</ProjectSubtitle>
          <UnderLineLong />
          <ThumbnailImageWrapper>
            <ThumbnailImage src={mainImageList[0]} />
          </ThumbnailImageWrapper>
          <ThumbnailMemo>
            <ThumbnailMemoTitle>💡 프로젝트 성과</ThumbnailMemoTitle>
            <ThumbnailMemoText>
              React 기반 이커머스 웹사이트 프로젝트입니다. 컴포넌트 기반으로
              UI를 구성하여 코드의 재사용성을 높이고 유지보수를 용이하게 했으며,
              JSX를 사용하여 코드의 가독성을 높였습니다.
            </ThumbnailMemoText>
          </ThumbnailMemo>
          <DialogInnerContainer>
            <DialogLeftSecion>
              <ProjectSubtitle>🗓 작업기간</ProjectSubtitle>
              <ProjectContent>23.09.04 ~ 23.09.24</ProjectContent>
              <ProjectSubtitle>🔗 상세설명 링크</ProjectSubtitle>
              <ProjectContent>
                <ProjectLink
                  href="https://www.notion.so/M-Concept-2fb7c2c9ed5041aea2a9749985514137?pvs=4"
                  target="_blank"
                  rel="링크"
                >
                  상세설명 링크
                </ProjectLink>
              </ProjectContent>
              <ProjectSubtitle>🔗 배포 링크</ProjectSubtitle>
              <ProjectContent>
                <ProjectLink
                  href="https://mconcept-tawny.vercel.app/"
                  target="_blank"
                  rel="링크"
                >
                  배포 링크
                </ProjectLink>
              </ProjectContent>
              <ProjectSubtitle>🛠 활용기술</ProjectSubtitle>
              <ProjectContent>
                <HtmlTag>HTML</HtmlTag>
                <CssTag>CSS</CssTag>
                <TailwindTag>Tailwind</TailwindTag>
                <JavaScriptTag>Javascript</JavaScriptTag>
                <ReactTag>React</ReactTag>
              </ProjectContent>
            </DialogLeftSecion>
            <DialogRightSection>
              <ProjectSubtitle>🧑🏻‍💻 담당작업</ProjectSubtitle>
              <ProjectContent>
                <ProjectOl>
                  <ProjectLi>
                    <ProjectLiTitle>1. 회원가입 페이지</ProjectLiTitle>
                    <ProjectLiSubtitle>• 계정기능구현</ProjectLiSubtitle>
                    <ProjectText>
                      REST API활용하여 계정생성 기능 구현
                    </ProjectText>
                    <ProjectLiTitle>2. 로그인 페이지</ProjectLiTitle>
                    <ProjectLiSubtitle>
                      • 아이디, 비밀번호 인증 기능
                    </ProjectLiSubtitle>
                    <ProjectText>
                      인증기능 (Auth Provider)으로 서버에서 아이디, 비밀번호를
                      읽어 인증기능 구현
                    </ProjectText>
                    <ProjectLiTitle>3. 헤더</ProjectLiTitle>
                    <ProjectLiSubtitle>• 카테고리 네비게이션</ProjectLiSubtitle>
                    <ProjectText>
                      List Rendering으로 코드를 재사용하여 네비게이션 UI 생성
                    </ProjectText>
                    <ProjectLiTitle>4. 폴더, 파일 컨벤션 작성</ProjectLiTitle>
                    <ProjectLiSubtitle>• 컨벤션</ProjectLiSubtitle>
                    <ProjectText>
                      컨벤션을 작성해서 팀원과 폴더구조, 파일이름을 일관되게
                      관리 할 수 있게 함
                    </ProjectText>
                  </ProjectLi>
                </ProjectOl>
              </ProjectContent>
              <ProjectSubtitle>🧑🏻‍💻 담당작업</ProjectSubtitle>
              <ProjectContent>
                <ProjectOl>
                  <ProjectLi>
                    <ProjectLiTitle>1. 회원가입 페이지</ProjectLiTitle>
                    <ProjectLiSubtitle>• 계정기능구현</ProjectLiSubtitle>
                    <ProjectText>
                      REST API활용하여 계정생성 기능 구현
                    </ProjectText>
                    <ProjectLiTitle>2. 로그인 페이지</ProjectLiTitle>
                    <ProjectLiSubtitle>
                      • 아이디, 비밀번호 인증 기능
                    </ProjectLiSubtitle>
                    <ProjectText>
                      인증기능 (Auth Provider)으로 서버에서 아이디, 비밀번호를
                      읽어 인증기능 구현
                    </ProjectText>
                    <ProjectLiTitle>3. 헤더</ProjectLiTitle>
                    <ProjectLiSubtitle>• 카테고리 네비게이션</ProjectLiSubtitle>
                    <ProjectText>
                      List Rendering으로 코드를 재사용하여 네비게이션 UI 생성
                    </ProjectText>
                    <ProjectLiTitle>4. 폴더, 파일 컨벤션 작성</ProjectLiTitle>
                    <ProjectLiSubtitle>• 컨벤션</ProjectLiSubtitle>
                    <ProjectText>
                      컨벤션을 작성해서 팀원과 폴더구조, 파일이름을 일관되게
                      관리 할 수 있게 함
                    </ProjectText>
                  </ProjectLi>
                </ProjectOl>
              </ProjectContent>
            </DialogRightSection>
          </DialogInnerContainer>
        </DialogInner>
      </Dialog>
    </DialogContainer>
  );
}
