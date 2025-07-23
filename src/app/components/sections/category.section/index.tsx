'use client'

import { FC } from "react";
import s from "./category.section.module.scss";
import Image from "next/image";
import Link from 'next/link';


interface CategorySectionProps {

  title: string;
  image: string;
  link: string;

}

const CategorySection: FC<CategorySectionProps> = ({ title, image, link }) => {

  return (

    <Link href={link} className={s.linkWrapper}>
      
        <div className = { s.root } >

          <div className = { s.img }>

            <img src = { image } alt = { title } />

          </div>

          <div className = { s.text }>

            <div className = { s.title }>{ title} </div>
            <span  className = { s.link }>подробнее →</span>

          </div>

        </div>
        
    </Link>

  );

};

export default CategorySection; 