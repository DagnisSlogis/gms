import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { DropDown } from '../../drop-down';
import { NavBtn, NavLink } from './NavButton.style';


export class NavButton extends PureComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    subLinks: PropTypes.array,
    light: PropTypes.string
  };

  static defaultProps = {
    color: "#666"
  };

  state = {
    isHovered: false
  };

  onMouseEnter = () => this.setState({ isHovered: true });
  onMouseLeave = () => this.setState({ isHovered: false });

  render() {
    const { color, link, label, subLinks } = this.props;
    const { isHovered } = this.state;

    return (
      <NavBtn onMouseLeave={this.onMouseLeave}>
        <NavLink
          to={link}
          onMouseEnter={this.onMouseEnter}
          color={color}
        >
          {label}
        </NavLink>
        {subLinks && (
          <DropDown
            subLinks={subLinks}
            active={isHovered}
          />
        )}
      </NavBtn>
    );
  }
}
