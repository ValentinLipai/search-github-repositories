import React, { FC, useState, useCallback } from 'react';
// import { useRouter } from '@uirouter/react';
import { AppInput } from '../AppInput/AppInput';

import styles from './Search.module.scss';

interface SearchProps {
  placeholder?: string;
  submitEventHandler: Function;
}

export const Search: FC<SearchProps> = ({ placeholder, submitEventHandler }: SearchProps) => {
  const [searchCondition, setSearchCondition] = useState('');

  // const router = useRouter();

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (submitEventHandler) submitEventHandler(searchCondition);
    // router.stateService.go('profile', {
    //   query: searchCondition,
    // });
  };

  return (
    <form onSubmit={onSubmitHandler} className={styles.form}>
      <AppInput
        type="text"
        onChangeHandler={(value: string) => { setSearchCondition(value); }}
        placeholder={placeholder}
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
