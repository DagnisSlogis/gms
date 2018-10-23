import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import { HearthButton } from "../../../../common/components/button";
import { Toolbar, PostDate } from './PostToolbar.style';

export const PostToolbar = ({ noSideMargin, date }) => (
  <Toolbar noSideMargin={noSideMargin}>
    <HearthButton />
    <PostDate>{moment(date).format("D. MMM. YYYY.")}</PostDate>
  </Toolbar>
)

PostToolbar.propTypes = {
  date: PropTypes.string,
  noSideMargin: PropTypes.bool
}
