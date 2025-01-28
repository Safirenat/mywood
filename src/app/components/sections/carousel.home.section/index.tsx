'use client'

import { FC } from "react";
import s from "./carousel.home.section.module.scss";
import { SectionHeader } from "../../ui/section.header/section.header";
import { Carousel } from "../../ui/carousel";

const slides = [
    {
      id: 1,
      image: '/img/bg-home-section.png',
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
      image: '/img/steklo.jpg',
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


      <div className = { s.text }>

        Каждая баня или дача — единственная и неповторимая.
        Это место для отдыха, укрепления духа, здоровья и красоты, 
        встреч с друзьями.В бане ценится крепкий жар, который сменяет 
        ледяная вода, ароматы эфирных масел, трав и древесины. Каждое наше 
        изделие создано, чтобы получать максимальную пользу и удовольствие.

      </div>

      <Carousel slides={slides} />


    </div>

  );

};

export default CarouselHomeSection; 