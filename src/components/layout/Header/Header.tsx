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
          <button
            className={`${styles.iconButton} ${styles.iconSearch}`}
            aria-label="Поиск"
          />
          <button
            className={`${styles.iconButton} ${styles.iconUser}`}
            aria-label="Личный кабинет"
          />
          <button
            className={`${styles.iconButton} ${styles.iconCart}`}
            aria-label="Корзина"
          />
        </div>
      </div>
    </header>
  );
}
