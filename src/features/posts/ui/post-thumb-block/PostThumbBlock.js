import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import SmartGallery from 'react-smart-gallery';

import { getGalleryImages } from 'utils/contentUtils';

import { getSmallThumbnail, formatToLabel } from "../../utils/postsHelpers";
import {
  PostThumbImage,
  PostTypeBadge,
  PostTitle,
  PostBlock,
  GalleryThumb,
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

  renderPostThumb = () => {
    const { post } = this.props;

    if (post.format !== 'gallery') {
      return (
        <PostThumbImage
          image={getSmallThumbnail(this.featuredImg())}
          height={305}
        />
      );
    }

    return (
      <GalleryThumb>
        <SmartGallery
          images={getGalleryImages(post.content.rendered)}
          width='100%'
          height={305}
        />
      </GalleryThumb>
    );
  }

  render() {
    const { post, onClick } = this.props;
    const { format, title: { rendered } } = post;

    return (
      <PostBlock onClick={(e) => onClick(e, post)}>
        {this.renderPostThumb()}
        <PostTypeBadge>{formatToLabel(format)}</PostTypeBadge>
        <PostTitle>{rendered}</PostTitle>
      </PostBlock>
    )
  }
}
