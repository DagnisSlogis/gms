import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { isEmpty } from "lodash";
import renderHTML from "react-render-html";
import { Spring } from "react-spring";

import { fetchPost } from "../modules/post";
import { PostTitle, PostToolbar } from "../../post-common";
import { Post, PostHeader, PostBody, Cover, PostText } from "./PostPage.style";


function PostPage(props) {
  const {
    post,
    postId,
    fetchPost,
  } = props;

  useEffect(() => {
    if (isEmpty(post) && postId) fetchPost(postId);
  }, postId)

  if (isEmpty(post)) return null;

  return (
    <Post>
      <PostHeader>
        <Cover image={post._embedded["wp:featuredmedia"][0].source_url} />
      </PostHeader>
      <Spring
        from={{ transform: 'translateY(50px)', opacity: 0 }}
        to={{ transform: 'translateY(0)', opacity: 1 }}
      >
        {(styles) => (
          <PostBody style={styles}>
            <PostTitle text={post.title.rendered} />
            <PostToolbar date={post.date_gmt} />
            <PostText>{renderHTML(post.content.rendered)}</PostText>
          </PostBody>
        )}
      </Spring>
    </Post>
  );
}

PostPage.propTypes = {
  fetchPost: PropTypes.func,
  postId: PropTypes.string,
};

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
