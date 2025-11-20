import styles from "./ProductSection.module.scss";
import ProductCard from "../../ui/ProductCard/ProductCard";
import { allProducts } from "../../../data/products";

interface ProductSectionProps {
  title: string;
  mode: "hits" | "new";
}

export default function ProductSection({ title, mode }: ProductSectionProps) {
  const filtered =
    mode === "hits"
      ? allProducts.filter((p) => p.isHit)
      : allProducts.filter((p) => p.isNew);

  return (
    <section className={styles.Section}>
      <div className={styles.Inner}>
        <h2 className={styles.Title}>{title}</h2>

        <div className={styles.Grid}>
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
