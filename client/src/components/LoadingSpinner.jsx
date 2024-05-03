import React from 'react';
import PropTypes from 'prop-types';
import './LoadingSpinner.css';

const LoadingSpinner = ({ isLoading }) => {
  return isLoading ? (
    <div className="loading-spinner-overlay">
      <div className="spinner"></div>
    </div>
  ) : null;
};

LoadingSpinner.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default LoadingSpinner;
