import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { noop } from 'lodash';

import { fetchPosts } from "../modules/posts";
import { incrementPostsPage } from '../modules/postsPage';
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
    page: PropTypes.number,
    fetchPosts: PropTypes.func,
    openPost: PropTypes.func,
    history: PropTypes.object,
    postLoading: PropTypes.bool,
  };

  static defaultProps = {
    posts: [],
    post: {},
    fetchPosts: noop,
    openPost: noop,
  }

  state = {
    posterModalOpen: false,
    selectedPost: {},
    loadingMorePosts: false
  };

  componentDidMount = () => {
    const { fetchPosts, posts, page } = this.props;

    window.addEventListener("scroll", this.fetchMorePostsWhenBotReached);
    if(!posts.length) fetchPosts(page);
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

  fetchMorePostsWhenBotReached = () => {
    const {
      page,
      fetchPosts,
      incrementPostsPage,
    } = this.props;
    const { loadingMorePosts } = this.state;

    if (
      !loadingMorePosts &&
      window.innerHeight + window.scrollY >= document.body.offsetHeight
    ) {
      const nextPage = page + 1;

      this.setState(prevState => ({ loadingMorePosts: true }));
      fetchPosts(nextPage);
      incrementPostsPage();
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
    const {
      postLoading,
      posts,
    } = this.props;
    const {
      posterModalOpen,
      selectedPost,
      loadingMorePosts,
    } = this.state;

    return (
      <Page>
        <Header>
          <SchoolSVG src={School} />
        </Header>
        {posterModalOpen && (
          <PosterModal
            status={posterModalOpen}
            onOpen={this.onOpenModal}
            onClose={this.onCloseModal}
            post={selectedPost}
            loading={postLoading}
          />
        )}
        <PostsList posts={posts} openPost={this.openPost} />
        {loadingMorePosts && (<p>Loading more posts!</p>) }
      </Page>
    );
  };
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
