'use client'

import { FC, useEffect } from "react";
import s from "./category.section.layout.module.scss";
import CategorySection from "../../sections/category.section";
import { SectionHeader } from "../../ui/section.header";

const items = [

  {

    title: "Деревянные двери",
    image: "/img/combo.jpg",
    link: "/catalog/derevyannye-dveri"

  },
  {

    title: "Комбинированные двери",
    image: "/img/combo.jpg",
    link: "/catalog/kombinirovannye-dveri"

  },
  // {

  //   title: "Стеклянные двери",
  //   image: "/img/steklo.jpg",
  //   link: "/catalog/steklyannye-dveri"

  // },
  // {

  //   title: "Абажуры для бани",
  //   image: "/img/bg-home-section.png",
  //   link: "/catalog/abazhury"

  // },
  // {

  //   title: "Форточки для бани и сауны",
  //   image: "/img/bg-home-section.png",
  //   link: "/catalog/fortochki"

  // },
  // {

  //   title: "Спортивный инвентарь",
  //   image: "/img/bg-home-section.png",
  //   link: "/catalog/sportinventar"

  // },
  // {

  //   title: "Аксессуары для бани",
  //   image: "/img/bg-home-section.png",
  //   link: "/catalog/aksessuary"
    
  // }

];

const CategorySectionLayout = () => {

  // ⬇️ очищаем #categories после перехода
  useEffect(() => {
    if (window.location.hash === '#categories') {
      setTimeout(() => {
        history.replaceState(null, '', window.location.pathname);
      }, 400); // немного подождать, чтобы скролл успел выполниться
    }
  }, []);

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