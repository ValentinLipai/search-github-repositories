import React, { FC } from 'react';
import { Placeholder } from 'Components';
import styles from './Catalog.module.scss';

interface CatalogPlaceholderProps {
  cardsCount: number;
}

export const CatalogPlaceholder: FC<CatalogPlaceholderProps> = (
  { cardsCount }: CatalogPlaceholderProps,
) => {
  const cards = [];

  for (let i = 0; i < cardsCount; i += 1) {
    cards.push(
      <div key={i} className={styles.gridItem}>
        <div className={styles.gridItemPlaceholder}>
          <Placeholder />
        </div>
      </div>,
    );
  }

  return (
    <div className={styles.grid}>
      {cards}
    </div>
  );
};

export default CatalogPlaceholder;
