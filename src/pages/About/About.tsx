import {
  MainLeft,
  MainRight,
  Section,
  UnderLineLong,
} from '@/styles/common.tsx';
import html from '@/assets/images/skills/html.webp';
import styled from 'styled-components';

const AboutWrapper = styled.div`
  padding: 5.75rem 3.25rem 0px;
  display: flex;
  flex-direction: column;
  gap: 3.125rem;
`;

const Category = styled.div``;

const CategoryTitleWrapper = styled.div`
  /* background-color: lightgray; */
`;

const CategoryTitle = styled.div`
  font-size: 1.5rem;
`;

const Description = styled.div`
  /* background-color: lightcoral; */
  padding: 0 0 0.5rem 0;
`;

const ListDescription = styled.ul`
  list-style: circle;
`;

const List = styled.li`
  margin: 0.5rem 1rem;
`;

const ImageDescription = styled.ul``;

const Skill = styled.div``;

const ImageList = styled.li`
  width: 50px;
  height: 50px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export default function About() {
  return (
    <Section>
      <MainLeft />
      <MainRight>
        <AboutWrapper>
          <Category>
            <CategoryTitleWrapper>
              <CategoryTitle>
                -- ABOUT ME
                <UnderLineLong />
              </CategoryTitle>
            </CategoryTitleWrapper>
            <Description>
              안녕하세요 저는 프론트엔드 개발자가 되고 싶은 김민성입니다. 시간을
              내어 제 포트폴리오를 봐주셔서 감사합니다.
              <ListDescription>
                <List>2022.03 ~ 서울사이버대학교(컴퓨터공학과) ※재학중</List>
                <List>
                  2020.10 ~ 2021.02 더조은컴퓨터아카데미 - 웹 디자인 및 웹
                  퍼블리셔 과정 수료
                </List>
                <List>2012.03 ~ 2015 수원과학대학(정보통신과) 졸업</List>
              </ListDescription>
            </Description>
          </Category>

          <Category>
            <CategoryTitleWrapper>
              <CategoryTitle>
                -- EDUCATION
                <UnderLineLong />
              </CategoryTitle>
            </CategoryTitleWrapper>
            <Description>
              <ListDescription>
                <List>2022.03 ~ 서울사이버대학교(컴퓨터공학과) ※재학중</List>
                <List>
                  2020.10 ~ 2021.02 더조은컴퓨터아카데미 - 웹 디자인 및 웹
                  퍼블리셔 과정 수료
                </List>
                <List>2012.03 ~ 2015 수원과학대학(정보통신과) 졸업</List>
              </ListDescription>
            </Description>
          </Category>

          <Category>
            <CategoryTitleWrapper>
              <CategoryTitle>
                -- CERTIFICATE
                <UnderLineLong />
              </CategoryTitle>
            </CategoryTitleWrapper>
            <Description>
              <ListDescription>
                <List>정보처리산업기사(2013)</List>
              </ListDescription>
            </Description>
          </Category>

          <Category>
            <CategoryTitleWrapper>
              <CategoryTitle>
                -- FRONT END
                <UnderLineLong />
              </CategoryTitle>
            </CategoryTitleWrapper>
            <Description>
              <Skill>
                <p>- BASIC</p>
                <ImageDescription>
                  <ImageList>
                    <Image src={html} alt="html" />
                  </ImageList>
                </ImageDescription>
              </Skill>
            </Description>
          </Category>
        </AboutWrapper>
      </MainRight>
    </Section>
  );
}
