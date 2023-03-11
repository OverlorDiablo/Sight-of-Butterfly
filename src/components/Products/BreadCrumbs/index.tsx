import React from 'react';
import { Link } from 'react-router-dom';
import { BreadCrumbsProps } from './types';
import arrow from '@/assets/img/arrow.svg';
import styles from './breadCrumbs.module.css';

export const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ category, product }) => {
  return product ? (
    <div className={styles['bread-crumbs']}>
      <Link to="/catalog" className={styles['catalog-2']}>
        Каталог товаров
      </Link>
      <img className={styles['arrow-1']} src={arrow} />
      <Link
        to={`/catalog/category/${category?.categoryId}`}
        className={styles['product-item-2']}
      >
        {category?.categoryName}
      </Link>
      <img className={styles['arrow-2']} src={arrow} />
      <p className={styles['product-item-name']}>{product.productName}</p>
    </div>
  ) : (
    <div className={styles['bread-crumbs']}>
      <Link to="/catalog" className={styles['catalog']}>
        Каталог товаров
      </Link>
      <img className={styles['arrow']} src={arrow} />
      <p className={styles['product-item']}>{category?.categoryName}</p>
    </div>
  );
};
