import React from "react";
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
  PosterText,
  ModalTopContainer,
} from "./PosterModal.style";


export function PosterModal(props) {
  const {
    post: {
      _embedded,
      title: { rendered: title },
      date_gmt,
      content: { rendered: content }
    },
    onClose,
    status,
  } = props;

  return (
    <Modal
      open={status}
      onClose={onClose}
      closeOnEsc
      closeOnOverlayClick
      closeIconSize={24}
    >
      <ModalTopContainer>
        <ModalTop>
          <Background
            image={_embedded["wp:featuredmedia"][0].source_url}
          />
          <Content>
            <Poster
              src={_embedded["wp:featuredmedia"][0].source_url}
            />
          </Content>
        </ModalTop>
      </ModalTopContainer>
      <Spring
        from={{ transform: 'translateY(50px)', opacity: 0 }}
        to={{ transform: 'translateY(0)', opacity: 1 }}
      >
        {(styles) => (
          <ModalBody style={styles}>
            <PostTitle
              text={renderHTML(title)}
              noSideMargin
            />
            <PostToolbar
              date={date_gmt}
              noSideMargin
            />
            <PosterText>
              {renderHTML(content.replace(/<img[^>]*>/g, ""))}
            </PosterText>
          </ModalBody>
        )}
      </Spring>
    </Modal>
  );
}

PosterModal.propTypes = {
  status: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  post: PropTypes.object,
  loading: PropTypes.bool
};

