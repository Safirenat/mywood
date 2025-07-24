'use client'

import { FC } from "react";
import s from "./header.module.scss";
import Logo from "../logo";
import PhoneIcon from "../../icons/phone";
import LikeIcon from "../../icons/like";
import BasketIcon from "../../icons/basket";
import HamburgerIcon from "../../icons/hamburger";

const Header: FC = () => {

  return (

    <div className = { s.root }>

      <div className = { s.left }>

        <div className = { s.logo }><Logo/></div>

        <div className = { s.navWrap }>

          <div className = { s.phoneWrap }>

            <PhoneIcon/>

            <div className = { s.phone }>
            
              +7 919 646-50-74

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

        <div className = { s.hamburger }>

          <HamburgerIcon />

        </div>

        <div className = { s.searchWrap }>

          <input className = { s.search } placeholder = "" disabled/>

          <div className = { s.iconsWrap }>

            <div className = { s.likeWrap }>

              <LikeIcon/>

            </div>

            <div className = { s.basketWrap }>

              <BasketIcon/>

            </div>

          </div>

        </div>
      
      </div>
    
    </div>


  );

};

export default Header;