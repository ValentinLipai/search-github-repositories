import React, { FC, useEffect, useState } from 'react';
import { useCurrentStateAndParams, useRouter } from '@uirouter/react';
import { AppInput } from '../AppInput/AppInput';

import styles from './Search.module.scss';

export const Search: FC = () => {
  const router = useRouter();
  const { params } = useCurrentStateAndParams();
  const [searchCondition, setSearchCondition] = useState('');

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchCondition) {
      router.stateService.go('search', {
        query: searchCondition,
        page: 1,
      });
    }
  };

  useEffect(() => {
    setSearchCondition(params.query);
  }, [params.query]);

  return (
    <form onSubmit={onSubmitHandler} className={styles.form}>
      <AppInput
        type="text"
        defaultValue={params.query || ''}
        onChangeHandler={(value: string) => { setSearchCondition(value); }}
        placeholder="The repository name"
        className={styles.field}
      />
      <button className={`btn ${styles.submitBtn}`} type="submit">Search</button>
    </form>
  );
};

Search.defaultProps = {
  placeholder: '',
};

export default Search;
