import React, { useState } from "react";
import PropTypes from "prop-types";

import { DropDown } from '../../drop-down';
import { NavBtn, NavLink } from './NavButton.style';


export const NavButton = ({
  color,
  path,
  label,
  subLinks,
}) => {
  const [ isHovered, setIsHovered ] = useState(false);

  const onMouseEnter = () => setIsHovered(true);

  const onMouseLeave = () => setIsHovered(false);

  return (
    <NavBtn onMouseLeave={onMouseLeave}>
      <NavLink
        to={path}
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
  path: PropTypes.string.isRequired,
  subLinks: PropTypes.array,
  light: PropTypes.string
};

NavButton.defaultProps = {
  color: "#666"
};
