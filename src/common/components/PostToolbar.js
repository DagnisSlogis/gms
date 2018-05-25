import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import moment from "moment";

import HearthButton from "./HearthButton";

const Toolbar = styled.div`
  width: 100%;
  margin: ${props => (props.noSideMargin ? "15px 0" : "15px 20px")};
`;

const PostDate = styled.span`
  color: #939393;
  font-size: 12px;
  margin-left: 20px;
`;

export default class PostToolbar extends PureComponent {
  static propTypes = {
    date: PropTypes.string.isRequired,
    noSideMargin: PropTypes.bool
  };

  render = () => (
    <Toolbar noSideMargin={this.props.noSideMargin}>
      <HearthButton />
      <PostDate>{moment(this.props.date).format("D. MMM. YYYY.")}</PostDate>
    </Toolbar>
  );
}
