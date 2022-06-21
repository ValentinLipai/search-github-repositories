import React, { FC } from 'react';
import { RepositoryItem } from 'types/api';
import { Card } from './Card/Card';
import styles from './Catalog.module.scss';

interface CatalogProps {
  items: RepositoryItem[];
}

export const Catalog: FC<CatalogProps> = ({ items }: CatalogProps) => (
  <div className={styles.grid}>
    {items.map((el: RepositoryItem) => (
      <div key={el.node_id} className={styles.gridItem}>
        <Card
          repoName={el.name}
          authorName={el.owner.login}
          lang={el.language}
          langColor={el.language}
          stars={el.stargazers_count}
        />
      </div>
    ))}
  </div>
);

export default Catalog;
