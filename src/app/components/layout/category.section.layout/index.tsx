'use client'

import { FC } from "react";
import s from "./category.section.layout.module.scss";
import CategorySection from "../../sections/category.section";
import { SectionHeader } from "../../ui/section.header/section.header";

const items = [

  {

    title: "Деревянные двери",
    image: "/img/combo.jpg",
    link: "#"

  },
  {

    title: "Комбинированные двери",
    image: "/img/combo.jpg",
    link: "#"

  },
  {

    title: "Стеклянные двери",
    image: "/img/steklo.jpg",
    link: "#"

  },
  {

    title: "Абажуры для бани",
    image: "/img/bg-home-section.png",
    link: "#"

  },
  {

    title: "Форточки для бани и сауны",
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

      <SectionHeader

        title = "Категории"
        subtitle = "товаров"
        buttonLabel = "КАТАЛОГ"

      />


      <div className = { s.items }>


        { items.map((item, index) => (

          <CategorySection key = { index } title = { item.title } image = { item.image } link = { item.link } />

        )) }


      </div>

    </div>

  );

};

export default CategorySectionLayout; 