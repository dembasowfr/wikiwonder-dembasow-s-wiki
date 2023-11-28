// index.js

import React from 'react';
import PropTypes from 'prop-types';
import './styles.module.css';

const Loading = ({ message, showSpinner, showMessage, visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="loading">
      {showSpinner && <div className="spinner"></div>}
      {showMessage && <span>{message}</span>}
    </div>
  );
};

Loading.propTypes = {
  message: PropTypes.string,
  showMessage: PropTypes.bool,
  showSpinner: PropTypes.bool,
  visible: PropTypes.bool,
};

Loading.defaultProps = {
  message: 'Loading...',
  showMessage: true,
  showSpinner: true,
  visible: true,
};

export default Loading;