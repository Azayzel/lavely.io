import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import s from './Navigation.module.css';

export default function Navigation() {

  const user = useSelector(state => state.auth);
  console.log(user)
  return (
    <div className={s.root} role="navigation">
      <Link className={s.link} to="/about">
        About
      </Link>
      <Link className={s.link} to="/contact">
        Contact
      </Link>
      <span className={s.spacer}> | </span>
      {user && user.name ?
      <>
      <Link className={s.link} to="/login">
        {user.name}
      </Link>
      </>
        :
        <>
      <Link className={s.link} to="/login">
        Log in
      </Link>
      <span className={s.spacer}>or</span>
      <Link className={cx(s.link, s.highlight)} to="/register">
        Sign up
      </Link>
      </>
       }
    </div>
  );
}
