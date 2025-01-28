import { FC, useState } from 'react'
import styles from './carousel.module.scss'

interface CarouselProps {
  slides: {
    id: number
    image: string
    title: string
    subtitle: string
  }[]
}

export const Carousel: FC<CarouselProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === slides.length - 1 ? 0 : prev + 1
    )
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? slides.length - 1 : prev - 1
    )
  }

  return (
    <div className={styles.carousel}>
      <button 
        className={`${styles.arrow} ${styles.arrowLeft}`} 
        onClick={prevSlide}
      >
        ←
      </button>

      <div className={styles.slideContainer}>
        <div 
          className={styles.slidesWrapper}
          style={{ 
            transform: `translateX(-${currentSlide * (100/3)}%)`,
            transition: 'transform 0.5s ease-in-out'
          }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className={styles.slide}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={slide.image}
                  alt={slide.title}
                  className={styles.image}
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{slide.title}</h3>
                <p className={styles.subtitle}>{slide.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button 
        className={`${styles.arrow} ${styles.arrowRight}`} 
        onClick={nextSlide}
      >
        →
      </button>
    </div>
  )
}