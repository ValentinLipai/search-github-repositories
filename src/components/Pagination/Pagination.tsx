import React, { FC } from 'react';

interface PaginationProps {
  pagesCount: number;
  currentPage: number;
}

export const Pagination: FC<PaginationProps> = ({ pagesCount, currentPage }: PaginationProps) => (
  <ul><li>1</li></ul>
);

export default Pagination;
