import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


export const Learning = () => (
  <div>Mācības</div>
)

export const LearningConnected = connect()(Learning);
