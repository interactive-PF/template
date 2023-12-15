import styled from 'styled-components';

const FooterContainer = styled.footer`
  height: 70px;
  line-height: 70px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 10;
  color: rgb(51, 51, 51);
  position: fixed;
  padding: 0px 70px;
`;

const FooterWarpper = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

const UserName = styled.span`
  display: inline-block;
`;

const DarkMode = styled.button`
  height: 50px;
  width: 50px;
  background: blue;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterWarpper>
        <UserName>Portfolio</UserName>
        <DarkMode />
      </FooterWarpper>
    </FooterContainer>
  );
}
