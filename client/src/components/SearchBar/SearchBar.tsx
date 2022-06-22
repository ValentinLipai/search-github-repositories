import React from 'react';
import { Search } from 'Components';

import styles from './SearchBar.module.scss';

export const SearchBar = () => (
  <section className={styles.hero}>
    <h1 className={styles.title}>Find GitHub Repo</h1>
    <Search />
  </section>
);

export default SearchBar;
