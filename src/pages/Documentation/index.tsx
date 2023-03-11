import React from 'react';
import { useAppSelector } from '@/redux/store';
import getAssetUrl from '@/helpers/getAssetUrl';
import styles from './documentation.module.css';

export const Documentation: React.FC = () => {
  const { categories } = useAppSelector(({ categories }) => categories);
  const { products } = useAppSelector(({ products }) => products);

  return (
    <main className={styles['main']}>
      <div className={styles['main-top']}>
        <div className={styles['main-top__name']}>
          <h1>ТЕХНИЧЕСКАЯ ДОКУМЕНТАЦИЯ</h1>
        </div>
      </div>
      <div className='pre-container'>
        <div className={styles['main-container']}>
          <div className={styles['tech-doc']}>
            <div className={styles['tech-doc__table']}>
              {categories.map((category) => {
                return (
                  <div key={category.categoryId}>
                    <h1>{category.categoryName}</h1>
                    <table>
                      <tbody>
                        <tr>
                          <th style={{ width: 260 }}>Наименование продукта</th>
                          <th style={{ width: 315 }}>Категория продукта</th>
                          <th style={{ width: 80 }}>PDF</th>
                        </tr>
                      </tbody>
                      <tbody>
                        {products
                          .filter((product) => product.categoryId === category.categoryId)
                          .map((product) => (
                            <tr key={product.productId}>
                              <td height="18">{product.productName}</td>
                              <td height="18">{category.categoryName}</td>
                              <td width="80">
                                <a href={getAssetUrl(product.tdsPdfLink)} target="_blank">
                                  Скачать
                                </a>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
