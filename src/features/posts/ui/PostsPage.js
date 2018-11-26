import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { noop } from 'lodash';

import School from "assets/images/school.svg";
import { useWindowYScroll } from 'hooks';

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

export function PostsPage(props) {
  const {
    posts,
    page,
    fetchPosts,
    incrementPostsPage,
    history,
    openPost,
    postLoading,
  } = props;
  const [ isPosterModalOpen, setIsPosterModalOpen ] = useState(false);
  const [ selectedPost, setSelectedPost ] = useState({});
  const [ isLoadingMorePosts, setIsLoadingMorePosts ] = useState(false);
  const [ windowYScroll ] = useWindowYScroll();

  useEffect(() => {
    loadMorePosts();
  }, []);

  useEffect(() => {
    const { body: { offsetHeight } } = document;

    if (!isLoadingMorePosts && (offsetHeight > 0 && windowYScroll >= offsetHeight)) {
      loadMorePosts(1);
    }
  }, [windowYScroll]);

  useEffect(() => {
    setIsLoadingMorePosts(false);
  }, posts);

  function loadMorePosts(increment = 0) {
    console.log('called');
    fetchPosts(page + increment);
    incrementPostsPage();
    setIsLoadingMorePosts(true);
  }

  function openPostFromList(_, currPost) {
    openPost(currPost);

    switch (currPost.format) {
      case 'standard':
      case 'gallery':
        return history.push(`/post/${currPost.id}`);
      case "image":
        onOpenModal();
        break;
      default:
        console.log("nothing");
        break;
    }

    setSelectedPost(currPost);
  };

  function onOpenModal() {
    setIsPosterModalOpen(true);
  }

  function onCloseModal() {
    setIsPosterModalOpen(false);
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
      <PostsList posts={posts} openPost={openPostFromList} />
      {isLoadingMorePosts && (<p>Loading more posts!</p>) }
    </Page>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts,
  postLoading: state.postLoading,
  page: state.postsPage,
});

const mapDispatchToProps = {
  fetchPosts,
  openPost,
  incrementPostsPage,
};

export const PostsPageConnected = connect(mapStateToProps, mapDispatchToProps)(
  PostsPage
);
