import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import renderHTML from "react-render-html";
import "react-responsive-modal/lib/react-responsive-modal.css";
import Modal from "react-responsive-modal/lib/css";
import { Spring } from "react-spring";

import {
  Background,
  Content,
  Poster,
  ModalTop,
  ModalBody,
  PosterText
} from "./PosterModal.style";
import HearthButton from "styled-components";
import { PostTitle, PostToolbar } from "../../../../common/components";

export default class PosterModal extends PureComponent {
  static propTypes = {
    status: PropTypes.bool.isRequired,
    onOpen: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    post: PropTypes.object,
    loading: PropTypes.bool
  };

  render = () => {
    const { post, onClose } = this.props;
    return (
      <Fragment>
        <Modal
          open={this.props.status}
          onClose={onClose}
          closeOnEsc
          closeOnOverlayClick
          closeIconSize={24}
        >
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
            {styles => (
              <ModalTop style={styles}>
                <Background
                  image={post._embedded["wp:featuredmedia"][0].source_url}
                />
                <Content>
                  <Poster
                    src={post._embedded["wp:featuredmedia"][0].source_url}
                  />
                </Content>
              </ModalTop>
            )}
          </Spring>
          <ModalBody>
            <PostTitle text={renderHTML(post.title.rendered)} noSideMargin />
            <PostToolbar date={post.date_gmt} noSideMargin />
            <PosterText>
              {renderHTML(post.content.rendered.replace(/<img[^>]*>/g, ""))}
            </PosterText>
          </ModalBody>
        </Modal>
      </Fragment>
    );
  };
}
