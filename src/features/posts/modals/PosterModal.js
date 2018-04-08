import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";
import renderHTML from "react-render-html";
import "react-responsive-modal/lib/react-responsive-modal.css";
import Modal from "react-responsive-modal/lib/css";
import {
  Background,
  Content,
  Poster,
  ModalTop,
  ModalBody,
  Title,
  PosterText
} from "./PostModal.style";

export default class PosterModal extends PureComponent {
  static propTypes = {
    status: PropTypes.bool.isRequired,
    onOpen: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    post: PropTypes.object
  };

  render = () => {
    const { post, onClose } = this.props;
    if (isEmpty(post)) return null;
    else {
      return (
        <Fragment>
          <Modal
            open={this.props.status}
            onClose={onClose}
            closeOnEsc
            closeOnOverlayClick
            closeIconSize={24}
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
              <Title>{renderHTML(post.title.rendered)}</Title>
              <PosterText>
                {renderHTML(post.content.rendered.replace(/<img[^>]*>/g, ""))}
              </PosterText>
            </ModalBody>
          </Modal>
        </Fragment>
      );
    }
  };
}
