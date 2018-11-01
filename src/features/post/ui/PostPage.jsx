import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { isEmpty } from "lodash";
import renderHTML from "react-render-html";
import { Spring } from "react-spring";

import { fetchPost } from "../modules/post";
import { PostTitle, PostToolbar } from "../../post-common";
import { Post, PostHeader, PostBody, Cover, PostText } from "./PostPage.style";


class PostPage extends Component {
  static propTypes = {
    fetchPost: PropTypes.func,
    postId: PropTypes.string,
  };

  componentDidMount = () => {
    const { post, postId, fetchPost } = this.props;
    if (isEmpty(post) && postId) fetchPost(postId);
  };

  render = () => {
    const { post } = this.props;

    if (isEmpty(post)) return null;

    const {
      _embedded,
      title: { rendered: title },
      date_gmt,
      content: { rendered: content }
    } = post;

    return (
      <Post>
        <PostHeader>
          <Cover image={_embedded["wp:featuredmedia"][0].source_url} />
        </PostHeader>
        <Spring
          from={{ transform: 'translateY(50px)', opacity: 0 }}
          to={{ transform: 'translateY(0)', opacity: 1 }}
        >
          {(styles) => (
            <PostBody style={styles}>
              <PostTitle text={title} />
              <PostToolbar date={date_gmt} />
              <PostText>{renderHTML(content)}</PostText>
            </PostBody>
          )}
        </Spring>
      </Post>
    );
  };
}

const mapStateToProps = ({ post }, { match: { params: { id } } }) => ({
  postId: id,
  post,
});

const mapDispatchToProps = {
  fetchPost
};

export const PostPageConnected = connect(mapStateToProps, mapDispatchToProps)(
  PostPage
);
