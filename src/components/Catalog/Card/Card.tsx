import React, { FC } from 'react';
import Star from '../../../assets/images/star.svg';

import styles from './Card.module.scss';

interface CardProps {
  repoName: string;
  authorName: string;
  lang: string | null | undefined;
  langColor: string | null | undefined;
  stars?: number;
}

export const Card: FC<CardProps> = ({
  repoName, authorName, lang, langColor, stars,
}: CardProps) => (
  <div className={styles.card}>
    <div className="title">{repoName}</div>
    <div className="author">
      Author:
      {' '}
      {authorName}
    </div>
    {lang && (
    <div className="lang">
      <span className="color" style={{ backgroundColor: langColor }} />
      {lang}
    </div>
    )}
    {stars && (
    <div className="rating">
      <img src={Star} alt="" />
      {stars}
    </div>
    )}
  </div>
);

Card.defaultProps = {
  stars: null,
};

export default Card;
