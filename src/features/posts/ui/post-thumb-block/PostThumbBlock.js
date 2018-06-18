import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { getSmallThumbnail, formatToLabel } from "../../utils/postsHelpers";
import {
  PostThumbImage,
  PostTypeBadge,
  PostTitle,
  PostBlock
} from "./PostThumbBlock.styles";


export default class PostThumbBlock extends PureComponent {
  static propTypes = {
    post: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
  };

  featuredImg = () =>
    this.props.post._embedded["wp:featuredmedia"]
      ? this.props.post._embedded["wp:featuredmedia"]["0"].source_url
      : null;

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
