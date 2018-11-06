import React, { useState } from "react";
import PropTypes from "prop-types";

import { DropDown } from '../../drop-down';
import { NavBtn, NavLink } from './NavButton.style';


export function NavButton (props) {
  const {
    color,
    link,
    label,
    subLinks,
  } = props;
  const [ isHovered, setIsHovered ] = useState(false);

  function onMouseEnter() {
    setIsHovered(true);
  }

  function onMouseLeave() {
    setIsHovered(false);
  }

  return (
    <NavBtn onMouseLeave={onMouseLeave}>
      <NavLink
        to={link}
        onMouseEnter={onMouseEnter}
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

NavButton.propTypes = {
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  subLinks: PropTypes.array,
  light: PropTypes.string
};

NavButton.defaultProps = {
  color: "#666"
};
