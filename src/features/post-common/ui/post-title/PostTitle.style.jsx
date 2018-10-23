import styled from "styled-components";


export const Title = styled.h2`
  color: #474747;
  font-size: 36px;
  line-height: 1.2;
  margin: ${props => props.noSideMargin ?  "0 0 15px 0" : "0 20px 15px 20px;"};
`;
