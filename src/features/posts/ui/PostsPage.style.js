import styled from "styled-components";


export const Background = styled.img`
  width: 100%;
  height: 80vh;
  max-height: 800px;
  background: linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0) ), url("${props => props.image}") center -250px no-repeat;
  background-size: cover;
`
