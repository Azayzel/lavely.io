import React from 'react';
import { Link } from 'react-router-dom'
import * as s from './Header.module.css';
import Navigation from '../Navigation';
import logoUrl from './logo.PNG';

const Header = () => {
  console.log(s)
  return (
    <div className={s.root}>
      <div className={s.container}>
        <Navigation />
        <Link className={s.brand} to="/">
          <img src={logoUrl} alt="Lavely.io Logo" style={{width: '20%'}} />
        </Link>
        <span className={s.headerGrid}>
          <p className={s.bannerDesc}>Modern Software Development Made Easy</p>
          <input type="text" placeholder="Search..." className={s.input}/>
        </span>
      </div>
    </div>
  );
};

export default Header;
