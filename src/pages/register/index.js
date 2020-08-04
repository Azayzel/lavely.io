import React from 'react';
import PropTypes from 'prop-types';
import s from './index.module.css';

const Register = () => {

  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1 className={s.lead}>Sign Up For Updates</h1>
        <form method="post">
          <div className={s.formGroup}>
            <label className={s.label} htmlFor="usernameOrEmail">
              Username or email address:
              <input
                className={s.input}
                id="email"
                type="text"
                name="email"
                autoFocus // eslint-disable-line jsx-a11y/no-autofocus
              />
            </label>
          </div>
          <div className={s.formGroup}>
            <label className={s.label} htmlFor="password">
              Password:
              <input
                className={s.input}
                id="password"
                type="password"
                name="password"
              />
            </label>
          </div>
          <div className={s.formGroup}>
            <button className={s.button} type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

Register.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Register;
