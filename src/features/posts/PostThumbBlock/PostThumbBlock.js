// @flow
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { getSmallThumbnail, formatToLabel } from "./../postsHelpers";

const PostThumbImage = styled.img`
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 96%, 0 88%);
  transition: 0.3s all ease-in-out;
`;

const PostTypeBadge = styled.span`
  position: absolute;
  font-size: 12px;
  top: 284px;
  left: 5px;
  color: #d7d7d7;
`;

const PostTitle = styled.h3`
  font-family: "DIN Condensed";
  font-size: 24px;
  font-weight: bold;
  color: #505050;
  padding: 0 5px;
  transition: 0.2s color ease-in;
`;

const PostBlock = styled.div`
  position: relative;
  width: 290px;
  padding-bottom: 15px;
  margin-bottom: 15px;
  cursor: pointer;
  border-bottom: 1px dashed #d7d7d7;

  &:hover ${PostThumbImage} {
    backface-visibility: hidden;
    transform: translateZ(-100px) scale(1, 1);
  }

  &:hover ${PostTitle} {
    color: #3a9cf5;
  }
`;

type Props = {
  post: Object
}

export default class PostThumbBlock extends PureComponent<Props> {
  static propTypes = {
    post: PropTypes.object.isRequired
  };

  render = () => (
    <PostBlock>
      <PostThumbImage
        src={getSmallThumbnail(
          this.props.post._embedded["wp:featuredmedia"]["0"].source_url
        )}
      />
      <PostTypeBadge>{formatToLabel(this.props.post.format)}</PostTypeBadge>
      <PostTitle>{this.props.post.title.rendered}</PostTitle>
    </PostBlock>
  );
}
