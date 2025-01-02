'use client'

import { FC } from "react";
import s from "./category.section.layout.module.scss";
import CategorySection from "../../sections/category.section";

const items = [

  {

    title: "Двери для бани",
    image: "/img/bg-home-section.png",
    link: "#"

  },
  {

    title: "Отделка бань и саун",
    image: "/img/bg-home-section.png",
    link: "#"

  },
  {

    title: "Окна для бани",
    image: "/img/bg-home-section.png",
    link: "#"

  },
  {

    title: "Мебель для бани и дачи",
    image: "/img/bg-home-section.png",
    link: "#"

  },
  {

    title: "Спортивный инвентарь",
    image: "/img/bg-home-section.png",
    link: "#"

  },
  {

    title: "Аксессуары для бани",
    image: "/img/bg-home-section.png",
    link: "#"
    
  }

];

const CategorySectionLayout = () => {

  return (

    <div className = { s.root }>

      <div>Категории товаров</div>

      <div className = { s.items }>


        { items.map((item, index) => (

          <CategorySection key = { index } title = { item.title } image = { item.image } link = { item.link } />

        )) }


      </div>

    </div>

  );

};

export default CategorySectionLayout; 