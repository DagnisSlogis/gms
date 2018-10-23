import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../modules/posts";
import { openPost } from "../../post/modules/post";

import School from "../../../assets/images/school.svg";
import PostsList from "./posts-list/PostsList";
import PosterModal from "./modals/PosterModal";

import {
  Page,
  SchoolSVG,
  Header,
} from "./PostsPage.style";

export class PostsPage extends Component {
  static propTypes = {
    posts: PropTypes.array,
    post: PropTypes.object,
    fetchPosts: PropTypes.func.isRequired,
    openPost: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    postLoading: PropTypes.bool.isRequired
  };

  state = {
    page: 1,
    posterModalOpen: false,
    selectedPost: {},
    loadingMorePosts: false
  };

  componentDidMount = () => {
    window.addEventListener("scroll", this.fetchMorePostsWhenBotReached);
    this.props.fetchPosts(this.state.page);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.fetchMorePostsWhenBotReached);
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.posts.length !== this.props.posts.length) {
      this.setState(prevState => ({
        loadingMorePosts: false
      }));
    }
  }

  fetchMorePostsWhenBotReached = event => {
    if (
      !this.state.loadingMorePosts &&
      window.innerHeight + window.scrollY >= document.body.offsetHeight
    ) {
      this.setState(prevState => ({
        page: prevState.page + 1,
        loadingMorePosts: true
      }));
      this.props.fetchPosts(this.state.page);
    }
  };

  openPost = (event, post) => {
    const { history, openPost } = this.props;
    openPost(post);
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
        { this.state.loadingMorePosts && (<p>Loading more posts!</p>) }
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
  openPost
};

export const PostsPageConnected = connect(mapStateToProps, mapDispatchToProps)(
  PostsPage
);
