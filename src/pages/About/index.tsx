import React from 'react';
import { Link } from 'react-router-dom';
import progressItems from './data';
import styles from './about.module.css';
import all_products from '@/assets/img/pages/about/all_products.png';
import kraska_zhidkost_razn from '@/assets/img/pages/about/kraska_zhidkost_raznotsvetnyj_172941_2780x2780.jpg';
import logo_dynacoat from '@/assets/img/pages/about/logo-dynacoat.svg';
import logo_rozetka from '@/assets/img/pages/about/ROZETKA-Logo-L3-B-RGB.png';
import logo_wallpapers from '@/assets/img/pages/about/wallpaperscraft-logo.png';

export const About: React.FC = () => {
  return (
    <main className={styles['main']}>
      <div className={styles['main-top']}>
        <div className={styles['main-top__name']}>
          <h1>О НАС</h1>
        </div>
      </div>

      <div className={styles['info-block-zero']}>
        <div className={styles['info-block-zero-container']}>
          <div className={styles['info-block-zero__text']}>
            <p>
              Фирма по продаже и подборе автоэмалей Sight of Butterfly была основана в
              1997 году. За это время мы получили доверие и признание среди многих
              клиентов. <br />
              <br />
              У нас можно купить автомобильную краску любого оттенка гаммы, грунтовку,
              эмали, лаки которые могут применяться для покраски или ремонта автомобилей,
              мотоциклов, спецтехники, а так же в производстве и покраске различного
              оборудования, инвентаря, металлоконструкций.
              <br />
              <br />
              Подбор автокраски осуществляется по оттенку, типу автоэмали, наличию эффекта
              ксералик, краски-металлик, перламутровых красок. Наши специалисты регулярно
              посещают Tinting Course повышая свою квалификацию по подбору краски, поэтому
              мы уверены что справимся с вашим заказом.
            </p>
          </div>
        </div>
      </div>

      <div className={styles['pre-container']}>
        <div className={styles['main-container']}>
          <div className={styles['progress']}>
            {progressItems.map((item, index) => {
              return (
                <div key={index} className={styles['progress__item']}>
                  <h1>{item.h1}</h1>
                  <p>{item.p}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles['main-bottom']}>
        <div className={styles['about-us-info']}>
          <div className={styles['info-block-one']}>
            <div className={styles['info-block-one-container']}>
              <div className={styles['info-block__text']}>
                <h1>Dynacoat. Бренд, заслуживший доверие</h1>
                <p>
                  Надежные краски и покрытия – это наша страсть. Профессиональный подход к
                  ремонтной окраске лежит в основе концепции нашей продукции, заслужившего
                  доверия своих партнеров и клиентов. Наши клиенты уважают надежность,
                  простоту использования наших продуктов и стабильное качество. <br />
                  <br />
                  Мы предлагаем полный ассортимент материалов для ремонта автомобилей,
                  который соответствует высочайшим стандартам в совокупности с
                  исключительным соотношением цены и качества, а также всестороннюю
                  техническую и маркетинговую поддержку.
                </p>
                <Link to="/catalog" className={styles['btn-production']}>
                  Вся продукция
                </Link>
              </div>
              <img src={all_products} />
            </div>
          </div>

          <div className={styles['info-block-two']}>
            <div className={styles['info-block-two-container']}>
              <img src={kraska_zhidkost_razn} />
              <div className={styles['info-block__text']}>
                <h1> Подбор краски</h1>
                <p>
                  Точный подбор цвета и отсутствие переделок - важный фактор в
                  формировании удовлетворенности наших клиентов. <br />
                  <br />
                  Наши колористы имеют огромный опыт работы в подборе автокрасок и поэтому
                  мы уверены, что точно подберем любой оттенок который вам нужен.
                  <br />
                  <br />
                  Мы предлагаем компьютерный подбор, в процессе которого проводится
                  сравнение контрастности, насыщенности оттенка и степени выгорания
                  краски.
                </p>
                <Link to="/#1" className={styles['btn-selection-paints']}>
                  Подробнее
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles['partners']}>
        <h1> Наши партнеры</h1>
        <div className={styles['partners__logo']}>
          <img className={styles['logo-dynacoat']} src={logo_dynacoat} />
          <img className={styles['logo-rozetka']} src={logo_rozetka} />
          <img className={styles['logo-wallpapers']} src={logo_wallpapers} />
        </div>
      </div>
    </main>
  );
};
