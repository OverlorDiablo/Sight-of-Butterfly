import React from 'react';
import { useAppSelector } from '@/redux/store';
import { useRouter } from '@/context/RouterContext';
import { CategoryItem } from '@/components';
import styles from './catalog.module.css';

export const Catalog: React.FC = () => {
  const { prevLocation } = useRouter();
  const { categories } = useAppSelector(({ categories }) => categories);
  const [isMobile, setIsMobile] = React.useState(false);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const preContainer = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    scrollToProducts();

    window.addEventListener('resize', onWindowResize);

    return () => {
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  React.useEffect(() => {
    setIsMobile(windowWidth <= 991);
  }, [windowWidth]);

  const onWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const scrollToProducts = () => {
    const headerHeigth = (document.querySelector('.header') as HTMLElement)?.offsetHeight;

    const productsPosition =
      (preContainer?.current as HTMLDivElement)?.offsetTop - headerHeigth;

    setTimeout(() => {
      if (prevLocation?.pathname.includes('catalog') && categories && !isMobile) {
        scrollTo({
          top: productsPosition,
          behavior: 'smooth',
        });
      }
    }, 0);
  };

  return (
    <main className={styles['main']}>
      <div className={styles['main-top']}>
        <div className={styles['main-top__name']}>
          <h1>НАША ПРОДУКЦИЯ</h1>
          <span></span>
          <p>
            Компактная и полная система из надежных и простых в использовании продуктов –
            идеальная комбинация для получения впечатляющего профессионального результата.
          </p>
        </div>
      </div>

      <div ref={preContainer} className="pre-container">
        <div className={styles['main-container']}>
          <div className={styles[!isMobile ? 'products' : 'products-mob']}>
            {categories.map((item) => (
              <CategoryItem key={item.categoryId} category={item} isMobile={isMobile} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
