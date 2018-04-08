// @flow
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "./redux/postActions";
import { fetchPost } from "../post/redux/postActions";
import styled from "styled-components";

import PostsList from "./PostsList/PostsList";
import PosterModal from "./modals/PosterModal";

const Page = styled.div`
  background: white;
`;

const ModalBtn = styled.button`
  margin-top: 200px;
`;

type Props = {
  posts: Array<Object>,
  post: Object,
  fetchPosts: Function,
  fetchPost: Function,
  history: Object
};

type State = {
  page: number,
  posterModalOpen: boolean
};

export class PostsPage extends Component<Props, State> {
  static propTypes = {
    posts: PropTypes.array,
    post: PropTypes.object,
    fetchPosts: PropTypes.func.isRequired,
    fetchPost: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
  };

  state = {
    page: 1,
    posterModalOpen: false
  };

  componentDidMount = (): void => {
    window.addEventListener("scroll", this.fetchMorePostsWhenBotReached);
    this.props.fetchPosts(this.state.page);
  };

  componentWillUnmount = (): void => {
    window.removeEventListener("scroll", this.fetchMorePostsWhenBotReached);
  };

  fetchMorePostsWhenBotReached = (event: any): void => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      this.setState(prevState => ({
        page: prevState.page + 1
      }));
      this.props.fetchPosts(this.state.page);
    }
  };

  openPost = (event: any, id: string, type: string): void => {
    const { history, fetchPost } = this.props;
    fetchPost(id);
    switch (type) {
      case "standard":
        history.push(`/post/${id}`);
        break;
      case "image":
        this.onOpenModal();
        break;
      default:
        console.log("nothing");
        break;
    }
  };

  onOpenModal = () => this.setState({ posterModalOpen: true });

  onCloseModal = () => this.setState({ posterModalOpen: false });

  render = () => (
    <Page>
      <PosterModal
        status={this.state.posterModalOpen}
        onOpen={this.onOpenModal}
        onClose={this.onCloseModal}
        post={this.props.post}
      />
      <PostsList posts={this.props.posts} openPost={this.openPost} />
    </Page>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts,
    post: state.post
  };
};

const mapDispatchToProps = {
  fetchPosts,
  fetchPost
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);
