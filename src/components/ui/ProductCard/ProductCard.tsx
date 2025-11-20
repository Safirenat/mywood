import Image from "next/image";
import styles from "./ProductCard.module.scss";
import type { Product } from "../../../data/products";

interface ProductCardProps {
  product: Product;
  variant?: "default" | "compact";
  bg?: "default" | "glass" | "pattern";
}

export default function ProductCard({
  product,
  variant = "default",
  bg = "default",
}: ProductCardProps) {
  const {
    image,
    title,
    series,
    sizes,
    price,
    oldPrice,
    isHit,
    hasDiscount,
  } = product;

  const hasOldPrice = typeof oldPrice === "number";

  const cardClassName = `
    ${styles.Card}
    ${variant === "compact" ? styles.CardCompact : styles.CardDefault}
    ${bg === "glass" ? styles.Glassg : ""}
    ${bg === "pattern" ? styles.PatternBg : ""}
  `;

  return (
    <article className={cardClassName}>
      <div className={styles.ImageWrapper}>
        {variant === "default" && (isHit || hasDiscount) && (
          <div className={styles.Badges}>
            {isHit && (
              <div className={`${styles.Badge} ${styles.BadgeHit}`}>ХИТ</div>
            )}
            {hasDiscount && (
              <div className={`${styles.Badge} ${styles.BadgeDiscount}`}>%</div>
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

      {sizes && sizes.length > 0 && (
        <div className={styles.SizePill}>
          {/* "600/600 / 500/500 / 400/400" */}
          <span>{sizes.join(" / ")}</span>
        </div>
      )}

      <h3 className={styles.Title}>{title}</h3>
      <p className={styles.Series}>{series}</p>

      <div className={styles.PriceRow}>
        {hasOldPrice && <span className={styles.OldPrice}>{oldPrice} ₽</span>}
        <span className={styles.Price}>{price} ₽</span>
      </div>
    </article>
  );
}
