import { useState } from 'react';
import styles from './slider.module.scss';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = Array.from({ length: 10 }, (_, i) => `Slide ${i + 1}`);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className={styles.slider}>
      <div className={styles.slides} style={{ transform: `translateX(${-currentIndex * 33.33}%)` }}>
        {slides.map((slide, index) => {
          const isActive = index === (currentIndex + 1) % slides.length; // Центральный слайд
          return (
            <div
              key={index}
              className={`${styles.slide} ${isActive ? styles.active : ''}`}
            >
              {slide}
            </div>
          );
        })}
      </div>
      <button className={`${styles.button} ${styles.prev}`} onClick={prevSlide}>Prev</button>
      <button className={`${styles.button} ${styles.next}`} onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Slider;
