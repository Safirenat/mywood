import Image from "next/image";
// import Container from "../../ui/Container/Container";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      {/* <Container> */}
        <div className={styles.Inner}>
          {/* ЛЕВАЯ КОЛОНКА — ЛОГО И КОНТАКТЫ */}
          <div className={styles.Brand}>
              <Image
                src="/footer/logo-footer.svg"
                alt="MYWOOD"
                width={120}
                height={32}
                className={styles.Logo}
              />
            <div className={styles.Phone}>8 800 000 00 00</div>

            <div className={styles.SocialList}>
              <a href="#" className={styles.SocialItem}>
                <Image
                  src="/social/whatsapp.svg"
                  alt="WhatsApp"
                  width={20}
                  height={20}
                  className={styles.SocialIcon}
                />
                <span>whatsapp</span>
              </a>

              <a href="#" className={styles.SocialItem}>
                <Image
                  src="/social/telegram.svg"
                  alt="Telegram"
                  width={20}
                  height={20}
                  className={styles.SocialIcon}
                />
                <span>telegram</span>
              </a>
            </div>
          </div>

          {/* СРЕДНЯЯ КОЛОНКА — КЛИЕНТАМ */}
          <div className={styles.Column}>
            <div className={styles.ColumnTitle}>клиентам</div>
            <nav className={styles.LinkList}>
              <a href="#" className={styles.Link}>
                каталог
              </a>
              <a href="#" className={styles.Link}>
                заказы и доставка
              </a>
              <a href="#" className={styles.Link}>
                возврат товара
              </a>
            </nav>
          </div>

          {/* СРЕДНЯЯ КОЛОНКА — КОНТАКТЫ */}
          <div className={styles.Column}>
            <div className={styles.ColumnTitle}>контакты</div>
            <div className={styles.LinkList}>
              <span className={styles.LinkMuted}>адрес</span>
              <a href="mailto:info@mywood.ru" className={styles.Link}>
                info@mywood.ru
              </a>
              <a href="#" className={styles.Link}>
                обратная связь
              </a>
            </div>
          </div>

          {/* ПРАВАЯ КОЛОНКА — QR + ДОМИК */}
          <div className={styles.QrBlock}>
            <div className={styles.QrWrapper}>
              {/* картинку QR положи в public/footer/qr-ozon.png */}
              <Image
                src="/footer/qr-ozon.svg"
                alt="QR-код MYWOOD на Ozon"
                width={96}
                height={96}
              />
              <span className={styles.QrCaption}>выбирай mywood на ozon</span>
            </div>

            <div className={styles.HouseWrapper}>
              {/* иконку домика положи в public/footer/house.svg */}
              <Image
                src="/footer/house.svg"
                alt="Домик бани"
                width={70}
                height={70}
              />
            </div>
          </div>
        </div>
      {/* </Container> */}
    </footer>
  );
}
