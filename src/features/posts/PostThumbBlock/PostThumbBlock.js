// @flow
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { getSmallThumbnail, formatToLabel } from "./../postsHelpers";

import {
  PostThumbImage,
  PostTypeBadge,
  PostTitle,
  PostBlock
} from "./PostThumbBlock.styles";

type Props = {
  post: Object,
  onClick: Function
};

export default class PostThumbBlock extends PureComponent<Props> {
  static propTypes = {
    post: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
  };

  featuredImg = () =>
    this.props.post._embedded["wp:featuredmedia"]["0"].source_url;

  render = () => (
    <PostBlock onClick={event => this.props.onClick(event, this.props.post)}>
      <PostThumbImage
        image={getSmallThumbnail(this.featuredImg())}
        height={305}
      />
      <PostTypeBadge>{formatToLabel(this.props.post.format)}</PostTypeBadge>
      <PostTitle>{this.props.post.title.rendered}</PostTitle>
    </PostBlock>
  );
}
