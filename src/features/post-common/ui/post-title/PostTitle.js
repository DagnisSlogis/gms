import React from "react";
import PropTypes from "prop-types";

import { Title } from './PostTitle.style';

export const PostTitle = ({ text, noSideMargin }) => (
  <Title noSideMargin={noSideMargin}>{text}</Title>
);

PostTitle.propTypes = {
  text: PropTypes.string,
  noSideMargin: PropTypes.bool
}
