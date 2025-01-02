'use client'

import { FC } from "react";
import s from "./header.module.scss";
import Logo from "../logo";
import PhoneIcon from "../../icons/phone";
import LikeIcon from "../../icons/like";
import BasketIcon from "../../icons/basket";

const Header: FC = () => {

  return (

    <>

      <div className = { s.root }>

        <div className = { s.left }>

          <div className = { s.logo }><Logo/></div>

          <div className = { s.navWrap }>

            <div className = { s.phoneWrap }>

              <PhoneIcon/>

              <div className = { s.phone }>
              
                +7919646-50-74

              </div>

            </div>

            <div className = { s.nav }>

              <div>Каталог</div>
              <div>Наши работы</div>
              <div>О компании</div>

            </div>

          </div>

        </div>
        
        <div className = { s.right }>

          <input placeholder = "Найти на сайте"/>

          <div>

            <LikeIcon/>

          </div>

          <div>

            <BasketIcon/>

          </div>
        
        </div>
      
      </div>

    </>

  );

};

export default Header;