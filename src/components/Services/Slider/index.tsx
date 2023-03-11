import React from 'react';
import { Link } from 'react-router-dom';
import { useSlider } from '@/hooks/useSlider';
import secondSlide from '@/assets/img/pages/services/kraska_zhidkost_raznotsvetnyj_172941_3840x2160.jpg';
import thirdSlide from '@/assets/img/pages/services/kraska_zhidkost_bryzgi_174626_3840x2160.jpg';
import fourthSlide from '@/assets/img/pages/services/kraska_fluid_art_razvody_181136_3840x2160.jpg';
import styles from './slider.module.css';

export interface SliderProps {
  scrollToInfoBlock: (id?: number) => () => void;
}

export const Slider: React.FC<SliderProps> = ({ scrollToInfoBlock }) => {
  const canvas = React.useRef<HTMLCanvasElement>(null);

  const { slideIndex, plusSlide, minusSlide, currentSlide } = useSlider(canvas);

  return (
    <>
      <div className={styles.slider}>
        <div className={styles.item} data-slider="item">
          <div>
            <canvas id={styles.c} ref={canvas}></canvas>
          </div>
          <div className={styles.slideText}>
            Приветствуем вас на
            <br />
            <br />
            Sight of Butterfly
          </div>
        </div>

        <Link
          to="/#1"
          onClick={scrollToInfoBlock(1)}
          className={styles.item}
          data-slider="item"
        >
          <img src={secondSlide} alt="Второй слайд" />
          <div className={styles.slideText}>Услуги колориста</div>
        </Link>
        <Link to="/catalog" className={styles.item} data-slider="item">
          <img src={thirdSlide} alt="Третий слайд" />
          <div className={styles.slideText}>Лучшие краски и покрытия на авто</div>
        </Link>
        <Link to="/contacts" className={styles.item} data-slider="item">
          <img src={fourthSlide} alt="Четвертый слайд" />
          <div className={styles.slideText}>Обратная связь</div>
        </Link>
        <a className={styles.prev} onClick={minusSlide}>
          &#10094;
        </a>
        <a className={styles.next} onClick={plusSlide}>
          &#10095;
        </a>
      </div>
      <div className={styles['slider-dots']}>
        {[...Array(4)].map((_, index) => {
          return (
            <span
              key={index}
              className={
                styles['slider-dots_item'] +
                ` ${slideIndex - 1 === index ? styles.active : ''}`
              }
              data-slider="dots_item"
              onClick={currentSlide(index + 1)}
            />
          );
        })}
      </div>
    </>
  );
};
