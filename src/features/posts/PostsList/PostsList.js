import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import LoaderHOC from "../../../HOC/LoaderHOC";
import StackGrid from "react-stack-grid";
import PostThumbBlock from "./../PostThumbBlock/PostThumbBlock";

const PostsListBlock = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 40px auto;
  padding: 0 20px;
  overflow: hidden;
`;

type Props = {
  posts: Array<Object>,
  openPost: Function
};

class PostsList extends PureComponent<Props> {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    openPost: PropTypes.func.isRequired
  };

  static defaultProps = {
    posts: []
  };

  render = () => (
    <PostsListBlock>
      <StackGrid columnWidth={328} monitorImagesLoaded={true}>
        {this.props.posts.map(post => (
          <PostThumbBlock
            key={post.id}
            post={post}
            onClick={this.props.openPost}
          />
        ))}
      </StackGrid>
    </PostsListBlock>
  );
}

export default LoaderHOC("posts")(PostsList);
