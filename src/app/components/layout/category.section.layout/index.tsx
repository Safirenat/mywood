'use client'

import { FC } from "react";
import s from "./category.section.layout.module.scss";
import CategorySection from "../../sections/category.section";
import { SectionHeader } from "../../ui/section.header";

const items = [

  {

    title: "Деревянные двери",
    image: "/img/combo.jpg",
    link: "/catalog/Деревянные%20двери"

  },
  {

    title: "Комбинированные двери",
    image: "/img/combo.jpg",
    link: "/catalog/Комбинированные%20двери"

  },
  {

    title: "Стеклянные двери",
    image: "/img/steklo.jpg",
    link: "/catalog/Стеклянные%20двери"

  },
  {

    title: "Абажуры для бани",
    image: "/img/bg-home-section.png",
    link: "/catalog/Абажуры%20для%20бани"

  },
  {

    title: "Форточки для бани и сауны",
    image: "/img/bg-home-section.png",
    link: "/catalog/Форточки%20для%20бани%20и%20сауны"

  },
  {

    title: "Спортивный инвентарь",
    image: "/img/bg-home-section.png",
    link: "/catalog/Спортивный%20инвентарь"

  },
  {

    title: "Аксессуары для бани",
    image: "/img/bg-home-section.png",
    link: "/catalog/Аксессуары%20для%20бани"
    
  }

];

const CategorySectionLayout = () => {

  return (

    <div className = { s.root } id="categories">

      <SectionHeader

        title = "Категории"
        subtitle = "товаров"
        buttonLabel = "КАТАЛОГ"

      />


      <div className = { s.items } >


        { items.map((item, index) => (

          <CategorySection key = { index } title = { item.title } image = { item.image } link = { item.link } />

        )) }


      </div>

    </div>

  );

};

export default CategorySectionLayout; 