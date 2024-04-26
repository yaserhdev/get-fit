import React from 'react';
import PropTypes from 'prop-types';
import './LoadingSpinner.css'; // Import CSS file for styling the spinner

const LoadingSpinner = ({ isLoading }) => {
  return isLoading ? (
    <div className="loading-spinner-overlay">
      <div className="spinner"></div>
    </div>
  ) : null;
};

// PropTypes validation for isLoading prop
LoadingSpinner.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default LoadingSpinner;
