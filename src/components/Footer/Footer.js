import React from 'react';
import { Link } from 'react-router-dom';
import s from './Footer.module.css';

export default function Footer() {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <span className={s.text}>© lavely.io</span>
        <span className={s.spacer}>·</span>
        <Link className={s.link} to="/">
          Home
        </Link>
        <span className={s.spacer}>·</span>
        <Link className={s.link} to="/admin">
          Admin
        </Link>
        <span className={s.spacer}>·</span>
        <Link className={s.link} to="/privacy">
          Privacy
        </Link>
        <span className={s.spacer}>·</span>
        <Link className={s.link} to="/not-found">
          Not Found
        </Link>
      </div>
    </div>
  );
}
