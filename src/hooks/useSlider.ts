import React from 'react';

const acceleration = 0.05;
const repaintColor = 'rgba(0, 0, 0, .04)';
const slidesCount = 4;

export const useSlider = (canvas: React.RefObject<HTMLCanvasElement>) => {
  const [slideIndex, setSlideIndex] = React.useState(1);
  const intervalId = React.useRef<NodeJS.Timer | null>(null);
  const animId = React.useRef<number | null>(null);

  React.useEffect(() => {
    if (canvas.current) {
      let w = (canvas.current.width = window.innerWidth),
        h = (canvas.current.height = window.innerHeight),
        ctx = canvas.current.getContext('2d'),
        total = w,
        size = w / total,
        occupation = w / total,
        portion = 360 / total,
        colors: number[] = [],
        dots: number[] = [],
        dotsVel: number[] = [];

      for (var i = 0; i < total; ++i) {
        colors[i] = portion * i;
        dots[i] = h;
        dotsVel[i] = 10;
      }

      const anim = () => {
        animId.current = window.requestAnimationFrame(anim);

        ctx!.fillStyle = repaintColor;
        ctx?.fillRect(0, 0, w, h);

        for (var i = 0; i < total; ++i) {
          var currentY = dots[i] - 1;
          dots[i] += dotsVel[i] += acceleration;
          ctx!.fillStyle = 'hsl(' + colors[i] + ', 80%, 50%)';
          ctx?.fillRect(occupation * i, currentY, size, dotsVel[i] + 1);

          if (dots[i] > h && Math.random() < 0.01) {
            dots[i] = dotsVel[i] = 0;
          }
        }
      };

      anim();

      const interval = setInterval(() => {
        onNextSlide();
      }, 10000);

      intervalId.current = interval;
    }

    return () => {
      cancelAnimationFrame(animId.current!);
      clearInterval(intervalId.current!);
    };
  }, []);

  React.useEffect(() => {
    showSlides();
  }, [slideIndex]);

  const resetInterval = () => {
    clearInterval(intervalId.current!);

    const newIntervalId = setInterval(() => {
      onNextSlide();
    }, 10000);

    intervalId.current = newIntervalId;
  };

  const showSlides = () => {
    const slides = document.querySelectorAll('[data-slider="item"]');

    for (let i = 0; i < slides.length; i++) {
      (slides[i] as HTMLElement).style.display = 'none';
    }

    (slides[slideIndex - 1] as HTMLElement).style.display = 'block';
  };

  /* Функция показывает следующй слайд*/
  const plusSlide = () => {
    resetInterval();
    onNextSlide();
  };

  const onNextSlide = () => {
    setSlideIndex((prev) => {
      const nextSlide = prev + 1;

      if (nextSlide > slidesCount) {
        return 1;
      }

      return nextSlide;
    });
  };

  /* Функция показывает предыдущий слайд*/
  const minusSlide = () => {
    resetInterval();
    onPrevSlide();
  };

  const onPrevSlide = () => {
    setSlideIndex((prev) => {
      const prevSlide = prev - 1;

      if (prevSlide < 1) {
        return slidesCount;
      }

      return prevSlide;
    });
  };

  /* Устанавливает текущий слайд */
  const currentSlide = (n: number) => () => {
    resetInterval();
    setSlideIndex(n);
  };

  return {
    slideIndex,
    plusSlide,
    minusSlide,
    currentSlide,
  };
};
