import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  noop,
  isEmpty,
} from 'lodash';
import InfiniteScroll from 'react-infinite-scroller';

import { useWindowYScroll } from 'hooks';

import { fetchPosts } from "../modules/posts";
import { openPost } from "../../post/modules/post";
import { PostsList } from "./posts-list/PostsList";
import { PosterModal } from "./modals";
import {
  Background,
} from './PostsPage.style';


export const PostsPage = ({ posts, postsPage, fetchPosts, history, openPost }) => {
  const [ isPosterModalOpen, setIsPosterModalOpen ] = useState(false);
  const [ selectedPost, setSelectedPost ] = useState({});

  const openPostFromList = (_, currPost) => {
    openPost(currPost);

    switch (currPost.format) {
      case 'standard':
      case 'gallery':
        return history.push(`/raksts/${currPost.id}`);
      case "image":
        onTogglePostModal();
        break;
      default:
        console.log("nothing");
        break;
    }

    setSelectedPost(currPost);
  };

  const onTogglePostModal = () => setIsPosterModalOpen(!isPosterModalOpen);

  return (
    <div>
      <Background image={require('assets/images/bg.jpg')} />
      {isPosterModalOpen && (
        <PosterModal
          status={isPosterModalOpen}
          onOpen={onTogglePostModal}
          onClose={onTogglePostModal}
          post={selectedPost}
        />
      )}
      <InfiniteScroll
        pageStart={postsPage}
        loadMore={fetchPosts}
        loader={<div key={0}>Loading ...</div>}
        hasMore
        useWindow
      >
        <PostsList posts={posts} openPost={openPostFromList} />
      </InfiniteScroll>
    </div>
  );
};

PostsPage.propTypes = {
  posts: PropTypes.array,
  postsPage: PropTypes.number,
  fetchPosts: PropTypes.func,
  openPost: PropTypes.func,
  history: PropTypes.object,
};

PostsPage.defaultProps = {
  posts: [],
  postsPage: 0,
  fetchPosts: noop,
  openPost: noop,
}

const mapStateToProps = ({ posts, postsPage }) => ({ posts, postsPage });

const mapDispatchToProps = {
  fetchPosts,
  openPost,
};

export const PostsPageConnected = connect(mapStateToProps, mapDispatchToProps)(
  PostsPage
);
