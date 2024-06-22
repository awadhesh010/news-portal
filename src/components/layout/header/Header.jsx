import React from 'react';
import styles from './header.module.css'

const Header = () => {
  return (
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div><h5 className={styles.brandName}>News Portal</h5></div>
        </header>
      </div>
  );
};

export default Header;
