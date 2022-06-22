import React, { FC } from 'react';
import styles from './Pagination.module.scss';

/**
 * Pagination button props
 */
export interface PaginationButtonData {
  title: string | number;
  isActive: boolean;
}
export interface PaginationButtonProps {
  data: PaginationButtonData;
  onClickHandler: Function;
}

export const PaginationButton: FC<PaginationButtonProps> = ({
  data, onClickHandler,
}: PaginationButtonProps) => (
  <button
    onClick={() => { onClickHandler(); }}
    className={[styles.button, data.isActive ? styles.active : ''].join(' ')}
    type="button"
  >
    {data.title}
  </button>
);

export default PaginationButton;
