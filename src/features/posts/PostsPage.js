// @flow
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "./redux/postActions";
import styled from "styled-components";

import PostsList from "./PostsList/PostsList";

const Page = styled.div`
  background: white;
`;

type Props = {
  posts: Array<Object>,
  fetchPosts: Function
}

export class PostsPage extends Component<Props> {
  static propTypes = {
    posts: PropTypes.array,
    fetchPosts: PropTypes.func.isRequired
  };

  componentDidMount = () => this.props.fetchPosts(1);

  render = () => (
    <Page>
      <PostsList posts={this.props.posts} />
    </Page>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts
  };
};

const mapDispatchToProps = {
  fetchPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);
