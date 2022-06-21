import React, { FC, useCallback, useState } from 'react';
import { RepositoriesResponse, RepositoryItem } from 'types/api';
import styles from './Home.module.scss';

import { Search, Catalog } from '../../components';

export const Home: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showResults, setShowResults] = useState(false);
  const [repositories, setRepositories] = useState<RepositoryItem[]>([]);
  const [resultsCount, setResultsCount] = useState<number | null>(null);

  const fetchRepos = (query: string, page: number = 1) => fetch(`https://api.github.com/search/repositories?q=${query}&page=${page}&per_page=20`)
    .then((res) => res.json()).catch((e) => {
      console.error(new Error(`Error fetching repositories. Message: ${e}`));
    });

  const onSearchSubmitHandler = useCallback((searchQuery: string) => {
    fetchRepos(searchQuery).then((results: RepositoriesResponse) => {
      setResultsCount(results.total_count);
      setRepositories(results.items);
      setShowResults(true);
    });
  }, []);

  return (
    <div className="container">
      <section className={styles.hero}>
        <h1 className={styles.title}>Find GitHub Repo</h1>
        <Search submitEventHandler={onSearchSubmitHandler} placeholder="The repository name" />
      </section>
      {showResults && (
      <section className={styles.results}>
        {resultsCount
          ? <div><Catalog items={repositories} /></div>
          : <div className={styles.noResults}>No repositories found</div>}
      </section>
      )}
    </div>
  );
};

export default Home;
