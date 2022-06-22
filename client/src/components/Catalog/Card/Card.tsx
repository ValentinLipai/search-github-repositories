import React, { FC } from 'react';
import { useSref } from '@uirouter/react';
import Star from 'Assets/images/star.svg';

import styles from './Card.module.scss';

interface CardProps {
  repoName: string;
  authorName: string;
  lang: string | null | undefined;
  stars?: number;
}

export const Card: FC<CardProps> = ({
  repoName, authorName, lang, stars,
}: CardProps) => {
  const sref = useSref('author', { authorName });
  return (
    <div className={styles.card}>
      <a className={styles.link} href={sref.href} onClick={sref.onClick}>Show author info</a>
      <div className={styles.title}>{repoName}</div>
      <div className={styles.info}>
        <div>
          <span>Author:&nbsp;</span>
          <b>{authorName}</b>
        </div>
        {lang && (
          <div className={styles.lang}>
            <span>Language:&nbsp;</span>
            <b>{lang}</b>
          </div>
        )}
        {stars && (
        <div className={styles.rating}>
          <span>Rating:&nbsp;</span>
          <img src={Star} alt="" />
          <b>{stars}</b>
        </div>
        )}
      </div>
    </div>
  );
};

Card.defaultProps = {
  stars: null,
};

export default Card;
