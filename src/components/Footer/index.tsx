import React from 'react'
import styles from './footer.module.css'
import vodafone from "@/assets/img/components/footer/Vodafone-logo.png"
import kyivstar from "@/assets/img/components/footer/Kyivstar-logo.png"
import gmail from "@/assets/img/components/footer/gmail-logo.png"

export const Footer: React.FC = () => {
  return (
    <footer className={styles['footer']}>
      <div className={styles['footer-top']}>
        <div className={styles['pre-container']}>
          <div className={styles['footer-container']}>
            <div className={styles['footer-contacts']}>
              <h2>Контакты:</h2>
              <div className={styles['footer-contacts__item']}>
                <img
                  className={styles['contact-img']}
                  src={vodafone}
                  alt="Vodafone"
                />
                <p><span style={{ color: "red" }}>(050)</span> 987-68-81</p>
              </div>

              <div className={styles['footer-contacts__item']}>
                <img
                  className={styles['contact-img']}
                  src={kyivstar}
                  alt="Kyivstar"
                />
                <p><span style={{ color: "#06a0dd" }} >(098)</span> 944-79-31</p>
              </div>
            </div>

            <div className={styles['footer-contacts__gmail']}>
              <img
                className={styles['contact-img']}
                src={gmail}
                alt="Gmail"
              />
              <p>sightofbutterfly@gmail.com</p>
            </div>

            <div className={styles['footer-schedule']}>
              <h2> График работы:</h2>
              <p>Пн-Пт: 09.00-14.00</p>
              <p>Сб: 09.00-12.00</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['footer-bottom']}>
        <h1>© ТОВ « Sight of Butterfly» 2021</h1>
      </div>
    </footer>
  );
}