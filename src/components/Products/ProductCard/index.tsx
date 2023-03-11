import React from 'react'
import { Link } from 'react-router-dom'
import { ProductCardProps } from './types';
import getAssetUrl from '@/helpers/getAssetUrl';
import styles from './productCard.module.css'

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link
      to={`/catalog/category/${product.categoryId}/item/${product.productId}`}
      className={styles['item']}
    >
      <div className={styles['item__img']}>
        <img src={getAssetUrl(product.productImg)} />
      </div>
      <div>
        <h1 className={styles['item__name']}>{product.productName}</h1>
        <p>{product.productDescriptionShort}</p>
      </div>
    </Link>
  );
}