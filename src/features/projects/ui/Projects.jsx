import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


export const Projects = () => (
  <div>Projekti</div>
)

export const ProjectsConnected = connect()(Projects);
