import React from 'react';
import getTypeOfProductValue from '@/helpers/getTypeOfProductValue'
import { ProductInfoProps } from './types'
import styles from './productInfo.module.css';
import getAssetUrl from '@/helpers/getAssetUrl';
import pdf from '@/assets/img/pdf.jpg'
import download from '@/assets/img/download.png'

export const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  return (
    <>
      <div className={styles['product-top']}>
        <img
          className={styles['product__img']}
          src={product?.productImg && getAssetUrl(product?.productImg)}
        />
        <div className={styles['product__text']}>
          <h1 className={styles['product__name']}>
            {product?.productName}
          </h1>
          <p className={styles['product__info']}>
            {product?.productDescriptionLong}
          </p>
          <p className={styles['volume']}>
            Объем: {product?.value}
            {product?.typeOfValue && getTypeOfProductValue(product?.typeOfValue)}
          </p>
        </div>
      </div>

      <div className={styles['product-bottom']}>
        <div className={styles['product-benefits']}>
          <h1>Ключевые преимущества:</h1>
          <ul>
            {
              product?.characteristics.map((item, index) => (
                <li key={index} className={styles['benefits__item']}>
                  {item}
                </li>
              ))
            }
          </ul>
        </div>

        <div className={styles['download-info']}>
          <div className={styles['tds']}>
            <h1>TDS</h1>
            <a
              className={styles['download-area']}
              href={product?.tdsPdfLink && getAssetUrl(product?.tdsPdfLink)}
              target="blank"
            >
              <div className={styles['document']}>
                <img src={pdf} />
                <p className={styles['download__name']}>
                  Техническая документация: {product?.productName}
                </p>
              </div>
              <div className={styles['download']}>
                <img
                  src={download}
                />
                <p>Скачать</p>
              </div>
            </a>
          </div >

          <div className={styles['add']}>
            <h1>Дополнительные материалы</h1>
            <a
              className={styles['download-area']}
              href={product?.otherPdfLink && getAssetUrl(product?.otherPdfLink)}
              target="blank"
            >
              <div className={styles['document']}>
                <img src={pdf} />
                <p className={styles['download__name']}>
                  Брошюра: {product?.productName}
                </p>
              </div>
              <div className={styles['download']}>
                <img
                  src={download}
                />
                <p>Скачать</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}