import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPost } from "../modules/post";
import { isEmpty } from "lodash";
import renderHTML from "react-render-html";

import { PostTitle, PostToolbar } from "../../post-common";
import { Post, PostHeader, PostBody, Cover, PostText } from "./PostPage.style";

class PostPage extends Component {
  static propTypes = {
    fetchPost: PropTypes.func,
    postId: PropTypes.string.isRequired
  };

  componentDidMount = () => {
    const { post, postId, fetchPost } = this.props;
    if (isEmpty(post)) fetchPost(postId);
  };

  render = () => {
    const { post } = this.props;
    if (!isEmpty(post)) {
      return (
        <Post>
          <PostHeader>
            <Cover image={post._embedded["wp:featuredmedia"][0].source_url} />
          </PostHeader>
          <PostBody>
            <PostTitle text={post.title.rendered} />
            <PostToolbar date={post.date_gmt} />
            <PostText>{renderHTML(post.content.rendered)}</PostText>
          </PostBody>
        </Post>
      );
    } else return null;
  };
}

const mapStateToProps = (state, ownProps) => {
  return {
    postId: ownProps.match.params.id,
    post: state.post
  };
};

const mapDispatchToProps = {
  fetchPost
};

export const PostPageConnected = connect(mapStateToProps, mapDispatchToProps)(
  PostPage
);
