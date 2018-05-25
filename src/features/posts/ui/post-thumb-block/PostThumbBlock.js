// @flow
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { getSmallThumbnail, formatToLabel } from "../../utils/postsHelpers";

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

  featuredImg = () => {
    console.log(this.props.post._embedded["wp:featuredmedia"]);
    return this.props.post._embedded["wp:featuredmedia"]
      ? this.props.post._embedded["wp:featuredmedia"]["0"].source_url
      : null;
  }

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
