import React from 'react';
import { Link } from 'react-router-dom';
import getAssetUrl from '@/helpers/getAssetUrl';
import { CategoryItemProps } from './types';
import styles from './categoryItem.module.css';

export const CategoryItem: React.FC<CategoryItemProps> = ({ isMobile, category }) => {
  return !isMobile ? (
    <Link to={`/catalog/category/${category.categoryId}`} className={styles['item']}>
      <div className={styles['item__body']}>
        <div className={styles['item__front']}>
          <div className={styles['item__img']}>
            <img src={getAssetUrl(category.categoryImg)} />
          </div>
          <h2 className={styles['item__name']}>{category.categoryName}</h2>
        </div>
        <div className={styles['item__back']}>
          <h2 className={styles['item__name']}>{category.categoryName}</h2>
          <p>{category.categoryDescription}</p>
        </div>
      </div>
    </Link>
  ) : (
    <Link to={`/catalog/category/${category.categoryId}`} className={styles['item-mob']}>
      <div className={styles['item__img-mob']}>
        <img src={getAssetUrl(category.categoryImg)} />
      </div>
      <div>
        <h1 className={styles['item__name-mob']}>{category.categoryName}</h1>
      </div>
    </Link>
  );
};
