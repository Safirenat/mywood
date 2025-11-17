import Image from "next/image";
import styles from "./ProductCard.module.scss";
import type { Product } from "../../../data/products";

interface ProductCardProps {
  product: Product;
  variant?: "default" | "compact";
}

export default function ProductCard({
  product,
  variant = "default",
}: ProductCardProps) {
  const {
    image,
    title,
    series,
    sizeLabel,
    price,
    oldPrice,
    isHit,
    hasDiscount,
  } = product;

  const hasOldPrice = typeof oldPrice === "number";

  const cardClassName = `${styles.Card} ${
    variant === "compact" ? styles.CardCompact : styles.CardDefault
  }`;

  return (
    <article className={cardClassName}>
      <div className={styles.ImageWrapper}>
        {/* Бейджи ХИТ / % */}
        {(isHit || hasDiscount) && (
          <div className={styles.Badges}>
            {isHit && (
              <div className={`${styles.Badge} ${styles.BadgeHit}`}>ХИТ</div>
            )}
            {hasDiscount && (
              <div className={`${styles.Badge} ${styles.BadgeDiscount}`}>
                %
              </div>
            )}
          </div>
        )}

        <Image
          src={image}
          alt={title}
          width={385}
          height={385}
          className={styles.Image}
        />
      </div>

      {/* Размер (овальная плашка) */}
      {sizeLabel && (
        <div className={styles.SizePill}>
          <span>{sizeLabel}</span>
        </div>
      )}

      {/* Название */}
      <h3 className={styles.Title}>{title}</h3>

      {/* Серия */}
      <p className={styles.Series}>{series}</p>

      {/* Цены */}
      <div className={styles.PriceRow}>
        {hasOldPrice && <span className={styles.OldPrice}>{oldPrice} ₽</span>}
        <span className={styles.Price}>{price} ₽</span>
      </div>
    </article>
  );
}
