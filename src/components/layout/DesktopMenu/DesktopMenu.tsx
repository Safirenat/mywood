import styles from "./DesktopMenu.module.scss";

type DesktopMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const menuItems = [
  { id: 1, label: "КАТАЛОГ", href: "#" },
  { id: 2, label: "О КОМПАНИИ", href: "#" },
  { id: 3, label: "КОНТАКТЫ", href: "#" },
  { id: 4, label: "ЗАКАЗЫ И ДОСТАВКА", href: "#" },
  { id: 5, label: "ИНДИВИДУАЛЬНЫЕ ПРОЕКТЫ", href: "#" },
];

export default function DesktopMenu({ isOpen, onClose }: DesktopMenuProps) {
  return (
    <>
      {/* затемнение контента справа от меню, под хедером */}
      <div
        className={`${styles.backdrop} ${
          isOpen ? styles.backdropVisible : ""
        }`}
        onClick={onClose}
      />

      {/* само левое меню */}
      <aside
        className={`${styles.menu} ${isOpen ? styles.menuOpen : ""}`}
        aria-hidden={!isOpen}
      >
        {/* верхняя часть: город + пункты меню */}
        <div className={styles.menuInner}>
          <div className={styles.cityRow}>
            <span className={styles.cityArrow}>▼</span>
            <span className={styles.cityName}>Казань</span>
          </div>

          <nav className={styles.nav}>
            {menuItems.map((item) => (
              <button
                key={item.id}
                className={styles.navItem}
                type="button"
                onClick={onClose}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* нижний отдельный блок помощи с фоном #F4F0F0 */}
        <div className={styles.helpBar}>
          <p className={styles.helpTitle}>нужна помощь?</p>
          <button type="button" className={styles.helpLink}>
            задать вопрос в WhatsApp
          </button>
        </div>
      </aside>
    </>
  );
}
