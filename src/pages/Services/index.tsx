import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CardBrandList, PaintSelection, PaintSpills, Slider } from '@/components';
import kraskaZhidkost1 from '@/assets/img/pages/services/kraska_zhidkost_raznotsvetnyj_172941_2160x3840.jpg';
import kraskaZhidkost2 from '@/assets/img/pages/services/kraska_piatna_raznotsvetnyj_138987_2160x3840.jpg';
import styles from './services.module.css';

export const Services = () => {
  const location = useLocation();

  const infoBlock1 = React.useRef<HTMLDivElement>(null);
  const infoBlock2 = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    scrollToInfoBlock()();
  }, []);

  const scrollToInfoBlock = (id?: number) => () => {
    id = id ?? +location.hash.split('#')[1];

    if (!id) {
      return;
    }

    setTimeout(() => {
      scrollTo({
        top: id === 1 ? infoBlock1.current?.offsetTop : infoBlock2.current?.offsetTop,
        behavior: 'smooth',
      });
    }, 0);
  };

  return (
    <div>
      <main className={styles['main']}>
        <Slider scrollToInfoBlock={scrollToInfoBlock} />

        <div className="pre-container">
          <div className={styles['main-container']}>
            <h1 className={styles['service-h1']}> Услуги</h1>
            <div className={styles['service-list']}>
              <Link
                to="/#1"
                onClick={scrollToInfoBlock(1)}
                className={styles['service-list__item']}
              >
                <h2>Подбор краски</h2>
              </Link>
              <Link to="/catalog" className={styles['service-list__item']}>
                <h2>Продажа краски</h2>
              </Link>
              <Link
                to="/#2"
                onClick={scrollToInfoBlock(2)}
                className={styles['service-list__item']}
              >
                <h2>Розлив краски</h2>
              </Link>
            </div>
            <div className={styles['about-service']}>
              <div ref={infoBlock1} className={styles['info-block']}>
                <div className={styles['img-block']}>
                  <img src={kraskaZhidkost1} />
                </div>
                <div className={styles['info-block__text']}>
                  <h1 className={styles['service-name']}>Подбор краски</h1>
                  <div className={styles['service-info']}>
                    <p>
                      Специалисты нашей фирмы используют одну систему подбора
                      автомобильных красок - Dynacoat. Dynacoat — торговая марка с мировым
                      именем, продукты которой доступны, качественны и долговечны. <br />
                      <br />
                      Товары производятся компанией AkzoNobel, которая отлично
                      зарекомендовала себя на рынке лакокрасочной продукции и реализует ее
                      по доступным ценам оптом.
                      <br />
                      <br />
                      Марка Dynacoat начала свою деятельность с 1996 и целью ее создания
                      было производство полной палитры качественной продукции, связанной с
                      автопокрасочными работами. Сегодня продукция Dyna закупается крупным
                      оптом компаниями и предприятиями из Восточной и Западной Европы,
                      Африки, Ближнего Востока. С 2002 года налажена доставка в любой
                      город стран СНГ, в число которых также вошла Украина. За более чем
                      20 лет спрос на товары данной марки не сокращает темпов роста, что
                      говорит о качестве и востребованности данных материалов и удобстве
                      сотрудничество. Маркой Dynacoat представлен целый комплекс
                      материалов, связанных с поверхностным ремонтом автомобилей, а
                      именно:
                    </p>
                    <ul>
                      <li>Лаки</li>
                      <li>Грунтовки</li>
                      <li>Шпатлевка</li>
                      <li>Базовые эмали</li>
                      <li>Акриловые краски, а также многое другое</li>
                    </ul>
                    <p>
                      Завод-изготовитель товаров марки Dynacoat (Нидерланды), производит
                      широкий ассортимент с полными и насыщенными цветами палитры, которые
                      связаны с автопокрасочными работами. Продукция каталога данных
                      материалов востребована и популярна, товары связаны с поверхностным
                      ремонтом (восстановлением покрытия) автомобилей методом
                      автопокрасочных работ.
                      <br />
                      <br />
                      Автомобильная краска подбираеться по детали вашего авто, например
                      крышки бензобака, которую вы можете отправить по почте или привезти
                      лично в наш магазин. Расположение и график работы нашего магазина
                      можете узнать в разделе <Link to="/contacts">Контакты</Link>.
                    </p>
                    <PaintSpills />
                  </div>
                </div>
              </div>
              <div ref={infoBlock2} className={styles['info-block']}>
                <div className={styles['info-block__text']}>
                  <h1 className={styles['service-name']}>Розлив краски</h1>
                  <div className={styles['service-info']}>
                    <p>
                      Если вы знаете код краски вашего автомобиля, то мы изготовим для вас
                      нужный оттенок. Если же нет, то вы можете заглянуть в сервисную
                      книжку - в ней должен быть вкладыш с данными авто, среди которых
                      будет код краски. Зная этот код и модель авто в большинстве случаев
                      наши колористи смогут сделать краску в цвет. <br />
                      <br />
                      Если в сервисной книжке вы не нашли этот вкладыш, то узнать цвет
                      можно из шильдика с технической информацией на кузове авто. Найти
                      его поможет ниже приведенный список наиболее популярных марок авто с
                      подсказкой, где расположена табличка с указанным кодом краски.
                    </p>
                    <CardBrandList />
                    <p>
                      Если на вашем авто появились сколы, царапины, возникает
                      необходимость подкраски - в данном случае нужно не большое
                      количество краски, мы предлагаем розлив краски от 10 грамм, которых
                      хватит на подкраску вашего автомобиля.
                    </p>
                    <PaintSelection />
                  </div>
                </div>
                <div className={styles['img-block']}>
                  <img src={kraskaZhidkost2} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
