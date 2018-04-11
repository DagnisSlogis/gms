import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import styled from "styled-components";
import { fetchPost } from "./redux/postActions";
import { isEmpty } from "lodash";
import moment from "moment";
import renderHTML from "react-render-html";

import { HearthButton, PostTitle } from "../../common/components";

const Post = styled.div``;

const PostHeader = styled.div`
  width: 100%;
  height: 350px;
  overflow: hidden;
`;

const PostBody = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 30px auto;
`;

const Cover = styled.div`
  position: relative;
  background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.35) ), url("${props =>
    props.image}") center center fixed no-repeat;
  width: 100%;
  height: 350px;
  background-size: cover;
  filter: blur(5px);
  transform: scale(1.3);
  z-index: 1;
`;

const Toolbar = styled.div`
  width: 100%;
  margin: 10px 20px;
`;

const PostDate = styled.span`
  color: #939393;
  font-size: 12px;
  margin-left: 20px;
`;

const PostText = styled.div`
  font-size: 16px;
  color: #515151;
  line-height: 1.4;
  margin: 20px;

  p {
    margin-bottom: 13px;
  }

  img.aligncenter {
    display: block;
    margin: 25px auto;
  }
`;

class PostPage extends Component {
  static propTypes = {
    fetchPost: PropTypes.func.isRequired,
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
            <Toolbar>
              <HearthButton />
              <PostDate>
                {moment(post.date_gmt).format("D. MMM. YYYY.")}
              </PostDate>
            </Toolbar>
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

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
