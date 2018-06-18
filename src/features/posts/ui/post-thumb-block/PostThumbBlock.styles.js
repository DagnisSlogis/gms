import styled from "styled-components";

export const PostThumbImage = styled.img`
  clip-path: polygon(0 0, 100% 0, 100% 96%, 0 88%);
  background: url("${props => props.image}");
  width: 100%;
  height: ${props => props.height}px;
  transition: 0.3s all ease-in-out;
  background-size: cover;
  background-position: center;
`;

export const PostTypeBadge = styled.span`
  position: absolute;
  font-size: 12px;
  top: 284px;
  left: 5px;
  color: #d7d7d7;
`;

export const PostTitle = styled.h3`
  font-family: "DIN Condensed";
  font-size: 24px;
  font-weight: bold;
  color: #505050;
  padding: 0 5px;
  transition: 0.2s color ease-in;
`;

export const PostBlock = styled.div`
  position: relative;
  width: 290px;
  padding-bottom: 15px;
  margin-bottom: 20px;
  cursor: pointer;
  border-bottom: 1px dashed #d7d7d7;

  &:hover ${PostThumbImage} {
    backface-visibility: hidden;
    transform: translateZ(-100px) scale(1, 1);
  }

  &:hover ${PostTitle} {
    color: #3a9cf5;
  }
`;
