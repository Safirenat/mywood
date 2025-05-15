'use client'

import { FC } from "react";
import s from "./carousel.home.section.module.scss";
import { SectionHeader } from "../../ui/section.header";
import { Carousel } from "../../ui/carousel";
import { Text } from "../../ui/text";

const slides = [
    {
      id: 1,
      image: '/img/combo.jpg',
      title: 'Двери',
      subtitle: 'для бани'
    },
    {
      id: 2,
      image: '/img/combo.jpg',
      title: 'Окна',
      subtitle: 'для бани'
    },
    {
      id: 3,
      image: '/img/combo.jpg',
      title: 'Двери',
      subtitle: 'для вашего комфорта'
    },
    {
      id: 4,
      image: '/img/bg-home-section.png',
      title: 'Двери',
      subtitle: 'для вашего комфорта'
    },
    {
      id: 5,
      image: '/img/bg-home-section.png',
      title: 'Двери',
      subtitle: 'для вашего комфорта'
    },
    {
      id: 6,
      image: '/img/bg-home-section.png',
      title: 'Двери',
      subtitle: 'для вашего комфорта'
    }
  ]

const CarouselHomeSection = () => {

  return (

    <div className = { s.root }>

      <SectionHeader

        title = "Реализовали"
        subtitle = "Более 500    проектов"
        buttonLabel = "Наши работы"

      />

      <Text

        title = "Мы разделяем вашу большую любовь к бане и даче."
        subtitle = "И используем высококлассную древесину, что позволяет нам предлагать продукцию самого высокого качества, сохраняя лояльную ценовую политику."

      />

      <Carousel slides = { slides } />

    </div>

  );

};

export default CarouselHomeSection; 