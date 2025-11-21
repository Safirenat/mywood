"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Header.module.scss";
import DesktopMenu from "../DesktopMenu/DesktopMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollYRef = useRef(0);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  // Лочим скролл страницы, без сдвига контента
  useEffect(() => {
    if (typeof window === "undefined") return;

    const body = document.body;

    if (isMenuOpen) {
      // запоминаем текущую прокрутку
      scrollYRef.current = window.scrollY;

      // фиксируем body в текущем положении
      body.style.position = "fixed";
      body.style.top = `-${scrollYRef.current}px`;
      body.style.left = "0";
      body.style.right = "0";
      body.style.width = "100%";
    } else {
      // возвращаем body как было
      const y = scrollYRef.current;

      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";

      // возвращаемся на ту же высоту
      window.scrollTo(0, y);
    }
  }, [isMenuOpen]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          {/* Бургер слева */}
          <button
            className={`${styles.burger} ${
              isMenuOpen ? styles.burgerActive : ""
            }`}
            aria-label="Открыть меню"
            onClick={toggleMenu}
          >
            <Image src="/burger.svg" alt="Меню" width={24} height={24} />
          </button>

          {/* Логотип по центру */}
          <div className={styles.logo}>
            <Image
              src="/logo.svg"
              alt="MYWOOD Logo"
              width={194}
              height={47}
              priority
            />
          </div>

          {/* Иконки справа */}
          <div className={styles.actions}>
            <button className={styles.iconButton} aria-label="Поиск">
              <Image
                src="/header/search.svg"
                alt="Поиск"
                width={22}
                height={22}
              />
            </button>

            <button className={styles.iconButton} aria-label="Личный кабинет">
              <Image
                src="/header/user.svg"
                alt="Личный кабинет"
                width={22}
                height={22}
              />
            </button>

            <button className={styles.iconButton} aria-label="Корзина">
              <Image
                src="/header/cart.svg"
                alt="Корзина"
                width={22}
                height={22}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Левое всплывающее меню (открывается под хедером) */}
      <DesktopMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
}
