import React from 'react';
import { useAppSelector } from '@/redux/store';
import { useParams } from 'react-router';
import { BreadCrumbs, ProductCard } from '@/components';
import styles from './products.module.css';

export const Products: React.FC = () => {
  const { products } = useAppSelector(({ products }) => products);
  const { categories } = useAppSelector(({ categories }) => categories);
  const { category_id } = useParams();

  const selectedCategory = categories.find(({ categoryId }) => categoryId === +category_id!);

  return (
    <main className={styles['main']}>
      <div className={styles['main-top']}>
        <div className={styles['main-top__name']}>
          <h1>{selectedCategory?.categoryName}</h1>
          <span></span>
          <p>
            {selectedCategory?.categoryDescription}
          </p>
        </div>
      </div>
      <div className='pre-container'>
        <div className={styles['main-container']}>
          <BreadCrumbs category={selectedCategory} />
          <div className={styles['products']}>
            {
              products
                .filter((product) => product.categoryId === +category_id!)
                .map((product) => (
                  <ProductCard
                    key={product.productId}
                    product={product}
                  />
                ))
            }
          </div>
        </div>
      </div>
    </main>
  );
}