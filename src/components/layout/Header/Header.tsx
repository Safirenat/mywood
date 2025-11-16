import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* Бургер слева */}
        <button className={styles.burger} aria-label="Открыть меню">
          <span />
          <span />
          <span />
        </button>

        {/* Логотип по центру */}
        <div className={styles.logo}>MYWOOD</div>

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
