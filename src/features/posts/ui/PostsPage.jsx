import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { noop } from 'lodash';
import Lightbox from 'react-images';

import School from "assets/images/school.svg";
import { getGalleryPostImages } from 'utils/contentUtils';

import { fetchPosts } from "../modules/posts";
import { incrementPostsPage } from '../modules/postsPage';
import { openPost } from "../../post/modules/post";
import PostsList from "./posts-list/PostsList";
import { PosterModal } from "./modals";
import {
  Page,
  SchoolSVG,
  Header,
} from "./PostsPage.style";


export function PostsPage({
  posts,
  page,
  fetchPosts,
  incrementPostsPage,
  history,
  openPost,
  postLoading,
}) {
  const [ isPosterModalOpen, setIsPosterModalOpen ] = useState(false);
  const [ isGalleryOpen, setIsGalleryOpen ] = useState(false);
  const [ currGalleryImage, setCurrGalleryImage ] = useState(0);
  const [ selectedPost, setSelectedPost ] = useState({});
  const [ isLoadingMorePosts, setIsLoadingMorePosts ] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", fetchMorePostsWhenBotReached);
    if(!posts.length) fetchPosts(page);

    return () => {
      window.removeEventListener("scroll", fetchMorePostsWhenBotReached);
    }
  }, []);

  useEffect(() => {
    setIsLoadingMorePosts(false);
  }, posts);

  function fetchMorePostsWhenBotReached() {
    if (
      !isLoadingMorePosts &&
      window.innerHeight + window.scrollY >= document.body.offsetHeight
    ) {
      const nextPage = page + 1;

      setIsLoadingMorePosts(true)
      fetchPosts(nextPage);
      incrementPostsPage();
    }
  };

  function openPostFromList(_, currPost) {
    openPost(currPost);

    switch (currPost.format) {
      case 'standard':
        return history.push(`/post/${currPost.id}`);
      case 'gallery':
        onToggleGallery();
        break;
      case "image":
        onOpenModal();
        break;
      default:
        console.log("nothing");
        break;
    }

    setSelectedPost(currPost);
  };

  function onToggleGallery() {
    setIsGalleryOpen(!isGalleryOpen);
    setCurrGalleryImage(0);
  }

  function onOpenModal() {
    setIsPosterModalOpen(true);
  }

  function onCloseModal() {
    setIsPosterModalOpen(false);
  }

  function onNextImage() {
    setCurrGalleryImage(currGalleryImage + 1);
  }

  function onPrevImage() {
    setCurrGalleryImage(currGalleryImage - 1);
  }

  function onThumbnailClick(index) {
    setCurrGalleryImage(index);
  }

  return (
    <Page>
      <Header>
        <SchoolSVG src={School} />
      </Header>
      {isPosterModalOpen && (
        <PosterModal
          status={isPosterModalOpen}
          onOpen={onOpenModal}
          onClose={onCloseModal}
          post={selectedPost}
          loading={postLoading}
        />
      )}
      {(selectedPost && isGalleryOpen) && (
        <Lightbox
          images={getGalleryPostImages(selectedPost, selectedPost.title.rendered)}
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
      )}
      <PostsList posts={posts} openPost={openPostFromList} />
      {isLoadingMorePosts && (<p>Loading more posts!</p>) }
    </Page>
  );
};

PostsPage.propTypes = {
    posts: PropTypes.array,
    post: PropTypes.object,
    page: PropTypes.number,
    fetchPosts: PropTypes.func,
    openPost: PropTypes.func,
    history: PropTypes.object,
    postLoading: PropTypes.bool,
  };

PostsPage.defaultProps = {
  posts: [],
  post: {},
  fetchPosts: noop,
  openPost: noop,
}

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts,
    postLoading: state.postLoading,
    page: state.postsPage,
  };
};

const mapDispatchToProps = {
  fetchPosts,
  openPost,
  incrementPostsPage,
};

export const PostsPageConnected = connect(mapStateToProps, mapDispatchToProps)(
  PostsPage
);
