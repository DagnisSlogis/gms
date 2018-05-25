import styled from "styled-components";

export const Background = styled.div `
  position: absolute;
  background: linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6) ), url("${props =>
    props.image}") center center no-repeat;
  width: 100%;
  height: 620px;
  background-size: cover;
  filter: blur(5px);
  transform: scale(1.3);
`;

export const Content = styled.div `
  position: relative;
  padding: 15px 35px;
  text-align: center;
`;

export const Poster = styled.img `
  display: inline-block;
  width: auto;
  max-width: 100%;
  height: 100%;
  max-height: 590px;
`;

export const ModalTop = styled.div `
  position: relative;
  overflow: hidden;
  height: auto;
  max-height: 620px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;

export const ModalBody = styled.div `
  padding: 30px 35px;
`;

export const PosterText = styled.div `
  font-size: 16px;
  color: #515151;
  line-height: 1.4;
  margin: 20px 0;

  * {
    font-family: 'PT Serif', serif;
    font-weight: 400;
    font-style: normal;
    font-size: 18px;
    line-height: 1.58;
  }

  p {
    margin-bottom: 18px;
  }

  img.aligncenter {
    display: block;
    margin: 25px auto;
  }

  a {
    font-weight: 500;
    color: #3a9bf5;
    text-decoration: none;
  }

  a:hover,
  a:active,
  a:focus {
    color: #2592f8;
  }
`;
