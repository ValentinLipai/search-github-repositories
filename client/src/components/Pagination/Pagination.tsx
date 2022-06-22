import React, { FC, useEffect, useState } from 'react';
import { PaginationButton, PaginationButtonData } from './PagunationButton';
import styles from './Pagination.module.scss';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  changePageCallback: Function;
}

interface PaginationItem {
  key: string;
  page?: number;
  item: PaginationButtonData | null;
}

export const Pagination: FC<PaginationProps> = (
  { totalPages, currentPage, changePageCallback }: PaginationProps,
) => {
  const [paginationButtons, setPaginationButtons] = useState<PaginationItem[]>([]);

  const getPagination = () => {
    const items: PaginationItem[] = [];
    let pagesBeforeCurrent = 2;
    let pagesAfterCurrent = 2;

    if (currentPage > 1) {
      items.push({
        key: 'button-prev',
        page: currentPage - 1,
        item: {
          title: 'Prev',
          isActive: false,
        },
      });
    }

    if (currentPage > 2) {
      items.push({
        key: `page-${1}`,
        page: 1,
        item: {
          title: 1,
          isActive: false,
        },
      });
    }

    if (currentPage > 3) {
      items.push({
        key: 'dots-prev',
        item: null,
      });
    }

    if (currentPage === 1) {
      pagesBeforeCurrent = 0;
    } else if ((currentPage === totalPages && totalPages === 2) || currentPage <= 3) {
      pagesBeforeCurrent = 1;
    }

    if (currentPage === totalPages) {
      pagesAfterCurrent = 0;
    } else if (currentPage === 2 || currentPage === totalPages - 2) {
      pagesAfterCurrent = 1;
    }

    if (currentPage + pagesAfterCurrent > totalPages) {
      pagesAfterCurrent = totalPages - currentPage;
    }

    for (let page = currentPage - pagesBeforeCurrent; page <= currentPage + pagesAfterCurrent;
      page += 1) {
      items.push({
        key: `page-${page}`,
        page,
        item: {
          title: page,
          isActive: currentPage === page,
        },
      });
    }

    if (currentPage < totalPages - 1) {
      if (currentPage < totalPages - 2) {
        items.push({
          key: 'dots-after',
          item: null,
        });
      }

      items.push({
        key: `page-${totalPages}`,
        page: totalPages,
        item: {
          title: totalPages,
          isActive: false,
        },
      });
    }

    if (currentPage < totalPages) {
      items.push({
        key: 'button-next',
        page: currentPage + 1,
        item: {
          title: 'Next',
          isActive: false,
        },
      });
    }

    return items;
  };

  useEffect(() => {
    setPaginationButtons(getPagination());
  }, [currentPage, totalPages]);

  return (
    <ul className={styles.pagination}>
      {paginationButtons.map((el) => (
        <li key={el.key} className={styles.item}>
          {el.item
            ? (
              <PaginationButton
                data={el.item}
                onClickHandler={() => {
                  changePageCallback(el.page);
                }}
              />
            )
            : <span className={styles.dots}>...</span>}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
