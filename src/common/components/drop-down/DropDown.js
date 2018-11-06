import React from "react";
import PropTypes from "prop-types";

import { DropDownContainer, Item } from './DropDown.style';


export const DropDown = ({ active, subLinks }) => (
  <DropDownContainer active={active}>
    {subLinks.map(({ label }) => <Item key={`item-${label}`}>{label}</Item>)}
  </DropDownContainer>
);

DropDown.propTypes = {
  active: PropTypes.bool.isRequired,
  subLinks: PropTypes.array.isRequired
}
