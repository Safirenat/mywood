import { FC, useState, useEffect } from 'react'
import styles from './carousel.module.scss'
import apx from '../../../styles/adaptivepx'


interface CarouselProps {
  slides: {
    id: number
    image: string
    title: string
    subtitle: string
  }[]
}

export const Carousel: FC<CarouselProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(slides.length)
  const [carouselSlides, setCarouselSlides] = useState<typeof slides>([])
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    // Создаем массив с дублированными слайдами в начале и конце
    setCarouselSlides([...slides, ...slides, ...slides])
  }, [slides])

  const handleTransitionEnd = () => {
    setIsTransitioning(false)
    // Если дошли до конца второго набора слайдов
    if (currentSlide >= slides.length * 2) {
      setCurrentSlide(slides.length)
    }
    // Если дошли до начала второго набора слайдов
    if (currentSlide <= slides.length - 1) {
      setCurrentSlide(slides.length * 2 - 1)
    }
  }

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentSlide(prev => prev + 1)
    }
  }

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentSlide(prev => prev - 1)
    }
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(slides.length + index)
  }

  return (
    <div className={styles.carousel}>
      <button 
        className={`${styles.arrow} ${styles.arrowLeft}`} 
        onClick={prevSlide}
      >
        ←
      </button>

      <div className={styles.pagination}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${
                (currentSlide - slides.length) % slides.length === index ? styles.active : ''
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        <div className = { styles.text }>

            Сделано с душой <br/>
            для вашего комфорта

        </div>

      <button 
        className={`${styles.arrow} ${styles.arrowRight}`} 
        onClick={nextSlide}
      >
        →
      </button>

      <div className={styles.slideContainer}>
        <div 
          className={styles.slidesWrapper}
          style={{ 
            transform: `translateX(-${(currentSlide * 100) / 3}%)`,
            transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {carouselSlides.map((slide, index) => {
            const isMiddleSlide = index === currentSlide + 1;
            return (
              <div
                key={`${slide.id}-${index}`}
                className={`${styles.slide} ${isMiddleSlide ? styles.middleSlide : ''}`}
                style={{
                  height: isMiddleSlide ? `${apx.d(500)}` : `${apx.d(392)}`,

                }}
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
            )
          })}
        </div>
      </div>
    </div>
  )
}