import styled from "styled-components";


export const LikeButton = styled.button`
  font-size: 12px;
  border: 1px solid #f83b60;
  color: #f83b60;
  border-radius: 4px;
  padding: 8px 15px 5px 15px;
  cursor: pointer;
  transition: 0.3s all ease-in-out;

  img {
    width: 20px;
    vertical-align: middle;
    margin-right: 7px;
    margin-bottom: 2px;
  }

  &:hover {
    color: white;
    background: #f83b60;

    img {
      svg {
        fill: white;
      }
    }
  }

  &:focus, &:active {
    outline-color: #f83b60;
  }
`;
