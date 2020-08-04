import React from 'react';
import PropTypes from 'prop-types';
import s from './index.module.css';

const NotFound = () => {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>Not Found</h1>
        <p>Sorry, the page you were trying to view does not exist.</p>
      </div>
    </div>
  );
}

NotFound.propTypes = {
  title: PropTypes.string.isRequired,
};

export default NotFound;
