'use client'

import { FC } from "react";
import s from "./category.section.layout.module.scss";
import CategorySection from "../../sections/category.section";
import Button from "../../ui/button";

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

      <div className = { s.header }>

        <div className = { s.title }>Категории <br/> 

          <span className = { s.subTitle }>товаров
          </span>

        </div>
        
        <Button label = "КАТАЛОГ" variant = "outline" />

      </div>


      <div className = { s.items }>


        { items.map((item, index) => (

          <CategorySection key = { index } title = { item.title } image = { item.image } link = { item.link } />

        )) }


      </div>

    </div>

  );

};

export default CategorySectionLayout; 