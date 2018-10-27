import styled from "styled-components";

export const Post = styled.div``;

export const PostHeader = styled.div`
  width: 100%;
  height: 350px;
  overflow: hidden;
`;

export const PostBody = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 30px auto;
`;

export const Cover = styled.div`
  position: relative;
  background: linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.35) ), url("${props =>
    props.image}") center center fixed no-repeat;
  width: 100%;
  height: 350px;
  background-size: cover;
  filter: blur(5px);
  transform: scale(1.3);
  z-index: 1;
`;

export const PostText = styled.div`
  font-size: 16px;
  color: #515151;
  line-height: 1.4;
  margin: 20px;

  * {
    font-family: "PT Serif", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 18px;
    line-height: 1.58;
  }

  p {
    margin-bottom: 13px;
  }

  img.aligncenter {
    display: block;
    margin: 25px auto;
  }
`;
