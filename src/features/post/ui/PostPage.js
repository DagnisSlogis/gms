import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { isEmpty } from "lodash";
import renderHTML from "react-render-html";
import { Spring } from "react-spring";
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

import {
  getGalleryPostImages,
  hasGallery,
  getContentWithoutGallery,
} from 'utils/contentUtils';

import { fetchPost } from "../modules/post";
import { PostTitle, PostToolbar } from "../../post-common";
import { Post, PostHeader, PostBody, Cover, PostText } from "./PostPage.style";


function PostPage(props) {
  const {
    post,
    postId,
    fetchPost,
  } = props;
  const [ isGalleryOpen, setIsGalleryOpen ] = useState(false);
  const [ currGalleryImage, setCurrGalleryImage ] = useState(0);

  useEffect(() => {
    if (isEmpty(post) && postId) fetchPost(postId);
  }, postId)

  if (isEmpty(post)) return null;

  const onToggleGallery = (_, obj) => {
    setIsGalleryOpen(!isGalleryOpen);
    setCurrGalleryImage(obj ? obj.index : 0);
  }

  const onNextImage = () => setCurrGalleryImage(currGalleryImage + 1);

  const onPrevImage = () => setCurrGalleryImage(currGalleryImage - 1);

  const onThumbnailClick = (index) => setCurrGalleryImage(index);

  const renderPostText = () => {
    if (hasGallery(post)) {
      const images = getGalleryPostImages(post, post.title.rendered);

      return (
        <>
          {renderHTML(getContentWithoutGallery(post))}
          <Gallery
            photos={images}
            onClick={onToggleGallery}
            margin={5}
          />
          <Lightbox
            images={images}
            isOpen={isGalleryOpen}
            onClose={onToggleGallery}
            backdropClosesModal
            imageCountSeparator=' no '
            showThumbnails
            onClickPrev={onPrevImage}
            onClickNext={onNextImage}
            onClickThumbnail={onThumbnailClick}
            onThumbnailClick={onThumbnailClick}
            currentImage={currGalleryImage}
          />
        </>
      )
    }
    return renderHTML(post.content.rendered);
  }

  return (
    <Post>
      <PostHeader>
        <Cover image={post._embedded["wp:featuredmedia"][0].source_url} />
      </PostHeader>
      <Spring
        from={{ transform: 'translateY(50px)', opacity: 0 }}
        to={{ transform: 'translateY(0)', opacity: 1 }}
      >
        {(styles) => (
          <PostBody style={styles}>
            <PostTitle text={post.title.rendered} />
            <PostToolbar date={post.date_gmt} />
            <PostText>{renderPostText()}</PostText>
          </PostBody>
        )}
      </Spring>
    </Post>
  );
}

PostPage.propTypes = {
  fetchPost: PropTypes.func,
  postId: PropTypes.string,
};

const mapStateToProps = ({ post }, { match }) => ({
  postId: match.params.id,
  post,
});

const mapDispatchToProps = {
  fetchPost
};

export const PostPageConnected = connect(mapStateToProps, mapDispatchToProps)(
  PostPage
);
