import styled from "styled-components";


export const Toolbar = styled.div`
  width: 100%;
  margin: ${props => (props.noSideMargin ? "15px 0" : "15px 20px")};
`;

export const PostDate = styled.span`
  color: #939393;
  font-size: 12px;
  margin-left: 20px;
`;
