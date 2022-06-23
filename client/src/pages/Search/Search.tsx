import React, {
  FC, useCallback, useEffect, useState,
} from 'react';
import { SearchRepositoriesResponse, RepositoryItem } from 'types/api';
import { useCurrentStateAndParams, useRouter } from '@uirouter/react';
import { searchRepositoriesByName } from 'Helpers/api';
import { showNotification } from 'Helpers/helpers';

import {
  SearchBar, Catalog, CatalogPlaceholder, Pagination,
} from 'Components';
import styles from './Search.module.scss';

const RESULTS_PER_PAGE = 20;
const MAX_RESULTS = 1000;

export const Search: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [repositories, setRepositories] = useState<RepositoryItem[]>([]);
  const [pagesCount, setPagesCount] = useState<number | null>(null);
  const { params } = useCurrentStateAndParams();
  const router = useRouter();

  const getRepositories = async (query: string, page: number) => {
    setCurrentPage(page);
    const response: SearchRepositoriesResponse = await searchRepositoriesByName(
      query,
      page,
      RESULTS_PER_PAGE,
    );

    if (response) {
      setIsLoading(false);
      
      if (response.code !== 200) {
        showNotification('danger', 'Error!', response.data.message);
      } else {
        setRepositories(response.data.items);
        const maxPage = response.data.total_count > MAX_RESULTS
          ? MAX_RESULTS
          : response.data.total_count;
        setPagesCount(Math.ceil(maxPage / RESULTS_PER_PAGE));
      }

    } else {
      showNotification('danger', 'Error!', 'Error fetching data');
    }
  };

  useEffect(() => {
    if (!params.query) {
      router.stateService.go('home');
    }
    setIsLoading(true);
    getRepositories(params.query, Number(params.page) || 1);
  }, [params.query, params.page]);

  const changePage = useCallback((page: number) => {
    setIsLoading(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setTimeout(() => {
      router.stateService.go('search', {
        query: params.query,
        page,
      });
    }, 150);
  }, [params.query]);

  return (
    <div className="container">
      <SearchBar />
      <section>
        <div>
          {isLoading 
            ? <CatalogPlaceholder cardsCount={RESULTS_PER_PAGE} />
            : !!pagesCount && <Catalog items={repositories} />
          }
          {(!isLoading && !pagesCount) && <div className={styles.noResults}>No repositories found</div>}
        </div>
        <div className={styles.pagination}>
          {pagesCount > 1 && (
          <Pagination
            totalPages={pagesCount}
            currentPage={currentPage}
            changePageCallback={changePage}
          />
          )}
        </div>
      </section>
    </div>
  );
};

export default Search;
