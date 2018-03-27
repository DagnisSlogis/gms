import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import styled from "styled-components";
import * as postActions from "./redux/postActions";

class PostPage extends Component {
  render = () => {
    return null;
  };
}

PostPage.propTypes = {};

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(dispatch, postActions)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
