'use client'

import { FC } from "react";
import s from "./category.section.module.scss";
import Image from "next/image";

interface CategorySectionProps {

  title: string;
  image: string;
  link: string;

}

const CategorySection: FC<CategorySectionProps> = ({ title, image, link }) => {

  return (

    <div className = { s.root }>

      <div className = { s.img }>

        <img src = { image } alt = { title } />

      </div>

      <div className = { s.text }>

        <div className = { s.title }>{ title} </div>
        <a href = { link } className = { s.link }>подробнее →</a>

      </div>

    </div>

  );

};

export default CategorySection; 