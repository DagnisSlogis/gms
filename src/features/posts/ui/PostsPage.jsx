import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { noop } from 'lodash';
import Lightbox from 'react-images';

import School from "assets/images/school.svg";
import { getGalleryPostImages } from 'utils/contentUtils';

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
    isGalleryOpen: false,
    currGalleryImage: 0,
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
      case 'standard':
        return history.push(`/post/${post.id}`);
      case 'gallery':
        this.onToggleGallery();
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

  onToggleGallery = () => this.setState((prevState) => ({
    isGalleryOpen: !prevState.isGalleryOpen,
    currGalleryImage: 0,
  }));

  onOpenModal = () => this.setState({ posterModalOpen: true });

  onCloseModal = () => this.setState({ posterModalOpen: false });

  onNextImage = () => this.setState((prevState) => ({
    currGalleryImage: prevState.currGalleryImage + 1,
  }));

  onPrevImage = () => this.setState((prevState) => ({
    currGalleryImage: prevState.currGalleryImage - 1,
  }));

  onThumbnailClick = (currGalleryImage) => this.setState({ currGalleryImage });

  render = () => {
    const {
      postLoading,
      posts,
    } = this.props;
    const {
      posterModalOpen,
      isGalleryOpen,
      selectedPost,
      loadingMorePosts,
      currGalleryImage,
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
        {(selectedPost && isGalleryOpen) && (
          <Lightbox
            images={getGalleryPostImages(selectedPost, selectedPost.title.rendered)}
            isOpen={isGalleryOpen}
            onClose={this.onToggleGallery}
            backdropClosesModal
            imageCountSeparator=' no '
            showThumbnails
            onClickPrev={this.onPrevImage}
            onClickNext={this.onNextImage}
            onClickThumbnail={this.onThumbnailClick}
            onThumbnailClick={this.onClickThumbnail}
            currentImage={currGalleryImage}
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
