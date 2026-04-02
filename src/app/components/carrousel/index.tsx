import { useEffect, useRef, useState, MouseEvent, TouchEvent } from "react";
import styles from "./carrousel.module.css";


interface Slide {
  imagem: string;
  titulo: string;
  descricao: string;
}


interface CarrouselProps {
  slides: Slide[];
}

export function Carrousel({ slides }: CarrouselProps) {
  const [index, setIndex] = useState<number>(0);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startX = useRef<number>(0);
  const deltaX = useRef<number>(0);

  const total = slides.length;
  const SWIPE_THRESHOLD = 60;

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, [total]); 

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(next, 10000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };


  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    stopAutoPlay();
    startX.current = e.touches[0].clientX;
  };

  const onTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    deltaX.current = e.touches[0].clientX - startX.current;
  };

  const onTouchEnd = () => {
    if (deltaX.current > SWIPE_THRESHOLD) {
      prev();
    } else if (deltaX.current < -SWIPE_THRESHOLD) {
      next();
    }

    deltaX.current = 0;
    startAutoPlay();
  };

  return (
    <div
      className={styles.container}
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <button 
        className={`${styles.arrow} ${styles.left}`} 
        onClick={prev}
        aria-label="Slide anterior"
      >
        <span>‹</span>
      </button>

      <div className={styles.viewport}>
        <div
          className={styles.track}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div className={styles.slide} key={i}>
              <img src={slide.imagem} alt={slide.titulo} />
              <div className={styles.overlay}>
                <h3 className={styles.title}>{slide.titulo}</h3>
                <p className={styles.description}>{slide.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button 
        className={`${styles.arrow} ${styles.right}`} 
        onClick={next}
        aria-label="Próximo slide"
      >
        <span>›</span>
      </button>

      <div className={styles.dots}>
        {slides.map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${i === index ? styles.active : ""}`}
            onClick={() => setIndex(i)}
            role="button"
            aria-label={`Ir para slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}