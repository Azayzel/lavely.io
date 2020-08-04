import React from 'react';
import PropTypes from 'prop-types';
import s from './index.module.css';

const Admin = () => {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>Admin Dash</h1>
        <p>...</p>
      </div>
    </div>
  );
}

Admin.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Admin;
