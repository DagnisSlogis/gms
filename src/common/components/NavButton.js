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
  color: ${props => props.color};
  font-size: 14px;
  border: 0;
  cursor: pointer;
  padding: 27px 15px;
  text-decoration: none;
  transition: all .3s;

  &:hover {
    color: ${props => (props.light ? "#ccc" : "#3a9cf5")};
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
    subLinks: PropTypes.array,
    light: PropTypes.string
  };

  static defaultProps = {
    color: "#868a8e"
  };

  onMouseEnter = event => this.setState({ isHovered: true });
  onMouseLeave = event => this.setState({ isHovered: false });

  render = () => (
    <NavBtn onMouseLeave={this.onMouseLeave}>
      <NavLink
        to={this.props.link}
        onMouseEnter={this.onMouseEnter}
        color={this.props.color}
      >
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
