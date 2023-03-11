import React from 'react';
import { useAppSelector } from '@/redux/store';
import { useParams } from 'react-router';
import { ProductInfo, BreadCrumbs } from '@/components';
import styles from './product.module.css'

export const Product: React.FC = () => {
  const { products } = useAppSelector(({ products }) => products);
  const { categories } = useAppSelector(({ categories }) => categories);
  const { category_id, product_id } = useParams();
  const selectedCategory = categories.find(({ categoryId }) => categoryId === +category_id!);
  const selectedProduct = products.find(({ productId }) => productId === +product_id!);

  return (
    <main className={styles['main']}>
      <div className='pre-container'>
        <div className={styles['main-container']}>
          <BreadCrumbs
            category={selectedCategory}
            product={selectedProduct}
          />
          <div className={styles['product']}>
            <ProductInfo product={selectedProduct} />
          </div>
        </div>
      </div>
    </main>
  );
}