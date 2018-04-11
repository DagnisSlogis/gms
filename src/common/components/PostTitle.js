import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const Title = styled.h2`
  color: #474747;
  font-size: 36px;
  line-height: 1.2;
  margin: ${props => props.noSideMargin ?  "0 0 15px 0" : "0 20px 15px 20px;"};
`;

export default class PostTitle extends PureComponent {
  static propTypes = {
    text: PropTypes.string.isRequired,
    noSideMargin: PropTypes.bool.isRequired
  };

  render = () => <Title noSideMargin>{this.props.text}</Title>;
}
