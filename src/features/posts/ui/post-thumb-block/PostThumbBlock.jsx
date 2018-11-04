import React from "react";
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


export const PostThumbBlock = ({
  post,
  post: {
    _embedded,
    format,
    content: { rendered: content },
    title: { rendered: title },
  },
  onClick,
}) => {
  const featuredImg = () =>
    _embedded["wp:featuredmedia"] ?
      _embedded["wp:featuredmedia"]["0"].source_url :
      null;

  const renderPostThumb = () => {
    if (format !== 'gallery') {
      return (
        <PostThumbImage
          image={getSmallThumbnail(featuredImg())}
          height={305}
        />
      );
    }

    return (
      <GalleryThumb>
        <SmartGallery
          images={getGalleryImages(content)}
          width='100%'
          height={305}
        />
      </GalleryThumb>
    );
  }

  return (
    <PostBlock onClick={(e) => onClick(e, post)}>
      {renderPostThumb()}
      <PostTypeBadge>{formatToLabel(format)}</PostTypeBadge>
      <PostTitle>{title}</PostTitle>
    </PostBlock>
  )
}

PostThumbBlock.propTypes = {
  post: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};
