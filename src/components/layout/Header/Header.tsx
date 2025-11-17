import styles from "./Header.module.scss";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* Бургер слева */}
        <button className={styles.burger} aria-label="Открыть меню">
          <Image
            src="/burger.svg"
            alt="Меню"
            width={24}
            height={24}
          />
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
  );
}
