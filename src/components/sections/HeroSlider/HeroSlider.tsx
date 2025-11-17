"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./HeroSlider.module.scss";

type ButtonPosition = "center" | "left" | "right";
type ButtonColor = "orange" | "green" | "brown";

type Slide = {
  id: number;
  image: string;
  buttonText?: string;
  buttonPosition: ButtonPosition;
  buttonColor: ButtonColor;
};

const slides: Slide[] = [
  {
    id: 1,
    image: "/slide_dveri.jpg",
    buttonText: "перейти к товарам",
    buttonPosition: "center", 
    buttonColor: "orange",
  },
  {
    id: 2,
    image: "/slide_mebel.jpg",
    buttonText: "перейти к товарам",
    buttonPosition: "left",     
    buttonColor: "brown",
  },
  {
    id: 3,
    image: "/slide_aksessuary.jpg",
    buttonText: "перейти к товарам",
    buttonPosition: "right",  
    buttonColor: "green",    
  },
];

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  return (
    <section className={styles.Hero}>
      <div className={styles.SlideWrapper}>
        {/* Фоновая картинка слайда */}
        <Image
          src={activeSlide.image}
          alt="Слайд"
          fill
          priority
          className={styles.Background}
        />

        {/* Кнопка поверх картинки */}
        {activeSlide.buttonText && (
          <div
            className={`${styles.Content} ${
              styles[`Content--${activeSlide.buttonPosition}`]
            }`}
          >
            <button
              className={`${styles.Button} ${
                styles[`Button--${activeSlide.buttonColor}`]
              }`}
            >
              {activeSlide.buttonText}
            </button>
          </div>
        )}
      </div>

      {/* Пагинация */}
      <div className={styles.Dots}>
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            className={`${styles.Dot} ${
              index === activeIndex ? styles.DotActive : ""
            }`}
            aria-label={`Слайд ${index + 1}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}
