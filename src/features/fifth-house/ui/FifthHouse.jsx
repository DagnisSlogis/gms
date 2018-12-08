import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


export const FifthHouse = () => (
  <div>Piektā Māja</div>
)

export const FifthHouseConnected = connect()(FifthHouse);
