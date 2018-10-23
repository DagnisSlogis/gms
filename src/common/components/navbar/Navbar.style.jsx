import styled from "styled-components";


export const NavContainer = styled.div `
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  background: ${props => props.bgColor};
`;

export const Nav = styled.nav `
  display: flex;
  justify-content: space-between;
  max-width: 1024px;
  margin: 0 auto;
  text-align: right;
`;

export const LogoWithText = styled.div `
  display: flex;
  align-items: center;
`;

export const TopTitle = styled.h2 `
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 3px;
`;

export const BottomTitle = styled.h1 `
  font-size: 14px;
  font-weight: 300;
`;

export const LogoText = styled.div `
  color: ${props => props.color}
  text-align: left;
  margin-left: 7px;
`;
