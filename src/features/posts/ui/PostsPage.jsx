// @flow
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../modules/posts";
import { fetchPost } from "../../post/modules/post";
import styled from "styled-components";
import isEmpty from "lodash";

import Logo from "../../../assets/images/logo.svg";
import School from "../../../assets/images/school.svg";
import PostsList from "./posts-list/PostsList";
import PosterModal from "./modals/PosterModal";

const Page = styled.div`
  background: white;
  margin-top: 150px;
`;

const ModalBtn = styled.button`
  margin-top: 200px;
`;

const SchoolSVG = styled.img`
  display: inline-block;
`;

const Header = styled.div`
  text-align: right;
  margin-bottom: 40px;
`;

const LogoBlock = styled.div`
  display: inline-block;
  width: 400px;
  text-align: center;
`;

const TopTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-top: 20px;
`;

const BottomTitle = styled.h1`
  font-size: 36px;
  font-weight: 300;
  margin-top: 10px;
`;

type Props = {
  posts: Array<Object>,
  post: Object,
  fetchPosts: Function,
  fetchPost: Function,
  history: Object,
  postLoading: boolean
};

type State = {
  page: number,
  posterModalOpen: boolean,
  selectedPost: Object
};

export class PostsPage extends Component<Props, State> {
  static propTypes = {
    posts: PropTypes.array,
    post: PropTypes.object,
    fetchPosts: PropTypes.func.isRequired,
    fetchPost: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    postLoading: PropTypes.bool.isRequired
  };

  state = {
    page: 1,
    posterModalOpen: false,
    selectedPost: {}
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

  openPost = (event: any, post: Object): void => {
    const { history, fetchPost } = this.props;
    fetchPost(post.id);
    switch (post.format) {
      case "standard":
        history.push(`/post/${post.id}`);
        break;
      case "image":
        this.onOpenModal();
        break;
      default:
        console.log("nothing");
        break;
    }
    this.setState({ selectedPost: post });
  };

  onOpenModal = () => this.setState({ posterModalOpen: true });

  onCloseModal = () => this.setState({ posterModalOpen: false });

  render = () => {
    return (
      <Page>
        <Header>
          <LogoBlock>
            <img src={Logo} />
            <TopTitle>GULBENES</TopTitle>
            <BottomTitle>MĀKSLASSKOLA</BottomTitle>
          </LogoBlock>
          <SchoolSVG src={School} />
        </Header>
        {this.state.posterModalOpen && (
          <PosterModal
            status={this.state.posterModalOpen}
            onOpen={this.onOpenModal}
            onClose={this.onCloseModal}
            post={this.state.selectedPost}
            loading={this.props.postLoading}
          />
        )}
        <PostsList posts={this.props.posts} openPost={this.openPost} />
      </Page>
    );
  };
}

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts,
    postLoading: state.postLoading
  };
};

const mapDispatchToProps = {
  fetchPosts,
  fetchPost
};

export const PostsPageConnected = connect(mapStateToProps, mapDispatchToProps)(
  PostsPage
);
