import React from 'react';
import styles from './Header.module.css';
import { ReactComponent as SearchIcon } from '../Assets/search.svg';

const Header = ({ setOpenSearch }) => {
  return (
    <header className={styles.header}>
      <div className={`${styles.headerContainer} container`}>
        <h1>Weather App</h1>
        <div
          className={styles.searchButton}
          onClick={() => {
            setOpenSearch((currValue) => !currValue);
          }}
        >
          <SearchIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;
