'use client'

import { FC } from "react";
import s from "./footer.module.scss";
import Logo from "../logo";
import VkIcon from "../../icons/vk";
import TgIcon from "../../icons/tg";
import HamburgerIcon from "../../icons/hamburger";

const Footer: FC = () => {

  return (

    <div className = { s.root }>

      <div className = { s.logoWrap}>

        <div className = { s.logo }><Logo/></div>
        <span>© 2024. Все права защищены</span>

      </div>


      <div className = { s.menu }>

        <span >Меню</span>
        <span >Каталог</span>
        <span>Наши работы</span>
        <span>О нас</span>

      </div>

      <div className = { s.info }>

        <span >Информация</span>
        <span >Политика конфиденциальности</span>
        <span >Публичная оферта</span>
        <span >Доставка</span>
        <span >Оплата</span>

      </div>

      <div className = { s.hamburger }>

      <HamburgerIcon />

      </div>

      <div className = { s.contacts }>

        <span >Контакты</span>
        <span >Республика Марий Эл</span>
        <span >пгт.Параньга</span>
        <span >+7 919 646-50-74</span>
        
        <div className = { s.icons }>

          <VkIcon/>
          <VkIcon/>
          <TgIcon/>

        </div>
        

      </div>

    </div>

  );

};

export default Footer;