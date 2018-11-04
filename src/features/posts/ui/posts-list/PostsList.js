import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import StackGrid from "react-stack-grid";

import LoaderHOC from "HOC/LoaderHOC";

import { PostThumbBlock } from "../post-thumb-block/PostThumbBlock";


const PostsListBlock = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 40px auto;
  padding: 0 20px;
  overflow: hidden;
`;

function PostsList(props) {
  const {
    posts,
    openPost,
  } = props;

  return (
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
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
  openPost: PropTypes.func
};

PostsList.defaultProps = {
  posts: []
};

export default LoaderHOC("posts")(PostsList);
