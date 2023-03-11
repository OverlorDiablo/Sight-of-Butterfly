import React from 'react'
import { GoogleMap } from '@/components';
import styles from './contacts.module.css'
import gmail from '@/assets/img/pages/contacts/gmail.png'
import location from '@/assets/img/pages/contacts/location.png'
import map from '@/assets/img/pages/contacts/map.png'
import phone from '@/assets/img/pages/contacts/phone.png'
import time from '@/assets/img/pages/contacts/time.png'

export const Contacts: React.FC = () => {
  return (
    <main className={styles['main']}>
      <div className={styles['main-top']}>
        <div className={styles['main-top__name']}>
          <h1>КОНТАКТЫ</h1>
        </div>
      </div>
      <div className='pre-container'>
        <div className={styles['main-container']}>
          <div className={styles['content-block']}>
            <div className={styles['first-block']}>
              <h1>Наше местонахождение</h1>
              <GoogleMap />
              <div className={styles['photo']}>
                <img src={location} />
              </div>
            </div>

            <div className={styles['second-block']}>
              <div className={styles['contact-info']}>
                <h1> Контактная информация</h1>
                <div className={styles['second-block__item']}>
                  <img src={map} className={styles['icon']} />
                  <p> Брянская улица, 15, Запорожье, Запорожская область, 69035</p>
                </div>

                <div className={styles['second-block__item']}>
                  <img src={time} className={styles['icon']} />
                  <div>
                    <p>Пн-Пт: 09.00-14.00</p>
                    <p>Сб: 09.00-12.00</p>
                  </div>
                </div>

                <div className={styles['second-block__item']}>
                  <img src={gmail} className={styles['icon']} />
                  <a href="mailto:sightofbutterfly@gmail.com">
                    sightofbutterfly@gmail.com
                  </a>
                </div>

                <div className={styles['second-block__item']}>
                  <img src={phone} className={styles['icon']} />
                  <div className={styles['phone']}>
                    <a href="tel:+380509876881">(050) 987-68-81</a>
                    <a href="tel:+380989447931">(098) 944-79-31</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}