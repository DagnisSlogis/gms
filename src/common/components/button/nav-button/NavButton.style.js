import styled from "styled-components";

import { Link } from "react-router-dom";


export const NavBtn = styled.div`
  position: relative;
  display: inline-block;
`;

export const NavLink = styled(Link)`
  display: inline-block;
  color: ${props => props.color};
  font-size: 14px;
  border: 0;
  cursor: pointer;
  padding: 27px 15px;
  text-decoration: none;
  transition: all .3s;

  &:hover {
    color: ${props => (props.light ? "#ccc" : "#3a9cf5")};
  }

  &:hover,
  &:active,
  &:focus {
    outline: none;
  }
`;
