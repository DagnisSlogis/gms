// @flow
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { getSmallThumbnail, formatToLabel } from "./../postsHelpers";
import { Motion, spring } from "react-motion";

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

  render = () => (
    <PostBlock
      onClick={event =>
        this.props.onClick(event, this.props.post.id, this.props.post.format)
      }
    >
      <Motion
        defaultStyle={{
          height: 305
        }}
        style={{
          height: spring(305)
        }}
      >
        {style => (
          <PostThumbImage
            image={getSmallThumbnail(
              this.props.post._embedded["wp:featuredmedia"]["0"].source_url
            )}
            height={style.height}
          />
        )}
      </Motion>
      <PostTypeBadge>{formatToLabel(this.props.post.format)}</PostTypeBadge>
      <PostTitle>{this.props.post.title.rendered}</PostTitle>
    </PostBlock>
  );
}
