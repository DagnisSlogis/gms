import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const NavBtn = styled.div`
  position: relative;
  display: inline-block;
`;

const NavLink = styled(Link)`
  display: inline-block;
  color: #868a8e;
  font-size: 14px;
  border: 0;
  cursor: pointer;
  padding: 27px 15px;
  text-decoration: none;

  &:hover {
    color: #3a9cf5;
  }

  &:hover,
  &:active,
  &:focus {
    outline: none;
  }
`;

export default class NavButton extends PureComponent {
  state = {
    isHovered: false
  };

  static propTypes = {
    label: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    subLinks: PropTypes.array
  };

  onMouseEnter = event => this.setState({ isHovered: true });
  onMouseLeave = event => this.setState({ isHovered: false });

  render = () => (
    <NavBtn onMouseLeave={this.onMouseLeave}>
      <NavLink to={this.props.link} onMouseEnter={this.onMouseEnter}>
        {this.props.label}
      </NavLink>
      {this.props.subLinks && (
        <Dropdown
          subLinks={this.props.subLinks}
          active={this.state.isHovered}
        />
      )}
    </NavBtn>
  );
}
