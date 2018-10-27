import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import renderHTML from "react-render-html";
import "react-responsive-modal/lib/react-responsive-modal.css";
import Modal from "react-responsive-modal/lib/css";
import { Spring } from "react-spring";

import { PostTitle, PostToolbar } from "features/post-common";
import {
  Background,
  Content,
  Poster,
  ModalTop,
  ModalBody,
  PosterText
} from "./PosterModal.style";


export class PosterModal extends PureComponent {
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
      <>
        <Spring
          from={{ transform: 'translateY(100px)' }}
          to={{ transform: 'translateY(0)' }}
        >
          {(styles) => (
            <Modal
              open={this.props.status}
              onClose={onClose}
              closeOnEsc
              closeOnOverlayClick
              closeIconSize={24}
              style={styles}
            >
              <ModalTop>
                <Background
                  image={post._embedded["wp:featuredmedia"][0].source_url}
                />
                <Content>
                  <Poster
                    src={post._embedded["wp:featuredmedia"][0].source_url}
                  />
                </Content>
              </ModalTop>
              <ModalBody>
                <PostTitle text={renderHTML(post.title.rendered)} noSideMargin />
                <PostToolbar date={post.date_gmt} noSideMargin />
                <PosterText>
                  {renderHTML(post.content.rendered.replace(/<img[^>]*>/g, ""))}
                </PosterText>
              </ModalBody>
            </Modal>
          )}
        </Spring>
      </>
    );
  };
}
