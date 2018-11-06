import styled, { keyframes } from "styled-components";


const fadeIn = keyframes`
  0% {
    opacity: 0;
    margin-top: -20px;
  }
  100% {
    opacity: 1;
    margin-top: 0;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
    margin-top: 0;
  }
  100% {
    opacity: 0;
    margin-top: -20px;
  }
`;

export const DropDownContainer = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  width: 200px;
  background: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 -3px 20px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  z-index: 100;
  text-align: left;
  cursor: pointer;
  animation: ${props => (props.active ? `${fadeIn} .3s` : `${fadeOut} .1s`)}
    ease-in-out forwards;

  &:before {
    content: "";
    position: absolute;
    top: -11px;
    left: 20px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 8.5px 11px 8.5px;
    border-color: transparent transparent white transparent;
  }
`;

export const Item = styled.div`
  padding: 15px 15px;
  font-size: 14px;
  color: #666;
  border-bottom: 1px solid #e8e8e8;

  &:hover {
    background: #3a9cf5;
    border-color: white;
    color: white;
  }

  &:last-of-type {
    border-bottom: none;

    &:hover {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }

  &:first-of-type {
    &:hover {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  }
`;
