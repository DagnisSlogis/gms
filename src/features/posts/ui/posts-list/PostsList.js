import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import StackGrid from "react-stack-grid";
import { noop } from 'lodash';

import { PostThumbBlock } from "../post-thumb-block/PostThumbBlock";

const PostsListBlock = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 40px auto;
  padding: 0 20px;
  overflow: hidden;
`;

export const PostsList = ({ posts, openPost }) => (
  <PostsListBlock>
    <StackGrid columnWidth={328} monitorImagesLoaded >
      {posts.map((post) => (
        <PostThumbBlock
          key={post.id}
          post={post}
          onClick={openPost}
        />
      ))}
    </StackGrid>
  </PostsListBlock>
);

PostsList.propTypes = {
  posts: PropTypes.array,
  openPost: PropTypes.func
};

PostsList.defaultProps = {
  posts: [],
  openPost: noop,
};
