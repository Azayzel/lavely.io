import React from 'react';
import PropTypes from 'prop-types';
import s from './index.module.css';

const Contact = () => {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>Contact</h1>
        <p>...</p>
      </div>
    </div>
  );
}

Contact.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Contact