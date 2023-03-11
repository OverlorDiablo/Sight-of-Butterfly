import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import headerItems from './data'
import logo from '../../assets/img/components/header/logo.png'
import styles from './header.module.css'

export const Header: React.FC = () => {
  const { pathname } = useLocation();
  const [activeTabIndex, setActiveTabIndex] = React.useState<number | null>(null);
  const [menuActive, setMenuActive] = React.useState(false);
  const [currentLocation, setCurrentLocation] = React.useState(pathname);

  const onTabClick = (index: number) => () => {
    setActiveTabIndex(index);
  }

  const onBurgerMenuClick = () => {
    setMenuActive(!menuActive)
    document.querySelector('body')?.classList.toggle('lock');
  }

  const checkActiveTabIndex = () => {
    const foundIndex = headerItems.findIndex((item) =>
      item.path && pathname.slice(1).includes(item.path)
    );
    setActiveTabIndex(foundIndex !== -1 ? foundIndex : 0);
  }

  useEffect(() => {
    const pageTitle = headerItems.find((_, index) => index === activeTabIndex)?.['name'];
    document.title = `Sight of Butterfly: ${pageTitle}`;
  }, [activeTabIndex])

  useEffect(() => {
    checkActiveTabIndex()
    if (currentLocation !== pathname) {
      setMenuActive(false);
      document.querySelector('body')?.classList.remove('lock');

      setCurrentLocation(pathname);
    }
  }, [pathname])

  return (
    <header className='header'>
      <div className={styles['pre-container']}>
        <div className={styles['header-container']}>
          <Link
            to="/"
            className={styles['logo-name']}
            onClick={() => setActiveTabIndex(0)}
          >
            <img
              className={styles['logo']}
              src={logo}
              alt="logo"
            />
            <p className={styles['name']}>Sight of Butterfly</p>
          </Link>

          <div
            onClick={onBurgerMenuClick}
            className={styles['burger-menu'] + ` ${styles[menuActive ? 'active' : '']}`}
          >
            <span></span>
          </div>

          <div className={styles['menu']}>
            <ul className={styles['ul-header-menu'] + ` ${styles[menuActive ? 'active' : '']}`}>
              {
                headerItems.map((item, index) => {
                  return (
                    <li key={index} onClick={onTabClick(index)}>
                      <Link
                        to={`/${item.path}`}
                        className={styles[activeTabIndex === index ? 'nav-active' : '']}>
                        {item.name}
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>

          {/* <div className={styles['header-right']}>
            <div className={styles['search']}>
              <input type="text" className={styles['search-text']} placeholder="Поиск товара" />
              <a className={styles['search-button']} href="#">
                <img src="img/search.svg" alt="" />
              </a>
            </div>

            <div className={styles['cart']}>
              <a className={styles['cart-button']} href="#">
                <img src="img/cart.svg" />
              </a>
            </div>
          </div> */}

        </div>
      </div>
    </header >
  );
}