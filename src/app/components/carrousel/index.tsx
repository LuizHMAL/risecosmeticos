import { useEffect, useRef, useState, TouchEvent } from "react";
import styles from "./carrousel.module.css";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

export interface Slide {
  imagem: string;
  titulo: string;
  descricao: string;
  botaoTexto?: string;
  botaoLink?: string;
}

interface CarrouselProps {
  slides?: Slide[];
}

const defaultSlides: Slide[] = [
  {
    imagem: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1600&auto=format&fit=crop&q=80",
    titulo: "Linha Vegana",
    descricao: "Beleza consciente e sustentável",
    botaoTexto: "Conhecer Produtos",
    botaoLink: "#destaques",
  },
  {
    imagem: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1600&auto=format&fit=crop&q=80",
    titulo: "Nova Coleção Floral",
    descricao: "Fragrâncias marcantes e delicadas",
    botaoTexto: "Explorar Perfumes",
    botaoLink: "#destaques",
  },
  {
    imagem: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=1600&auto=format&fit=crop&q=80",
    titulo: "Maquiagens Profissionais",
    descricao: "Tons perfeitos para o seu estilo único",
    botaoTexto: "Ver Ofertas",
    botaoLink: "#destaques",
  },
];

export function Carrousel({ slides = defaultSlides }: CarrouselProps) {
  const activeSlides = slides && slides.length > 0 ? slides : defaultSlides;
  const [index, setIndex] = useState<number>(0);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startX = useRef<number>(0);
  const deltaX = useRef<number>(0);

  const total = activeSlides.length;
  const SWIPE_THRESHOLD = 50;

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(next, 6000);
  };

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, [total]);

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
      {/* Seta esquerda */}
      <button 
        className={`${styles.arrow} ${styles.left}`} 
        onClick={prev}
        aria-label="Slide anterior"
      >
        <CaretLeft size={20} weight="bold" />
      </button>

      {/* Viewport de slides */}
      <div className={styles.viewport}>
        <div
          className={styles.track}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {activeSlides.map((slide, i) => (
            <div className={styles.slide} key={i}>
              <img 
                src={slide.imagem} 
                alt={slide.titulo} 
                className={styles.slideImage} 
              />
              <div className={styles.overlay}>
                <div className={styles.contentBox}>
                  <h2 className={styles.title}>{slide.titulo}</h2>
                  <p className={styles.description}>{slide.descricao}</p>
                  <a href={slide.botaoLink || "#"} className={styles.ctaButton}>
                    {slide.botaoTexto || "Conhecer Produtos"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Seta direita */}
      <button 
        className={`${styles.arrow} ${styles.right}`} 
        onClick={next}
        aria-label="Próximo slide"
      >
        <CaretRight size={20} weight="bold" />
      </button>

      {/* Indicadores de bolinha */}
      <div className={styles.dots}>
        {activeSlides.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === index ? styles.active : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Ir para slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}