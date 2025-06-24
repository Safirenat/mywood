'use client'

import { FC } from "react";
import s from "./home.section.module.scss";
import LogoBigIcon from "../../icons/logo-big";
import ProductionIcon from "../../icons/production";
import DrawingsIcon from "../../icons/drawings";
import DeliveryIcon from "../../icons/delivery";
import GuaranteeIcon from "../../icons/guarantee";
import CheckMarkIcon from "../../icons/check-mark";

const HomeSection: FC = () => {

  return (

    <div className = { s.root }>

      <div className = { s.title }>Качественные<br/> <span>изделия из дерева</span><br/> от производителя</div>
      <div className = { s.subtitle }>Предоставляем инновационные, качественные<br/> и стильные решения для бань и саун.</div>

      <div className = { s.icons }>

        <div className = { s.item }>

          <ProductionIcon/>
          <div>Собственное производство</div>

        </div>

        <div className = { s.item }>

          <DrawingsIcon/>
          <div>Уникальные чертежи</div>

        </div>

        <div className = { s.item }>

          <DeliveryIcon/>
          <div>Доставка по всей России</div>

        </div>

        <div className = { s.item }>

          <GuaranteeIcon/>
          <div>Гарантия 12 месяцев</div>

        </div>

        <div className = { s.item }>

          <CheckMarkIcon/>
          <div>Заказ от еденицы товара</div>

        </div>


      </div>

      <div className = { s.img }><LogoBigIcon/></div>

    </div>

  );

};

export default HomeSection;