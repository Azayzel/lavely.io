import React from 'react';
import PropTypes from 'prop-types';

// external-global styles must be imported in your JS.

import Header from '../Header';
import Feedback from '../Feedback';
import Footer from '../Footer';
import 'normalize.css';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.childContainer}>
      {children}
      </div>
      <div className={styles.footerBottom}>
        <Feedback />
        <Footer />
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;